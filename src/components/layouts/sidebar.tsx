import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-between fixed inset-y-0 left-0 w-72 bg-gray-800 text-white p-4 pb-10 overflow-y-auto gap-20">
            <div>
                <Image src="/assets/images/logo.png" alt="Logo Nexus Estudiantil" width={260} height={250} />
                <ul className="flex flex-col gap-3">
                    <div className="my-4">
                        <input type="search" placeholder="Buscar curso..." className="pl-4 p-2 w-full bg-gray-700 text-white rounded" id="search-course" name="search-course" />
                    </div>
                    <li>
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                                <path d="M3 6l0 13" /><path d="M12 6l0 13" />
                                <path d="M21 6l0 13" />
                            </svg>
                            ESO
                        </a>
                        <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    1º ESO
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    2º ESO
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    3º ESO
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    4º ESO
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-school">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                            </svg>
                            Bachillerato
                        </a>
                        <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    1º Bachillerato
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    2º Bachillerato
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="flex gap-2 p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-camera">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            </svg>
                            Marketing
                        </a>
                        <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                    1º Marketing-A
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                    1º Marketing-B
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                    2º Marketing-A
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
                                    2º Marketing-B
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                            Informática
                        </a>
                        <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    SMX
                                </a>
                                <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            1º SMX-A
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            1º SMX-B
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            2º SMX-A
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            2º SMX-B
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    ASIX
                                </a>
                                <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            1º ASIX
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            2º ASIX
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    DAM
                                </a>
                                <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            1º DAM
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            2º DAM
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    DAW
                                </a>
                                <ul className="ml-10 flex flex-col gap-2 mt-2 text-sm">
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            1º DAW
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            2º DAW-A
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                            2º DAW-B
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
                                    CETI
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div>
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
        </div>
    );
}