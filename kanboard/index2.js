
// const addTaskBtn = document.getElementById('add-task-btn');
// const todoBoard = document.getElementById('todo-board');
// const allBoards = document.querySelectorAll('.board');
  

// const AddNewBoard = document.getElementById('add-board');
// const mainCon = document.querySelector('.container')

// AddNewBoard.addEventListener('click',()=>{
    
// const newBoard= document.createElement('div');
// newBoard.classList.add('board');
// const headi=prompt('Enter board name');
// const boardName =document.createElement('h4');
// boardName.classList.add('heading');
// const deleteBoard =document.createElement('button');
// deleteBoard.innerText = 'Delete Board';
// deleteBoard.classList.add('delete');
// boardName.innerText=headi;
// newBoard.appendChild(boardName)
// newBoard.appendChild(deleteBoard)
// deleteBoard.addEventListener('click',() =>{
// mainCon.removeChild(newBoard)
// })


// newBoard.addEventListener('dragover', () => {
       
//         const flyingElement = document.querySelector('.flying');
//             const firstChild = newBoard.querySelector('.heading');
//         //   if(!firstChild)
//             if(firstChild.nextElementSibling ){
//                newBoard.insertBefore(flyingElement, firstChild.nextElementSibling)

//             }
//             else{
//              newBoard.appendChild(flyingElement);
//             }
        
                       
//     });
   


//     const AddItem= document.createElement('div');
//     AddItem.classList.add('Adddiv');
//     const AddBtn=document.createElement('button')
//     AddBtn.classList.add('Task');

//     AddBtn.innerText = 'Add Task';
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

// })


// const DeleteBtn = document.createElement('button');
// DeleteBtn.innerText = 'Delete';
// DeleteBtn.addEventListener('click',() =>{
//     taskCard.remove();
// })




// taskCard.appendChild(taskText);
// taskCard.appendChild(EditBtn);
// taskCard.appendChild(DeleteBtn);

// newBoard.appendChild(taskCard);



// })



// AddItem.appendChild(AddBtn);

// newBoard.appendChild(AddItem);


// mainCon.appendChild(newBoard);


   

// })





// const allItems = document.querySelectorAll('.item');

// allItems.forEach((item) => attachDragEvents(item)) 
   



// allBoards.forEach(board => {


//     board.addEventListener('dragover', () => {  
//         const flyingElement = document.querySelector('.flying');
//         const firstChild = board.querySelector('.heading');
//            if(firstChild.nextElementSibling){
          
//                board.insertBefore( flyingElement,firstChild.nextElementSibling)

            
//            }
//            else{
//              board.appendChild(flyingElement);
//             }
                
           
        
//     });

//     const AddItem= document.createElement('div');
//     AddItem.classList.add('Adddiv');
//     const AddBtn=document.createElement('button')
//     AddBtn.classList.add('Task');

//     AddBtn.innerText = 'Add Task';





// AddBtn.addEventListener('click', () => {
//     const input = prompt('Enter your task');
//     if (!input) return;

//     const taskCard = document.createElement('div');
//     const taskText = document.createElement('p');
//     taskText.classList.add('item');
//     taskText.innerText = input;
//     taskCard.setAttribute('draggable', true);

//     taskCard.addEventListener('dragstart', () => taskCard.classList.add('flying'));
//     taskCard.addEventListener('dragend', () => taskCard.classList.remove('flying'));

//     const EditBtn = document.createElement('button');
//     EditBtn.innerText = 'Edit Task';
//     EditBtn.addEventListener('click', () => {
//         const oldValue = taskText.innerText;
//         const newText = prompt('Enter the new value', oldValue);
//         if (!newText) return;
//         taskText.innerText = newText;

//         const boardId = board.dataset.id;
//         const boardData = boardsData.find(b => b.id === boardId);
//         const taskIndex = boardData.tasks.indexOf(oldValue);
//         if (taskIndex !== -1) boardData.tasks[taskIndex] = newText;
//         localStorage.setItem('boardsData', JSON.stringify(boardsData));
//     });

//     const DeleteBtn = document.createElement('button');
//     DeleteBtn.innerText = 'Delete';
//     DeleteBtn.addEventListener('click', () => {
//         const boardId = board.dataset.id;
//         const boardData = boardsData.find(b => b.id === boardId);
//         boardData.tasks = boardData.tasks.filter(t => t !== taskText.innerText);
//         localStorage.setItem('boardsData', JSON.stringify(boardsData));
//         taskCard.remove();
//     });

//     taskCard.appendChild(taskText);
//     taskCard.appendChild(EditBtn);
//     taskCard.appendChild(DeleteBtn);
//     board.appendChild(taskCard);

//     const boardId = board.dataset.id;
//     const boardData = boardsData.find(b => b.id === boardId);
//     if (boardData) {
//         boardData.tasks.push(input);
//         localStorage.setItem('boardsData', JSON.stringify(boardsData));
//     }
// });



// AddItem.appendChild(AddBtn);

    
// board.appendChild(AddItem)



    
// });





    


// function attachDragEvents(target){
//     target.addEventListener('dragstart',() =>{
//         target.classList.add('flying');
//     })
//      target.addEventListener('dragend',() =>{
//         target.classList.remove('flying');
//     })

// }


// let boardsData = JSON.parse(localStorage.getItem('boardsData')) || [];


let boardsData = JSON.parse(localStorage.getItem('boardsData')) || [];


const allBoards = document.querySelectorAll('.board');
const mainCon = document.querySelector('.container');
const AddNewBoard = document.getElementById('add-board');



    
// // //     myArray.forEach((CurrentText) => {
// // //       ManageText(CurrentText);
// // //     });

// // //     function ManageText(text) {
// // //       const taskText = document.createElement('p');
// // //       taskText.classList.add('item');
// // //       taskText.innerText = text;

// // //       const taskCard = document.createElement('div');

// // //       const EditBtn = document.createElement('button');
// // //       EditBtn.innerText = 'Edit Task';
// // //       EditBtn.addEventListener('click', () => {
// // //         const newText = prompt('Enter the new value', taskText.innerText);
// // //         if (newText) {
// // //           // update UI
// // //           taskText.innerText = newText;
// // //           // also update localStorage
// // //           let storedTasks = JSON.parse(localStorage.getItem('task')) || [];
// // //           const index = storedTasks.indexOf(text);
// // //           if (index !== -1) storedTasks[index] = newText;
// // //           localStorage.setItem('task', JSON.stringify(storedTasks));
// // //         }
// // //       });

// // //       const DeleteBtn = document.createElement('button');
// // //       DeleteBtn.innerText = 'Delete';
// // //       DeleteBtn.addEventListener('click', () => {
// // //         taskCard.remove();
// // //         let storedTasks = JSON.parse(localStorage.getItem('task')) || [];
// // //         storedTasks = storedTasks.filter((task) => task !== taskText.innerText);
// // //         localStorage.setItem('task', JSON.stringify(storedTasks));
// // //       });

// // //       taskCard.appendChild(taskText);
// // //       taskCard.appendChild(DeleteBtn);
// // //       taskCard.appendChild(EditBtn);
// // //       board.appendChild(taskCard);
// // //     }
// // //   });


allBoards.forEach(board => {
    if (!board.dataset.id) {
        board.dataset.id = 'board-' + Date.now() + Math.floor(Math.random() * 1000);
        // If this board has no entry in boardsData, create it
        if (!boardsData.find(b => b.id === board.dataset.id)) {
            boardsData.push({ id: board.dataset.id, tasks: [] });
        }
    }
});

// Save initial boardsData
localStorage.setItem('boardsData', JSON.stringify(boardsData));

// --------------------
// Restore tasks on page load
// --------------------
boardsData.forEach(boardData => {
    const board = document.querySelector(`.board[data-id="${boardData.id}"]`);
    if (board) {
        boardData.tasks.forEach(taskTextValue => {
            createTaskCard(board, taskTextValue);
        });
        attachAddTaskButton(board);
        attachDragOver(board);
    }
});

// --------------------
// Add new board
// --------------------
AddNewBoard.addEventListener('click', () => {
    const newBoard = document.createElement('div');
    newBoard.classList.add('board');

    const boardNameText = prompt('Enter board name');
    const boardName = document.createElement('h4');
    boardName.classList.add('heading');
    boardName.innerText = boardNameText;

    const deleteBoard = document.createElement('button');
    deleteBoard.classList.add('delete');
    deleteBoard.innerText = 'Delete Board';
    deleteBoard.addEventListener('click', () => {
        const boardIndex = boardsData.findIndex(b => b.id === newBoard.dataset.id);
        if (boardIndex !== -1) boardsData.splice(boardIndex, 1);
        localStorage.setItem('boardsData', JSON.stringify(boardsData));
        mainCon.removeChild(newBoard);
    });

    newBoard.appendChild(boardName);
    newBoard.appendChild(deleteBoard);

    // Assign unique ID
    newBoard.dataset.id = 'board-' + Date.now() + Math.floor(Math.random() * 1000);
    boardsData.push({ id: newBoard.dataset.id, tasks: [] });
    localStorage.setItem('boardsData', JSON.stringify(boardsData));

    mainCon.appendChild(newBoard);

    attachAddTaskButton(newBoard);
    attachDragOver(newBoard);
});

// --------------------
// Functions
// --------------------
function attachAddTaskButton(board) {
    const AddItem = document.createElement('div');
    AddItem.classList.add('Adddiv');

    const AddBtn = document.createElement('button');
    AddBtn.classList.add('Task');
    AddBtn.innerText = 'Add Task';

    AddBtn.addEventListener('click', () => {
        const input = prompt('Enter your task');
        if (!input) return;

        createTaskCard(board, input);

        // Add task to boardsData
        const boardData = boardsData.find(b => b.id === board.dataset.id);
        if (boardData) {
            boardData.tasks.push(input);
            localStorage.setItem('boardsData', JSON.stringify(boardsData));
        }
    });

    AddItem.appendChild(AddBtn);
    board.appendChild(AddItem);
}

function createTaskCard(board, text) {
    const taskCard = document.createElement('div');
    const taskText = document.createElement('p');
    taskText.classList.add('item');
    taskText.innerText = text;
    taskCard.setAttribute('draggable', true);

    taskCard.addEventListener('dragstart', () => taskCard.classList.add('flying'));
    taskCard.addEventListener('dragend', () => taskCard.classList.remove('flying'));

    const EditBtn = document.createElement('button');
    EditBtn.innerText = 'Edit Task';
    EditBtn.addEventListener('click', () => {
        const oldValue = taskText.innerText;
        const newText = prompt('Enter the new value', oldValue);
        if (!newText) return;
        taskText.innerText = newText;

        const boardData = boardsData.find(b => b.id === board.dataset.id);
        const taskIndex = boardData.tasks.indexOf(oldValue);
        if (taskIndex !== -1) boardData.tasks[taskIndex] = newText;
        localStorage.setItem('boardsData', JSON.stringify(boardsData));
    });

    const DeleteBtn = document.createElement('button');
    DeleteBtn.innerText = 'Delete';
    DeleteBtn.addEventListener('click', () => {
        taskCard.remove();
        const boardData = boardsData.find(b => b.id === board.dataset.id);
        boardData.tasks = boardData.tasks.filter(t => t !== taskText.innerText);
        localStorage.setItem('boardsData', JSON.stringify(boardsData));
    });

    taskCard.appendChild(taskText);
    taskCard.appendChild(EditBtn);
    taskCard.appendChild(DeleteBtn);
    board.appendChild(taskCard);
}

function attachDragOver(board) {
    board.addEventListener('dragover', () => {
        const flyingElement = document.querySelector('.flying');
        const firstChild = board.querySelector('.heading');
        if (firstChild.nextElementSibling) {
            board.insertBefore(flyingElement, firstChild.nextElementSibling);
        } else {
            board.appendChild(flyingElement);
        }
    });
}

// Optional: attach drag events to existing items on page load
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', () => item.classList.add('flying'));
    item.addEventListener('dragend', () => item.classList.remove('flying'));
});


