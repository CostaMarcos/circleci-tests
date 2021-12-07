const api = require("express")();
// teste 1
api.get("/", (request, response) => {
	response.send({ message: "ENDPOINT" });
});

module.exports = api;