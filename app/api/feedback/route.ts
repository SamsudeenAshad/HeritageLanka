import { NextResponse } from 'next/server';
import { addFeedback } from '@/lib/storage';

export async function POST(request: Request) {
  try {
    const feedback = await request.json();
    const result = addFeedback(feedback);
    
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
