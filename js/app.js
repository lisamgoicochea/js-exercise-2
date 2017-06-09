var userSubmit = document.querySelector('#user-submit');
var toDoList = document.querySelector('#to-do-list');

function addToDo(event){
	event.preventDefault();

	var userInput = document.querySelector('#user-input');

	if (userInput.value === '') {
		return false;
	}

	// toDoList.innerHTML += '<li>' + userInput.value + '</li>';
	toDoList.innerHTML = '<li> <i class="fa fa-window-close close-to-do" aria-hidden="true"></i>' + userInput.value + '</li>' + toDoList.innerHTML;
	userInput.value = '';
}

function removeToDo(event) {
	console.log(event.target.classList.contains('close-to-do'));
	if (event.target.classList.contains('close-to-do')) {
		var li = event.target.parentElement;
		toDoList.removeChild(li);
	}
}
toDoList.addEventListener('click', removeToDo, false);
userSubmit.addEventListener('click', addToDo, false);