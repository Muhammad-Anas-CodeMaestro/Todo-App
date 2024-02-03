document.getElementById('first').innerHTML= localStorage.getItem('firstName')
document.getElementById('last').innerHTML= localStorage.getItem('lastName')

var todo= {};
document.write = sessionStorage.getItem(todo.name)


var getul = document.getElementById('getUl')

function delall(){
    getul.innerHTML=' '
}

function addTodo(){
    var getInp = document.getElementById('todo').value                  
    var createLi = document.createElement('li')
    var liText = document.createTextNode(getInp)
    createLi.appendChild(liText)
    getul.appendChild(createLi)
    // getInp = ''

    var deleteBtn = document.createElement('button')
    var delText = document.createTextNode('DELETE')
    deleteBtn.appendChild(delText)
    createLi.appendChild(deleteBtn)
    deleteBtn.setAttribute('class', 'btn-delete')

    var EditBtn = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    EditBtn.appendChild(editText)
    createLi.appendChild(EditBtn);
    EditBtn.setAttribute('class', 'btn-edit')

    todo.name = getInp
    localStorage.setItem(todo.name, getInp)


    deleteBtn.setAttribute('onclick', 'delTodo(this)')
    EditBtn.setAttribute('onclick', 'editTodo(this)')
    
}

function delTodo(e){
    e.parentNode.remove()
    localStorage.removeItem(e)
}

function editTodo(e) {
    var getPrompt = prompt('Enter Updated Value', e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = getPrompt
    localStorage.setItem(todo.name, getPrompt)
}