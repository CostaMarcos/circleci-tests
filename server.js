const api = require("express")();

// mudança
api.get("/", (request, response) => {
	response.send({ message: "ROTA ÍNDICE" });
});

module.exports = api;