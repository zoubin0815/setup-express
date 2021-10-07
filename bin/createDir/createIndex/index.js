import chalk from "chalk";
import fs from "fs";
import createIndexTemplate from "../../handleTemplate/createIndexTemplate.js"
export default (config,getRootPath) => {
    // 2. 创建文件 -》index.js
    console.log(chalk.blue(`初始化入口文件  ->>>  index.js`))
    fs.writeFileSync(`${getRootPath()}/index.js`,createIndexTemplate(config));
}