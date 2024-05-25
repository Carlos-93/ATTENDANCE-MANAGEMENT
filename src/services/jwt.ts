import { getJwtSecretKey } from "@/lib/jwt-secret";
import { SignJWT, decodeJwt, jwtVerify } from "jose";

// Función donde se genera el token de acceso con una duración de 30 minutos
export async function generateAccessToken(user: { id: number }) {
    return await new SignJWT({ userId: user.id })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30m')
        .sign(new TextEncoder().encode(getJwtSecretKey()))
}

// Función donde se verifica si el token de acceso es válido o no
export async function verifyToken(token: string) {
    if (!token) return false;

    try {
        await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
        return true;
    }
    catch (error) {
        if ((error as Error).name === 'TokenExpiredError') {
            return false;
        }
        return false;
    }
}

// Función donde se decodifica el token de acceso
export async function decodeToken(token: string) {
    const isValid = await verifyToken(token);

    if (!isValid) return false;

    return decodeJwt(token);
}