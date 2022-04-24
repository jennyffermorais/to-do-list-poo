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

      // adiciona eventos às tasks
      this.addEvents();

      this.checkTasks('add');
   }

   removeTask(task) {
      //achar o elemento pai
      let parentEl = task.parentElement;

      // remover da lista
      parentEl.remove();

      this.checkTasks('remove');
   }

   completeTask(task) {
      // adicionar a classe de done
      task.classList.add('done');
   }

   addEvents() {
      let removeBtns = document.querySelectorAll('.fa-trash');
      let removeBtn = removeBtns[removeBtns.length - 1]; // pega o ultimo botao

      let doneBtns = document.querySelectorAll('.fa-check');
      let doneBtn = doneBtns[doneBtns.length - 1];

      // adicionar evento de remover
      removeBtn.addEventListener('click', () => {
         this.removeTask(removeBtn);
      });

      // adicionar evento de marcar como feito
      doneBtn.addEventListener('click', () => {
         this.completeTask(doneBtn);
      });
   }

   checkTasks(command) {
      let msg = document.querySelector('#empty-tasks');

      // lógica de adicionar ou remover tasks
      if (command === 'add') {
         this.totalTasks++;
      } else if (command === 'remove') {
         this.totalTasks--;
      }

      // verificar se existem tasks
      if (this.totalTasks == 1) {
         msg.classList.remove('hide');
      } else {
         msg.classList.add('hide');
      }
   }
}

let todo = new Todo();

// events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function (e) {
   e.preventDefault();
   let taskText = document.querySelector('#task');

   if (taskText.value != '') {
      todo.addTask(taskText.value);
   }

   // limpa campo de texto
   taskText.value = '';
});
