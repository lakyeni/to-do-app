export type TodoCategory = "munka" | "tanulás" | "személyes";
export type DatedTodoContent = {
    message: string;
    dueDate: Date;
    category: TodoCategory;
};
export type TodoContent = string | DatedTodoContent;
export declare function isDatedTodo(content: TodoContent): content is DatedTodoContent;
//# sourceMappingURL=todoTypes.d.ts.map