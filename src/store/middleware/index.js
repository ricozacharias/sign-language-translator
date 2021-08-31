import { applyMiddleware } from "redux";
import { appMiddleware } from "./appMiddleware";
import { loginMiddleware } from "./loginMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";
import { translateMiddleware } from "./translateMiddleware"


export default applyMiddleware(
    appMiddleware,
    loginMiddleware,
    sessionMiddleware,
    translateMiddleware
)