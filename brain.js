// window.localStorage

window.addEventListener('load', () => {
    let form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_inp =document.querySelector("#tasks");
    // console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit');
        const task = input.value;
        if(!task){
            alert("Please fill the task");
            return;
        }else{
            input.value = " "; //MSK ERROR FIXED
            console.log("Success Fully Submited");
        }
        const taskEL = document.createElement("div");
        taskEL.classList.add("task");
        list_inp.appendChild(taskEL);

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");
        // // taskContentEl.innerText = task;  
        taskEL.appendChild(taskContentEl);
        console.log(taskContentEl);

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text");
        taskInputEl.type = "text";
        taskInputEl.value = task;
        taskInputEl.setAttribute("readonly", "readonly");
        taskContentEl.appendChild(taskInputEl);

        const taskActionEl = document.createElement("div");
        taskActionEl.classList.add("action");

        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "Edit";

        const taskDeleteEL = document.createElement("button");
        taskDeleteEL.classList.add("delete");
        taskDeleteEL.innerHTML = "Delete";

        taskEL.appendChild(taskActionEl);     
        taskActionEl.appendChild(taskEditEl);
        taskActionEl.appendChild(taskDeleteEL);


        taskEditEl.addEventListener('click' , () =>{
            if(taskEditEl.innerText.toLowerCase()=="edit"){
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                taskEditEl.innerText = "Save";
            }else{
                // console.log("save")
                taskInputEl.setAttribute("readonly","readonly");
                taskEditEl.innerText = "Edit";
            }
        });
        taskDeleteEL.addEventListener('click', () =>{
            list_inp.removeChild(taskEL);
        });
    });
});