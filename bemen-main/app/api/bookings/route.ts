import { NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabaseClient';

// POST /api/bookings
// Handles new booking creation with validation and triggers
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, date, service } = data;
    // Basic validation
    if (!name || !email || !phone || !date || !service) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 },
      );
    }
    // Insert booking
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert([{ name, email, phone, date, service }])
      .select()
      .single();
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Trigger Edge Function for notifications (email/webhook)
    await fetch(
      `${
        process.env.NEXT_PUBLIC_SITE_URL || ''
      }/supabase/functions/booking-trigger`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking),
      },
    );
    return NextResponse.json({ success: true, booking });
  } catch (err) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
