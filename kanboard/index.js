const AllBoard = document.querySelectorAll('.board');

const Allpara= document.querySelectorAll('.item');

Allpara.forEach((p) =>{
  p.addEventListener("dragstart", (ev) =>{
    console.log("dragStart");
    ev.currentTarget.classList.add("dragging")
    ev.dataTransfer.clearData();
    ev.dataTransfer.setData("text",ev.target.id);
    
  })
 

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


    



  



   
  


  














    