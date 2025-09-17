const AllBoard = document.querySelectorAll('.board');



// Get the element by id
const Allelement = document.querySelectorAll(".item");

for(let i=0;i<Allelement.length;i++){
    Allelement[i].setAttribute('draggable',true);

    const target= document.querySelectorAll("#target");


target.forEach((item)=>{
    
const paragraphs = item.querySelectorAll("p"); // all <p> inside this div

  paragraphs.forEach((p) => {
    console.log(p.textContent); // do something with each <p>
  });

    
})
    
}



// for(let i=0;i<targ.length;i++){
//     console.log(targ[i].value);
// }





// element.addEventListener("dragstart", (ev) => {
  
  
// });


//     item.addEventListener("dragover", (ev) => {
//   ev.preventDefault();
//   ev.dataTransfer.dropEffect = "move";
// });
// item.addEventListener("drop", (ev) => {
//   ev.preventDefault();
//   // Get the id of the target and add the moved element to the target's DOM
//   const data = ev.dataTransfer.getData(Allelement[i].textContent)
//   console.log(data)
//   ev.item.appendChild(data)
 
// });