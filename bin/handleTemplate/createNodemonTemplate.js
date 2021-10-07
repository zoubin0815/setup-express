import ejs from "ejs"
import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";
import prettier from "prettier"

export default () =>{
   const __dirname = fileURLToPath(import.meta.url)
   const packageTemplate = fs.readFileSync(path.resolve(__dirname,"../../template/nodemon.ejs"));
   const code = ejs.render(packageTemplate.toString())
   return prettier.format(code,{parser:"json"});
}