// import ejs from "ejs"
// import fs from 'fs'
// import path from "path";
// import { fileURLToPath } from "url";
// import prettier from "prettier"
// import str  from "../template/indexHtml.js"
// export default (config) =>{
//    const __dirname = fileURLToPath(import.meta.url)
//    const packageTemplate = fs.readFileSync(path.resolve(__dirname,str()));
//    const code = ejs.render(packageTemplate.toString(),{
//       packageName:config.port
//    })
//    return prettier.format(code,{parser:"bable"});
//     return packageTemplate
// }