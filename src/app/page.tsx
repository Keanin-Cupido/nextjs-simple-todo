import { prisma } from "@/db";
import Link from "next/link";
import { TodoItem } from "@/components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: {id}, data: {complete} });

}

export default async function Home () {
  const todos = await getTodos();
  // await prisma.todo.create({data: {title: "Test Todo", complete: false}});

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link href='/new' className="border-b-2 px-4 py-1 border-green-100 transition-all hover:bg-green-800 focus-within:bg-green-800 outline-none">New</Link>
      </header>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}