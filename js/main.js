// var button = document.getElementById('btn');
// var content = document.getElementById('content');

// button.onclick = () => {
//     var req = new XMLHttpRequest();
//     req.onload = () => {
//         console.log(req);
//         content.innerHTML = req.responseText
//     }
//     req.open('GET', '../response.txt', true);
//     req.send();
// }

// button.onclick = () => {
//     fetch('../response.txt')
//         .then(response => response.text())
//         .then(text => content.innerHTML = text)
//         .catch(error => console.log(error))
// }




/**{
    id: 1,
    userId: 2,
    title: "Create a todo app",
    completed: true
        
}*/
var todoText = document.getElementById('todoText');
var addTodo = document.getElementById('addTodo');
var todoContent = document.getElementById('todoContent');

var todos = [];

addTodo.onclick = () => {

    let txt = todoText.value;
    if (txt != '') {
        pushTodo(txt);
    }

    todoText.value = '';

    attachEventListenersToCheckboxes();
}


let attachEventListenersToCheckboxes = () => {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');

    checkboxes.forEach((checkbox, index) => {

        console.log(todos);
        checkbox.onchange = (event) => {
            todos = todos.map((value, i) => {
                if (i == checkbox.dataset.index) {
                    value.completed = event.target.checked;
                }

                return value;
            })
            console.log(todos);

        }

    })
}

let pushTodo = (text) => {
    todos.push({
        id: todos.length + 1,
        userId: 3,
        title: text,
        completed: false
    });
    displayTodo();
}

let displayTodo = () => {
    let htmlStr = '<ul class="list-group">';
    for (let index in todos) {
        htmlStr += '<li class="list-group-item">'
        htmlStr += `<input class="form-check-input me-1" type="checkbox" data-index="${ index }" />`
        htmlStr += `<label>${ todos[ index ].title }</label>`
        htmlStr += '</li>'
    }
    htmlStr += '</ul>'

    todoContent.innerHTML = htmlStr;

}