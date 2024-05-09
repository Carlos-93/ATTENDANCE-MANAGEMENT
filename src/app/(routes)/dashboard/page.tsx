import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";
import Dashboard from "@/components/layouts/dashboard";

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