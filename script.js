const container = document.querySelector("#container");
let number = 16;
let grid = number * number;
for (let i = 0; i < grid; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
    content.addEventListener("mouseover", () => {
        // Cambiar el color al hacer clic
        content.classList.add("over");
    });
}
const btm = document.querySelector("#new");
btm.addEventListener("click",function(){

})
