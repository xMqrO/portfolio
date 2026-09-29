import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/lib/site';

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return NextResponse.json(
            { error: 'Email service is not configured' },
            { status: 503 }
        );
    }

    if (!site.email) {
        return NextResponse.json(
            { error: 'No delivery inbox is configured' },
            { status: 503 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's testing domain address
            to: [site.email],
            replyTo: email,
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Internal server error' },
            { status: 500 }
        );
    }
}
