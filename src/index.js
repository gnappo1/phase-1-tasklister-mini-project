//! Global Variables

const taskForm = document.querySelector("#create-task-form")
const taskInput = document.querySelector("#new-task-description")
const todosUl = document.querySelector("#tasks")

//! Callbacks / Helpers

//! Attach Listeners
taskForm.addEventListener("submit", (e) => {
  //! prevent page refreshes with preventDefault()
  e.preventDefault()

  //! Extract the info and package it in a format that is easy to use
  const todo = taskInput.value

  //! If the string is empty, alert the user and stop the fn execution
  if (!todo.trim()) {
    alert("Description cannot be empty")
    return
  }
  
  const li = document.createElement("li")
  li.innerText = todo
  //! create a new button
  const btn = document.createElement("button")
  btn.innerText = "X"
  //! Attach the click onto the button which will remove the whole li

  li.append(btn)
  todosUl.append(li)

  //! Reset the form
  e.target.reset()
})