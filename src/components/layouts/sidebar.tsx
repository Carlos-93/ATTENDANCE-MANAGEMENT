import Image from "next/image";
import { useState } from "react";

// Interfaz para controlar el estado de los submenús
interface SubMenuState {
    eso: boolean;
    bachillerato: boolean;
    marketing: boolean;
    informatica: boolean;
    smx: boolean;
    asix: boolean;
    dam: boolean;
    daw: boolean;
    ceti: boolean;
}

export default function Sidebar() {

    // Estado para controlar la apertura de los submenús
    const [isOpen, setIsOpen] = useState<SubMenuState>({
        eso: false,
        bachillerato: false,
        marketing: false,
        informatica: false,
        smx: false,
        asix: false,
        dam: false,
        daw: false,
        ceti: false,
    })

    // Función para manejar el estado de los submenús
    const handleToggle = (menu: keyof SubMenuState) => {
        setIsOpen({ ...isOpen, [menu]: !isOpen[menu] });
    };

    return (
        <div className="flex flex-col justify-between fixed inset-y-0 left-0 w-72 bg-gray-800 text-white p-4 pb-10 overflow-y-auto gap-20">
            <div>
                <Image src="/assets/images/logo.png" alt="Logo Nexus Estudiantil" width={260} height={250} />
                <ul className="flex flex-col gap-3">

                    <input type="search" placeholder="Buscar curso..." className="pl-4 p-2 w-full bg-gray-700 text-white rounded my-4" id="search-course" name="search-course" />

                    <li>
                        <a href="#" className="flex items-center gap-2 p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                            <span>Inicio</span>
                        </a>
                    </li>

                    <li>
                        <ul onClick={() => handleToggle('eso')} data-toggle="subMenu" className="flex items-center justify-between p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                    <path d="M13.5 6.5l4 4" />
                                </svg>
                                <span>ESO</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon transform duration-300 icon-tabler icon-tabler-chevron-down ${isOpen['eso'] ? 'transform rotate-180' : ''}`}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </ul>
                        {isOpen['eso'] && (
                            <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                        1º ESO
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                        2º ESO
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                        3º ESO
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                        4º ESO
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <ul onClick={() => handleToggle('bachillerato')} data-toggle="subMenu" className="flex items-center justify-between p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-book">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                    <path d="M3 6l0 13" /><path d="M12 6l0 13" />
                                    <path d="M21 6l0 13" />
                                </svg>
                                <span>Bachillerato</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon transform duration-300 icon-tabler icon-tabler-chevron-down ${isOpen['bachillerato'] ? 'transform rotate-180' : ''}`}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </ul>
                        {isOpen['bachillerato'] && (
                            <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                                        1º Bachillerato
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                                        2º Bachillerato
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <ul onClick={() => handleToggle('marketing')} data-toggle="subMenu" className="flex items-center justify-between p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-camera">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                    <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                </svg>
                                <span>Marketing</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon transform duration-300 icon-tabler icon-tabler-chevron-down ${isOpen['marketing'] ? 'transform rotate-180' : ''}`}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </ul>
                        {isOpen['marketing'] && (
                            <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                        1º Marketing-A
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                        1º Marketing-B
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                        2º Marketing-A
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                        2º Marketing-B
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <ul onClick={() => handleToggle('informatica')} data-toggle="subMenu" className="flex items-center justify-between p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
                                    <path d="M7 20h10" />
                                    <path d="M9 16v4" />
                                    <path d="M15 16v4" />
                                </svg>
                                <span>Informatica</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon transform duration-300 icon-tabler icon-tabler-chevron-down ${isOpen['informatica'] ? 'transform rotate-180' : ''}`}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </ul>
                        {isOpen['informatica'] && (
                            <ul className="ml-10 flex flex-col mt-3 text-sm">
                                <ul onClick={() => handleToggle('smx')} data-toggle="subMenu" className="flex items-center justify-between p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 19l18 0" />
                                            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                        </svg>
                                        <span>SMX</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon transform duration-300 icon-tabler icon-tabler-chevron-down ${isOpen['smx'] ? 'transform rotate-180' : ''}`}>
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </ul>
                                {isOpen['smx'] && (
                                    <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                1º SMX-A
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                1º SMX-B
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                2º SMX-A
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                2º SMX-B
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <ul onClick={() => handleToggle('asix')} data-toggle="subMenu" className="flex items-center justify-between p-2 pl-4 mt-3 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 19l18 0" />
                                            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                        </svg>
                                        <span>ASIX</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon transform duration-300 icon-tabler icon-tabler-chevron-down ${isOpen['asix'] ? 'transform rotate-180' : ''}`}>
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </ul>
                                {isOpen['asix'] && (
                                    <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                1º ASIX
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                2º ASIX
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <ul onClick={() => handleToggle('dam')} data-toggle="subMenu" className="flex items-center justify-between p-2 pl-4 mt-3 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 19l18 0" />
                                            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                        </svg>
                                        <span>DAM</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon transform duration-300 icon-tabler icon-tabler-chevron-down ${isOpen['dam'] ? 'transform rotate-180' : ''}`}>
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </ul>
                                {isOpen['dam'] && (
                                    <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                1º DAM
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                2º DAM
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <ul onClick={() => handleToggle('daw')} data-toggle="subMenu" className="flex items-center justify-between p-2 pl-4 mt-3 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 19l18 0" />
                                            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                        </svg>
                                        <span>DAW</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon transform duration-300 icon-tabler icon-tabler-chevron-down ${isOpen['daw'] ? 'transform rotate-180' : ''}`}>
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </ul>
                                {isOpen['daw'] && (
                                    <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                1º DAW
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                2º DAW-A
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                                2º DAW-B
                                            </a>
                                        </li>
                                    </ul>
                                )}
                                <ul className="flex items-center justify-between p-2 pl-4 mt-3 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M3 19l18 0" />
                                            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
                                        </svg>
                                        <span>CETI</span>
                                    </div>
                                </ul>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>

            <div>
                <ul className="flex flex-col gap-3">
                    <li>
                        <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                            Ajustes
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2 cursor-pointer">
                            Cerrar Sesión
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}