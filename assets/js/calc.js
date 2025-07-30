// 解锁时间计算器逻辑

// 初始化计算器
document.addEventListener('DOMContentLoaded', function() {
    mdc.autoInit();
    initializeCalculator();
    initializeCalcPage();
});

// 初始化计算器页面
function initializeCalcPage() {
    // 返回主页按钮
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = '/';
        });
    }
    
    // 顶栏按钮事件监听器
    // 收藏按钮
    const starBtn = document.getElementById('star');
    if (starBtn) {
        starBtn.addEventListener('click', function() {
            window.location.href = '/star/';
        });
    }
    
    // 计算器按钮（当前页面，可以刷新或不做操作）
    const calculatorBtn = document.getElementById('calculatorBtn');
    if (calculatorBtn) {
        calculatorBtn.addEventListener('click', function() {
            window.location.href = '/calc/';
        });
    }
    
    // 主题切换
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    if (themeToggle) {
        // 初始化主题
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
        }
        localStorage.setItem('theme', theme);
    }
    
    // 添加顶栏左侧点击返回主页功能
    const topBarLeft = document.querySelector('.top-bar-left');
    if (topBarLeft) {
        topBarLeft.style.cursor = 'pointer';
        topBarLeft.addEventListener('click', function() {
            window.location.href = '/';
        });
    }
}

function initializeCalculator() {
    // 获取所有输入元素
    const qualificationTimeInput = document.getElementById('qualificationTime');
    const bindTimeAbsoluteInput = document.getElementById('bindTimeAbsolute');
    const bindTimeRelativeInput = document.getElementById('bindTimeRelative');
    const unlockTimeAbsoluteInput = document.getElementById('unlockTimeAbsolute');
    const unlockTimeRelativeInput = document.getElementById('unlockTimeRelative');
    
    // 模式切换按钮
    const bindAbsoluteTab = document.getElementById('bindAbsoluteTab');
    const bindRelativeTab = document.getElementById('bindRelativeTab');
    const unlockAbsoluteTab = document.getElementById('unlockAbsoluteTab');
    const unlockRelativeTab = document.getElementById('unlockRelativeTab');
    
    // 输入容器
    const bindAbsoluteInput = document.getElementById('bindAbsoluteInput');
    const bindRelativeInput = document.getElementById('bindRelativeInput');
    const unlockAbsoluteInput = document.getElementById('unlockAbsoluteInput');
    const unlockRelativeInput = document.getElementById('unlockRelativeInput');
    
    // 设备绑定时间模式切换
    bindAbsoluteTab.addEventListener('click', function() {
        switchMode('bind', 'absolute');
    });
    
    bindRelativeTab.addEventListener('click', function() {
        switchMode('bind', 'relative');
    });
    
    // 计划解锁时间模式切换
    unlockAbsoluteTab.addEventListener('click', function() {
        switchMode('unlock', 'absolute');
    });
    
    unlockRelativeTab.addEventListener('click', function() {
        switchMode('unlock', 'relative');
    });
    
    // 输入事件监听
    qualificationTimeInput.addEventListener('change', calculateResults);
    bindTimeAbsoluteInput.addEventListener('change', calculateResults);
    bindTimeRelativeInput.addEventListener('input', calculateResults);
    unlockTimeAbsoluteInput.addEventListener('change', calculateResults);
    unlockTimeRelativeInput.addEventListener('input', calculateResults);
    
    // 初始化MDC组件
    const textFields = document.querySelectorAll('.mdc-text-field');
    textFields.forEach(textField => {
        new mdc.textField.MDCTextField(textField);
    });
}

// 模式切换函数
function switchMode(type, mode) {
    if (type === 'bind') {
        const absoluteTab = document.getElementById('bindAbsoluteTab');
        const relativeTab = document.getElementById('bindRelativeTab');
        const absoluteInput = document.getElementById('bindAbsoluteInput');
        const relativeInput = document.getElementById('bindRelativeInput');
        
        if (mode === 'absolute') {
            absoluteTab.classList.add('active');
            relativeTab.classList.remove('active');
            absoluteInput.style.display = 'block';
            relativeInput.style.display = 'none';
        } else {
            absoluteTab.classList.remove('active');
            relativeTab.classList.add('active');
            absoluteInput.style.display = 'none';
            relativeInput.style.display = 'block';
        }
    } else if (type === 'unlock') {
        const absoluteTab = document.getElementById('unlockAbsoluteTab');
        const relativeTab = document.getElementById('unlockRelativeTab');
        const absoluteInput = document.getElementById('unlockAbsoluteInput');
        const relativeInput = document.getElementById('unlockRelativeInput');
        
        if (mode === 'absolute') {
            absoluteTab.classList.add('active');
            relativeTab.classList.remove('active');
            absoluteInput.style.display = 'block';
            relativeInput.style.display = 'none';
        } else {
            absoluteTab.classList.remove('active');
            relativeTab.classList.add('active');
            absoluteInput.style.display = 'none';
            relativeInput.style.display = 'block';
        }
    }
    
    // 重新计算结果
    calculateResults();
}

// 计算结果函数
function calculateResults() {
    const qualificationTime = getQualificationTime();
    const bindTime = getBindTime();
    const unlockTime = getUnlockTime();
    
    // 计算资格过期时间
    if (qualificationTime) {
        const qualificationExpiry = new Date(qualificationTime.getTime() + 14 * 24 * 60 * 60 * 1000);
        displayQualificationResult(qualificationExpiry);
    } else {
        hideQualificationResult();
    }
    
    // 计算等待期结束时间
    if (bindTime) {
        const waitingPeriodEnd = new Date(bindTime.getTime() + 72 * 60 * 60 * 1000);
        displayBindResult(waitingPeriodEnd);
    } else {
        hideBindResult();
    }
    
    // 资格检查
    if (qualificationTime && bindTime && unlockTime) {
        checkEligibility(qualificationTime, bindTime, unlockTime);
    } else {
        hideFinalResult();
    }
}

// 获取资格时间
function getQualificationTime() {
    const input = document.getElementById('qualificationTime');
    return input.value ? new Date(input.value) : null;
}

// 获取绑定时间
function getBindTime() {
    const absoluteInput = document.getElementById('bindTimeAbsolute');
    const relativeInput = document.getElementById('bindTimeRelative');
    const isAbsoluteMode = document.getElementById('bindAbsoluteTab').classList.contains('active');
    
    if (isAbsoluteMode) {
        return absoluteInput.value ? new Date(absoluteInput.value) : null;
    } else {
        const qualificationTime = getQualificationTime();
        const relativeTime = parseRelativeTime(relativeInput.value);
        
        if (qualificationTime && relativeTime !== null) {
            return new Date(qualificationTime.getTime() + relativeTime);
        }
        return null;
    }
}

// 获取解锁时间
function getUnlockTime() {
    const absoluteInput = document.getElementById('unlockTimeAbsolute');
    const relativeInput = document.getElementById('unlockTimeRelative');
    const isAbsoluteMode = document.getElementById('unlockAbsoluteTab').classList.contains('active');
    
    if (isAbsoluteMode) {
        return absoluteInput.value ? new Date(absoluteInput.value) : null;
    } else {
        const bindTime = getBindTime();
        const relativeTime = parseRelativeTime(relativeInput.value);
        
        if (bindTime && relativeTime !== null) {
            return new Date(bindTime.getTime() + relativeTime);
        }
        return null;
    }
}

// 显示资格结果
function displayQualificationResult(expiryTime) {
    const resultDiv = document.getElementById('qualificationResult');
    const expiryElement = document.getElementById('qualificationExpiry');
    
    expiryElement.textContent = formatDateTime(expiryTime);
    resultDiv.style.display = 'block';
}

// 隐藏资格结果
function hideQualificationResult() {
    const resultDiv = document.getElementById('qualificationResult');
    resultDiv.style.display = 'none';
}

// 显示绑定结果
function displayBindResult(waitingEndTime) {
    const resultDiv = document.getElementById('bindResult');
    const waitingElement = document.getElementById('waitingPeriodEnd');
    
    waitingElement.textContent = formatDateTime(waitingEndTime);
    resultDiv.style.display = 'block';
}

// 隐藏绑定结果
function hideBindResult() {
    const resultDiv = document.getElementById('bindResult');
    resultDiv.style.display = 'none';
}

// 资格检查
function checkEligibility(qualificationTime, bindTime, unlockTime) {
    const qualificationExpiry = new Date(qualificationTime.getTime() + 14 * 24 * 60 * 60 * 1000);
    const waitingPeriodEnd = new Date(bindTime.getTime() + 72 * 60 * 60 * 1000);
    
    const resultDiv = document.getElementById('finalResult');
    const statusElement = document.getElementById('resultStatus');
    const detailsElement = document.getElementById('resultDetails');
    const cardElement = document.getElementById('resultCard');
    
    let canUnlock = true;
    let issues = [];
    
    // 特殊情况：如果资格到期了且等待期还没有到期，直接判定无法解锁
    if (qualificationExpiry < waitingPeriodEnd) {
        canUnlock = false;
        issues.push(`资格过期时间（${formatDateTime(qualificationExpiry)}）早于等待期结束时间（${formatDateTime(waitingPeriodEnd)}），无法解锁`);
    } else {
        // 检查资格是否过期
        if (unlockTime > qualificationExpiry) {
            canUnlock = false;
            issues.push(`资格已过期（${formatDateTime(qualificationExpiry)}）`);
        }
        
        // 检查等待期是否结束
        if (unlockTime < waitingPeriodEnd) {
            canUnlock = false;
            issues.push(`等待期未结束（需等到 ${formatDateTime(waitingPeriodEnd)}）`);
        }
    }
    
    // 显示结果
    if (canUnlock) {
        statusElement.innerHTML = '<span class="status-icon success">✓</span> 可以解锁';
        detailsElement.textContent = `您可以在 ${formatDateTime(unlockTime)} 成功解锁设备`;
        cardElement.className = 'final-result-card success';
    } else {
        statusElement.innerHTML = '<span class="status-icon error">✗</span> 无法解锁';
        detailsElement.innerHTML = '存在以下问题：<br>' + issues.map(issue => `• ${issue}`).join('<br>');
        cardElement.className = 'final-result-card error';
    }
    
    resultDiv.style.display = 'block';
}

// 隐藏最终结果
function hideFinalResult() {
    const resultDiv = document.getElementById('finalResult');
    resultDiv.style.display = 'none';
}

// 解析相对时间格式（xx天xx时xx分）
function parseRelativeTime(timeStr) {
    if (!timeStr || typeof timeStr !== 'string') {
        return null;
    }
    
    // 移除所有空格
    timeStr = timeStr.replace(/\s+/g, '');
    
    let totalMilliseconds = 0;
    
    // 匹配天数
    const dayMatch = timeStr.match(/(\d+)天/);
    if (dayMatch) {
        totalMilliseconds += parseInt(dayMatch[1]) * 24 * 60 * 60 * 1000;
    }
    
    // 匹配小时数
    const hourMatch = timeStr.match(/(\d+)时/);
    if (hourMatch) {
        totalMilliseconds += parseInt(hourMatch[1]) * 60 * 60 * 1000;
    }
    
    // 匹配分钟数
    const minuteMatch = timeStr.match(/(\d+)分/);
    if (minuteMatch) {
        totalMilliseconds += parseInt(minuteMatch[1]) * 60 * 1000;
    }
    
    // 如果没有匹配到任何时间单位，尝试解析纯数字（兼容旧格式）
    if (!dayMatch && !hourMatch && !minuteMatch) {
        const numericValue = parseFloat(timeStr);
        if (!isNaN(numericValue)) {
            // 假设纯数字是天数（兼容旧格式）
            totalMilliseconds = numericValue * 24 * 60 * 60 * 1000;
        }
    }
    
    return totalMilliseconds > 0 ? totalMilliseconds : null;
}

// 格式化日期时间
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}年${month}月${day}日 ${hours}:${minutes}`;
}