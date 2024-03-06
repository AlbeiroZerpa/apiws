const verificar=(req,res)=>{
    res.send("Verificado");
    console.log("Verificado Console");

}
const recibir=(req,res)=>{
    res.send("Recibido");
    console.log("Recibido Console");
}

module.exports = {
    verificar, recibir
}