document.getElementById("hamburger-btn").addEventListener("click", toggleFunc);
document.querySelector(".link-lists").addEventListener("click", toggleFunc);

function toggleFunc(){
    var menu= document.getElementById("hamburger-btn");
    menu.classList.toggle('act');

    var styling = document.getElementById("sidebar");

    if(styling.style.width === "100%")
    {
        styling.style.width = "0%";
    } else {
        styling.style.width = "100%";
    }
}