import { SignJWT, jwtVerify, type JWTPayload, type JWTHeaderParameters } from "jose";

const JWT_SECRET: string | undefined = process.env.JWT_SECRET;

// Función donde se obtiene la clave secreta para firmar el token
export function getJwtSecretKey(): Uint8Array {
    if (!JWT_SECRET || JWT_SECRET.length === 0) {
        throw new Error('The environment variable JWT_SECRET is not set or empty.');
    }
    return new TextEncoder().encode(JWT_SECRET);
}

// Función donde se genera el token de acceso con la información del usuario
export async function generateAccessToken(user: { id: number, firstname: string, email: string, role: string }): Promise<string> {
    return new SignJWT({ userId: user.id, firstname: user.firstname, email: user.email, role: user.role })
        .setProtectedHeader({ alg: 'HS256' } as JWTHeaderParameters)
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(getJwtSecretKey());
}

// Función donde se verifica si el token es válido
export async function verifyToken(token: string): Promise<boolean> {
    if (!token) {
        return false;
    }
    try {
        await jwtVerify(token, getJwtSecretKey());
        return true;
    } catch {
        return false;
    }
}

// Función donde se decodifica el token y se obtiene la información del usuario
export async function decodeToken(token: string): Promise<JWTPayload | false> {
    try {
        const result = await jwtVerify(token, getJwtSecretKey());
        return result.payload;
    } catch {
        return false;
    }
}