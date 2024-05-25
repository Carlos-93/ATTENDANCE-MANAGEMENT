import { NextRequest, NextResponse } from 'next/server';
import { getUsersLogs } from '@/lib/data';

export async function GET(req: NextRequest) {
    const user = await getUsersLogs();
    if (user) {
        return NextResponse.json(user);
    } else {
        return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }
}