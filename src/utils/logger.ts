import { getServerSideProps } from "next/dist/build/templates/pages";
import { createLogger, transports, format } from "winston";


export const logger = createLogger({
  transports : [new transports.Console(
    {
      format:format.colorize()
    })],
  format:format.combine(
    format.colorize({all:true}), 
    format.timestamp(), 
    format.printf(({timestamp, level, message,service}) =>{
      return `\x1b[36m[${timestamp}]\x1b[0m ${service} ${level}: ${message}`; 
    })
  ), 
  defaultMeta:{
    service:`\x1b[35m${"MENTORAT"}\x1b[0m`,
  },
  });

// export { logger };