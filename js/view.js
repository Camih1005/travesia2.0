document.getElementById("ButSub").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const but2 = document.getElementById("ButSub")

function desa(){
    if (window.scrollTo > 100){
        document.styleSheets.display = "none"
    }else{
        
    }
}


// let HoverImg1 = document.getElementById("I1")

// HoverImg1.addEventListener("click",()=>{
//     alert("mamass")
// })

let HoverImg1 = document.getElementById("I1")
let HoverImg2 = document.getElementById("I2")
let HoverImg3 = document.getElementById("I3")

HoverImg1.addEventListener("mouseover",()=>{
HoverImg1.setAttribute("src","./img/Productos/1.5j.webp")
})
HoverImg1.addEventListener("mouseout",()=>{
HoverImg1.src = "./img/Productos/1j.png"
})
HoverImg2.addEventListener("mouseover",()=>{
HoverImg2.src = "./img/Productos/2.5j.webp"
})
HoverImg2.addEventListener("mouseout",()=>{
HoverImg2.src = "./img/Productos/2j.webp"
})
HoverImg3.addEventListener("mouseover",()=>{
HoverImg3.src = "./img/Productos/3.5j.webp"
})
HoverImg3.addEventListener("mouseout",()=>{
HoverImg3.src = "./img/Productos/3j.webp"
})

//HAMBUERGUESA MAIN

let 

