import { TodoItem } from "../models/todoItem.js";
import type { TodoCategory, TodoContent } from "../types/todoTypes.js";
export declare class TodoList<T extends TodoContent> {
    private items;
    addItem(item: TodoItem<T>): void;
    deleteItem(id: number): boolean;
    listItems(): TodoItem<T>[];
    filterByCategory(category: TodoCategory): TodoItem<T>[];
}
//# sourceMappingURL=todoList.d.ts.map