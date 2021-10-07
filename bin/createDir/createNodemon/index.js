import chalk from "chalk";
import fs from "fs";
import createNodemonTemplate from "../../handleTemplate/createNodemonTemplate.js"
export default (config,getRootPath) => {
    // 创建nodemon配置文件
    console.log(chalk.blue(`初始化全局文件  ->>>  nodemon.json`))
    fs.writeFileSync(`${getRootPath()}/nodomon.json`,createNodemonTemplate());
}