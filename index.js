const primaryNav = document.querySelector('.primary-navigation')
const NavToggle = document.querySelector('.mobile-nav-toggle')


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