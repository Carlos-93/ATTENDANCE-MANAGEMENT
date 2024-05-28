import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";
import Dashboard from "@/components/layouts/dashboard";

export function generateMetadata(): Metadata {
    return {
        title: `${APP_NAME} - Inicio`,
    };
};

export default function Page() {
    return (
        <Dashboard />
    );
}