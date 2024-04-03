export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return <main>
        Volver atrás
        {children}
    </main>
}