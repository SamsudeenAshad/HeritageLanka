import { NextResponse } from 'next/server';
import { getSubscriberCount } from '@/lib/storage';

export async function GET() {
  const count = getSubscriberCount();
  return NextResponse.json({ count });
}
