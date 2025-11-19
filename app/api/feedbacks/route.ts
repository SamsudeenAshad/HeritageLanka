import { NextResponse } from 'next/server';
import { getFeedbacks } from '@/lib/storage';

export async function GET() {
  const feedbacks = getFeedbacks();
  return NextResponse.json({ feedbacks });
}
