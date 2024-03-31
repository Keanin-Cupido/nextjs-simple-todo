"use client";

type ConfirmationModalProps = {
    id: string
    openModalConfirm: (modalConfirm: boolean) => void
    deleteTodo: (id: string) => void
}

export function ConfirmationModal({id, openModalConfirm, deleteTodo}: ConfirmationModalProps) {
    return (
        <>
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur-3xl flex justify-center items-center">
                <div className="text-white m-auto p-8 py-12 rounded-lg">
                    <div className="flex flex-col items-center gap-1">
                        <h3 className="text-lg font-bold">Delete Todo Confirmation</h3>
                        <p className="text-gray-300 text-sm">Are you sure you want to delete this todo?</p>
                        <br/>
                        <div className="flex gap-4 justify-center content-center">
                            <button type="button" onClick={e => deleteTodo(id)} className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-md">Delete</button>
                            <button type="button" onClick={e => openModalConfirm(false)} className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-md">Cancel</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
        );
}