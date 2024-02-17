var arr = [
     {dp:"https://images.unsplash.com/photo-1613192644177-923b211f5aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1cmdhfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1603646315289-df77246f1694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1cmdhfGVufDB8fDB8fHww"},
     {dp:"https://images.unsplash.com/photo-1598089842345-111cc13e5ece?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story: "https://images.unsplash.com/photo-1567591370504-80142b28f1c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
     {dp:"https://images.unsplash.com/photo-1496440737103-cd596325d314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHMlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",story: "https://images.unsplash.com/photo-1591969851586-adbbd4accf81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvdXBsZXN8ZW58MHx8MHx8fDA%3D"},
     {dp:"https://images.unsplash.com/photo-1575439462433-8e1969065df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1576827471288-0a8f6d6c937b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
     {dp:"https://images.unsplash.com/photo-1571193161738-deaba9b6cc26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D",story: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"},
     {dp:"https://images.unsplash.com/photo-1560745155-a978f7ef4d06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y291cGxlc3xlbnwwfHwwfHx8MA%3D%3D",story: "https://plus.unsplash.com/premium_photo-1664529914557-ee01920185e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"},
     {dp:"https://images.unsplash.com/photo-1696451203090-638d94b830d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMGdpcmxzfGVufDB8fDB8fHww",story: "https://images.unsplash.com/photo-1696451203444-d04129a24b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},

];
var storian = document.querySelector(".storian")
var clutter = ""
arr.forEach((elem,idx)=>{
     clutter += `<div class="story">
     <img id = "${idx}" src = "${elem.dp}" alt="">
     </div>`
})
storian.innerHTML = clutter
storian.addEventListener("click",(dets)=>{ // here dets,are details that gives pointers events that tells yopu where at the specific position yopou clicked on the storian div.
     document.querySelector("#full-screen").style.display = "block"
     document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(()=>{
     document.querySelector("#full-screen").style.display = "none"
    },2000)

    

})