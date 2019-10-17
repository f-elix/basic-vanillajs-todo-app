import colorMode from './colorMode';
import clearList from './clearList';
import addTodoForm from './addTodoForm';
import todo from './todo';

const todoListCtn = document.getElementById('todo-list');
const todoList = JSON.parse(localStorage.getItem('todos'));

if (todoList) {
	todoListCtn.innerHTML = todoList;
}

document.addEventListener('click', e => {
	const btn = e.target;
	const task = btn.parentElement.parentElement;
	if (btn.classList.contains('js-delete')) {
		todo.deleteTodo(task);
	}
	if (btn.classList.contains('js-edit')) {
		todo.editTodo(task, btn);
	}
	if (btn.classList.contains('js-done')) {
		todo.toggleDone(task, btn);
	}
});

colorMode();
clearList();
addTodoForm();
