const toggleOpen = document.getElementById("toggleOpen")
const toggleClose = document.getElementById("toggleClose")
const sidebar = document.querySelectorAll(".sidebar")
const navLink = document.querySelectorAll('.nav-link')


toggleOpen.addEventListener("click",() =>{
    sidebar.forEach((e)=>{
        e.classList.add('open')
    })
})

toggleClose.addEventListener('click',()=>{
    sidebar.forEach((e)=>{
        e.classList.remove('open')
    })
})

navLink.forEach((e)=>{
    e.addEventListener('click', ()=>{
        removeNavActive()
        e.classList.add("active");
    })
})

function removeNavActive() {
  navLink.forEach((e) => {
    e.classList.remove("active");
  });
}