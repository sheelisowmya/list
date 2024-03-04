function addTodo(){
    const input = document.getElementById('todo-input');
    const todoText = input.Value.trim();
        
    const list = document.getElementById('todo-list');


    if(todoText){
        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change',function(){
            if(this.checked){
                todoItem.classList.add('checked');
            }
            else{
                todoItems.classList.remove('checked');
            }
            })
            todoItem.appendChild(checkbox);
            const textNode = document.createTextNode(todoText);
            todoItem.appendChild(textNode);
            list.appendChild(todoItem);
            input.value='';
        }
    }


