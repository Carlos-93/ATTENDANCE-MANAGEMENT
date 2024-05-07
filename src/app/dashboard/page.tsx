import Dashboard from "@/components/layouts/dashboard";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export function generateMetadata(): Metadata {
    return {
        title: `${APP_NAME} - Panel de Control`,
    };
};

export default function Page() {
    return (
        <Dashboard />
    );
}