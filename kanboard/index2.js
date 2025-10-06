
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



