'use server';

// Importa PrismaClient desde el archivo generado por Prisma
import { PrismaClient } from '@prisma/client'

// Crea una instancia de PrismaClient
const prisma = new PrismaClient()

// Define una función asincrónica para verificar el correo electrónico y la contraseña del usuario
async function verificarCredenciales(email: string, password: string): Promise<any> {
  try {
    // Busca un usuario en la base de datos que tenga el correo electrónico proporcionado
    const usuario = await prisma.mdl_user.findUnique({
      where: {
        email: email
      }
    })

    // Verifica si se encontró un usuario con el correo electrónico proporcionado
    if (!usuario) {
      throw Error('El correo electrónico proporcionado no está registrado.')
    }

    // Verifica si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos
    if (usuario.password !== password) {
      throw new Error('La contraseña proporcionada es incorrecta.')
    }

    // Si las credenciales son correctas, retorna el usuario
    return usuario
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir durante la verificación de credenciales
    console.error('Error al verificar las credenciales:', error)
    throw error
  } finally {
    // Cierra la conexión de Prisma
    await prisma.$disconnect()
  }
}

// Exporta la función verificarCredenciales
export default verificarCredenciales