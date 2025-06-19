let input = document.getElementById("input-box");
let list = document.getElementById("list-container");

function AddItem() {
  if (input.value.trim() === "") {
    alert("Add a task");
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;

    let span = document.createElement("span");
    span.textContent = "\u00D7"; 
    span.className = "close";
    span.onclick = function () {
      list.removeChild(li);
    };
    li.onclick = function () {
      li.classList.toggle("checked");
    };
    li.appendChild(span);
    list.appendChild(li);
    input.value = "";
  }
}
