

const openBtn = document.querySelector(".hamburger-menu");
const closeBtn = document.getElementsByClassName("close-menu")[0];
const mobileNav = document.getElementsByClassName("nav-mobile")[0];


const accordionBtns = document.querySelectorAll(".panel");
const navItems = document.querySelectorAll(".nav_menu-item");


openBtn.addEventListener("click", function() {
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    mobileNav.style.maxHeight = "75vh";
});

closeBtn.addEventListener("click", function() {
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    mobileNav.style.maxHeight = "0";
    closed();
});


accordionBtns.forEach((accordion) => {
    accordion.onclick = function() {
        this.classList.toggle('is-open');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
        hideAll(this);
    }
})


navItems.forEach((navItem) => {
    navItem.onclick = function() {
        this.classList.toggle('is-open');
        let dropDown = this.firstElementChild;
        if (this.classList.contains('is-open')) {
            dropDown.style.display = "block";
        }
        else {
            dropDown.style.display = "none";
        }
       
        for (let i = 0; i < navItems.length; i++) {
            if(navItems[i] !== this) {
                navItems[i].classList.remove('is-open');
                let content = navItems[i].firstElementChild;
                content.style.maxHeight = null;
                content.style.display = "none"; 
            }
        }
        
    }
})


function hideAll(exceptThis) {
    for (let i = 0; i < accordionBtns.length; i++) {
        if (accordionBtns[i] !== exceptThis) {
            accordionBtns[i].classList.remove('is-open');
            let content = accordionBtns[i].nextElementSibling;
            content.style.maxHeight = null;
        }
    }
}

function closed() {
    for (let i = 0; i < accordionBtns.length; i++) {
        accordionBtns[i].classList.remove('is-open');
        let content = accordionBtns[i].nextElementSibling;
        content.style.maxHeight = null;
    }
}