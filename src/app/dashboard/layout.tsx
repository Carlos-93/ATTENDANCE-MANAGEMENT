
import { getUserSession } from "@/lib/data";
import { redirect } from "next/navigation";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const user = await getUserSession();

    if (!user) { return redirect('/'); }

    return (
        <div>
            <Header />
            <Sidebar />
            <main className="overflow-hidden">
                {children}
            </main>
        </div>
    );
}