`use strict`;
// Click btnPrev/ btnNext
const btnPrev = document.querySelector(`.btnPrev`);
const btnNext = document.querySelector(`.btnNext`);
const currentPage = document.querySelector(`.page__current`);
if(currentPage.innerHTML === 1){
    btnPrev.setAttribute(`disabled`,`true`);
}
btnPrev.addEventListener("onclick",() =>{

});
console.log(currentPage);
