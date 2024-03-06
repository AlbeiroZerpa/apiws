const verificar=(req,res)=>{

    try {
        var tokenalbecode = "albecodenodejsapimeta";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        res.send(challenge); 

        console.Console(req)
    }catch(e){
        res.status(400).send();
    }
}
const recibir=(req,res)=>{
    res.send("Recibido");
    console.log("Recibido Console");
}

module.exports = {
    verificar, recibir
}