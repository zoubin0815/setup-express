import ejs from "ejs"
import prettier from "prettier"
import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";

export default (config) =>{
   const __dirname = fileURLToPath(import.meta.url)
   const indexTemplate = fs.readFileSync(path.resolve(__dirname,"../../template/routesApiInit.ejs"));
   const code = ejs.render(indexTemplate.toString())
   return prettier.format(code,{parser:"babel"});
}