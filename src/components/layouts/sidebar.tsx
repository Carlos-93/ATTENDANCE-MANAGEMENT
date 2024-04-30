import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-between fixed inset-y-0 left-0 w-72 bg-gray-800 text-white p-4 pb-10 overflow-y-auto gap-20">
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
                    <li>
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
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
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duración-300 rounded hover:translate-x-2">
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
                        <a href="#" className="block p-2 pl-4 bg-gray-700 hover:bg-gray-900 hover:text-teal-500 transition-all ease-in-out duration-300 rounded hover:translate-x-2">
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