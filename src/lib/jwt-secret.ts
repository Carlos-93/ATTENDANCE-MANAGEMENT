const JWT_SECRET: string | undefined = process.env.JWT_SECRET!

// Función donde se obtiene la clave secreta para firmar el token JWT
export function getJwtSecretKey(): string {
    if (!JWT_SECRET || JWT_SECRET.length === 0) {
        throw new Error('The environment variable JWT_SECRET is not set.')
    }
    return JWT_SECRET
}