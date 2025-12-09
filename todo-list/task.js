
const tasklist = [];

function taskFunction() {
    let addtask = document.getElementById("task").value;
    // add task into tasklist
    tasklist.push({ taskname: addtask, date: new Date(), isCompleted: false });
    console.log("hii " + JSON.stringify(tasklist));

    const para = document.createElement("p");
    para.textContent = addtask; //create <p> element in js and connect it with addtask 

    const element = document.getElementById("newinput"); // make new variable and link div ("newinput") by get elementbyId  
    element.appendChild(para); //created para above set to the element by appendChild


    const button = document.createElement("button"); //create button 
    button.textContent = 'Delete'; // name the button use '' 

    button.addEventListener('click', function () {
        para.remove();
        button.remove();
        newbutton.remove();
    }); //button functions defined 

    element.appendChild(button); // button set to the element (div) by appendChild

    const newbutton = document.createElement("button"); //new button create for complete 
    newbutton.textContent = "Completed"; // name the button

    newbutton.addEventListener('click', () => { //
        alert('Task done!');
        const updatedtasklist = tasklist.map(task => { //using map, isComplete:true function given to the newbutton (complete button), so when you click on this button this function run and become true and <p> colour also change to green
            if (task.taskname === addtask) {
                return { ...task, isCompleted: true };
            } else {
                return task;
            }
        }) 
        console.log("hi hiii" + JSON.stringify(updatedtasklist))
        para.style.color = "green";
    });

    element.appendChild(newbutton) // new button also set to the element that's mean div 


}

