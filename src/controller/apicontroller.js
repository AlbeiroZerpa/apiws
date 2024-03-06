const verificar=(req,res)=>{

    try {
        var tokenalbecode = "albecodenodejsapimeta";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == tokenalbecode){
            res.send(challenge);
        }else{
            res.status(400).send();
        }
        console.log(req);
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