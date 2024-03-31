"use client";

import { prisma } from "@/db";

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

export function TodoItem({id, title, complete, toggleTodo, deleteTodo}: TodoItemProps ) {
    return (
        <li className="flex gap-3 items-center justify-between bg-gray-800 rounded-md p-4 w-full">
            <div className="flex gap-3 items-centerw-full">
                <input id={id} type="checkbox" className="cursor-pointer peer" 
                    defaultChecked={complete} 
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <label htmlFor={id} className="cursor-pointer peer-checked:line-through text-base peer-checked:text-gray-700">{title}</label>
            </div>

            <button type="button" onClick={e => deleteTodo(id)} className="text-red-500 text-md outline-none">Delete</button>
        </li>
    )
}