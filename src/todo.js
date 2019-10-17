export default {
	addTodo(todo) {
		const list = document.getElementById('todo-list');
		const newTodo = document.createElement('div');
		newTodo.classList.add('todo');
		newTodo.innerHTML = `
    <div class="todo__text">
      <p id="todo-text">${todo}</p>
      <textarea name="task" cols="30" rows="1" style="display: none;">${todo}</textarea>
    </div>
    <div class="todo__buttons">
      <button class="js-edit">Edit</button>
      <button class="js-delete">Delete</button>
      <button class="js-done">Done</button>
    </div>
  `;
		list.appendChild(newTodo);
		this.updateLocalStorage();
	},
	deleteTodo(todo) {
		todo.remove();
		this.updateLocalStorage();
	},
	editTodo(todo, btn) {
		const p = todo.firstElementChild.firstElementChild;
		const input = p.nextElementSibling;
		const doneBtn = btn.nextElementSibling.nextElementSibling;
		if (p.style.display === 'none') {
			p.textContent = input.value;
			p.style.display = 'block';
			input.style.display = 'none';
			btn.textContent = 'Edit';
			this.toggleDisableBtn(doneBtn);
			this.updateLocalStorage();
		} else {
			p.style.display = 'none';
			input.style.display = 'block';
			btn.textContent = 'Save';
			this.toggleDisableBtn(doneBtn);
		}
	},
	toggleDone(todo, btn) {
		const p = todo.firstElementChild.firstElementChild;
		const editBtn = btn.previousElementSibling.previousElementSibling;
		p.classList.toggle('done');
		btn.textContent = btn.textContent === 'Done' ? 'Not Done' : 'Done';
		this.toggleDisableBtn(editBtn);
		this.updateLocalStorage();
	},
	renderTodoInput(todo) {
		const task = todo.getElementById('todo-text').textContent;
		const input = document.createElement('textarea');
		input.setAttribute('name', 'task');
		input.setAttribute('cols', '30');
		input.setAttribute('rows', '1');
		input.textContent = task;
		todo.appendChild(input);
	},
	toggleDisableBtn(btn) {
		btn.toggleAttribute('disabled');
		btn.classList.toggle('disabled');
	},
	updateLocalStorage() {
		const todos = document.getElementById('todo-list').innerHTML;
		localStorage.setItem('todos', JSON.stringify(todos));
	}
};
