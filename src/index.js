// document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form") // checks and stores the dom node right away and keeps a memory of it FOREVER
//! const form = () => document.querySelector("form") // checks for the presence of the element at the time of invocation

const createTask = (taskValue, selectedPriority) => {
  const li = document.createElement("li")
  li.classList.add("task-item", selectedPriority) 
  li.innerText = taskValue

  
  const button = document.createElement("button")
  button.className = "delete-btn"
  button.innerText = "X"
  button.addEventListener("click", () => li.remove())

  li.appendChild(button)
  tasks.appendChild(li)
}

form.addEventListener('submit', e => {
  e.preventDefault() // no page refreshes
  // debugger
  let userInput = e.target["new-task-description"].value
  const priorityLevel = e.target.priority.value
  debugger
  if (!!userInput.trim()) {
    createTask(userInput, priorityLevel)
    e.target.reset()
  } else {
    alert("You must fill out both inputs")
  }
  // e.target["new-task-description"].value = "" // empty input manually
})
// });
