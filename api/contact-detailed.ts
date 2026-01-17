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

// Validation schema matching the frontend multi-step form
const detailedContactSchema = z.object({
  projectPhase: z.string().min(1),
  deliverables: z.string().min(1),
  priority: z.string().min(1),
  vision: z.string().min(50).max(1000),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(100).optional(),
  timeline: z.string().min(1),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validationResult = detailedContactSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validationResult.error.flatten() 
      });
    }

    const data = validationResult.data;

    // Create email HTML
    const html = createDetailedEmailHtml(data);

    // Get readable phase label for subject
    const phaseLabels: Record<string, string> = {
      'concept-framing': 'Concept Framing',
      'product-strategy': 'Product Strategy',
      'rapid-prototyping': 'Rapid Prototyping',
      'build-phase': 'Build Phase',
    };

    // Send email via Resend
    const { data: emailData, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.recipients,
      replyTo: data.email,
      subject: `New Project Inquiry: ${data.name} - ${phaseLabels[data.projectPhase] || data.projectPhase}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, id: emailData?.id });
  } catch (error) {
    console.error('Detailed contact form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

function createDetailedEmailHtml(data: {
  name: string;
  email: string;
  company?: string;
  timeline: string;
  projectPhase: string;
  deliverables: string;
  priority: string;
  vision: string;
}) {
  const phaseLabels: Record<string, string> = {
    'concept-framing': '💡 Just an idea - needs validation and framing',
    'product-strategy': '📋 Idea validated - needs strategy and roadmap',
    'rapid-prototyping': '🎨 Strategy ready - needs a prototype to test',
    'build-phase': '🚀 Ready to build - needs full development team',
  };

  const deliverableLabels: Record<string, string> = {
    'research-analysis': 'User research & competitive analysis',
    'prototype': 'Interactive prototype with user flows',
    'architecture': 'Technical architecture & documentation',
    'full-mvp': 'Fully built MVP ready to launch',
    'ongoing-support': 'Ongoing support & iteration',
  };

  const priorityLabels: Record<string, string> = {
    'speed': 'Speed to market - needs to launch fast',
    'budget': 'Budget efficiency - maximum value',
    'quality': 'Quality & scalability - built to last',
    'ux': 'User experience - delightful design',
    'technical': 'Technical excellence - modern, maintainable code',
  };

  const timelineLabels: Record<string, string> = {
    'immediately': 'Immediately',
    'within-1-month': 'Within 1 month',
    '1-3-months': '1-3 months',
    '3-6-months': '3-6 months',
    'just-exploring': 'Just exploring',
  };

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #0f172a; padding: 24px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Project Inquiry</h1>
              <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 14px;">${escapeHtml(phaseLabels[data.projectPhase] || data.projectPhase)}</p>
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
                    <p style="margin: 0; font-size: 16px; color: #111827;">${escapeHtml(data.company || 'Not provided')}</p>
                  </td>
                  <td width="50%" style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Timeline</p>
                    <p style="margin: 0; font-size: 16px; color: #111827;">${escapeHtml(timelineLabels[data.timeline] || data.timeline)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Project Details -->
          <tr>
            <td style="padding: 24px 32px 0 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Project Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Project Phase</p>
                    <p style="margin: 0; font-size: 16px; color: #111827;">${escapeHtml(phaseLabels[data.projectPhase] || data.projectPhase)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Desired Deliverables</p>
                    <p style="margin: 0; font-size: 16px; color: #111827;">${escapeHtml(deliverableLabels[data.deliverables] || data.deliverables)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">Top Priority</p>
                    <p style="margin: 0; font-size: 16px; color: #111827;">${escapeHtml(priorityLabels[data.priority] || data.priority)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Vision -->
          <tr>
            <td style="padding: 24px 32px 32px 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Project Vision</h2>
              <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; border-left: 4px solid #2563eb;">
                <p style="margin: 0; font-size: 16px; color: #111827; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.vision)}</p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #6b7280;">
                This inquiry was submitted from the Fullstack website contact page.
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
