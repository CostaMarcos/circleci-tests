const api = require("./server");

api.use(require("express-status-monitor")());

api.listen(5555);

// commit 1