const api=require("express")();api.get("/",(e,s)=>{s.send({message:"ROTA ÍNDICE"})}),module.exports=api;