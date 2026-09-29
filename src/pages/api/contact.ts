import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Data', req.body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const {name, email, number, how_did_know, object, content} = req.body;

    try {
        const send = await resend.emails.send({
            from: 'contact@louismorel.dev',
            to: 'lm38550@gmail.com',
            subject: `New form contact : ${object}`,
            html: `<p>Hey !</p>
                <strong>${name} &lt;${email}&gt; ${number}</strong> à remplis un formulaire sur le Portfolio</p>
                ${how_did_know !== "" ? `<p>Vous a connu via : ${how_did_know}</p>` : ""}
                <p><strong>-----</strong></p>
                <div style="border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin: 16px 0; background-color: #f9f9f9;">
                    ${content}
                </div>
                <p><strong>-----</strong></p>`,
        })
        console.log(send)
    } catch (err: any) {
        console.error('Error sending mail', err);
    }

    res.status(200).json({submitted : true});
}