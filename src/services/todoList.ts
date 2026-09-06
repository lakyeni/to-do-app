import { LogAdd } from "../decorators/logger.js";
import { TodoItem } from "../models/todoItem.js";
import { isDatedTodo } from "../types/todoTypes.js";

import type {
    TodoCategory,
    TodoContent
} from "../types/todoTypes.js";

export class TodoList<T extends TodoContent> {
  private items: Map<number, TodoItem<T>> = new Map();

  @LogAdd
  addItem(item: TodoItem<T>): void {
    this.items.set(item.id, item);
  }

  deleteItem(id: number): boolean {
    return this.items.delete(id);
  }

  listItems(): TodoItem<T>[] {
    return Array.from(this.items.values());
  }

  filterByCategory(category: TodoCategory): TodoItem<T>[] {
    return this.listItems().filter((item) => {
      if (isDatedTodo(item.content)) {
        return item.content.category === category;
      }

      return false;
    });
  }
}