import chalk from "chalk";
import fs from "fs";
// 1. 创建文件夹 -》 hei
export default (config,getRootPath) => {
    console.log(chalk.blue(`初始化项目文件夹  ->>>  ${config.packageName}`))
    fs.mkdirSync(getRootPath());
}