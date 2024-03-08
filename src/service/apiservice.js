const https = require("https");

function EnviarMensajeWhatsapp(texto, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "recipient_type": "individual",
        "to": "584244093591",
        "type": "text",
        "text": {
            "preview_url": false,
            "body": "Hello World"
        }
    });

    const options = {
        host: "graph.facebook.com",
        path: "/v18.0/239227589279952/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type" : "application/json",
            Authorization: "Bearer EAAK8iKfjrggBOZBZCfDJyAckRwk2eOxzwj69h6CetAmylOmnwQ7U75xsEokQKtkLBuyoOi5Ny9h08esbAFnG6UwFIRgJGfC3SILB3qELjMBKXZCzpoRB1SyOWEw9WLScCoOLx0yTAnpnBUCZBMMbsnbiTb3TuQsEK0YqZAjZBvCkXtvV8WLnmBXPLAuMKXjPXiYrZBmCIjp9Qaz7NqooK05SFRi70cVOyu93ZA8ZD", 
        }
    };

    const req = https.request(options, res => {
        res.on("data", d=>{
            process.stdout.write(d);
        });
    });

    req.write(data);
    req.end();

}

module.exports = {
    EnviarMensajeWhatsapp
}