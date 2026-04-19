import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  console.log('📧 [EMAIL API] Request received at:', new Date().toISOString())
  
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body
    
    console.log('📝 [EMAIL API] Form data received:', {
      name,
      email,
      phone: phone || 'Not provided',
      service: service || 'Not specified',
      messageLength: message?.length || 0
    })

    console.log('🔧 [EMAIL API] Configuring SMTP transporter...')
    console.log('📮 [EMAIL API] SMTP User:', process.env.SMTP_USER)
    console.log('📮 [EMAIL API] SMTP To:', process.env.SMTP_TO)
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    console.log('✅ [EMAIL API] Transporter configured successfully')

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      subject: `🔔 New Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 5px; border-left: 3px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Inquiry Received!</h1>
              <p>Someone is interested in your services</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ` : ''}
              
              ${service ? `
              <div class="field">
                <div class="label">🛠️ Service Needed:</div>
                <div class="value">${service}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message}</div>
              </div>
              
              <div class="footer">
                <p>This inquiry was submitted through the PRNexGen contact form</p>
                <p>Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    console.log('📤 [EMAIL API] Sending email...')
    const info = await transporter.sendMail(mailOptions)
    
    console.log('✅ [EMAIL API] Email sent successfully!')
    console.log('📬 [EMAIL API] Message ID:', info.messageId)
    console.log('📊 [EMAIL API] Response:', info.response)

    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: info.messageId 
    })
  } catch (error) {
    console.error('❌ [EMAIL API] Error occurred:')
    console.error('❌ [EMAIL API] Error name:', error instanceof Error ? error.name : 'Unknown')
    console.error('❌ [EMAIL API] Error message:', error instanceof Error ? error.message : error)
    console.error('❌ [EMAIL API] Full error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to send email",
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
