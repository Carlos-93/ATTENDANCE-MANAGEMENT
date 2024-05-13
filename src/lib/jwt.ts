import { SignJWT, jwtVerify, type JWTPayload, type JWTHeaderParameters } from "jose";

// Obtener la clave secreta de las variables de entorno
const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

// Función para obtener la clave secreta de JWT de forma segura
export function getJwtSecretKey(): Uint8Array {
    if (!JWT_SECRET || JWT_SECRET.length === 0) {
        throw new Error('The environment variable JWT_SECRET is not set or empty.');
    }
    return new TextEncoder().encode(JWT_SECRET);
}

// Función para generar un token de acceso
export async function generateAccessToken(userId: number): Promise<string> {
    return new SignJWT({ userId })
        .setProtectedHeader({ alg: 'HS256' } as JWTHeaderParameters)
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(getJwtSecretKey());
}

// Función para verificar la validez de un token
export async function verifyToken(token: string): Promise<boolean> {
    if (!token) {
        return false;
    }
    try {
        await jwtVerify(token, getJwtSecretKey());
        return true;
    } catch (error) {
        return false;
    }
}

// Función para decodificar un token
export async function decodeToken(token: string): Promise<JWTPayload | false> {
    try {
        const result = await jwtVerify(token, getJwtSecretKey());
        return result.payload;
    } catch (error) {
        return false;
    }
}