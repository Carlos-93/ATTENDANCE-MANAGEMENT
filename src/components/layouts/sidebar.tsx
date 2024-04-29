import React, { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
    const [isESOSubmenuVisible, setESOSubmenuVisible] = useState(false);

    const toggleESOSubmenu = () => {
        setESOSubmenuVisible(prevState => !prevState);
    };

    return (
        <div className="flex flex-col justify-between fixed inset-y-0 left-0 w-72 bg-gray-800 text-white p-4 pb-10">
            <div>
                <Image src="/assets/images/logo.png" alt="Logo Nexus Estudiantil" width={260} height={250} />
                <ul className="flex flex-col gap-3">
                    <div className="my-4">
                        <input type="search" placeholder="Buscar curso..." className="pl-4 p-2 w-full bg-gray-700 text-white rounded" />
                    </div>
                    <li>
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                            Inicio
                        </a>
                    </li>
                    <li onClick={toggleESOSubmenu}>
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                            ESO
                        </a>
                        {isESOSubmenuVisible && (
                            <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                                <li>
                                    <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">1º ESO</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">2º ESO</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">3º ESO</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">4º ESO</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 hover:transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                            Bachillerato
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 hover:transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                            Marketing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 hover:transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                            Informática
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="flex flex-col gap-3">
                <li>
                    <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                        Ajustes
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                        Cerrar Sesión
                    </a>
                </li>
            </ul>
        </div>
    );
}