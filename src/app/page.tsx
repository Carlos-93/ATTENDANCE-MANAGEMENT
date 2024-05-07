import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";
import Login from "@/components/auth/login/form";

export function generateMetadata(): Metadata {
    return {
        title: `${APP_NAME} - Iniciar Sesión`,
    };
};

export default function Page() {
    return (
        <Login />
    );
}