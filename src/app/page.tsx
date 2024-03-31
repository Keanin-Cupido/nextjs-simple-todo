import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "@/components/TodoItem";
import { revalidatePath } from "next/cache";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: {id}, data: {complete} });
}

async function deleteTodo(id: string) {
  "use server"

  await prisma.todo.delete({where: {id: id}});

  revalidatePath('/');
}

export default async function Home () {
  const todos = await getTodos();

  return (
    <>
      <header className="mb-4 bg-gray-950 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">Todos</h1>
          <Link href='/new' className="border-b-2 px-4 py-1 border-gray-100 transition-all hover:bg-gray-800 focus-within:bg-gray-800 outline-none">New</Link>
        </nav>
      </header>
      <ul className="container mx-auto flex flex-col justify-start items-start gap-2 w-full max-md:p-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </>
  )
}