declare module "nodemailer" {
  type Auth = {
    user: string;
    pass: string;
  };

  type TransportOptions = {
    service?: string;
    auth?: Auth;
  };

  type MailOptions = {
    from: string;
    to: string;
    replyTo?: string;
    subject: string;
    html?: string;
    text?: string;
  };

  type Transporter = {
    sendMail(options: MailOptions): Promise<unknown>;
  };

  const nodemailer: {
    createTransport(options: TransportOptions): Transporter;
  };

  export default nodemailer;
}
