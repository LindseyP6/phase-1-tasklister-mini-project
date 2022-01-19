


const taskForm = document.querySelector("#create-task-form")
const taskUl = document.querySelector("#tasks")

//add EventListeners to DOM Elements
taskForm.addEventListener("submit", grabTaskFromForm)

//Logic
function grabTaskFromForm(e) {
    e.preventDefault();
    let inputVal = e.target["new-task-description"].value;

    createAndAppendLiWithBtn(inputVal)
    e.target.reset()
}

function createAndAppendLiWithBtn(userInput) {
    let li = document.createElement('li')
    li.textContent = userInput
    
    let btn = document.createElement("button");
    btn.textContent = " X"
    btn.addEventListener("click", handleDelete)
  
    li.appendChild(btn)
  

    //add Li with button to DOM
    taskUl.append(li)

}

function handleDelete(e) {
  e.target.parentNode.remove();
}


