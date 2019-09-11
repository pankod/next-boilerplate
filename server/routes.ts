const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("home", "/");

export default routes;
