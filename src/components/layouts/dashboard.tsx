'use client';

import Sidebar from "../ui/sidebar";
import Header from "../ui/header";

export default function Dashboard() {
    return (
        <>

            <div className="flex">
                <Sidebar />
                <main className="flex flex-col p-10 flex-grow">

                    {/* Contenido del Dashboard */}

                </main>
            </div>
        </>
    );
}