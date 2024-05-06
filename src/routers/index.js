import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import NotFoundRoute from "./notFound";

const routers = [
    ...publicRoutes, ...privateRoutes, ...NotFoundRoute
]

export default routers;