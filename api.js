const api = require("./server");

api.use(require("express-status-monitor")());

api.listen(process.env.PORT || 5555);

// commit 1