(function(){
            const taskInput = document.getElementById('taskInput');
            const addBtn = document.getElementById('addBtn');
            const taskList = document.getElementById('taskList');

            function addTask() {
                const taskText = taskInput.value.trim();
                if (taskText === '') return;
                const listItem = document.createElement('li');
                listItem.textContent = taskText;
                taskList.appendChild(listItem);
                taskInput.value = '';
                taskInput.focus();
            }

            addBtn.addEventListener('click', addTask);

            // Also add task on Enter keypress inside input
            taskInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    addTask();
