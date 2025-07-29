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

// 初始化MDC TextField组件（仅在存在时）
const textFieldElement = document.querySelector('.mdc-text-field');
const textField = textFieldElement ? new mdc.textField.MDCTextField(textFieldElement) : null;
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
    if (currentSearchTerm) {
        resultCountDiv.textContent = `${mergedQuestions.length} 个结果，合并前 ${matches.length} 个题目`;
    } else {
        resultCountDiv.textContent = `共 ${mergedQuestions.length} 道题目，合并前 ${matches.length} 个题目`;
    }
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
        questionNumber.className = "question-number clickable";
        questionNumber.textContent = item.originalIndex;
        questionNumber.style.cursor = "pointer";
        
        // 为题号添加点击事件
        questionNumber.addEventListener('click', (e) => {
            e.stopPropagation();
            showQuestionModal(item);
        });
        
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
    
    if (!dataLoaded) {
        resultsDiv.innerHTML = "加载数据中...";
        loadAllData().then(() => {
            let matched;
            if (!keyword) {
                // 没有搜索关键词时显示所有题目
                matched = allQuestions.filter(q => q.question);
            } else {
                matched = allQuestions.filter(q => q.question && matchQuery(q, keyword));
            }
            // 按原始索引排序
            matched.sort((a, b) => a.originalIndex - b.originalIndex);
            renderResults(matched);
        });
    } else {
        let matched;
        if (!keyword) {
            // 没有搜索关键词时显示所有题目
            matched = allQuestions.filter(q => q.question);
        } else {
            matched = allQuestions.filter(q => q.question && matchQuery(q, keyword));
        }
        // 按原始索引排序
        matched.sort((a, b) => a.originalIndex - b.originalIndex);
        renderResults(matched);
    }
}

// 初始化搜索事件监听器
function initializeSearchListeners() {
    // 复选框变化时重新搜索（仅在元素存在时）
    if (searchQuestionCheckbox) {
        searchQuestionCheckbox.addEventListener("change", performSearch);
    }
    if (searchOptionsCheckbox) {
        searchOptionsCheckbox.addEventListener("change", performSearch);
    }

    if (searchInput) {
        searchInput.addEventListener("input", async e => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(performSearch, 200); // 200ms 防抖
        });
    }
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

// 收藏功能相关函数
function getStarredQuestions() {
    const starred = localStorage.getItem('starredQuestions');
    return starred ? JSON.parse(starred) : {};
}

function saveStarredQuestions(starred) {
    localStorage.setItem('starredQuestions', JSON.stringify(starred));
}

function isQuestionStarred(questionId) {
    const starred = getStarredQuestions();
    return starred.hasOwnProperty(questionId);
}

function toggleStar(questionId, questionData) {
    const starred = getStarredQuestions();
    
    if (starred[questionId]) {
        // 取消收藏
        delete starred[questionId];
    } else {
        // 添加收藏
        starred[questionId] = {
            question: questionData.question,
            options: questionData.options,
            originalIndex: questionData.originalIndex,
            starredAt: new Date().toISOString()
        };
    }
    
    saveStarredQuestions(starred);
}

function updateStarButton(button, questionId) {
    if (isQuestionStarred(questionId)) {
        button.classList.add('starred');
        button.innerHTML = '<span class="material-icons">star</span>';
        button.title = '取消收藏';
    } else {
        button.classList.remove('starred');
        button.innerHTML = '<span class="material-icons">star_border</span>';
        button.title = '收藏题目';
    }
}

// 显示题目模糊卡片
function showQuestionModal(questionData) {
    // 创建模糊背景
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'question-modal-overlay';
    
    // 创建卡片容器
    const modalCard = document.createElement('div');
    modalCard.className = 'question-modal-card';
    
    // 创建题目内容
    const questionContent = document.createElement('div');
    questionContent.className = 'question-modal-content';
    
    // 题号和题干
    const questionHeader = document.createElement('div');
    questionHeader.className = 'question-modal-header';
    questionHeader.innerHTML = `
        <span class="question-modal-number">${questionData.originalIndex}</span>
        <div class="question-modal-text">${questionData.question}</div>
    `;
    
    // 选项列表
    const optionsList = document.createElement('div');
    optionsList.className = 'question-modal-options';
    
    questionData.options.forEach(option => {
        const optionItem = document.createElement('div');
        optionItem.className = `question-modal-option ${option.is_correct === 'true' ? 'correct' : 'incorrect'}`;
        optionItem.textContent = option.option;
        optionsList.appendChild(optionItem);
    });
    
    // 操作栏
    const actionBar = document.createElement('div');
    actionBar.className = 'question-modal-actions';
    
    // 收藏按钮
    const starBtn = document.createElement('button');
    starBtn.className = 'modal-action-btn star-action';
    const isStarred = isQuestionStarred(questionData.originalIndex);
    starBtn.innerHTML = `
        <span class="material-icons">${isStarred ? 'star' : 'star_border'}</span>
        <span>${isStarred ? '取消' : '收藏'}</span>
    `;
    if (isStarred) starBtn.classList.add('starred');
    
    starBtn.addEventListener('click', () => {
        toggleStar(questionData.originalIndex, questionData);
        const newIsStarred = isQuestionStarred(questionData.originalIndex);
        starBtn.innerHTML = `
            <span class="material-icons">${newIsStarred ? 'star' : 'star_border'}</span>
            <span>${newIsStarred ? '取消' : '收藏'}</span>
        `;
        if (newIsStarred) {
            starBtn.classList.add('starred');
        } else {
            starBtn.classList.remove('starred');
        }
    });
    
    // 复制按钮
    const copyBtn = document.createElement('button');
    copyBtn.className = 'modal-action-btn copy-action';
    copyBtn.innerHTML = `
        <span class="material-icons">content_copy</span>
        <span>复制</span>
    `;
    copyBtn.addEventListener('click', async () => {
        try {
            // 构建复制内容
            let copyText = '我在「答题助手」给你分享了一道题目，快打开 bl.lh520.pw 看看吧！\n';
            copyText += `${questionData.originalIndex}、${questionData.question}\n`;
            
            // 添加选项，按正确性排序
            const sortedOptions = [...questionData.options].sort((a, b) => {
                const aCorrect = a.is_correct === "true";
                const bCorrect = b.is_correct === "true";
                if (aCorrect && !bCorrect) return -1;
                if (!aCorrect && bCorrect) return 1;
                return 0;
            });
            
            sortedOptions.forEach(option => {
                const status = option.is_correct === "true" ? "正确" : "错误";
                copyText += `[${status}] ${option.option}\n`;
            });
            
            // 复制到剪贴板
            await navigator.clipboard.writeText(copyText);
            
            // 显示成功提示
            copyBtn.innerHTML = `
                <span class="material-icons">check</span>
                <span>成功</span>
            `;
            copyBtn.style.borderColor = '#4caf50';
            copyBtn.style.color = '#4caf50';
            
            // 2秒后恢复原状
            setTimeout(() => {
                copyBtn.innerHTML = `
                    <span class="material-icons">content_copy</span>
                    <span>复制</span>
                `;
                copyBtn.style.borderColor = '';
                copyBtn.style.color = '';
            }, 2000);
            
        } catch (err) {
            console.error('复制失败:', err);
            // 显示失败提示
            copyBtn.innerHTML = `
                <span class="material-icons">error</span>
                <span>失败</span>
            `;
            copyBtn.style.borderColor = '#f44336';
            copyBtn.style.color = '#f44336';
            
            setTimeout(() => {
                copyBtn.innerHTML = `
                    <span class="material-icons">content_copy</span>
                    <span>复制</span>
                `;
                copyBtn.style.borderColor = '';
                copyBtn.style.color = '';
            }, 2000);
        }
    });
    
    // 疑问按钮
    const questionBtn = document.createElement('button');
    questionBtn.className = 'modal-action-btn question-action';
    questionBtn.innerHTML = `
        <span class="material-icons">help_outline</span>
        <span>疑问</span>
    `;
    questionBtn.addEventListener('click', () => {
        // 显示确认对话框
        const confirmed = confirm(
            '即将跳转到 GitHub 仓库发起工单反馈问题。\n\n' +
            '您可以在那里报告题目错误、提出改进建议或反馈其他问题。\n\n' +
            '确定要继续吗？'
        );
        
        if (confirmed) {
            // 构建GitHub Issues URL，包含题目信息作为模板
            const issueTitle = encodeURIComponent(`题目疑问 - 第${questionData.originalIndex}题`);
            const issueBody = encodeURIComponent(
                `### 题目信息\n` +
                `**题号：** ${questionData.originalIndex}\n` +
                `**题目：** ${questionData.question}\n\n` +
                `### 问题描述\n` +
                `请在此处描述您发现的问题或疑问...\n\n` +
                `### 建议的修改\n` +
                `如果您有修改建议，请在此处说明...\n\n` +
                `---\n` +
                `*此工单由答题助手自动生成*`
            );
            
            const githubUrl = `https://github.com/YuleBest/xiaomi-bl-unlock-helper/issues/new?title=${issueTitle}&body=${issueBody}`;
            
            // 在新窗口中打开GitHub
            window.open(githubUrl, '_blank');
            
            // 显示成功提示
            questionBtn.innerHTML = `
                <span class="material-icons">launch</span>
                <span>已跳转</span>
            `;
            questionBtn.style.borderColor = '#4caf50';
            questionBtn.style.color = '#4caf50';
            
            // 2秒后恢复原状
            setTimeout(() => {
                questionBtn.innerHTML = `
                    <span class="material-icons">help_outline</span>
                    <span>疑问</span>
                `;
                questionBtn.style.borderColor = '';
                questionBtn.style.color = '';
            }, 2000);
        }
    });
    
    actionBar.appendChild(starBtn);
    actionBar.appendChild(copyBtn);
    actionBar.appendChild(questionBtn);
    
    // 组装卡片
    questionContent.appendChild(questionHeader);
    questionContent.appendChild(optionsList);
    modalCard.appendChild(questionContent);
    modalCard.appendChild(actionBar);
    modalOverlay.appendChild(modalCard);
    
    // 添加到页面
    document.body.appendChild(modalOverlay);
    
    // 添加淡入动画
    setTimeout(() => {
        modalOverlay.classList.add('show');
    }, 10);
    
    // 点击背景关闭
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            hideQuestionModal(modalOverlay);
        }
    });
    
    // ESC键关闭
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            hideQuestionModal(modalOverlay);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// 隐藏题目模糊卡片
function hideQuestionModal(modalOverlay) {
    modalOverlay.classList.remove('show');
    setTimeout(() => {
        if (modalOverlay.parentNode) {
            modalOverlay.parentNode.removeChild(modalOverlay);
        }
    }, 300);
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

// 事件监听器（仅在元素存在时添加）
if (settingsButton) {
    settingsButton.addEventListener('click', toggleSettingsPanel);
}

if (addFuzzyBtn) {
    addFuzzyBtn.addEventListener('click', () => {
        fuzzyKeywordsContainer.appendChild(createFuzzyKeywordItem());
    });
}

if (addTrickyBtn) {
    addTrickyBtn.addEventListener('click', () => {
        trickyWordsContainer.appendChild(createTrickyWordItem());
    });
}

const resetSettingsBtn = document.getElementById('resetSettingsBtn');
if (resetSettingsBtn) {
    resetSettingsBtn.addEventListener('click', resetSettings);
}

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

if (applySettingsBtn) {
    applySettingsBtn.addEventListener('click', applySettings);
}

// 显示重要声明对话框
function showDisclaimerDialog() {
    const dialog = document.getElementById('disclaimerDialog');
    const content = dialog.querySelector('.disclaimer-dialog-content');
    
    // 重置动画状态
    dialog.style.animation = '';
    content.style.animation = '';
    
    // 显示对话框
    dialog.style.display = 'flex';
    
    // 添加背景渐显动画
    dialog.style.animation = 'backgroundFadeIn 0.3s ease-out forwards';
    content.style.animation = 'dialogFadeIn 0.3s ease-out forwards';
}

// 隐藏重要声明对话框
function hideDisclaimerDialog() {
    const dialog = document.getElementById('disclaimerDialog');
    const content = dialog.querySelector('.disclaimer-dialog-content');
    
    // 确保动画样式只添加一次
    if (!document.getElementById('dialogAnimationStyles')) {
        const style = document.createElement('style');
        style.id = 'dialogAnimationStyles';
        style.textContent = `
            @keyframes backgroundFadeIn {
                from {
                    background-color: rgba(0, 0, 0, 0);
                }
                to {
                    background-color: rgba(0, 0, 0, 0.5);
                }
            }
            
            @keyframes backgroundFadeOut {
                from {
                    background-color: rgba(0, 0, 0, 0.5);
                }
                to {
                    background-color: rgba(0, 0, 0, 0);
                }
            }
            
            @keyframes contentFadeOut {
                from {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: scale(0.9) translateY(-20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 分别为背景和内容设置不同的动画
    dialog.style.animation = 'backgroundFadeOut 0.3s ease-in forwards';
    content.style.animation = 'contentFadeOut 0.3s ease-in forwards';
    
    setTimeout(() => {
        dialog.style.display = 'none';
        // 清除动画状态，为下次显示做准备
        dialog.style.animation = '';
        content.style.animation = '';
    }, 300);
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

// 初始化重要声明对话框事件监听器
function initializeDisclaimerDialog() {
    const disclaimerBannerContent = document.querySelector('.disclaimer-banner-content');
    const closeDisclaimerBtn = document.getElementById('closeDisclaimerBtn');
    const disclaimerDialog = document.getElementById('disclaimerDialog');
    
    // 点击横幅内容区域显示对话框（整个横幅都可点击）
    if (disclaimerBannerContent) {
        disclaimerBannerContent.addEventListener('click', showDisclaimerDialog);
    }
    
    // 点击关闭按钮隐藏对话框
    if (closeDisclaimerBtn) {
        closeDisclaimerBtn.addEventListener('click', hideDisclaimerDialog);
    }
    
    // 点击对话框背景隐藏对话框
    if (disclaimerDialog) {
        disclaimerDialog.addEventListener('click', function(e) {
            if (e.target === disclaimerDialog) {
                hideDisclaimerDialog();
            }
        });
    }
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
    
    // 初始显示所有题目（仅在主页）
    if (searchInput && resultsDiv) {
        performSearch();
    }
    
    // 添加计算器按钮事件监听器
    const calculatorBtn = document.getElementById('calculatorBtn');
    if (calculatorBtn) {
        calculatorBtn.addEventListener('click', function() {
            window.location.href = '/calc/';
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
    
    const downloadDbBtn = document.getElementById('downloadDbBtn');
    if (downloadDbBtn) {
        downloadDbBtn.addEventListener('click', function() {
            // 创建一个临时的a标签来触发下载
            const link = document.createElement('a');
            link.href = '/data/database/questions.json';
            link.download = 'questions.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    
    // 初始化重要声明对话框
    initializeDisclaimerDialog();
    
    // 初始化收藏功能
    initializeStarFeature();
    
    // 添加顶栏左侧点击返回主页功能
    const topBarLeft = document.querySelector('.top-bar-left');
    if (topBarLeft) {
        topBarLeft.style.cursor = 'pointer';
        topBarLeft.addEventListener('click', function() {
            // 如果当前不在主页，则跳转到主页
            if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
                window.location.href = '/';
            }
        });
    }

});

// 初始化收藏功能
function initializeStarFeature() {
    // 顶栏收藏按钮点击事件
    const starBtn = document.getElementById('star');
    if (starBtn) {
        starBtn.addEventListener('click', function() {
            window.location.href = '/star/';
        });
    }
    
    // 主页收藏入口按钮点击事件
    const starredEntryBtn = document.getElementById('starredEntryBtn');
    if (starredEntryBtn) {
        starredEntryBtn.addEventListener('click', function() {
            window.location.href = '/star/';
        });
    }
}