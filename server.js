const api = require("express")();
// teste 2
api.get("/", (request, response) => {
	response.send({ message: "ENDPOINT" });
});

module.exports = api;