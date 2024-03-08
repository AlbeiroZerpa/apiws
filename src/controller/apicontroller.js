const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logsgtp.txt"));

const enviarmensaje = require("../service/apiservice");

const verificar = (req, res) => {
  try {
    var tokenalbecode = "ALBECODENODEJSAPIMETA";
    var token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token == tokenalbecode) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
    myConsole.log(res);
  } catch (e) {
    myConsole.log(e);
    res.status(400).send();
  }
};
const recibir = (req, res) => {
  try {
    var entry = req.body["entry"][0];
    var changes = entry["changes"][0];
    var value = changes["value"];
    var objetoMensaje;

    if (value && value["messages"]) {
      objetoMensaje = value["messages"];
      var messages = objetoMensaje[0];
      var texto = messages["text"]["body"];
      var number = messages["from"];

      myConsole.log("Mensaje: " + texto);
      myConsole.log("Enviado desde :" + number);
      enviarmensaje.EnviarMensajeWhatsapp(texto, number);
    } else {
    }

    myConsole.log(objetoMensaje);

    res.send("EVENT_RECEIVED");
  } catch (e) {
    myConsole.log(e);
    res.send("EVENT_RECEIVED");
  }
};

module.exports = {
  verificar,
  recibir,
};
