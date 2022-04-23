class Todo {
   constructor() {
      this.totalTasks = document.querySelectorAll('.task').length;
   }

   addTask(taskText) {
      // clonar o template
      let template = document.querySelector('.task').cloneNode(true);

      // remove classe hide
      template.classList.remove('hide');

      // mamipular texto
      let templateText = template.querySelector('.task-title');
      templateText.textContent = taskText;

      let list = document.querySelector('#tasks-container');

      // adicionar a lista
      list.appendChild(template);
   }
}

let todo = new Todo();

// events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function (e) {
   e.preventDefault();
   let taskText = document.querySelector('#task').value;

   if (taskText != '') {
      todo.addTask(taskText);
   }

   // limpa campo de texto
   document.querySelector('#task').value = '';
});
