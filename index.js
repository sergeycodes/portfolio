const primaryNav = document.querySelector('.primary-navigation')
const NavToggle = document.querySelector('.mobile-nav-toggle')
const welcomeEl = document.querySelector('.welcome-container')
const projectEl = document.querySelector('.project-container')
const navbar = document.querySelector('.navbar')

NavToggle.addEventListener('click', ()=> {
    const visibility = primaryNav.getAttribute('data-visible')

    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        NavToggle.setAttribute("aria-expanded", true)
    }else{
        primaryNav.setAttribute("data-visible", false)
        NavToggle.setAttribute("aria-expanded", false)
    }
})

var inverval_timer;

//Time in milliseconds [1 second = 1000 milliseconds ]    
inverval_timer = setInterval(function() { 
    console.log("5 seconds completed");
    welcomeMessage()
}, 5000);
    
//IF you want to stop above timer
function stop_timer() {
    clearInterval(inverval_timer); 
}

function welcomeMessage() {
    welcomeEl.style.transition = "all 1s"
    welcomeEl.style.width = "80vw"
    welcomeEl.style.height = "80vh"
    welcomeEl.style.marginTop = "11vh"
    welcomeEl.style.marginLeft = "10vw"
    projectEl.style.transition = "all 1s"
    projectEl.style.marginTop = "100vh"
    navbar.style.top = "0"
}