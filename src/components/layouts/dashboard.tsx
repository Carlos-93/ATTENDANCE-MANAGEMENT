'use client'

import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";

export default function Dashboard() {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="flex flex-col p-10">
                <div className="ml-72 px-8 py-12 bg-gray-200 shadow-xl rounded-lg">
                    <h1 className="text-4xl font-bold mb-4 text-center">Bienvenido al Dashboard</h1>
                    <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor sed felis euismod vehicula a in erat. Nam bibendum orci quis magna volutpat, vel auctor elit consectetur.</p>
                </div>
            </div>
        </>
    );
}