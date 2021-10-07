import chalk from "chalk";
import fs from "fs";
import createModelsDBTemplate from "../../handleTemplate/createModelsDBTemplate.js";
import createModelsInitTemplate from "../../handleTemplate/createModelsInitTemplate.js";
// 1. 创建文件夹 -》 public
export default (config,getRootPath) => {
    console.log(chalk.blue(`初始化文件夹  ->>>  models`))
    //初始化public文件夹
    fs.mkdirSync(`${getRootPath()}/models`);

    /**
     * 初始化db.js
     */
    fs.writeFileSync(`${getRootPath()}/models/db.js`,createModelsDBTemplate());

    /**
     * 初始化init.js
     */
   fs.writeFileSync(`${getRootPath()}/models/init.js`,createModelsInitTemplate());
}