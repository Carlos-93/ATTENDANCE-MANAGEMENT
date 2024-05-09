import { SignJWT, decodeJwt, jwtVerify } from "jose";


export function getJwtSecret() {
    return 'dfasdohidasohidasohidasds';
}

export async function generateAccessToken(userId: any) {
    return await new SignJWT({
        userId
    })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(new TextEncoder().encode(getJwtSecret()))
}

export async function verifyToken(token: any) {
    if (!token) return false;

    try {
        await jwtVerify(token, new TextEncoder().encode(getJwtSecret()));

        return true;
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            return false;
        }
        return false;
    }
}

export async function decodeToken(token: any) {
    const isValid = await verifyToken(token);

    if (!isValid) return false;

    return decodeJwt(token)
}