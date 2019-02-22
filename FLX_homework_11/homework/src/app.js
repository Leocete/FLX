let items_counter = 0;
const MAX_ITEMS = 10;

let maximumMessage = document.querySelector('.maximum-message');
let inputField = document.querySelector('.add-input');
let addButton = document.querySelector('.add-button');
let todoList = document.querySelector('.todo-list');

// Checking if input is not empty
inputField.oninput = function(e) {
    let inputText = inputField.value;
    addButton.disabled = !inputField;

    if (event.key === 'Enter' && inputText) {
        createTodoElement(inputText);
    }
}


addButton.onclick = function() {
    createTodoElement(inputField.value);
}

let createTodoElement = function(inputText) {

    let listItem = document.createElement('li'); // New list item
    listItem.setAttribute('class', 'todo-list_item');
    listItem.setAttribute('draggable', true);
    
    let text = document.createElement('span'); // Input text
    text.appendChild(document.createTextNode(inputText));

    let checkIcon = document.createElement('i'); // Not checked checkbox icon
    checkIcon.setAttribute('class', 'material-icons');
    checkIcon.appendChild(document.createTextNode('check_box_outline_blank'));

    let deleteIcon = document.createElement('i'); // Delete icon
    deleteIcon.setAttribute('class', 'material-icons');
    deleteIcon.appendChild(document.createTextNode('delete'));

    let checkButton = document.createElement('button'); // Checkbox button
    checkButton.setAttribute('class', 'todo-list_checkbox');

    let deleteButton = document.createElement('button'); // Remove button
    deleteButton.setAttribute('class', 'todo-list_remove_item');

    checkButton.appendChild(checkIcon);
    checkButton.appendChild(text);
    deleteButton.appendChild(deleteIcon);
    listItem.appendChild(checkButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    items_counter++; 

    if (items_counter > MAX_ITEMS) { // Checking if number of items is not more than 10
        inputField.disabled = true;
        addButton.disabled = true;
        maximumMessage.style.visibility = 'visible'
    }

    checkButton.onclick = function() { // Marking checkbox as 'checked'
        checkIcon.textContent = 'check_box'
    }

    deleteButton.onclick = function() { // Deleting an element
        listItem.remove();
        items_counter--;
        inputField.disabled = false;
        maximumMessage.style.visibility = 'hidden';
    }

    inputField.value = ''; // Refresh input field after adding item to the list
    addButton.disabled = true;
}
// Dragging and dropping list elements
let dragged;

todoList.addEventListener('dragstart', function(event) { // store a ref. on the dragged elem
    dragged = event.target;
    event.target.style.opacity = 0.5;
}, false);

todoList.addEventListener('dragend', function(event) { // reset the transparency
    event.target.style.opacity = '';
}, false);

todoList.addEventListener('dragover', function(event) {
    event.preventDefault();
}, false);

todoList.addEventListener('dragenter', function(event) { // highlight potential drop target when the draggable element enters it
    if (event.target.className === 'todo-list_item') {
        event.target.style.border = 'dotted';
    }
}, false);

todoList.addEventListener('dragleave', function(event) { // reset background of potential drop target when the draggable element leaves it
    if (event.target.className === 'todo-list_item') {
        event.target.style.border = '';
    }
}, false);

todoList.addEventListener('drop', function(event) { 
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className === 'todo-list_item') {
        event.target.style.border = '';
        todoList.insertBefore(dragged, event.target);
    }
}, false);