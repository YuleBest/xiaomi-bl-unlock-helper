// 数据文件路径
const dataFile = "./data/database/questions.json";

let allQuestions = [];
let dataLoaded = false;

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const searchInfoDiv = document.getElementById("searchInfo");
const resultCountDiv = document.querySelector(".result-count");
const searchQuestionCheckbox = document.getElementById("searchQuestion");
const searchOptionsCheckbox = document.getElementById("searchOptions");

// 主题切换相关元素
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// 初始化MDC TextField组件
const textField = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field'));
let currentSearchTerm = '';

// 设置相关元素
const settingsButton = document.getElementById("settingsButton");
const settingsPanel = document.getElementById("settingsPanel");
const searchContainer = document.querySelector(".search-container");
const fuzzyKeywordsContainer = document.getElementById("fuzzyKeywordsContainer");
const trickyWordsContainer = document.getElementById("trickyWordsContainer");
const addFuzzyBtn = document.getElementById("addFuzzyBtn");
const addTrickyBtn = document.getElementById("addTrickyBtn");
const applySettingsBtn = document.getElementById("applySettingsBtn");

// 默认设置
const defaultSettings = {
    fuzzy_keywords: {
        "bl": "bootloader",
        "fb": "fastboot",
        "rec": "recovery",
        "rom": "刷机包"
    },
    tricky_words: [
        "不正确",
        "不包括",
        "错误的是",
        "错误选项",
        "错误的是",
        "不是以下哪项",
        "不能"
    ]
};

// 当前设置
let currentSettings = { ...defaultSettings };

async function loadAllData() {
    if (dataLoaded) return;
    try {
        const res = await fetch(dataFile); // 从单个文件加载
        if (!res.ok) throw new Error("加载失败");
        const questions = await res.json();
        // 为每个题目添加原始索引
        allQuestions = questions.map((q, index) => ({
            ...q,
            originalIndex: index + 1 // 从1开始编号
        }));
        dataLoaded = true;
    } catch (e) {
        console.warn(`无法加载 ${dataFile}`, e);
        resultsDiv.innerHTML = `<p class="mdc-typography--body1" style="text-align: center; padding: 16px;">加载题库数据失败，请检查文件是否存在或网络连接。</p>`;
        allQuestions = []; // 确保在加载失败时 allQuestions 是一个空数组
    }
}

function matchQuery(q, keyword) {
    keyword = keyword.trim().toLowerCase();
    if (!keyword) return false;

    const searchQuestion = searchQuestionCheckbox.checked;
    const searchOptions = searchOptionsCheckbox.checked;
    
    // 如果两个都没勾选，则不匹配任何结果
    if (!searchQuestion && !searchOptions) return false;

    // 按空格分割关键词，支持多关键词搜索
    const keywords = keyword.split(/\s+/).filter(kw => kw.length > 0);
    
    // 对每个关键词应用模糊词映射
    const allExpandedKeywords = [];
    keywords.forEach(kw => {
        const expandedKeywords = [kw];
        if (currentSettings.fuzzy_keywords[kw]) {
            expandedKeywords.push(currentSettings.fuzzy_keywords[kw].toLowerCase());
        }
        allExpandedKeywords.push(expandedKeywords);
    });
    
    // 检查所有关键词是否都匹配（AND逻辑）
    return allExpandedKeywords.every(expandedKeywords => {
        let matched = false;
        
        // 搜索题干
        if (searchQuestion) {
            const question = q.question.toLowerCase();
            matched = expandedKeywords.some(kw => question.includes(kw));
        }
        
        // 搜索选项
        if (searchOptions && !matched) {
            matched = q.options.some(opt => 
                expandedKeywords.some(kw => opt.option.toLowerCase().includes(kw))
            );
        }
        
        return matched;
    });
}

function highlightText(text, searchTerm) {
    if (!searchTerm) {
        // 即使没有搜索词，也要高亮显示高亮词
        return highlightTrickyWords(text);
    }
    
    // 先高亮搜索词
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    let result = text.replace(regex, '<span class="highlight">$1</span>');
    
    // 再高亮高亮词
    result = highlightTrickyWords(result);
    
    return result;
}

function highlightTrickyWords(text) {
    let result = text;
    currentSettings.tricky_words.forEach(word => {
        if (word.trim()) {
            const regex = new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            result = result.replace(regex, '<span class="tricky-highlight">$1</span>');
        }
    });
    return result;
}

function renderResults(matches) {
    resultsDiv.innerHTML = "";

    if (matches.length === 0) {
        searchInfoDiv.style.display = "none";
        resultsDiv.innerHTML = `<p class="mdc-typography--body1" style="text-align: center; padding: 16px;">未找到相关题目。</p>`;
        return;
    }

    // 合并题干相同的题目
    const mergedQuestions = mergeQuestionsByTitle(matches);
    
    // 显示结果计数
    resultCountDiv.textContent = `${mergedQuestions.length} 个结果 (原始 ${matches.length} 个)`;
    searchInfoDiv.style.display = "block";

    const ul = document.createElement("ul");
    ul.className = "mdc-list mdc-list--two-line"; // 使用MDC List样式

    for (const item of mergedQuestions) {
        const li = document.createElement("li");
        li.className = "mdc-list-item question-item"; // 使用MDC List Item样式

        const primaryText = document.createElement("span");
        primaryText.className = "mdc-list-item__ripple";
        li.appendChild(primaryText);

        const textContainer = document.createElement("span");
        textContainer.className = "mdc-list-item__text";
        
        const questionTitle = document.createElement("span");
        questionTitle.className = "mdc-list-item__primary-text question-title";
        
        // 创建题号元素
        const questionNumber = document.createElement("span");
        questionNumber.className = "question-number";
        questionNumber.textContent = item.originalIndex;
        
        // 创建题干文本元素
        const questionText = document.createElement("span");
        questionText.innerHTML = highlightText(item.question, currentSearchTerm);
        
        questionTitle.appendChild(questionNumber);
        questionTitle.appendChild(questionText);
        textContainer.appendChild(questionTitle);

        const optionsUl = document.createElement("ul");
        optionsUl.className = "options-list mdc-list-item__secondary-text"; // 继承部分样式，并作为副文本

        // 将选项按正确性排序：正确选项在前，错误选项在后
        const sortedOptions = [...item.options].sort((a, b) => {
            const aCorrect = a.is_correct === "true";
            const bCorrect = b.is_correct === "true";
            if (aCorrect && !bCorrect) return -1;
            if (!aCorrect && bCorrect) return 1;
            return 0;
        });

        for (const opt of sortedOptions) {
            const optionLi = document.createElement("li");
            optionLi.innerHTML = highlightText(opt.option, currentSearchTerm);
            optionLi.className = opt.is_correct === "true" ? "correct" : "incorrect";
            optionsUl.appendChild(optionLi);
        }
        textContainer.appendChild(optionsUl);
        li.appendChild(textContainer);
        ul.appendChild(li);
    }
    resultsDiv.appendChild(ul);
}

// 合并题干相同的题目
function mergeQuestionsByTitle(questions) {
    const questionMap = new Map();
    
    for (const question of questions) {
        const title = question.question.trim();
        
        if (questionMap.has(title)) {
            // 如果题干已存在，合并选项，保留最小的原始索引
            const existingQuestion = questionMap.get(title);
            
            // 添加新选项，避免重复
            for (const newOption of question.options) {
                const isDuplicate = existingQuestion.options.some(existingOption => 
                    existingOption.option.trim() === newOption.option.trim()
                );
                
                if (!isDuplicate) {
                    existingQuestion.options.push(newOption);
                }
            }
            existingQuestion.originalIndex = Math.min(existingQuestion.originalIndex, question.originalIndex);
        } else {
            // 如果题干不存在，创建新的题目条目
            questionMap.set(title, {
                question: question.question,
                options: [...question.options], // 深拷贝选项数组
                originalIndex: question.originalIndex // 保留原始索引
            });
        }
    }
    
    // 将Map转换为数组并返回
    return Array.from(questionMap.values());
}

let debounceTimer;

// 执行搜索的函数
function performSearch() {
    const keyword = searchInput.value.trim();
    currentSearchTerm = keyword;
    
    if (!keyword) {
        resultsDiv.innerHTML = "";
        searchInfoDiv.style.display = "none";
        return;
    }

    if (!dataLoaded) {
        resultsDiv.innerHTML = "加载数据中...";
        loadAllData().then(() => {
            const matched = allQuestions.filter(q => q.question && matchQuery(q, keyword));
            // 按原始索引排序
            matched.sort((a, b) => a.originalIndex - b.originalIndex);
            renderResults(matched);
        });
    } else {
        const matched = allQuestions.filter(q => q.question && matchQuery(q, keyword));
        // 按原始索引排序
        matched.sort((a, b) => a.originalIndex - b.originalIndex);
        renderResults(matched);
    }
}

// 初始化搜索事件监听器
function initializeSearchListeners() {
    // 复选框变化时重新搜索
    searchQuestionCheckbox.addEventListener("change", performSearch);
    searchOptionsCheckbox.addEventListener("change", performSearch);

    searchInput.addEventListener("input", async e => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(performSearch, 200); // 200ms 防抖
    });
}

// 本地存储相关函数
function loadSettings() {
    const saved = localStorage.getItem('searchSettings');
    
    if (saved) {
        try {
            const parsedSettings = JSON.parse(saved);
            // 智能合并：只有非空的设置才覆盖默认值
            currentSettings = {
                fuzzy_keywords: {
                    ...defaultSettings.fuzzy_keywords,
                    ...(parsedSettings.fuzzy_keywords && Object.keys(parsedSettings.fuzzy_keywords).length > 0 ? parsedSettings.fuzzy_keywords : {})
                },
                tricky_words: (
                    parsedSettings.tricky_words && 
                    Array.isArray(parsedSettings.tricky_words) && 
                    parsedSettings.tricky_words.length > 0
                ) ? parsedSettings.tricky_words : defaultSettings.tricky_words
            };
        } catch (e) {
            console.warn('加载设置失败，使用默认设置', e);
            currentSettings = { ...defaultSettings };
            // 清除损坏的数据
            localStorage.removeItem('searchSettings');
        }
    } else {
        // 如果没有保存的设置，使用默认设置
        currentSettings = { ...defaultSettings };
    }
}

function saveSettings() {
    localStorage.setItem('searchSettings', JSON.stringify(currentSettings));
}

// 设置面板相关函数
function toggleSettingsPanel() {
    const isExpanded = settingsPanel.classList.contains('show');
    
    if (isExpanded) {
        // 收起面板
        settingsPanel.classList.remove('show');
        settingsButton.classList.remove('expanded');
        searchContainer.classList.remove('expanded');
        settingsPanel.style.display = 'none';
    } else {
        // 展开面板
        loadSettingsUI();
        settingsPanel.style.display = 'block';
        setTimeout(() => {
            settingsPanel.classList.add('show');
            settingsButton.classList.add('expanded');
            searchContainer.classList.add('expanded');
        }, 10);
    }
}

function createFuzzyKeywordItem(keyword = '', target = '') {
    const item = document.createElement('div');
    item.className = 'fuzzy-keyword-item';
    item.innerHTML = `
        <input type="text" class="keyword-input" placeholder="关键词" value="${keyword}">
        <span class="arrow">→</span>
        <input type="text" class="target-input" placeholder="目标词" value="${target}">
        <button class="remove-btn" type="button">
            <i class="material-icons">delete</i>
        </button>
    `;
    
    item.querySelector('.remove-btn').addEventListener('click', () => {
        item.remove();
    });
    
    return item;
}

function createTrickyWordItem(word = '') {
    const item = document.createElement('div');
    item.className = 'tricky-word-item';
    item.innerHTML = `
        <input type="text" placeholder="高亮词" value="${word}">
        <button class="remove-btn" type="button">
            <i class="material-icons">delete</i>
        </button>
    `;
    
    item.querySelector('.remove-btn').addEventListener('click', () => {
        item.remove();
    });
    
    return item;
}

function loadSettingsUI() {
    // 清空容器
    fuzzyKeywordsContainer.innerHTML = '';
    trickyWordsContainer.innerHTML = '';
    
    // 加载模糊词设置
    Object.entries(currentSettings.fuzzy_keywords).forEach(([keyword, target]) => {
        fuzzyKeywordsContainer.appendChild(createFuzzyKeywordItem(keyword, target));
    });
    
    // 加载高亮词设置
    currentSettings.tricky_words.forEach(word => {
        trickyWordsContainer.appendChild(createTrickyWordItem(word));
    });
}

function applySettings() {
    // 收集模糊词设置
    const fuzzyKeywords = {};
    fuzzyKeywordsContainer.querySelectorAll('.fuzzy-keyword-item').forEach(item => {
        const keyword = item.querySelector('.keyword-input').value.trim();
        const target = item.querySelector('.target-input').value.trim();
        if (keyword && target) {
            fuzzyKeywords[keyword.toLowerCase()] = target;
        }
    });
    
    // 收集高亮词设置
    const trickyWords = [];
    trickyWordsContainer.querySelectorAll('.tricky-word-item').forEach(item => {
        const word = item.querySelector('input').value.trim();
        if (word) {
            trickyWords.push(word);
        }
    });
    
    // 更新当前设置
    currentSettings.fuzzy_keywords = fuzzyKeywords;
    currentSettings.tricky_words = trickyWords;
    
    // 保存到本地存储
    saveSettings();
    
    // 重新执行搜索以应用新设置
    performSearch();
    
    // 显示应用成功提示
    const originalText = applySettingsBtn.innerHTML;
    applySettingsBtn.innerHTML = '<i class="material-icons">check</i> 已应用';
    applySettingsBtn.style.background = '#4caf50';
    
    setTimeout(() => {
        applySettingsBtn.innerHTML = originalText;
        applySettingsBtn.style.background = '';
    }, 1500);
}

// 重置设置功能
let resetConfirmState = false;
let resetTimeout = null;

function resetSettings() {
    if (!resetConfirmState) {
        // 第一次点击，进入确认状态
        resetConfirmState = true;
        const resetBtn = document.getElementById('resetSettingsBtn');
        resetBtn.classList.add('confirm');
        resetBtn.innerHTML = '<i class="material-icons">warning</i> 确认重置';
        
        // 5秒后自动恢复到初始状态
        resetTimeout = setTimeout(() => {
            resetConfirmState = false;
            resetBtn.classList.remove('confirm');
            resetBtn.innerHTML = '<i class="material-icons">refresh</i> 重置设置';
        }, 5000);
    } else {
        // 第二次点击，执行重置
        if (resetTimeout) {
            clearTimeout(resetTimeout);
        }
        
        // 重置为默认设置
        currentSettings = { ...defaultSettings };
        saveSettings();
        
        // 重新加载UI
        loadSettingsUI();
        
        // 重新执行搜索以应用默认设置
        performSearch();
        
        // 恢复按钮状态
        resetConfirmState = false;
        const resetBtn = document.getElementById('resetSettingsBtn');
        resetBtn.classList.remove('confirm');
        resetBtn.innerHTML = '<i class="material-icons">check</i> 已重置';
        resetBtn.style.background = '#4caf50';
        
        setTimeout(() => {
            resetBtn.innerHTML = '<i class="material-icons">refresh</i> 重置设置';
            resetBtn.style.background = '';
        }, 1500);
    }
}

// 事件监听器
settingsButton.addEventListener('click', toggleSettingsPanel);

addFuzzyBtn.addEventListener('click', () => {
    fuzzyKeywordsContainer.appendChild(createFuzzyKeywordItem());
});

addTrickyBtn.addEventListener('click', () => {
    trickyWordsContainer.appendChild(createTrickyWordItem());
});

document.getElementById('resetSettingsBtn').addEventListener('click', resetSettings);

// 主题切换功能
function initializeTheme() {
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // 使用保存的主题
        setTheme(savedTheme);
    } else {
        // 检测系统主题偏好
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // 只有在没有手动设置主题时才跟随系统
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // 更新图标
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    }
    
    // 保存到本地存储
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// 主题切换事件监听器
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// 初始化主题
initializeTheme();

applySettingsBtn.addEventListener('click', applySettings);

// 版权验证对话框相关变量
let mathAnswer = 0;
let isVerified = false;

// 生成随机数学题
function generateMathQuestion() {
    const num1 = Math.floor(Math.random() * 50) + 1; // 1-50
    const num2 = Math.floor(Math.random() * 50) + 1; // 1-50
    const operation = Math.random() > 0.5 ? '+' : '-';
    
    let question, answer;
    if (operation === '+') {
        question = `${num1} + ${num2} = ?`;
        answer = num1 + num2;
    } else {
        // 确保减法结果为正数
        const larger = Math.max(num1, num2);
        const smaller = Math.min(num1, num2);
        question = `${larger} - ${smaller} = ?`;
        answer = larger - smaller;
    }
    
    mathAnswer = answer;
    return question;
}

// 显示版权验证对话框
function showCopyrightDialog() {
    const dialog = document.getElementById('copyrightDialog');
    const mathQuestion = document.getElementById('mathQuestion');
    const mathAnswerInput = document.getElementById('mathAnswer');
    const verifyBtn = document.getElementById('verifyBtn');
    
    // 生成数学题
    mathQuestion.textContent = generateMathQuestion();
    
    // 清空输入框
    mathAnswerInput.value = '';
    
    // 显示对话框
    dialog.style.display = 'flex';
    
    // 聚焦到输入框
    setTimeout(() => {
        mathAnswerInput.focus();
    }, 300);
    
    // 移除旧的事件监听器，避免重复绑定
    verifyBtn.removeEventListener('click', verifyCopyright);
    mathAnswerInput.removeEventListener('keypress', handleEnterKey);
    
    // 重新绑定事件监听器
    verifyBtn.addEventListener('click', verifyCopyright);
    mathAnswerInput.addEventListener('keypress', handleEnterKey);
}

// 处理回车键事件的函数
function handleEnterKey(e) {
    if (e.key === 'Enter') {
        verifyCopyright();
    }
}

// 验证版权对话框
function verifyCopyright() {
    const mathAnswerInput = document.getElementById('mathAnswer');
    const verifyBtn = document.getElementById('verifyBtn');
    const userAnswer = parseInt(mathAnswerInput.value);
    
    if (isNaN(userAnswer)) {
        alert('请输入有效的数字！');
        mathAnswerInput.focus();
        return;
    }
    
    if (userAnswer === mathAnswer) {
        // 验证成功
        isVerified = true;
        const dialog = document.getElementById('copyrightDialog');
        dialog.style.animation = 'dialogFadeOut 0.3s ease-in forwards';
        
        // 添加淡出动画
        const style = document.createElement('style');
        style.textContent = `
            @keyframes dialogFadeOut {
                from {
                    opacity: 1;
                    transform: scale(1);
                }
                to {
                    opacity: 0;
                    transform: scale(0.9);
                }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            dialog.style.display = 'none';
        }, 300);
    } else {
        // 验证失败，重新生成题目
        alert('答案错误，请重新计算！');
        const mathQuestion = document.getElementById('mathQuestion');
        mathQuestion.textContent = generateMathQuestion();
        mathAnswerInput.value = '';
        mathAnswerInput.focus();
    }
}

// 显示题库最后更新时间
function displayLastUpdateTime() {
    if (allQuestions && allQuestions.length > 0) {
        // 查找包含lastestUpdate字段的对象
        const updateInfo = allQuestions.find(item => item.lastestUpdate);
        if (updateInfo && updateInfo.lastestUpdate) {
            const lastUpdateElement = document.getElementById('lastUpdateTime');
            if (lastUpdateElement) {
                lastUpdateElement.textContent = `题库最后更新于 ${updateInfo.lastestUpdate}`;
            }
        }
    }
}

// 检查是否需要显示版权对话框
function checkCopyrightVerification() {
    // 每次页面加载都显示对话框，不依赖localStorage
    // 这样可以确保每次访问都需要验证
    showCopyrightDialog();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', async function() {
    // 首先加载设置
    loadSettings();
    
    // 加载数据
    await loadAllData();
    
    // 初始化主题
    initializeTheme();
    
    // 初始化搜索事件监听器
    initializeSearchListeners();
    
    // 显示题库更新时间（确保在数据加载完成后）
    displayLastUpdateTime();
    
    // 添加计算器按钮事件监听器
    const calculatorBtn = document.getElementById('calculatorBtn');
    if (calculatorBtn) {
        calculatorBtn.addEventListener('click', function() {
            alert('正在开发中，敬请期待！');
        });
    }
    
    // 添加footer按钮事件监听器
    const feedbackBtn = document.getElementById('feedbackBtn');
    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', function() {
            window.open('https://github.com/YuleBest/xiaomi-bl-unlock-helper/issues', '_blank');
        });
    }
    
    const joinDevBtn = document.getElementById('joinDevBtn');
    if (joinDevBtn) {
        joinDevBtn.addEventListener('click', function() {
            window.open('https://github.com/YuleBest/xiaomi-bl-unlock-helper', '_blank');
        });
    }
    
    // 检查版权验证
    checkCopyrightVerification();
});