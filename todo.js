const loadTodo = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};
const displayTodo = (todos) => {
  // get id
  const todoContainer = document.getElementById('todo-container');
  todoContainer.innerHTML = '';
  //   loop
  //   {
  //     "userId": 10,
  //     "id": 199,
  //     "title": "numquam repellendus a magnam",
  //     "completed": true
  // }
  todos.forEach((todo) => {
    // creat card
    const todoCard = document.createElement('div');
    todoCard.innerHTML = `
    <div class='todo-card'>
    <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : ` <i class="fa-regular fa-square-check"></i>`}</p>
    <h4>${todo.title}</h4>
    </div>
    `;
    todoContainer.append(todoCard);
  });
};
loadTodo();
