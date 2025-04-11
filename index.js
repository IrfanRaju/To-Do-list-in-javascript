let input=document.getElementById("inp");
let text=document.querySelector(".text");
function add(){
    if (input.value.trim() === "") {
        alert("Please Enter the value")
    }
    else{
        let newelemen =  document.createElement("ul");
        newelemen.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newelemen);
        input.value= "";
        newelemen .querySelector("i").addEventListener("click", remove);
        function remove(){
            newelemen.remove()
        }
    }
}
