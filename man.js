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