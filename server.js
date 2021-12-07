const api = require("express")();

api.get("/", (request, response) => {
	response.send({ message: "ROTA ÍNDICE" });
});

module.exports = api;