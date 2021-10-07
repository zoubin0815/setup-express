import chalk from "chalk";
import fs from "fs";
import createPackageTemplate from "../../handleTemplate/createPackageTemplate.js"
export default (config,getRootPath) => {
    // 3. 创建package.json
    console.log(chalk.blue(`初始化全局文件  ->>>  package.json`))
    fs.writeFileSync(`${getRootPath()}/package.json`,createPackageTemplate(config));
}