import { TodoItem } from "./models/todoItem.js";
import { TodoList } from "./services/todoList.js";
import type { TodoContent } from "./types/todoTypes.js";


const todoList = new TodoList<TodoContent>();

const todo1 = new TodoItem<string>(
  1,
  "Tanulj TypeScriptet"
);

const todo2 = new TodoItem<TodoContent>(
  2,
  {
    message: "Csináld meg a házit!",
    dueDate: new Date("2026-09-10"),
    category: "tanulás"
  }
);

const todo3 = new TodoItem<TodoContent>(
  3,
  {
    message: "Vásárlás",
    dueDate: new Date("2026-09-08"),
    category: "személyes"
  }
);

todoList.addItem(todo1);
todoList.addItem(todo2);
todoList.addItem(todo3);

console.log("Összes Todo:");
console.log(todoList.listItems());

console.log("2-es Todo törlése:");
todoList.deleteItem(2);

console.log(todoList.listItems());

console.log("Személyes kategória:");
console.log(todoList.filterByCategory("személyes"));
