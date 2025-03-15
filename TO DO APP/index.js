const btn = document.querySelector("#btn");
const box = document.querySelector("#box");
const display = document.querySelector(".display ul"); // Correct selector

function addtask() {
    if (box.value === "") { 
        alert("You haven't entered any task");
    } else {
        let inp = document.createElement("li");
        inp.textContent = box.value; 
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7"; // "×" symbol
        cross.classList.add("delete"); // Add a class for styling

        inp.appendChild(cross); // Append cross inside the li
        display.appendChild(inp); // Append li to ul

        saveData(); 
        box.value="";
    }
    box.value = "";
}

display.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle "checked" class
        saveData();
    } 
    else if (e.target.classList.contains("delete")) { // Check if clicked element has "delete" class
        e.target.parentElement.remove(); // Remove the task
        saveData(); // Save after deletion
    }
}, false);
function saveData(){
    localStorage.setItem("data", display.innerHTML); // Use "display" instead
}

function showTask(){
    display.innerHTML = localStorage.getItem("data");   
}


    showTask();

    
    