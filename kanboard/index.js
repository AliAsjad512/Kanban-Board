const AllBoard = document.querySelectorAll('.board');

const AddTask = document.getElementById('add-task-btn');
const Input = document.getElementById('UserInput');
const items = document.getElementById('items');

let count=1;
localStorage.setItem("id",count);
AddTask.addEventListener('click',() =>{
  //const item = Input.ariaValueMax;
  
  const item = document.createElement('p')
  item.setAttribute("class", "item")
  // let GetId= localStorage.getItem("id");
  // GetId=GetId+1;

  item.setAttribute("id", `dragg${count+1}`);
  //const ChangeId = document.getElementById("dragg1");
  const Eidtbtn= document.createElement('button');
  Eidtbtn.innerHTML="Edit";

  Eidtbtn.addEventListener('click',()=>{
    
  })
    const Deletebtn= document.createElement('button');
    Deletebtn.innerHTML="Delete"
  
 

  item.textContent=Input.value;
  items.append(item);
  items.append(Eidtbtn)
items.append(Deletebtn)


item.addEventListener("dragstart", (ev) =>{
    console.log("dragStart");
    ev.currentTarget.classList.add("dragging")
    ev.dataTransfer.clearData();
    ev.dataTransfer.setData("text",ev.target.id);
    
  })

    


AllBoard.forEach((item)=>{
 
  item.addEventListener("dragover",(ev) =>{
    ev.preventDefault();
    console.log("DragOver");

  })

  item.addEventListener("drop",(ev) =>{
    ev.preventDefault();
    // console.log("item:", item);
    console.log("ev.target:", ev.target);
    //console.log("ev.currentTarget:", ev.currentTarget);

   const data = ev.dataTransfer.getData("text");
    // console.log(data)
    
     ev.currentTarget.appendChild(document.getElementById(data))
  })

  
 
});
  

})

//const Allpara= document.querySelectorAll('.item');

// Allpara.forEach((p) =>{
  
 

// })




    



  



   
  


  














    