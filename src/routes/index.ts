import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const removeExtension = (fileName: string) => fileName.split(".")[0];

readdirSync(PATH_ROUTER).filter(el => !el.includes("index")).filter((file) => {
    const cleanName = removeExtension(file);
    import(`./${cleanName}`).then((moduleRouter) => {
        router.use(`/${cleanName}`, moduleRouter.router)
    });

})

export { router };