import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Parse Google Service Account credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}')
    
    if (!credentials.client_email || !credentials.private_key) {
      console.error('Missing Google Service Account credentials')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Append data to Google Sheets
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const timestamp = new Date().toISOString()
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, subject, message]],
      },
    })

    // Send email notification to info@janicewee.com
    // Using a simple fetch to a notification service or email API
    // For now, we'll log it (you can integrate with SendGrid, Resend, etc.)
    console.log('New contact form submission:', {
      timestamp,
      name,
      email,
      subject,
      message,
    })

    // Optional: Send email notification
    // You can integrate with services like Resend, SendGrid, or Nodemailer
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'noreply@janicewee.com',
          to: 'info@janicewee.com',
          subject: `New Contact Form: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p><em>Submitted at: ${timestamp}</em></p>
          `,
        }),
      })
    } catch (emailError) {
      console.warn('Email notification failed:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
}