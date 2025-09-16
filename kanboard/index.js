
const UserInput= document.getElementById('userInput');

const CreateTask= document.getElementById('create');
const todoBoard= document.getElementById('todo')

CreateTask.addEventListener('click',()=> {
const CreateDiv= document.createElement('div');
CreateDiv.append(UserInput.value);
todoBoard.append(CreateDiv);


})