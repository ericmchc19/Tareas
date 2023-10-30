const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function addTask() {
  rl.question('Descripción de la tarea: ', (description) => {
    tasks.push({ description, completed: false });
    console.log('Tarea añadida.');
    showMenu();
  });
}

function deleteTask() {
  showTasks();
  rl.question('Número de tarea a eliminar: ', (index) => {
    if (index >= 1 && index <= tasks.length) {
      tasks.splice(index - 1, 1);
      console.log('Tarea eliminada.');
    } else {
      console.log('Número de tarea no válido.');
    }
    showMenu();
  });
}

function completeTask() {
  showTasks();
  rl.question('Número de tarea completada: ', (index) => {
    if (index >= 1 && index <= tasks.length) {
      tasks[index - 1].completed = true;
      console.log('Tarea marcada como completada.');
    } else {
      console.log('Número de tarea no válido.');
    }
    showMenu();
  });
}

function showTasks() {
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`${index + 1}. [${status}] ${task.description}`);
  });
}

function showMenu() {
  console.log('\nOpciones:');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Salir');

  rl.question('Selecciona una opción: ', (choice) => {
    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        showMenu();
    }
  });
}

showMenu();


