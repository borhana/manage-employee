//hamburger menu
function menuFunction() {
  var menu = document.getElementById("menuLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//Delete Employee
 document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    console.log(event);
    document.getElementById('deleteModalButton').addEventListener('click', openDeleteModal);
    createEvDeleteButton ();
});

function openDeleteModal(){
  const modalDiv = document.getElementById('deleteModal');
  modalDiv.style.display = "block";
  modalDiv.classList.remove("fade");

} 

function closeDeleteDialog() {
  let d = document.getElementById('deleteModal');
  d.style.display = "none";
}

function createEvDeleteButton (){
var main = document.getElementsByClassName('delete-button')

for (let index = 0; index < main.length; index++) {
  const element = main[index];
  element.addEventListener('click', openDeleteModal)
}
}

//Add Employee
document.addEventListener('DOMContentLoaded', (event) =>{
  console.log(event);
  document.getElementById('addModalButton').addEventListener('click',openAddModal);
  createEvAddButton();
})

function openAddModal(){
  const modalAdd = document.getElementById('addModal');
  modalAdd.style.display = "block";
  modalAdd.classList.remove("fade");  
} 

function closeAddDialog() {
  let d = document.getElementById('addModal');
  d.style.display = "none";
}

function createEvAddButton (){
  var main = document.getElementsByClassName('add-button')

  for (let index = 0; index < main.length; index++) {
    const element = main[index];
    element.addEventListener('click', openAddModal)
  }
}

//Edit Employee
document.addEventListener('DOMContentLoaded', (event) =>{
  console.log(event);
  document.getElementById('editModalButton').addEventListener('click', openEditModal);
  createEvEditButton();
})

function openEditModal(){
  const modalEdit = document.getElementById('editModal');
  modalEdit.style.display = "block";
  modalEdit.classList.remove("fade");
  
} 

function createEvEditButton (){
  var main = document.getElementsByClassName('edit-button')

  for (let index = 0; index < main.length; index++) {
    const element = main[index];
    element.addEventListener('click', openEditModal)
  }
}

function closeEditDialog() {
  let d = document.getElementById('editModal');
  d.style.display = "none";
}

//Delete Row by Id 
 function deleteRow(r){
   console.log(r,r.parentNode);
 var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i); 

 } 


 /* var index;
 var table = document.getElementById('myTable');
 for(var i=0; i<table.rows.length; i++) 
 {
   table.rows[i].onclick=function()
   {
     index=this.parentElement.rowIndex;
     console.log(index);
   }
 } */