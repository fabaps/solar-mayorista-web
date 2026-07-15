export interface ApplicationToJoinData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  solutionType: string;
  clientWants: string;
  commercialStatus: string;
  budget: string;
  workedBefore: string;
  whoContacted: string;
  hasQuotes: string;
  knowsInvestment: string;
  paymentMethod: string;
  doneSolarProject: string;
}

const solutionLabels: Record<string, string> = {
  "bombeo-ac": "Bombeo en AC",
  "bombeo-dc": "Bombeo en DC",
  "solar-hibrido": "Solar Híbrido",
  aislado: "Sistema Aislado",
  "atado-red": "Sistema Atado a Red",
};

const clientWantsLabels: Record<string, string> = {
  ahorro: "Ahorro",
  energia: "Energía",
  "bombear-agua": "Bombear agua",
};

export const getApplicationToJoinTemplate = (
  data: ApplicationToJoinData,
): string => {
  const solution = solutionLabels[data.solutionType] || data.solutionType;
  const wants = clientWantsLabels[data.clientWants] || data.clientWants;

  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nueva solicitud - Aplica Solar Mayorista</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="background-color:#004ea9;padding:24px 32px;">
                <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:900;">
                  NUEVA SOLICITUD
                </h1>
                <p style="margin:4px 0 0;color:#dbeafe;font-size:14px;">
                  Aplica Solar Mayorista
                </p>
              </td>
            </tr>

            <!-- Datos Personales -->
            <tr>
              <td style="padding:24px 32px 8px;">
                <h2 style="margin:0 0 12px;font-size:14px;font-weight:700;color:#004ea9;text-transform:uppercase;letter-spacing:1px;">
                  Datos Personales
                </h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Nombre:</strong> ${data.name}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Email:</strong> ${data.email}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Teléfono:</strong> ${data.phone}</td></tr>
                </table>
              </td>
            </tr>

            <tr><td style="padding:0 32px;"><hr style="border:none;border-top:1px solid #e5e7eb;"></td></tr>

            <!-- Pre Cotiza -->
            <tr>
              <td style="padding:16px 32px 8px;">
                <h2 style="margin:0 0 12px;font-size:14px;font-weight:700;color:#004ea9;text-transform:uppercase;letter-spacing:1px;">
                  Pre Cotiza
                </h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Tipo de proyecto:</strong> ${data.projectType}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Ubicación:</strong> ${data.location}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Solución:</strong> ${solution}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Cliente quiere:</strong> ${wants}</td></tr>
                </table>
              </td>
            </tr>

            <tr><td style="padding:0 32px;"><hr style="border:none;border-top:1px solid #e5e7eb;"></td></tr>

            <!-- Avance Comercial -->
            <tr>
              <td style="padding:16px 32px 8px;">
                <h2 style="margin:0 0 12px;font-size:14px;font-weight:700;color:#004ea9;text-transform:uppercase;letter-spacing:1px;">
                  Avance Comercial
                </h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Estado comercial:</strong> ${data.commercialStatus}%</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Rango de precio:</strong> Q${Number(data.budget).toLocaleString()}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Cliente trabajado antes:</strong> ${data.workedBefore}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Quién contactó:</strong> ${data.whoContacted}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Cotizaciones:</strong> ${data.hasQuotes}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Sabe inversión:</strong> ${data.knowsInvestment}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Método de pago:</strong> ${data.paymentMethod}</td></tr>
                  <tr><td style="padding:4px 0;font-size:14px;color:#374151;"><strong>Ha hecho proyecto solar:</strong> ${data.doneSolarProject}</td></tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#f9fafb;padding:16px 32px;text-align:center;">
                <p style="margin:0;font-size:12px;color:#9ca3af;">
                  Mayorista Solar — Esta es una notificación automática
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
};
