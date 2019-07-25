var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

let transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // true para 465, false para as outras
  auth: {
    user: '', // conta de email responsavel pelo repasse dos emails
    pass: '' // password do email usado acima.. solicitar o password e não comitar para o repositorio esta senha
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/utils/sendEmail', async function(req, res, next) {
  let { yourName, yourEmail, yourSubject, yourMessage } = req.body;

  try {
    await transporter.sendMail({
      to: 'atendimento@4ward.com.br', // list of receivers
      subject: yourSubject, // Subject line
      text: yourMessage,
      html: `<h1>Enviado atráves do Fale conosco no Porta 4Ward</h1>
              <table style="border:none" border="0">
                  <tr>
                      <td><strong>Nome do Contato: </strong></td>
                      <td>${yourName}</td>
                  </tr>

                  <tr>
                      <td><strong>Email do Contato: </strong></td>
                      <td>${yourEmail}</td>
                  </tr>
              </table>
              <br />
              <br />
              <h3>Mensagem</h3>
              <p>${yourMessage}</p>
        ` // html body
    });
  } catch (error) {
    return res.status(400).send({ code: 400, message: 'Não foi possivel enviar o email', log: error });
  }

  res.status(200).send({ message: 'Agradecemos a mensagem, entraremos em contato em breve.' });
});

module.exports = router;
