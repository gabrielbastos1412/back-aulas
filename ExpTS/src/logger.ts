import { NextFunction, Request, Response } from 'express';
import { Tipo } from './loggerTypes';
import fs from 'fs';

export function logger(tipo: Tipo) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (tipo === 'completo') {
      const log = `${new Date().toISOString()}, ${req.url}, ${req.method}, ${req.httpVersion}, ${req.get('User-Agent')}`;
      saveLog(log);
      next();
    } else {
      const log = `${new Date().toISOString()}, ${req.url}, ${req.method}`;
      saveLog(log);
      next();
    }
  };
}

function saveLog(value: string) {
  const path = `${process.cwd()}/logs/test.txt`;
  console.log(path);
  fs.writeFileSync(path, value);
}