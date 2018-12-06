import todoListPage from "./templates/todo-list-page.html";
import "./components/todo-list";

document.body.innerHTML = todoListPage;
const h2 = document.getElementsByTagName('h2')[0];
h2.innerHTML = '';


