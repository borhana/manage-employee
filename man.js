// (function() {
//     // your page initialization code here
//     // the DOM will be available here
//  })();

 document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    console.log(event);
    document.getElementById('deleteModalButton').addEventListener('click', openDeleteModal);
});


function openDeleteModal(){
    const modalDiv = document.getElementById('deleteModal');
    modalDiv.style.display = "block";
    modalDiv.classList.remove("fade");
    // console.log(modalDiv);
} 

function menuFunction() {
    var menu = document.getElementById("menuLinks");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  document.addEventListener('DOMContentLoaded', (event) =>{
    console.log(event);
    document.getElementById('addModalButton').addEventListener('click',openAddModal);
  })

  function openAddModal(){
    const modalAdd = document.getElementById('addModal');
    modalAdd.style.display = "block";
    modalAdd.classList.remove("fade");
    
} 

function closeAddDialog() {
    let d = document.getElementById('addModal')
    d.style.display = "none"
    d.close()
}

function closeDeleteDialog() {
    let d = document.getElementById('deleteModal')
    d.style.display = "none"
    d.close()
}