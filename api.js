const api = require("./server");

api.use(require("express-status-monitor")());

api.listen(5555, () => {
	console.log("API INICIADA!");
});
