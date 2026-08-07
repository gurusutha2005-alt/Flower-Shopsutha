/*=========================================
BLOSSOM BOUTIQUE
SCRIPT.JS
==========================================*/

// Smooth Scroll for Internal Links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Active Navigation Link

const navLinks=document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

    });

});

// Sticky Header Shadow

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

    }

    else{

        header.style.boxShadow="0 5px 15px rgba(0,0,0,.05)";

    }

});

// Image Hover Effect

const images=document.querySelectorAll("img");

images.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.03)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});

// Product Card Animation

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

console.log("Blossom Boutique Loaded Successfully 🌸");