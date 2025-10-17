
const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');
const allBoards = document.querySelectorAll('.board');
  
let boardsData = JSON.parse(localStorage.getItem('boardsData')) || [];

boardsData.forEach((board) =>{

console.log(board)

})








const AddNewBoard = document.getElementById('add-board');
const mainCon = document.querySelector('.container')

AddNewBoard.addEventListener('click',()=>{
    
const newBoard= document.createElement('div');
newBoard.classList.add('board');

const headi=prompt('Enter board name');
const boardId = Date.now().toString(); // unique id
newBoard.dataset.id = boardId;
boardsData.push({
  id: boardId,
  name: headi,
  tasks: []
});
localStorage.setItem('boardsData', JSON.stringify(boardsData));

const boardName =document.createElement('h4');
boardName.classList.add('heading');
const deleteBoard =document.createElement('button');
deleteBoard.innerText = 'Delete Board';
deleteBoard.classList.add('delete');
boardName.innerText=headi;
newBoard.appendChild(boardName)



newBoard.addEventListener('dragover', () => {
       
        const flyingElement = document.querySelector('.flying');
            const firstChild = newBoard.querySelector('.heading');
        //   if(!firstChild)
            if(firstChild.nextElementSibling ){
               newBoard.insertBefore(flyingElement, firstChild.nextElementSibling)

            }
            else{
             newBoard.appendChild(flyingElement);
            }
        
                       
    });
   


    const AddItem= document.createElement('div');
    AddItem.classList.add('Adddiv');
    const AddBtn=document.createElement('button')
    AddBtn.classList.add('Task');

    AddBtn.innerText = 'Add Task';
AddBtn.addEventListener('click',() =>{
const input=prompt('Enter your task');
if(!input)
    return

const taskCard = document.createElement('div');
const taskText = document.createElement('p');
taskText.classList.add('item')
taskText.innerText = input;

taskCard.setAttribute('draggable',true);

taskCard.addEventListener('dragstart',() =>{
    taskCard.classList.add('flying')
})
taskCard.addEventListener('dragend',() =>{
    taskCard.classList.remove('flying')
})



 const EditBtn=document.createElement('button')

    //EditBtn.classList.add('Task');

    EditBtn.innerText = 'Edit Task';


EditBtn.addEventListener('click',()=>{
   const newText = prompt('Enter the new value', taskText.innerText);
    if (newText) taskText.innerText = newText;
    const boardId = newBoard.dataset.id;
    const boardData = boardsData.find(b => b.id === boardId);
 if (boardData) {
  const taskIndex = boardData.tasks.findIndex(t => t.text === taskText.innerText);
  if (taskIndex !== -1) boardData.tasks[taskIndex].text = newText;
  localStorage.setItem('boardsData', JSON.stringify(boardsData));
}


})


const DeleteBtn = document.createElement('button');
DeleteBtn.innerText = 'Delete';
DeleteBtn.addEventListener('click',() =>{
     const boardId = newBoard.dataset.id;
   const boardData = boardsData.find(b => b.id === boardId);
     boardData.tasks = boardData.tasks.filter(t => t.text !== taskText.innerText);
 localStorage.setItem('boardsData', JSON.stringify(boardsData));
    taskCard.remove();
})




taskCard.appendChild(taskText);
taskCard.appendChild(EditBtn);
taskCard.appendChild(DeleteBtn);

newBoard.appendChild(taskCard);
const boardId = newBoard.dataset.id;
  const boardData = boardsData.find(b => b.id === boardId);
  if (boardData) {
    boardData.tasks.push({ text: input });
    localStorage.setItem('boardsData', JSON.stringify(boardsData));
  }



})
//newBoard.appendChild(deleteBoard)
deleteBoard.addEventListener('click',() =>{
    const boardId = newBoard.dataset.id;
  boardsData = boardsData.filter(b => b.id !== boardId);
  localStorage.setItem('boardsData', JSON.stringify(boardsData));
mainCon.removeChild(newBoard)
})



AddItem.appendChild(AddBtn);
AddItem.appendChild(deleteBoard)

newBoard.appendChild(AddItem);


mainCon.appendChild(newBoard);


   

})

