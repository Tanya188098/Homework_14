let input = document.getElementById('inputList'),
    select = document.getElementById('selectList'),
    list = document.getElementById('list'),
    li = document.getElementById('li');

let arrTasks = [];

function addElement() {

    let inputValue = document.getElementById('inputList').value;
    let selectValue = select.value;
    let li = document.createElement('LI');
    let textLi = document.createTextNode(inputValue);
    li.appendChild(textLi);

    let spanDelete = document.createElement('SPAN');
    let textSpanDelete = document.createTextNode('X');
    spanDelete.className = 'delete';
    spanDelete.appendChild(textSpanDelete);
    li.appendChild(spanDelete);

    let spanEdit = document.createElement('SPAN');
    let textSpanEdit = document.createTextNode(String.fromCharCode(9998));
    spanEdit.className = 'edit';
    spanEdit.appendChild(textSpanEdit);
    li.appendChild(spanEdit);

    if (inputValue == "") {
        alert("You should write your task");
    } else {
        list.appendChild(li);
    }
    document.getElementById('inputList').value = "";
}


let spanDelete = document.getElementsByClassName("delete");
let spanEdit = document.getElementsByClassName("edit");
let checkbox = document.getElementsByClassName("check");


list.addEventListener('click', function (ev) {

    let li = document.getElementsByTagName("li");

    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    } else if (ev.target.className === "delete") {
        let div = ev.target.parentNode;
        div.remove();
    } else if (ev.target.className === "edit") {
        let inp = document.createElement('INPUT');
        inp.setAttribute('type', 'text');
        inp.setAttribute('class', 'editInp');
        inp.setAttribute('id', 'editInp');
        for (let i = 0; i < li.length; i++) {
            li[i].appendChild(inp);
            inp.value = li[i].textContent;
        }

        inp.onkeydown = function (e) {
            let inp = document.getElementById('editInp');
            if (e.keyCode === 13) {
                for (let i = 0; i < li.length; i++) {
                    li[i].textContent = inp.value;
                }
                let spanDelete = document.createElement('SPAN');
                let textSpanDelete = document.createTextNode('X');
                spanDelete.appendChild(textSpanDelete);
                li.appendChild(spanDelete);

                let spanEdit = document.createElement('SPAN');
                let textSpanEdit = document.createTextNode(String.fromCharCode(9998));
                spanEdit.className = 'edit';
                spanEdit.appendChild(textSpanEdit);
                li.appendChild(spanEdit);
            }
        }
    }
}, false);



btnAdd.addEventListener('click', addElement);