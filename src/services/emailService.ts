import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send a booking notification email to the specialist
 */
export const sendSpecialistEmail = async (
  specialistEmail: string,
  specialistName: string,
  parentName: string,
  parentEmail: string,
  contactMethod: string,
) => {
  return await resend.emails.send({
    from: "Hope Platform <onboarding@resend.dev>",
    to: specialistEmail,
    replyTo: parentEmail,
    subject: `New consultation request for ${specialistName}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2F8276; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Hope 🌿</h1>
        </div>
        <div style="padding: 24px; background-color: #f9f9f9;">
          <p>Hello ${specialistName},</p>
          <p>A parent has requested a consultation with you through Hope.</p>
          <p><strong>Parent name:</strong> ${parentName}</p>
          <p><strong>Contact method:</strong> ${contactMethod}</p>
          <p>Please reply to this email to contact them directly at ${parentEmail}.</p>
          <p>They are expecting a response within 48 hours.</p>
          <p style="color: #2F8276;">— The Hope Team 🌿</p>
        </div>
      </div>
    `,
  });
};

/**
 * Sends a booking confirmation email to the parent
 */
export const sendParentConfirmationEmail = async (
  parentEmail: string,
  parentName: string,
  specialistName: string,
) => {
  return await resend.emails.send({
    from: "Hope Platform <onboarding@resend.dev>",
    to: parentEmail,
    subject: "Your request is on its way 🌿",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #2F8276; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Hope 🌿</h1>
        </div>
        <div style="padding: 24px; background-color: #f9f9f9;">
          <p>Hello ${parentName},</p>
          <p>Your consultation request has been sent to ${specialistName}.</p>
          <p>They will be in touch within 48 hours.</p>
          <p>You are doing great. 🌿</p>
          <p style="color: #2F8276;">— The Hope Team</p>
        </div>
      </div>
    `,
  });
};
