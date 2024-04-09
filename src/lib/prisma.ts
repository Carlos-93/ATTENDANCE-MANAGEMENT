import { PrismaClient } from '@prisma/client';

// Declaramos la variable prisma que será utilizada para almacenar la instancia de PrismaClient
let prisma: PrismaClient;

// Chequeamos el entorno en el que se está ejecutando la aplicación
if (process.env.NODE_ENV === 'production') {
    // En producción, creamos una nueva instancia de PrismaClient
    prisma = new PrismaClient();
} else {
    // En desarrollo, verificamos si ya existe una instancia de PrismaClient en la variable global
    if (!(global as any).prisma) {
        // Si no existe, creamos una nueva instancia y la asigna a la variable global
        (global as any).prisma = new PrismaClient();
    }
    // Asignamos la instancia global de PrismaClient a la variable prisma para ser reutilizada
    prisma = (global as any).prisma;
}
export default prisma;