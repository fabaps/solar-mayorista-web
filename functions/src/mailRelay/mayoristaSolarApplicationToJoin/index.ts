import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";

import { sendMail } from "../sendMailGeneric";
import { getApplicationToJoinTemplate } from "./template";
import type { ApplicationToJoinData } from "./template";

const MAILRELAY_API_KEY = defineSecret("MAILRELAY_API_KEY");
const MAILRELAY_ACCOUNT_NAME = defineSecret("MAILRELAY_ACCOUNT_NAME");
const NOTIFICATION_EMAIL = "dmedina@adepenlinea.com";

export const mayoristaSolarApplicationToJoin = onRequest(
  {
    secrets: [MAILRELAY_API_KEY, MAILRELAY_ACCOUNT_NAME],
    cors: true,
  },
  async (req, res) => {
    const data = req.body as ApplicationToJoinData;

    if (!data.name || !data.email || !data.phone) {
      res.status(400).json({ error: "Faltan datos obligatorios: nombre, email, teléfono" });
      return;
    }

    const html = getApplicationToJoinTemplate(data);

    await sendMail(
      NOTIFICATION_EMAIL,
      `Nueva solicitud - Aplica Solar Mayorista - ${data.name}`,
      html,
      MAILRELAY_API_KEY.value(),
      MAILRELAY_ACCOUNT_NAME.value(),
      "Mayorista Solar",
    );

    res.json({ success: true });
  },
);
