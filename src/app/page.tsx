import Form from "@/app/api/auth/login/form";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export function generateMetadata(): Metadata {
  return {
    title: `${APP_NAME} - Iniciar Sesión`,
  };
};

export default function Page() {
  return (
    <Form />
  );
}