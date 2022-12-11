document.querySelector(".right-side-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });



const rightSideMenu = document.querySelector(".right-side-menu");

rightSideMenu.addEventListener("click",()=>{
  document.querySelector(".navbar").classList.toggle("change");
})