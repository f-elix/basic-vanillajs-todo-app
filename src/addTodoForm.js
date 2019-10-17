import todo from "./todo";

export default function() {
  const input = document.getElementById("add-todo-input");
  const form = document.getElementById("add-todo-form");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const task = input.value;
    if (task) {
      todo.addTodo(task);
      todo.updateLocalStorage();
      input.value = "";
    }
  });
}
