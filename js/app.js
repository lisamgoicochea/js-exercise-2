var userSubmit = document.querySelector('#user-submit');

function addToDo(event){
	event.preventDefault();

	var userInput = document.querySelector('#user-input');
	var toDoList = document.querySelector('#to-do-list');

	if (userInput.value === '') {
		return false;
	}

	// toDoList.innerHTML += '<li>' + userInput.value + '</li>';
	toDoList.innerHTML = '<li>' + userInput.value + '</li>' + toDoList.innerHTML;
	userInput.value = '';
}

userSubmit.addEventListener('click', addToDo, false);

/* var newItem = document.createElement("LI");
var textnode = document.createTextNode("Water"); 
newItem.appendChild(textnode);

var list = document.getElementById("myList");
list.insertBefore(newItem, list.childNodes[0]);

// how can i center the text of the submitted to-do's?

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t= document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("You must write something!");
	}	else {
		document.getElementById("myUL").appendChild(li);
	}
} 		document.getElementById("myInput").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < close.length); i++) {
	close[i].onclick = function() {
		var dic = this.parentElement;
		div.style.display = "none";
	}
}
*/ 