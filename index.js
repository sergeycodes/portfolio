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



const hTwo = document.querySelector('.h2-animation')
const hFour = document.querySelector('.h4-animation')
const hFive = document.querySelector('.h5-animation')

function h2animation() {
    hTwo.style.display = "flex"
}

var inverval_timer;

//Time in milliseconds [1 second = 1000 milliseconds ]   
inverval_timer = setInterval(function() { 
    hTwo.style.display = "flex"
}, 1500);

inverval_timer = setInterval(function() { 
    hFour.style.display = "flex"
}, 2000);

inverval_timer = setInterval(function() { 
    hFive.style.display = "flex"
}, 3500);

inverval_timer = setInterval(function() { 
    welcomeMessage()
    stop_timer()
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

const sendBtn = document.getElementById('send-btn');
function sendMessage() {
 
    clearMessageBox();
    sentAnimation();
}

const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

function clearMessageBox() {
    username.value = "";
    email.value = "";
    message.value = "";
}

function sentAnimation() {
    sendBtn.style.backgroundColor = "green";
   sendBtn.value = "Sent!";
}

function defaultMessageBox() {
    sendBtn.style.backgroundColor = "var(--clr-dark)";
    sendBtn.value = "Send";
}