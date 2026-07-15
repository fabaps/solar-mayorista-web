const fromEmail = "campus@adepenlinea.com";
const fromName = "Mayorista Solar";

export const sendMail = async (
  toEmail: string,
  subject: string,
  html: string,
  apiKey: string,
  accountName: string,
  recipientName = "Mayorista Solar",
): Promise<void> => {
  const url = `https://${accountName}.ipzmarketing.com/api/v1/send_emails`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": apiKey,
    },
    body: JSON.stringify({
      from: { email: fromEmail, name: fromName },
      to: [{ email: toEmail, name: recipientName }],
      subject,
      html_part: html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error al enviar correo: ${errorText}`);
  }
};
