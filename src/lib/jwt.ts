import { SignJWT, decodeJwt, jwtVerify, type JWTPayload, type JWTHeaderParameters } from "jose";

// Mejor manejo de tipos y prácticas de seguridad
const jwtSecret: string = process.env.JWT_SECRET || 'default_secret_key'; // Utiliza variable de entorno

export function getJwtSecret(): Uint8Array {
    return new TextEncoder().encode(jwtSecret);
}

export async function generateAccessToken(userId: string): Promise<string> {
    return new SignJWT({ userId })
        .setProtectedHeader({ alg: 'HS256' } as JWTHeaderParameters)
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(getJwtSecret());
}

export async function verifyToken(token: string): Promise<boolean> {
    if (!token) return false;

    try {
        await jwtVerify(token, getJwtSecret());
        return true;
    } catch (error) {
        console.error("Error verifying JWT:", error);
        return false;
    }
}

export async function decodeToken(token: string): Promise<JWTPayload | false> {
    const isValid = await verifyToken(token);
    if (!isValid) return false;
    return decodeJwt(token);
}