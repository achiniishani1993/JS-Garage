
let tasklist = [];

function taskFunction() {
    let addtask = document.getElementById("task").value;
    // add task into tasklist
    let obj = { taskname: addtask, date: new Date(), isCompleted: false }
    tasklist.push(obj); // push objects into array
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
        tasklist = updatedtasklist;
        console.log("hi hiii" + JSON.stringify(updatedtasklist))
        para.style.color = "green";
    });

    element.appendChild(newbutton) // new button also set to the element that's mean div 

}

function allFunction(){
     document.getElementById("newinput").innerHTML = ""  // clear div
     const element = document.getElementById("newinput");
     
     let alltask = tasklist.filter(task => {
        return task.taskname
     });
     
     for (i=0; i < alltask.length; ++i) {
        let para3 =document.createElement("p");
        para3.textContent=alltask[i].taskname;
        element.appendChild(para3);
     }
}

function comFunction() {
    document.getElementById("newinput").innerHTML = ""  // clear div
    const element = document.getElementById("newinput");
    console.log("hiiiiiii" + JSON.stringify(tasklist))

    let completetask = tasklist.filter(task => {
        return task.isCompleted === true
    });
    // taskList - object array - including all the task
    // completetask - object array - iscomplete = true tasks
    // completetask[0] - task object
    for (i = 0; i < completetask.length; ++i) {
        console.log(JSON.stringify(completetask[i]))
        let para1 = document.createElement('p');
        para1.textContent = completetask[i].taskname;
        element.appendChild(para1);
    }
    /* completetask.forEach((item) => {
             let para1 =
                 document.createElement("p");
               para1.textContent =item.taskname;
             element.appendChild(para1);
         }); */
}

function ActFunction() {
    document.getElementById("newinput").innerHTML = ""  // clear div
    const element = document.getElementById("newinput");

    let acttask = tasklist.filter(task => {
        return task.isCompleted === false 
    });

    acttask.forEach((actitem) =>{
        let para2 = document.createElement("p");
        para2.textContent=actitem.taskname;
        element.appendChild(para2);
    });
}



