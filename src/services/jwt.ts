import { getJwtSecretKey } from "@/lib/jwt-secret";
import { SignJWT, decodeJwt, jwtVerify } from "jose";

export async function generateAccessToken(user: { id: number }) {
    // Función donde se genera el token de acceso con una duración de 30 minutos
    return await new SignJWT({ userId: user.id })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30m')
        .sign(new TextEncoder().encode(getJwtSecretKey()))
}

export async function verifyToken(token: string) {
    // Función donde se verifica si el token de acceso es válido o no
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

export async function decodeToken(token: string) {
    // Función donde se decodifica el token de acceso
    const isValid = await verifyToken(token);

    if (!isValid) return false;

    return decodeJwt(token);
}