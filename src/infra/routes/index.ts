import fs from 'fs';
import path from 'path';
import { Express } from 'express';

export const loadRoutes = (app: Express) => {
  const routesDirectory = path.join(__dirname, '');

  fs.readdirSync(routesDirectory).forEach((file) => {
    if (file.endsWith('routes.ts') || file.endsWith('routes.js')) {
      import(path.join(routesDirectory, file))
        .then((module) => {
          if (module.default) {
            app.use('/backend', module.default);
          }
        })
        .catch((error) => {
          console.error(`Error al importar el archivo ${file}.`);
          console.error(error);
        });
    }
  });
};
