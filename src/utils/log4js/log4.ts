// var log4js = require("log4js");
import {getLogger} from "log4js"


const logging = getLogger("MENTORAT");
logging.level = "info";
export {logging}
