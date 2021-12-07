const api = require("express")();
// teste
api.get("/", (request, response) => {
	response.send({ message: "ENDPOINT" });
});

module.exports = api;