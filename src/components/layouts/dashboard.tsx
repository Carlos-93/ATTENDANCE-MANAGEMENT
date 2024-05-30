'use client';

import Courses from "../ui/courses";
import Logs from "../ui/logs";

export default function Dashboard() {

    return (
        <main className="flex flex-col p-6 md:p-10 lg:p-16 2xl:p-24 h-full justify-start items-start md:ml-72">
            <Courses />
            <div className="w-full h-0.5 bg-teal-400 my-14"></div>
            <Logs />
        </main>
    );
}