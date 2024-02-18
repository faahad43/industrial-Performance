// for starting components
const pageLoadFadeUpAll =document.querySelectorAll(".page-load-up")
document.addEventListener("DOMContentLoaded", function() {
    pageLoadFadeUpAll.forEach((pageLoadFadeUp) => {
        if (isInView(pageLoadFadeUp)) {
            pageLoadFadeUp.classList.add("fade-up--visible");
        }
    });
});


// for scrolling components
const fadeUpAll =document.querySelectorAll(".fade-up");

document.addEventListener("scroll",function(){
    fadeUpAll.forEach((fadeUp )=>{
        if (isInView(fadeUp )){
            fadeUp.classList.add("fade-up--visible")
        }
    })
})



// for fadedown scroll
const fadedownAll =document.querySelectorAll(".fade-down");

document.addEventListener("scroll",function(){
    fadedownAll.forEach((fadedown)=>{
        if (isInView(fadedown)){
            fadedown.classList.add("fade-down--visible")
        }
    })
})

// for fadedown scroll on page load
const pageLoadFadeDownAll =document.querySelectorAll(".page-load-down");

document.addEventListener("DOMContentLoaded",function(){
    pageLoadFadeDownAll.forEach((pageLoadFadeDown)=>{
        if (isInView(pageLoadFadeDown)){
            pageLoadFadeDown.classList.add("fade-down--visible")
        }
    })
})



// for fade left scroll
const fadeLeftAll =document.querySelectorAll(".fade-left");

document.addEventListener("scroll",function(){
    fadeLeftAll.forEach((fadeLeft)=>{
        if (isInView(fadeLeft)){
            fadeLeft.classList.add("fade-left--visible")
        }
    })
})

// page load fade left 
const pageLoadFadeLeftAll =document.querySelectorAll(".page-load-left");

document.addEventListener("DOMContentLoaded",function(){
    pageLoadFadeLeftAll.forEach((pageLoadFadeLeft)=>{
        if (isInView(pageLoadFadeLeft)){
            pageLoadFadeLeft.classList.add("fade-left--visible")
        }
    })
})

// for fade right scroll
const fadeRightAll =document.querySelectorAll(".fade-right");

document.addEventListener("scroll",function(){
    fadeRightAll.forEach((fadeRight)=>{
        if (isInView(fadeRight)){
            fadeRight.classList.add("fade-right--visible")
        }
    })
})

// page load fade right 
const pageLoadFadeRightAll =document.querySelectorAll(".page-load-right");

document.addEventListener("DOMContentLoaded",function(){
    pageLoadFadeRightAll.forEach((pageLoadFadeRight)=>{
        if (isInView(pageLoadFadeRight)){
            pageLoadFadeRight.classList.add("fade-right--visible")
        }
    })
})

function isInView(element){
    const rect =element.getBoundingClientRect();
    return(
        rect.bottom> 0 &&
        rect.top<
        (window.innerHeight-150 || document.documentElement.clientHeight-150)
    )
}



// header animation
document.addEventListener('scroll',()=>{
    // const header=document.querySelector("header");
    const header = document.querySelector('.header');
    if(window.scrollY>0){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
})

// header animation on page load
document.addEventListener("DOMContentLoaded",()=>{
    // const header=document.querySelector("header");
    const header = document.querySelector('.header');
    if(window.scrollY>0){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
})


// Faq section for button click
function faqclick(id,panelid) {
    const faq = document.getElementById(id);
    const panel = document.getElementById(panelid);
    faq.classList.toggle("accordion-click");
    panel.classList.toggle("pannel-click");
}

// for panel display
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    });
}
    


// modal in testimonial section
function modalClick(modalid){

    var modal =document.getElementById(modalid);
    modal.style.display="block";

}

function closeClick(modalid){

    var modal =document.getElementById(modalid);
    modal.style.display="none";

}
var modals =document.querySelectorAll(".modal");
window.onclick = function(event) {
    modals.forEach((modal)=>{
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
 
}