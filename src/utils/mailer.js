/* eslint-disable require-jsdoc */
import mailgun from 'mailgun';

export default class Mailer {
  async TodoCreatedEmail(email) {
    const data = {
      from: 'Hi from Jerry <olufayojeremiah@gmail.com>',
      to: email,
      subject: 'Welcome!',
      text: 'Your todo is already saved!',
    };

    return mailgun.messages().send(data);
  }
}
