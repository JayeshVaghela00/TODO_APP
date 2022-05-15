let addTaskInput = document.getElementById("addTaskInput"); //step-1 fetch data

let addTask = document.getElementById("addTask"); //step-2 fetch data

//Adding Task

//step-3

addTask.addEventListener("click", () => {
  addTaskInputVal = addTaskInput.value; //step-4

  //step-5

  if (addTaskInputVal.trim() != 0) {
    let checkTask = localStorage.getItem("itemJSON");

    if (checkTask == null) {
      taskObj = []; //blank array
    } else {
      taskObj = JSON.parse(checkTask); //Object array
    }

    taskObj.push(addTaskInputVal); //pushing array value

    localStorage.setItem("itemJSON", JSON.stringify(taskObj)); //set data to local storage and convert array to string

    addTaskInput.value = ""; //blank value after add
  }

  showTask(); //display
});

//Display Task

let addedTaskList = document.getElementById("addedTaskList"); //step-6 fetch data

//step-7

showTask = () => {
  let checkTask = localStorage.getItem("itemJSON"); //fetch data from local storage

  if (checkTask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(checkTask);
  }

  //Showing html table on display

  let html = "";

  taskObj.forEach((item, index) => {
    html += `<tr>
    <th scope="row">${index + 1}</th>
    <td>${item}</td>
    <td><button type = 'button' onclick = "editTask(${index})" class="btn btn-primary">Edit</button></td>
    <td><button type = 'button' onclick = "deleteTask(${index})" class="btn btn-danger">Delete</button></td>
</tr> `;
  });

  addedTaskList.innerHTML = html;
};

showTask();

//Edit Function

//step-8

editTask = (index) => {
  let checkTask = localStorage.getItem("itemJSON"); //step-1

  taskObj = JSON.parse(checkTask); //step-2
  addTaskInput.value = taskObj[index]; //step-3

  let saveTask = document.getElementById("saveTask"); //fetch data
  let addTask = document.getElementById("addTask"); //fetch data

  addTask.style.display = "none"; //step-4
  saveTask.style.display = "inline-block"; //step-5

  let saveInput = document.getElementById("saveInput"); //step-6 hidden input field

  saveInput.value = index; // setting up value in edit
};

//Edit task to save task

saveTask.addEventListener("click", () => {
  let checkTask = localStorage.getItem("itemJSON"); // Get data step-1

  taskObj = JSON.parse(checkTask); //step-2

  let saveInput = document.getElementById("saveInput").value; //fetch data step-3

  taskObj[saveInput] = addTaskInput.value; //step-4

  localStorage.setItem("itemJSON", JSON.stringify(taskObj)); //set data to local storage and convert array to string // step-5

  let saveTask = document.getElementById("saveTask"); //fetch data
  let addTask = document.getElementById("addTask"); //fetch data

  addTask.style.display = "inline-block"; //step-6
  saveTask.style.display = "none"; //step-7

  addTaskInput.value = ""; //blank value after save task step-8

  showTask();
});

//delete Task

deleteTask = (index) => {
  let checkTask = localStorage.getItem("itemJSON"); // get data step-1

  taskObj = JSON.parse(checkTask); //step-2

  taskObj.splice(index, 1); //step-4

  let saveTask = document.getElementById("saveTask"); //fetch data
  let addTask = document.getElementById("addTask"); //fetch data

  addTask.style.display = "inline-block"; //step-6
  saveTask.style.display = "none"; //step-7

  localStorage.setItem("itemJSON", JSON.stringify(taskObj)); //set data to local storage and convert array to string // step-4

  addTaskInput.value = ""; //blank value after delete

  showTask();
};

//delete All

let deleteAll = document.getElementById("deleteAll"); //step-1 fetch data

deleteAll.addEventListener("click", () => {
  let checkTask = localStorage.getItem("itemJSON"); // get data step-1

  taskObj = JSON.parse(checkTask); //step-2

  //step-3

  if (checkTask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(checkTask);
    taskObj = [];
  }

  localStorage.setItem("itemJSON", JSON.stringify(taskObj)); //set data to local storage and convert array to string // step-4

  let saveTask = document.getElementById("saveTask"); //fetch data
  let addTask = document.getElementById("addTask"); //fetch data

  addTask.style.display = "inline-block"; //step-6
  saveTask.style.display = "none"; //step-7

  addTaskInput.value = ""; //blank value after save task step-5

  showTask();
});

//search 

// let searchTextBox = document.getElementById('searchTextBox') //step-1 fetch data

// searchTextBox.addEventListener('input',()=>{

//   let trList = document.querySelectorAll('tr') //create variable

//   //Html element to array

//   Array.from(trList).forEach(function(item){

//     let searchText = item.getElementsByTagName('td')[0].innerText;
    
//     let searchTextBoxVal = searchTextBox.value;

//     let re = new RegExp(searchTextBoxVal, 'gi')

//     if (searchText.match(re)) {
      
//       item.style.display = 'table-row'

//     } else {
//       item.style.display = 'none'
//     }

//   })

// })