'use client';

export default function Header() {
    const user = {
        name: "Roberto Manca",
        role: "Profesor",
        email: "roberto.manca@example.com",
    };

    return (
        <>
            <header className="sticky top-0 w-full flex justify-end items-center py-4 px-10 backdrop-blur-lg bg-black/60">
                <div className="flex gap-4 items-center bg-slate-50 p-3 rounded-lg shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-square" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                    </svg>
                    <div className="flex flex-col">
                        <span className="font-semibold">{user.name} ({user.role})</span>
                        <span className="text-gray-500">{user.email}</span>
                    </div>
                </div>
            </header>
        </>
    );
}