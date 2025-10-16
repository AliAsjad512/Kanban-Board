
const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');
const allBoards = document.querySelectorAll('.board');
  
let boardsData = JSON.parse(localStorage.getItem('boardsData')) || [];

const AddNewBoard = document.getElementById('add-board');
const mainCon = document.querySelector('.container')

AddNewBoard.addEventListener('click',()=>{
    let index;
const newBoard= document.createElement('div');
newBoard.classList.add('board');
newBoard.dataset.id=index+1;
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
const boardId = newBoard.dataset.id;
  const boardData = boardsData.find(b => b.id === boardId);
  if (boardData) {
    boardData.tasks.push({ text: input });
    localStorage.setItem('boardsData', JSON.stringify(boardsData));
  }



})
//newBoard.appendChild(deleteBoard)
deleteBoard.addEventListener('click',() =>{
mainCon.removeChild(newBoard)
})



AddItem.appendChild(AddBtn);
AddItem.appendChild(deleteBoard)

newBoard.appendChild(AddItem);


mainCon.appendChild(newBoard);


   

})





const allItems = document.querySelectorAll('.item');

allItems.forEach((item) => attachDragEvents(item)) 
   



allBoards.forEach((board,index) => {



  board.dataset.id = index+1;
  





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




// AddBtn.addEventListener('click',() =>{
// const input=prompt('Enter your task');
// if(!input)
//     return




// const taskCard = document.createElement('div');
// const taskText = document.createElement('p');
// taskText.classList.add('item')
// taskText.innerText = input;
// taskCard.setAttribute('draggable',true);

// taskCard.addEventListener('dragstart',() =>{
//     taskCard.classList.add('flying')
// })
// taskCard.addEventListener('dragend',() =>{
//     taskCard.classList.remove('flying')
// })

 

//  const EditBtn=document.createElement('button')

//     //EditBtn.classList.add('Task');

//     EditBtn.innerText = 'Edit Task';


// EditBtn.addEventListener('click',()=>{
//    const newText = prompt('Enter the new value', taskText.innerText);
//     if (newText) taskText.innerText = newText;
//    const boardId = board.dataset.id;
//    const boardData = boardsData.find(b => b.id === boardId);
//    const taskIndex = boardData.tasks.indexOf(taskText.innerText);
//     if (taskIndex !== -1) boardData.tasks[taskIndex] = newText;
//     localStorage.setItem('boardsData', JSON.stringify(boardsData));




// })


// const DeleteBtn = document.createElement('button');
// DeleteBtn.innerText = 'Delete';
// DeleteBtn.addEventListener('click',() =>{
//     taskCard.remove();
//      const boardId = board.dataset.id;
//         const boardData = boardsData.find(b => b.id === boardId);
//         boardData.tasks = boardData.tasks.filter(t => t !== taskText.innerText);
//         localStorage.setItem('boardsData', JSON.stringify(boardsData));
// })








     

// const tasks=[];



// taskCard.appendChild(taskText);
// taskCard.appendChild(EditBtn);
// taskCard.appendChild(DeleteBtn);

// const boardId = board.dataset.id;
//     const boardData = boardsData.find(b => b.id === boardId);
//     if (boardData) {
//         boardData.tasks.push(input); // add the new task to this board
//         localStorage.setItem('boardsData', JSON.stringify(boardsData));
//     }



// })
AddBtn.addEventListener('click', () => {
    const input = prompt('Enter your task');
    if (!input) return;

    const taskCard = document.createElement('div');
    const taskText = document.createElement('p');
    taskText.classList.add('item');
    taskText.innerText = input;
    taskCard.setAttribute('draggable', true);

    taskCard.addEventListener('dragstart', () => taskCard.classList.add('flying'));
    taskCard.addEventListener('dragend', () => taskCard.classList.remove('flying'));

    let boardsData =[];

    boardsData.push({
  id: board.dataset.id,

  tasks: []
});


    const EditBtn = document.createElement('button');
    EditBtn.innerText = 'Edit Task';
    EditBtn.addEventListener('click', () => {
        const oldValue = taskText.innerText;
        const newText = prompt('Enter the new value', oldValue);
        if (!newText) return;
        taskText.innerText = newText;

        const boardId = board.dataset.id;
        const boardData = boardsData.find(b => b.id === Number(boardId));
        const taskIndex = boardData.tasks.indexOf(oldValue);
        if (taskIndex !== -1) boardData.tasks[taskIndex] = newText;
        localStorage.setItem('boardsData', JSON.stringify(boardsData));
    });

    const DeleteBtn = document.createElement('button');
    DeleteBtn.innerText = 'Delete';
    DeleteBtn.addEventListener('click', () => {
         const boardId = board.dataset.id;
        console.log(boardId)
        const boardData = boardsData.find(b => b.id === Number(boardId));
     console.log(boardData)
        boardData.tasks = boardData.tasks.filter(t => t !== taskText.innerText);
        localStorage.setItem('boardsData', JSON.stringify(boardsData));
        taskCard.remove();
    });

    taskCard.appendChild(taskText);
    taskCard.appendChild(EditBtn);
    taskCard.appendChild(DeleteBtn);
    board.appendChild(taskCard);

   const boardId = board.dataset.id;
    
    const boardData = boardsData.find(b => b.id === boardId);
    if (boardData) {
        boardData.tasks.push(input);
        localStorage.setItem('boardsData', JSON.stringify(boardsData));
    }
});



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








    
// //     myArray.forEach((CurrentText) => {
// //       ManageText(CurrentText);
// //     });

// //     function ManageText(text) {
// //       const taskText = document.createElement('p');
// //       taskText.classList.add('item');
// //       taskText.innerText = text;

// //       const taskCard = document.createElement('div');

// //       const EditBtn = document.createElement('button');
// //       EditBtn.innerText = 'Edit Task';
// //       EditBtn.addEventListener('click', () => {
// //         const newText = prompt('Enter the new value', taskText.innerText);
// //         if (newText) {
// //           // update UI
// //           taskText.innerText = newText;
// //           // also update localStorage
// //           let storedTasks = JSON.parse(localStorage.getItem('task')) || [];
// //           const index = storedTasks.indexOf(text);
// //           if (index !== -1) storedTasks[index] = newText;
// //           localStorage.setItem('task', JSON.stringify(storedTasks));
// //         }
// //       });

// //       const DeleteBtn = document.createElement('button');
// //       DeleteBtn.innerText = 'Delete';
// //       DeleteBtn.addEventListener('click', () => {
// //         taskCard.remove();
// //         let storedTasks = JSON.parse(localStorage.getItem('task')) || [];
// //         storedTasks = storedTasks.filter((task) => task !== taskText.innerText);
// //         localStorage.setItem('task', JSON.stringify(storedTasks));
// //       });

// //       taskCard.appendChild(taskText);
// //       taskCard.appendChild(DeleteBtn);
// //       taskCard.appendChild(EditBtn);
// //       board.appendChild(taskCard);
// //     }
// //   });



