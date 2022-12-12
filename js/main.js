const rightSideMenu = document.querySelector(".right-side-menu");

rightSideMenu.addEventListener("click",()=>{
  document.querySelector(".navbar").classList.toggle("change");
})

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
