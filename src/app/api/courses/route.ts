import { NextRequest, NextResponse } from 'next/server';
import { getCourses } from '@/lib/data';

export async function GET(req: NextRequest) {
  const course = await getCourses();
  if (course) {
    return NextResponse.json(course);
  } else {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }
}