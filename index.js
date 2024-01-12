const list_container = document.getElementById("list-container");

function addTask() {
  const newTask = document.getElementById("input-box").value;

  if (newTask.trim() === "") return;

  const list = document.createElement("li");
  list.innerHTML = `${newTask}`;
  list_container.appendChild(list);
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  list.appendChild(span);
  document.getElementById("input-box").value = "";

  saveDataLocalStorage();
}

const btn = document.querySelector("button");
const input = document.getElementById("input-box");

list_container.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDataLocalStorage();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDataLocalStorage();
    }
  },
  false
);

function saveDataLocalStorage() {
  localStorage.setItem("data", list_container.innerHTML);
}

function showAllTask() {
  list_container.innerHTML = localStorage.getItem("data");
}

showAllTask();

btn.addEventListener("click", addTask);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addTask();
});
