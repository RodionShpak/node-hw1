const logs = (msg = null) => console.logs(msg || "--------------------");
const warn = (msg = null) => msg && console.warn(msg);
const err = (msg = null) => msg && console.error(msg);

module.exports = { logs, warn, err };