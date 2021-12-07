const api = require("express")();
// teste
api.get("/", (request, response) => {
	response.send({ message: "ROTA ÍNDICE" });
});

module.exports = api;