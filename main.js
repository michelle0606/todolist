// init
const list = document.querySelector("#my-todo");
const listDone = document.querySelector("#done");
const todos = ["Hit the gym","Read a book","Buy eggs","Organize office","Pay bills"];

// 新增items
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem);
}
// 加入 todos
for (let todo of todos) {
  addItem(todo);
}

//在enter鍵設監聽器
const input = document.querySelector("#newTodo");
input.addEventListener("keypress", function(event) {
  if (window.event.keyCode == 13) {
    isEmpty()
  }
});

//滑鼠點擊監聽器
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function() {
  isEmpty()
});

// 判斷是否為空字串
function isEmpty() {
  let inputValue = document.querySelector("#newTodo").value;
  inputValue = inputValue.trim()  //使用trim()清除多餘的空白
  if (inputValue !== "") {
    addItem(inputValue);
    document.querySelector("#newTodo").value = ''; //重設輸入區域
  }
}

//在刪除圖示及label上設監聽器
list.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    let li = event.target.parentElement;
    li.remove();
  } else if (event.target.tagName === "LABEL") {
    event.target.classList.toggle("checked");
    let check = event.target.parentElement;
    check.remove();
    listDone.appendChild(check);
  }
});

// 在完成處也可以刪除清單
listDone.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    let li = event.target.parentElement;
    li.remove();
  }
});
