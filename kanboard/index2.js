
const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');
const allBoards = document.querySelectorAll('.board');
  

const AddNewBoard = document.getElementById('add-board');
const mainCon = document.querySelector('.container')

AddNewBoard.addEventListener('click',()=>{
    
const newBoard= document.createElement('div');
newBoard.classList.add('board');
const headi=prompt('Enter board name');
const boardName =document.createElement('h4');
boardName.classList.add('heading');
const deleteBoard =document.createElement('button');
deleteBoard.innerText = 'Delete Board';
deleteBoard.classList.add('delete');
boardName.innerText=headi;
newBoard.appendChild(boardName)
newBoard.appendChild(deleteBoard)
deleteBoard.addEventListener('click',() =>{
mainCon.removeChild(newBoard)
})


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

})


const DeleteBtn = document.createElement('button');
DeleteBtn.innerText = 'Delete';
DeleteBtn.addEventListener('click',() =>{
    taskCard.remove();
})



taskCard.appendChild(taskText);
taskCard.appendChild(EditBtn);
taskCard.appendChild(DeleteBtn);

newBoard.appendChild(taskCard);



})



AddItem.appendChild(AddBtn);

newBoard.appendChild(AddItem);


mainCon.appendChild(newBoard);


   

})





const allItems = document.querySelectorAll('.item');

allItems.forEach((item) => attachDragEvents(item)) 
   



allBoards.forEach(board => {




    board.addEventListener('dragover', () => {
         
        const flyingElement = document.querySelector('.flying');
        const firstChild = board.querySelector('.heading');
           if(firstChild.nextElementSibling){
          
           
               board.insertBefore( flyingElement,firstChild.nextElementSibling)

           
            
           }
           else{
             board.appendChild(flyingElement);
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

})


const DeleteBtn = document.createElement('button');
DeleteBtn.innerText = 'Delete';
DeleteBtn.addEventListener('click',() =>{
    taskCard.remove();
})



taskCard.appendChild(taskText);
taskCard.appendChild(EditBtn);
taskCard.appendChild(DeleteBtn);


board.appendChild(taskCard);



})


AddItem.appendChild(AddBtn);

    
board.appendChild(AddItem)


    
});


function attachDragEvents(target){
    target.addEventListener('dragstart',() =>{
        target.classList.add('flying');
    })
     target.addEventListener('dragend',() =>{
        target.classList.remove('flying');
    })

}

window.addEventListener("DOMContentLoaded", () => {
    loadFromLocalStorage();
});

// function saveToLocalStorage() {
//     const allBoards = document.querySelectorAll('.board');
//     const boardsData = {};

//     allBoards.forEach(board => {
//         const boardName = board.querySelector('.heading').innerText;
//         const tasksArray = [];

//         const tasks = board.querySelectorAll('.item');
//         tasks.forEach(task => {
//             tasksArray.push(task.innerText);
//         });

//         boardsData[boardName] = tasksArray;
//     });

//     localStorage.setItem("boardsData", JSON.stringify(boardsData));
// }

// function loadFromLocalStorage() {
//     const boardsData = JSON.parse(localStorage.getItem("boardsData"));
//     if (!boardsData) return;

//     const mainCon = document.querySelector('.container');

//     Object.keys(boardsData).forEach(boardName => {
//         // Create board container
//         const newBoard = document.createElement('div');
//         newBoard.classList.add('board');

//         const boardHeading = document.createElement('h4');
//         boardHeading.classList.add('heading');
//         boardHeading.innerText = boardName;
//         newBoard.appendChild(boardHeading);

//         const deleteBoard = document.createElement('button');
//         deleteBoard.classList.add('delete');
//         deleteBoard.innerText = 'Delete Board';
//         deleteBoard.addEventListener('click', () => {
//             newBoard.remove();
//             saveToLocalStorage(); // Update storage after board deletion
//         });
//         newBoard.appendChild(deleteBoard);

//         // Create tasks
//         boardsData[boardName].forEach(taskText => {
//             const taskCard = document.createElement('div');
//             const taskP = document.createElement('p');
//             taskP.classList.add('item');
//             taskP.innerText = taskText;
//             taskCard.appendChild(taskP);

//             const editBtn = document.createElement('button');
//             editBtn.innerText = 'Edit Task';
//             editBtn.addEventListener('click', () => {
//                 const newText = prompt('Enter new value', taskP.innerText);
//                 if (newText) {
//                     taskP.innerText = newText;
//                     saveToLocalStorage();
//                 }
//             });
//             taskCard.appendChild(editBtn);

//             const deleteBtn = document.createElement('button');
//             deleteBtn.innerText = 'Delete';
//             deleteBtn.addEventListener('click', () => {
//                 taskCard.remove();
//                 saveToLocalStorage();
//             });
//             taskCard.appendChild(deleteBtn);

//             newBoard.appendChild(taskCard);
//         });

//         mainCon.appendChild(newBoard);
//     });
// }




