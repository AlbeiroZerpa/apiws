const https = require("https");

function EnviarMensajeWhatsapp(texto, number) {
  texto = texto.toLowerCase();
  if (texto.includes("hola")) {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "text",
      text: {
        preview_url: false,
        body: "🧏Hola, como estas, bienvenido.",
      },
    });
  } else if (texto == 1) {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "image",
      image: {
        link: "https://gameranx.com/wp-content/uploads/2023/06/QqN2wJZhHon6xqzikdtWME.jpg",
      },
    });
  } else if (texto == 2) {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "document",
      document: {
        link: "http://www.ucv.ve/fileadmin/templates/core/img/img_carrusel/Libro_300_annos_UCV.pdf",
        caption: "EJEMPLO DE PDF",
      },
    });
  } else if (texto == 3) {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "location",
      location: {
        latitude: "10.232280976744306",
        longitude: "-67.88020052526021",
        name: "Centro Comercial Guacara Plaza",
        address: "Av Piar Calle Carabobo",
      },
    });
  } else if (texto == 4) {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "text",
      text: {
        preview_url: false,
        body: "Escribele ahi a Albeiro 0424 4093 591",
      },
    });
  } else {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "text",
      text: {
        preview_url: false,
        body: "Te habla Albeiro, porfavor, presiona unos de estos numeros para opciones.\n\n1.Pedir imagen de Yae Miko pq si📷\n2.Solicitar PDF📕\n3.Direccion📍\n4.Hablar con un humano🤫🧏",
      },
    });
  }

  const options = {
    host: "graph.facebook.com",
    path: "/v18.0/239227589279952/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer EAAK8iKfjrggBOZBZCfDJyAckRwk2eOxzwj69h6CetAmylOmnwQ7U75xsEokQKtkLBuyoOi5Ny9h08esbAFnG6UwFIRgJGfC3SILB3qELjMBKXZCzpoRB1SyOWEw9WLScCoOLx0yTAnpnBUCZBMMbsnbiTb3TuQsEK0YqZAjZBvCkXtvV8WLnmBXPLAuMKXjPXiYrZBmCIjp9Qaz7NqooK05SFRi70cVOyu93ZA8ZD",
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.write(data);
  req.end();
}

module.exports = {
  EnviarMensajeWhatsapp,
};
