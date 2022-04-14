const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text');
const {email, password} =  require('./config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
  const options = {
      from: `MrDonald's`,
      to: data.email,
      subject: `Ваш заказ из MrDonald's`,
      html: `<div>
      <h1>Добрый день ${data.nameClient}</h1>
      <h3>Ваш</h3>
      <ul>
      ${data.order.map(({itemName, count, price}) => (
`<li>${itemName} - ${count}шт., цена ${price * count} руб.</li>`
      ) ) }</ul>
      <p>Итого: ${data.order.reduce((sum, item)=> sum + (item.price +item.count), 0)} руб. </p>
      <smal>Ожидайте курьера.</>
      </div>`,
  };
  transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushID}').onCreate(order => sendOrderEmail(ordre.val()));
