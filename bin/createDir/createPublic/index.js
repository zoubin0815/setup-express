import chalk from "chalk";
import fs from "fs";
import indexHtml from "../../template/indexHtml.js";
// 1. 创建文件夹 -》 public
export default (config,getRootPath) => {
    console.log(chalk.blue(`初始化文件夹  ->>>  public`))
    //初始化public文件夹
    fs.mkdirSync(`${getRootPath()}/public`);
    /**
     * 初始化index.html页面
     */
    fs.writeFileSync(`${getRootPath()}/public/index.html`,indexHtml());
}