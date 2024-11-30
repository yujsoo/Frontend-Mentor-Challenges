const shareBox = document.querySelector('.share-box');
const shareBtn = shareBox.querySelector(".share-btn");

shareBtn.addEventListener("click",function(e){
    //e.stopPropagation();
    shareBox.classList.toggle("active")
})