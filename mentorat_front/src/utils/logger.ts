import { createLogger, transports, format } from "winston";


const logger = createLogger({
  transports : [new transports.Console(
    {
      format:format.colorize()
    })],
  //   ) , new transports.File({
  //   dirname:'logs', 
  //   filename:'mentorat.log', 
  //   format: format.combine(format.json()),
  // }), new transports.Http()], 

  // for streaming your loggin  
  // new transports.Stream({
  //   stream: createWriteStream("hello.txt"),
  // }),
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
export { logger };