const verificar=(req,res)=>{

    try {
        var tokenalbecode = "ALBECODENODEJSAPIMETA";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == tokenalbecode){
            res.send(challenge);
        }else{
            res.status(400).send();
        }
    }catch(e){
        res.status(400).send();
    }
}
const recibir=(req,res)=>{
    try {
        var entry = (req.body["entry"])[0];
        console.log(entry);
    }catch(e){
        console.log(e);
        res.send("EVENT_RECEIVED");        
    }
}

module.exports = {
    verificar, recibir
}