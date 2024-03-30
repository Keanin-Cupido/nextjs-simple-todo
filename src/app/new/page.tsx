import Link from "next/link";

export default function Page(){
    return (
        <>
          <header className="flex justify-between items-center mb-4">
            <h1 className="text-2xl">New Todo</h1>
          </header>
          <form className="flex gap-2 flex-col">
            <input type="text" name="title" className="border border-green-300 bg-transparent px-2 py-1 outline-none focus-within:border-green-100" />
            <div className="flex gap-1 justify-end">
                <Link href=".." className="border border-green-300 bg-transparent px-2 py-1 outline-none hover:bg-green-900 focus-within:border-green-100">Cancel</Link>
                <button type="submit" className="border border-green-300 bg-transparent px-2 py-1 outline-none hover:bg-green-900 focus-within:border-green-100">Create</button>
            </div>
          </form>
        </>
      )
}