export default function() {
  const btn = document.getElementById("clear-list");
  const list = document.getElementById("todo-list");

  btn.addEventListener("click", () => {
    list.innerHTML = "";
  });
}
