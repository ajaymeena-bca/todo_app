
// show todo from fetching localStorage of broswer
const fetchTodo = ()=>{

    document.getElementById('show-todo').innerHTML = '';
    for(let i=0;i<localStorage.length ;i++){
         let key = localStorage.key(i);
         let value = localStorage.getItem(key)
         const div = document.createElement('div')
         div.className = "col-md-4"
         div.innerHTML = `
             <div class="card my-3">
                 <div class="card-body">
                     <h5 class="card-title">${key}</h5>
                     <p class="card-text">${value}</p>
                     <button type="button" class="btn btn-outline-success update-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                     <button type="button" class="btn btn-outline-danger del-todo-btn">Delete</button>
                 </div>
             </div>
         `;
         document.getElementById('show-todo').prepend(div)
    }
}
fetchTodo();




// add Todo in localStorage uisng localStorange of broswer
const addTodo = document.getElementById('add_todo')
addTodo.addEventListener('click',(event)=>{
        let todo_titile = document.getElementById('todo_title')
        let todo_desc = document.getElementById('todo_desc')
        localStorage.setItem(todo_titile.value, todo_desc.value);
        todo_titile.value=null;
        todo_desc.value=null;
        fetchTodo();
        delete_todo();
        update_todo();
})



// To delete a particular todo from the localStorage

const delete_todo = ()=>{
    let del_todos = Array.from(document.getElementsByClassName('del-todo-btn'))
    for(const tode of del_todos){        
            tode.addEventListener('click',(event)=>{
                 let card_title = event.target.parentElement.firstElementChild;
                 let del_todo = confirm(`you're sure delete ${card_title.innerHTML} todo ..`)

                 if(del_todo){
                      localStorage.removeItem(card_title.innerHTML)
                      fetchTodo();
                      window.location.reload();
                 } 
            })
    };
}
delete_todo();




//update Todo
const update_todo =()=>{
    let update_btn = Array.from(document.getElementsByClassName('update-btn'));
    let old_title;
    let old_desc;
    for(const btn of update_btn){        
        btn.addEventListener('click',(event)=>{
             let update_title = document.getElementById('update_todo_title')
             let update_desc = document.getElementById('update_todo_desc')
             let modal_todo_title = document.getElementById('modal-todo-title')
             let title = event.target.parentElement.firstElementChild;
             let desc  = event.target.parentElement.firstElementChild.nextElementSibling;
             update_title.value = title.innerHTML;
             update_desc.value = desc.innerHTML;
             modal_todo_title.innerHTML = title.innerHTML;
        })
    };


    let update_todo = document.getElementById('update-todo');
    update_todo.addEventListener('click',()=>{
        let update_title = document.getElementById('update_todo_title').value;
        let update_desc = document.getElementById('update_todo_desc').value; 
        localStorage.setItem(update_title,update_desc)
        window.location.reload();
    }) 
}
update_todo();




// To delete All Todo's from localStorage 
let del_all_todo = document.getElementById('del_all_todo')
del_all_todo.addEventListener('click',()=>{    
      let del_todos = confirm("Yo're to sure to delete all todo's from website")
      if(del_todos){
           localStorage.clear();
           document.getElementById('show-todo').innerHTML = '';
      }
})



























// const buttons = Array.from(document.getElementsByClassName('del_btn'));

// console.log(typeof buttons)
// console.log(buttons)


// buttons.forEach((btn)=>{
//     btn.addEventListener('click', (event) => {
//                 const clickBtn = event.target;
//                 console.log(event)
//                 alert(clickBtn.innerHTML);
//             });
// })