// console.log("Hello World");
// static variable defintion
// var state={
//     tasklist:[
//         {
//             imageURL:"",
//             taskTitle:"",
//             tasType:"",
//             taskDescription:"",
//         },
//         {
//             imageURL:"",
//             taskTitle:"",
//             tasType:"",
//             taskDescription:"",
//         },
//         {
//             imageURL:"",
//             taskTitle:"",
//             tasType:"",
//             taskDescription:"",
//         }
//     ]
// }

var state ={
    tasklist: [],
};
var taskContents = document.querySelector(".task_contents");
var taskModel = document.querySelector(".task_modal_body");
console.log(task_contents);
var htmlTaskContent = ({id,title, description, type, url }) => `
<div class = ' col-md-6 col-lg-4 mt-3'id=${id} key=${id} >
<div class='card shadow-sm task_card'>
<div class='card-header d-flex justify-content-end task_card_header'>
<button type="button" class="btn btn-outline-info mr-2" name="${id}"> 
<i class="fas fa-pencil" name="{id}"></i>
</button>
<button type="button" class="btn btn-outline-danger mr-2" name="${id}">
<i class="fas fa-trash" name="{id}"></i>
</button>
</div>

<div class="card-body">
  ${
    url &&
    `<img width='100%' src=${url} alt='card image cap' class='card-img-top md-3 rounded-lg' `
 }
 <h4 class="card-title">${title}</h4>
 <p class="description trim-3-lines text-muted data-gram_editor='false'">${description}</p>
 <div class="tags text-white d-flex flex-wrap">
  <span class="badge bg-primary m-1">${type}</span>
 </div>

</div>


<div class="card-footer">
  <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">openTask</button>


 
</div>
</div>
</div>

    
 `;

var htmlModalContent =({id, title, description, type, url}) =>
{
  var date =new Date(parseInt(id));
    return`
  <div id=${id}>
  ${
    url &&
    `<img width='100%' src=${url} alt='card image cap' class='card-img-top md-3 rounded-lg' `
 }

 <strong class='text-sm text-muted'>Created on ${date.toDateString()}</strong>
 <h2 class='my-3'>${title}</h2>
 <p class='lead'>${description}</p>
  </div>
  

  `;
}

var updateLocalStorage = () =>
{
  localStorage.setItem('task', JSON.stringify({
    tasks: state.tasklist, 
  }))
}

var loadInitialData = () =>{
  var localStorageCopy = JSON.parse(localStorage.tasks)
  if (localStorageCopy) state.tasklist = localStorageCopy.tasks;
  state.tasklist.map((cardDate)=>{
    taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate));
  }
  )
}

var handleSubmit = (event) => {
  const_id = `${Date.now}`;
  const input ={
    url: document.getElementById("imageUrl").value,
    title: document.getElementById("taskTitle").value,
    type: document.getElementById("tags").value,
    description: document.getElementById("taskDescription").value,

  };
  // spread operator
  taskContents.insertAdjacentElement("beforeend", htmlTaskContent({
    ...input, id
  }))
  state.tasklist.push({...input, id});
updateLocalStorage();


};


















