'use client'

import Sidebar from "./sidebar";
import Header from "../header/header";

export default function Dashboard() {
    return (
        <div className="bg-app flex flex-col items-center justify-center min-h-screen">
            <Header />
            <Sidebar />
            <div className="max-w-4xl px-8 py-12 bg-gray-100 shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold mb-4 text-center">Bienvenido al Dashboard</h1>
                <p className="text-lg text-gray-700 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor sed felis euismod vehicula a in erat. Nam bibendum orci quis magna volutpat, vel auctor elit consectetur.</p>
            </div>
        </div>
    );
}