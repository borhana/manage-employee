let idToBedeleted = null;

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

    document.getElementById('deleteModalButton').addEventListener('click', openDeleteModal);
    createEvDeleteButton ();
});

function openDeleteModal(e){
  
  const currentRow = e.currentTarget;
  
  if(currentRow){
    const parent = currentRow.parentNode.parentNode;
    const id = parent.getAttribute('id');
    idToBedeleted = id;
    const modalDiv = document.getElementById('deleteModal');
    modalDiv.style.display = "block";
    modalDiv.classList.remove("fade");  
  }
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
 function deleteRow(){   
    var i = document.getElementById(idToBedeleted).rowIndex;
    document.getElementById("myTable").deleteRow(i); 
    closeDeleteDialog();
 }

 
 function addNewRow () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const phone = document.getElementById("phone").value;

    
    const container = document.getElementById("myTable");
    const newRow = document.createElement("tr");

    const newID = getNewId();
    newRow.setAttribute("id",newID);
    const newRowText =   `<td scope="row"><input type="checkbox"></td>
      <td>${name}</td>
      <td>${email}</td>
      <td>${country}</td>
      <td>${phone}</td>
      <td><span class="edit-button" data-toggle="tooltip" data-placement="top" title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-pencil-fill edit" viewBox="0 0 16 16">
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></span>
          <span class="delete-button" data-toggle="tooltip" data-placement="top" title="Delete"></svg>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg></span></td>
      `;

      newRow.innerHTML = newRowText;
      container.appendChild(newRow);
      createEvDeleteButton ();

 }
 function getNewId(){
  var test = document.getElementsByTagName('tbody');
  var tes1 = test[0].lastChild;
  const id = tes1.getAttribute('id');
  const idnr = parseInt(id.substring(id.length-1)) +1;
  const newID = "employee"+ idnr; 
  return newID;
 }