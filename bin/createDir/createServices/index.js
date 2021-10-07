import chalk from "chalk";
import fs from "fs";
import createServicesInitTemplate from "../../handleTemplate/createServicesInitTemplate.js";
// 1. 创建文件夹 -》 public
export default (config,getRootPath) => {
    console.log(chalk.blue(`初始化文件夹  ->>>  services`))
    //初始化services文件夹
    fs.mkdirSync(`${getRootPath()}/services`);

    /**
     * 初始化init.js
     */
   fs.writeFileSync(`${getRootPath()}/services/init.js`,createServicesInitTemplate());
}