fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
        function write() {
            data.forEach((element) => {
                let shownField = document.querySelector(".shown-field");

                let item = document.createElement("div");

                item.classList.add("item", `item-${element.id}`);

                let txt = document.createElement("span");

                let innerTxt = document.createTextNode(element.title);

                let btn = document.createElement("button");

                btn.classList.add("done");

                let btnText = document.createTextNode("Done");

                txt.appendChild(innerTxt);

                btn.appendChild(btnText);

                item.appendChild(txt);

                item.appendChild(btn);

                shownField.appendChild(item);

                if (element.completed === true) {
                    item.classList.add("done");

                    btn.classList.remove("done");

                    btn.classList.add("cancel");

                        btnText.textContent = "Cancel";
                }

                btn.addEventListener("click", () => {
                    item.classList.toggle("done");

                    btn.classList.toggle("done");

                    btn.classList.toggle("cancel");

                    if (item.classList.contains("done")) {
                        btnText.textContent = "Cancel";
                    } else {
                        btnText.textContent = "Done";
                    }
                });
            });
        }
        write();

        function add() {
            let input = document.getElementById("input");
            let addBtn = document.getElementById("add-btn");
            addBtn.addEventListener("click", () => {
                if (input.value !== "") {
                    let obj = {
                        id: 200 ,
                        completed: false,
                        title: `${input.value}`,
                    };
                    data.push(obj);
                    input.value = "";
                    write();
                    console.log(data.length);
                }
            });
        }
        add();
    });
