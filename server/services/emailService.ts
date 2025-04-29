import { MailService } from '@sendgrid/mail';
import { ContactFormData } from '@shared/types';

// Initialize SendGrid mail service
const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

export class EmailService {
  private fromEmail = 'tinodaishemchibi@gmail.com';
  private toEmail = 'tinodaishemchibi@gmail.com';

  async sendContactMessage(data: ContactFormData): Promise<boolean> {
    try {
      if (!process.env.SENDGRID_API_KEY) {
        console.error('SENDGRID_API_KEY not set');
        return false;
      }

      const { name, email, message } = data;

      // Create email content
      const emailData = {
        to: this.toEmail,
        from: this.fromEmail,
        subject: `Contact Form Submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
        html: `
<strong>New message from CS Experts Contact Form</strong><br><br>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Send email
      await mailService.send(emailData);
      return true;
    } catch (error) {
      console.error('SendGrid email error:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();