import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
    "use server"

    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
        throw new Error("Invalid Title");
    }

    await prisma.todo.create({data: {title, complete: false}});

    redirect("/");
}

export default function Page(){
    return (
        <>
          <header className="container mx-auto flex justify-between items-center mb-4 pt-4">
            <h1 className="text-2xl">New Todo</h1>
          </header>
          <form action={createTodo} className="container mx-auto flex gap-2 flex-col">
            <input type="text" name="title" className="border border-gray-300 bg-transparent px-2 py-1 outline-none focus-within:border-gray-100" />
            <div className="flex gap-1 justify-end">
                <Link href=".." className="border border-gray-300 bg-transparent px-2 py-1 outline-none hover:bg-gray-900 focus-within:border-gray-100">Cancel</Link>
                <button type="submit" className="border border-gray-300 bg-transparent px-2 py-1 outline-none hover:bg-gray-900 focus-within:border-gray-100">Create</button>
            </div>
          </form>
        </>
      )
}