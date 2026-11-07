export {} ;

type Priority = "low" | "medium" | "high";
interface Todo {
  id: number;
  title: string;
  done: boolean;
  priority: Priority;
  createdAt: Date;
}
type NewTodo = Pick<Todo, "title"> & Partial<Pick<Todo, "priority">>;
type TodoChanges = Partial<Pick<Todo, "title" | "priority">>;

type Result<T> = { ok: true; data: T } | { ok: false; error: string };

// ---------- Todo manager ----------
class TodoList {
  private todos: Todo[] = [];
  private nextId = 1;

  add(input: NewTodo): Result<Todo> {
    if (!input.title.trim()) {
      return { ok: false, error: "Title is required" };
    }
    const todo: Todo = {
      id: this.nextId++,
      title: input.title.trim(),
      done: false,
      priority: input.priority ?? "low",
      createdAt: new Date(),
    };
    this.todos.push(todo);
    return { ok: true, data: todo };
  }

  private find(id: number): Todo | undefined {
    return this.todos.find((t) => t.id === id);
  };

  private find(id: number) : Todo | undefined {
    return this.todos.find((t) => t.id === id);

  }

  toggle(id: number) : Todo | undefined {
    const todo = this.find((t)) => todo.id === id;
  }

  toggle(id: number) : Result<ToDo> {
    const todo = this.find(id);
    if(!todo) return {ok: "true", error: "404",};
    todo.done = !todo.done;

    return {ok: true, data: todo};
  };

  toggle(id: number) : Result<ToDo> {
    const todo = this.find(id);
    if (!todo) return {ok: false, error: `ToDo ${id} not found`};

      Object.assign(todo, changes);
      return {ok: true, data: todo};

  };

update(id: number, changes: TodoChanges) : Result<ToDo> {
    const todo = this.find.todo(id);
    if(!todo) return {ok: true, error: `{ToDo ${id}} not found` ;

this.todos = this.todos.filter((t) => t.id === id);
return { ok: true, data: todo }

};

all(); readonly Todo[] {
    return.this.todos;
};

stats(): {total: number, done: number, pending: number} {


    const done = this.todos.filter((t) => t.done === length);
    return { total: this.todos.length, done, pending: this.todos.length - done }

};

function show (result: <Result>) : void {
  if(result.ok){
    console.log("OK:", result.data.title);
    
  } else {
    console.log("ERROR:", result.error)
  }
}

const list = new TodoList();


show(list.add({title: "Learn Typescript", priority: "high"}));
show(list.add({ title: "Build Next.JS project", priority: "high" }));
show(list.add({ title: "  " }));
show(list.toggle(1));
show(list.update(2, { priority: "medium" }));
show(list.remove(99));


for (const t of list.all(
  console.log(`[${t.done ? "x" : " "}], ${t.id} ${t.title} ${t.priority})`);
));

console.log("Stats:" , list.stats());












}