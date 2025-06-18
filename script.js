function addTask(){
    const taskInput=document.getElementById("taskInput");
    const taskList=document.getElementById("taskList");
    const taskTest=taskInput.ariaValueMax.trim();
    if(taskTest==="")return;
        const listItem=document.createElement("li");
        listItem.textContent=taskTest;
        taskList.appendChild(listItem);
        taskInput.value='';
        
}
