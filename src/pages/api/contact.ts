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
            html: '<p>Hey ! ${name} <${email}> sent you a contact form</p>' +
                '${content}',
        })
        console.log(send)
    } catch (err: any) {
        console.error('Error sending mail', err);
    }

    res.status(200).json({submitted : true});
}