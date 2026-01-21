import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_CONFIG = {
  from: 'Fullstack <noreply@email.joinfullstack.com>',
  recipients: [
    'info@joinfullstack.com',
    'support@joinfullstack.com',
    'drake.eckholdt@joinfullstack.com',
  ],
} as const;

// Validation schema matching the frontend
const partnerSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(2).max(100),
  partnerType: z.enum(['agency', 'referral', 'strategic']),
  companySize: z.string().min(1),
  currentServices: z.string().trim().max(500).optional(),
  message: z.string().trim().min(20).max(2000),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validationResult = partnerSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validationResult.error.flatten() 
      });
    }

    const data = validationResult.data;

    // Create email HTML
    const html = createPartnerEmailHtml(data);

    // Send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.recipients,
      replyTo: data.email,
      subject: `New Partnership Inquiry: ${data.company} (${getPartnerTypeLabel(data.partnerType)})`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, id: emailData?.id });
  } catch (error) {
    console.error('Partner form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

function getPartnerTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'agency': 'Agency Partner',
    'referral': 'Referral Partner',
    'strategic': 'Strategic Partner',
  };
  return labels[type] || type;
}

function getCompanySizeLabel(size: string): string {
  const labels: Record<string, string> = {
    '1-5': '1-5 employees',
    '6-20': '6-20 employees',
    '21-50': '21-50 employees',
    '51-100': '51-100 employees',
    '100+': '100+ employees',
  };
  return labels[size] || size;
}

function createPartnerEmailHtml(data: {
  name: string;
  email: string;
  company: string;
  partnerType: string;
  companySize: string;
  currentServices?: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Partnership Inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Partnership Inquiry</h1>
                    <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 14px;">
                      ${escapeHtml(getPartnerTypeLabel(data.partnerType))} Application
                    </p>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; background-color: #22c55e; color: white; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600;">
                      PARTNER
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contact Information -->
          <tr>
            <td style="padding: 32px 32px 0 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Contact Information</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Name</p>
                    <p style="margin: 0; font-size: 16px; color: #111827;">${escapeHtml(data.name)}</p>
                  </td>
                  <td width="50%" style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Email</p>
                    <p style="margin: 0; font-size: 16px;">
                      <a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.email)}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Company</p>
                    <p style="margin: 0; font-size: 16px; color: #111827; font-weight: 600;">${escapeHtml(data.company)}</p>
                  </td>
                  <td width="50%" style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Company Size</p>
                    <p style="margin: 0; font-size: 16px; color: #111827;">${escapeHtml(getCompanySizeLabel(data.companySize))}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Partnership Details -->
          <tr>
            <td style="padding: 24px 32px 0 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Partnership Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Partnership Type</p>
                    <p style="margin: 0; font-size: 16px; color: #111827;">
                      <span style="display: inline-block; background-color: #eff6ff; color: #2563eb; padding: 4px 10px; border-radius: 4px; font-weight: 500;">
                        ${escapeHtml(getPartnerTypeLabel(data.partnerType))}
                      </span>
                    </p>
                  </td>
                </tr>
                ${data.currentServices ? `
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Current Services Offered</p>
                    <p style="margin: 0; font-size: 16px; color: #111827;">${escapeHtml(data.currentServices)}</p>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>
          
          <!-- Message -->
          <tr>
            <td style="padding: 24px 32px 32px 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Partnership Goals</h2>
              <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; border-left: 4px solid #22c55e;">
                <p style="margin: 0; font-size: 16px; color: #111827; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.message)}</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                This partnership inquiry was submitted from the Fullstack website.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}
