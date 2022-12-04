let input = document.querySelector(".input");
let button = document.querySelector(".addButton");
let list_el = document.querySelector(".tasks");


button.addEventListener('click', ()=>{
// e.preventdefault();

const task_text = input.value;
if(task_text.length ==0)
{
    alert("Please fill the task");
    return;
}


//creating task div
const task_el = document.createElement("div");
task_el.classList.add("task");

//creating content div
const task_content_el = document.createElement("div");
task_content_el.classList.add("content");

task_el.appendChild(task_content_el);   // appending it


// creating input
const task_input_el = document.createElement("input");
task_input_el.classList.add("text");
task_input_el.type="text";
task_input_el.value=task_text;
task_input_el.setAttribute("readonly", "readonly");

task_content_el.appendChild(task_input_el);


// here creating edit and delete button
const task_actions_el = document.createElement("div");
task_actions_el.classList.add("actions");

// creating edit button
const task_edit_el = document.createElement("button");
task_edit_el.classList.add("edit");
task_edit_el.innerHTML = "Edit"

 //creating delete button
 const task_delete_el = document.createElement("button");
 task_delete_el.classList.add("delete");
 task_delete_el.innerHTML = "Delete";

 // appending edit and delete into actions
 task_actions_el.appendChild(task_edit_el);   
 task_actions_el.appendChild(task_delete_el);

 task_el.appendChild(task_actions_el);   //appending actions into task
 list_el.appendChild(task_el);         // appending task in tasks

 input.value="";



 //****** */ now working on delete and edit part***************//

 //edit
 task_edit_el.addEventListener("click", ()=>{
    if(task_edit_el.innerText.toLowerCase() =="edit")
    {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();  // cursor point towards the words
        task_edit_el.innerText="Save";
    }
    else{
        task_edit_el.innerText="Edit";
        task_input_el.setAttribute("readonly", "readonly");

    }
 })


 // delete
 task_delete_el.addEventListener("click", ()=>{
    list_el.removeChild(task_el);
 })



});