export default function() {
  const body = document.getElementsByTagName("body")[0];
  const btn = document.getElementById("color-mode");

  btn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    const isDarkmode = body.classList.contains("darkmode");
    btn.textContent = isDarkmode ? "Light Mode" : "Dark Mode";
  });
}
