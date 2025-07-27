        mdc.autoInit();
        
        // 收藏功能相关函数（从app.js复制）
         function getStarredQuestions() {
             const starred = localStorage.getItem('starredQuestions');
             return starred ? JSON.parse(starred) : {};
         }
         
         function saveStarredQuestions(starred) {
             localStorage.setItem('starredQuestions', JSON.stringify(starred));
         }
         
         // 收藏页面功能
         document.addEventListener('DOMContentLoaded', function() {
             loadStarredQuestions();
             initializeStarredPageEvents();
         });
        
        function loadStarredQuestions() {
            const starred = getStarredQuestions();
            const starredArray = Object.values(starred);
            
            updateStarredCount(starredArray.length);
            
            if (starredArray.length === 0) {
                showEmptyState();
                return;
            }
            
            // 按收藏时间倒序排列
            starredArray.sort((a, b) => new Date(b.starredAt) - new Date(a.starredAt));
            
            renderStarredResults(starredArray);
        }
        
        function renderStarredResults(questions) {
            const resultsDiv = document.getElementById('starredResults');
            const emptyState = document.getElementById('emptyState');
            
            resultsDiv.innerHTML = '';
            emptyState.style.display = 'none';
            
            const ul = document.createElement('ul');
            ul.className = 'mdc-list mdc-list--two-line';
            
            questions.forEach(item => {
                const li = document.createElement('li');
                li.className = 'mdc-list-item question-item';
                
                const primaryText = document.createElement('span');
                primaryText.className = 'mdc-list-item__ripple';
                li.appendChild(primaryText);
                
                const textContainer = document.createElement('span');
                textContainer.className = 'mdc-list-item__text';
                
                const questionTitle = document.createElement('span');
                questionTitle.className = 'mdc-list-item__primary-text question-title';
                
                const questionNumber = document.createElement('span');
                questionNumber.className = 'question-number';
                questionNumber.textContent = item.originalIndex;
                
                const questionText = document.createElement('span');
                questionText.innerHTML = item.question;
                
                questionTitle.appendChild(questionNumber);
                questionTitle.appendChild(questionText);
                textContainer.appendChild(questionTitle);
                
                const optionsUl = document.createElement('ul');
                optionsUl.className = 'options-list mdc-list-item__secondary-text';
                
                const sortedOptions = [...item.options].sort((a, b) => {
                    const aCorrect = a.is_correct === 'true';
                    const bCorrect = b.is_correct === 'true';
                    if (aCorrect && !bCorrect) return -1;
                    if (!aCorrect && bCorrect) return 1;
                    return 0;
                });
                
                sortedOptions.forEach(opt => {
                    const optionLi = document.createElement('li');
                    optionLi.innerHTML = opt.option;
                    optionLi.className = opt.is_correct === 'true' ? 'correct' : 'incorrect';
                    optionsUl.appendChild(optionLi);
                });
                
                textContainer.appendChild(optionsUl);
                
                // 添加取消收藏按钮
                const unstarButton = document.createElement('button');
                unstarButton.className = 'star-btn starred';
                unstarButton.title = '取消收藏';
                unstarButton.innerHTML = '<span class="material-icons">star</span>';
                
                unstarButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    removeFromStarred(item.originalIndex);
                });
                
                li.appendChild(textContainer);
                li.appendChild(unstarButton);
                ul.appendChild(li);
            });
            
            resultsDiv.appendChild(ul);
        }
        
        function removeFromStarred(questionId) {
            const starred = getStarredQuestions();
            delete starred[questionId];
            saveStarredQuestions(starred);
            loadStarredQuestions(); // 重新加载页面
        }
        
        function updateStarredCount(count) {
            const countElement = document.getElementById('starredCount');
            if (countElement) {
                countElement.textContent = `${count} 道题目`;
            }
        }
        
        function showEmptyState() {
            const resultsDiv = document.getElementById('starredResults');
            const emptyState = document.getElementById('emptyState');
            
            resultsDiv.innerHTML = '';
            emptyState.style.display = 'block';
        }
        
        function initializeStarredPageEvents() {
            // 返回主页按钮
            const backBtn = document.getElementById('backBtn');
            const backToHomeBtn = document.getElementById('backToHomeBtn');
            
            [backBtn, backToHomeBtn].forEach(btn => {
                if (btn) {
                    btn.addEventListener('click', function() {
                        window.location.href = '/';
                    });
                }
            });
            
            // 清空收藏按钮
            const clearAllBtn = document.getElementById('clearAllBtn');
            if (clearAllBtn) {
                clearAllBtn.addEventListener('click', function() {
                    if (confirm('确定要清空所有收藏的题目吗？此操作不可撤销！')) {
                        localStorage.removeItem('starredQuestions');
                        loadStarredQuestions();
                    }
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
        }