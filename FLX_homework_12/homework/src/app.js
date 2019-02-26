let inputTask = document.getElementById('toDoEl');
let editTask = document.getElementById('editTask');
let checkTask = document.getElementById('list');
let emptyList = document.getElementById('emptyList');
let labelToEdit = null;
let items = [];
let id = [];
const empty = 0;
let pages = ['index', 'add', 'modify'];

load();

function load() {
  items = loadFromLocalStorage();
  id = getNextId();

  items.forEach(item => renderItem(item));
}
// Show the particular page
function show(shown) {
  location.href = '#' + shown;
  pages.forEach(function(page) {
    document.getElementById(page).style.display = 'none';
  });
  document.getElementById(shown).style.display = 'block';
  return false;
}
// Id increasing
function getNextId() {
  for (let i = 0; i<items.length; i++) {
    let item = items[i];
    if (item.id > id) {
      id = item.id;
    }
  }
  id++;
  return id;
}
// Load items from localStorage
function loadFromLocalStorage() {
  let localStorageItems = localStorage.getItem('items');
  if (localStorageItems === null) {
    return [];
  }
  return JSON.parse(localStorageItems);
}
// Save items to local storage
function saveToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}
// Mark items as 'checked'
function setChecked(checkbox, isDone) {
  if (isDone) {
    checkbox.classList.add('checked');
    checkbox.src = 'assets/img/done-s.png';
    let newPosition = checkTask.childElementCount - 1;
    let listItem = checkbox.parentNode;
    listItem.classList.add('checked');
    checkTask.removeChild(listItem);
    checkTask.appendChild(listItem);
  } else {
    checkbox.classList.remove('checked');
    checkbox.src = 'assets/img/todo-s.png';
    let listItem = checkbox.parentNode;
    listItem.classList.remove('checked');
  }
}
// Add checked item to the end of the list 
function renderItem(item) {
  let listItem = document.getElementById('item_template').cloneNode(true);
  listItem.style.display = 'block';
  listItem.setAttribute('data-id', item.id);
  let label = listItem.querySelector('label');
  label.innerText = item.description;
  let checkbox = listItem.querySelector('input');
  checkTask.appendChild(listItem);
  setChecked(checkbox, item.isDone);
  emptyList.style.display = 'none';
  return listItem;
}
// Transfer item to local storage
function createNewElement(task, isDone) {
  let item = { isDone, id: id++, description: task };
  items.push(item);
  saveToLocalStorage();
  renderItem(item);
}
// Adding new task in todo list
function addTask() {  
  if (inputTask.value) {
    createNewElement(inputTask.value, false);
    inputTask.value = '';

    show('index');
  }
}
// Returninig modified task to main page
function modifyTask() {  
  if (editTask.value) {
    let item = findItem(labelToEdit);
    item.description = editTask.value;
    labelToEdit.innerText = editTask.value;
    saveToLocalStorage();
   
    show('index');
  }
}
// Searching for the last list item
function findItem(child) {
  let listItem = child.parentNode;
  let id = listItem.getAttribute('data-id');
  id = parseInt(id);
  let item = items.find(item => item.id === id);
  return item;
}
// Redirecting to modify page
function modifyItem(label) {
  labelToEdit = label;
  editTask.value = label.innerText;

  show('modify');

  editTask.focus();
  editTask.select();
}
// Check if items != null -> mark as checked
function checkItem(checkbox) {
  let item = findItem(checkbox);
  if (item === null) {
    return;
  }
  item.isDone = !item.isDone;
  saveToLocalStorage();
  setChecked(checkbox, item.isDone);
}
// Delete item
function deleteItem(input) {
  let listItem = input.parentNode;
  let id = listItem.getAttribute('data-id');
  id= parseInt(id);
  for (let i in items) {
    if (items[i].id === id) {
      items.splice(i, 1);
      break;
    }
  }
  if (items.length === empty) {
    emptyList.style.display = 'block';
  }
  saveToLocalStorage();
  listItem.parentNode.removeChild(listItem);
}