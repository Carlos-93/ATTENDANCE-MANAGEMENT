
import { getUserSession } from "@/app/api/auth/login/route";
import Header from "@/components/ui/header";
import { redirect } from "next/navigation";

export default async function Layout({
    children
}) {
    const user = await getUserSession();

    if (!user) {
        return redirect('/');
    }

    return <main className="overflow-hidden">
        <Header user={user} />

        {children}
    </main>
}