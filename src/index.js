
// document.addEventListener("DOMContentLoaded", () => {
  
// });

//! CREATE GLOBAL VARIABLES
const taskForm = document.querySelector("#create-task-form")
const taskUl = document.querySelector("#tasks")

function addTask(e) {
  //! block page refreshes
  e.preventDefault()
  //! determine what the user typed
  const input = e.target["new-task-description"].value
  //! Create new li with user input
  const newLi = document.createElement('li') //* returns a new Node
  newLi.textContent = input
  //! Create a new button with X as text
  const btn = document.createElement("button")
  btn.addEventListener("click", () => newLi.remove() )
  btn.textContent = "X"
  //! determine which priority the user selected
  const priority = e.target.priority.value // "low", "medium", "high"

  // if (priority === "low") {
  //   newLi.style.backgroundColor = "green"
  // } else if (priority === "medium") {
  //   newLi.style.backgroundColor = "yellow"
  // } else {
  //   newLi.style.backgroundColor = "red"
  // }
  newLi.classList.add(priority)

  //! append button within the li
  newLi.appendChild(btn)
  //! Append the li as child of ul
  taskUl.appendChild(newLi)
  //! Empty the form
  e.target.reset()
}

function attachListeners() {
  //! attach all listeners that we might need
  taskForm.addEventListener("submit", addTask)
}

attachListeners()
