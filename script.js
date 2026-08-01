/* ==========================================
   Chiếc Hộp Triết Lý
   Version 0.3 - Build 001
========================================== */

window.addEventListener("load", () => {

    const container = document.querySelector(".container");

    container.style.opacity = "0";
    container.style.transform = "translateY(30px)";

    setTimeout(() => {

        container.style.transition = "1s";

        container.style.opacity = "1";
        container.style.transform = "translateY(0)";

    },200);

});

const button = document.querySelector("button");

button.addEventListener("mouseenter",()=>{

    button.style.boxShadow="0 0 25px rgba(59,130,246,.7)";

});

button.addEventListener("mouseleave",()=>{

    button.style.boxShadow="none";

});
