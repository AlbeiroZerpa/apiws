const https = require("https");
const OpenAI = require("openai");

async function EnviarMensajeWhatsapp(texto, number) {
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
        link: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cute_dog.jpg",
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
  } else if (texto == 5) {
    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "text",
      text: {
        preview_url: false,
        body: "Para consultar Chatgpt usar 'gchatgpt: <Ingrese consulta>'.",
      },
    });
  } else if (texto.includes("gchatgpt:")) {
    let parts = texto.split("gchatgpt: ");
    console.log(parts[1]);

    const openai = new OpenAI({
      apiKey: "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",
    });    

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content:parts[1]}],
    });
    console.log(chatCompletion.choices[0].message);
    myConsole.log(chatCompletion.choices[0].message);


    var data = JSON.stringify({
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: number,
      type: "text",
      text: {
        preview_url: false,
        body: (response.choices[0]['message']).content,
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
        body: "Te habla Albeiro, porfavor, presiona unos de estos numeros para opciones.\n\n1.Pedir imagen 📷\n2.Solicitar PDF📕\n3.Direccion📍\n4.Hablar con un humano🤫🧏\n5.Consultar a Chatgpt",
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
        "Bearer EAAK8iKfjrggBOZCr73k4SkS3bxeD29KEOkFPB9ZCnbVo6aOA2ohTgFZAcXA0sCYWlBwK5qUJou3CsQiC7dxws7ZAnAHfgRHw3T3JvBvEiolcFRJV8uZByzGeGz3vGPSSw9uyi4uNVcf6HjZBZAYfhVQ2NqXJD2Y51pVKeNAByzHD12mlNopmZClGZCE0RBLSTu2nVZB9E2EwpBYwFbDj7UV2yHTM5WmkDP8VMbq58ZD",
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
