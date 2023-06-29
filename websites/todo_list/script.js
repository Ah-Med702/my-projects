let input = document.getElementById("input");
let todos = document.getElementById("todos");

if (localStorage.item == null) {
    list = [];
} else {
    list = JSON.parse(localStorage.item);
}

function addTodo() {
    if (input.value != "") {
        let item = {
            title: input.value,
        };
        list.push(item);
        localStorage.setItem("item", JSON.stringify(list));
        input.value = "";
        showValue();
    }
}

function deleteItem(i) {
    list.splice(i, 1);
    localStorage.item = JSON.stringify(list);

    showValue();
}

function showValue() {
    let todo = "";
    for (i = 0; i < list.length; i++) {
        todo += `
    <div class="item">
        <div>${i + 1} - ${list[i].title}</div>
        <button onclick="deleteItem(${i})" class="del" id="del">delete</button>
    </div>
    `;
    }
    todos.innerHTML = todo;
}
showValue();
