import { NextResponse } from 'next/server';
import { addSubscriber } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const result = addSubscriber(email);
    
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error', count: 0 },
      { status: 500 }
    );
  }
}
