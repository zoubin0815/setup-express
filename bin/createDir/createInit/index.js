import chalk from "chalk";
import fs from "fs";
import createInitTemplate from "../../handleTemplate/createInitTemplate.js"
export default (config,getRootPath) => {
    // 2. 创建文件 -》init.js
    console.log(chalk.blue(`初始化入口文件  ->>>  init.js`))
    fs.writeFileSync(`${getRootPath()}/init.js`,createInitTemplate(config));
}