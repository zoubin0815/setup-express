import chalk from "chalk";
import fs from "fs";
import createRouterTemplate from "../../handleTemplate/createRouterTemplate.js";
import createRoutesApiInitTemplate from "../../handleTemplate/createRoutesApiInitTemplate.js";
import createRoutesUtilsErrorMiddleware from "../../handleTemplate/createRoutesUtilsErrorMiddleware.js";
import createRoutesUtilsStaticMiddleware from "../../handleTemplate/createRoutesUtilsStaticMiddleware.js";
import createRoutesUtilsGetSendResesult from "../../handleTemplate/createRoutesUtilsGetSendResesult.js";
// 1. 创建文件夹 -》 routes
export default (config,getRootPath) => {
    console.log(chalk.blue(`初始化文件夹  ->>>  routes`))
    //初始化routes文件夹
    fs.mkdirSync(`${getRootPath()}/routes`);
    /**
     * 初始化init.js
     */
   fs.writeFileSync(`${getRootPath()}/routes/init.js`,createRouterTemplate(config));
    //初始化api文件夹
    fs.mkdirSync(`${getRootPath()}/routes/api`);
    // 初始化文件init.js
    fs.writeFileSync(`${getRootPath()}/routes/api/init.js`,createRoutesApiInitTemplate(config));
    // 初始化工具文件夹utils
    fs.mkdirSync(`${getRootPath()}/routes/utils`);
    // 初始化工具文件getSendResult
    fs.writeFileSync(`${getRootPath()}/routes/utils/getSendResult.js`,createRoutesUtilsGetSendResesult(config));
    // 初始化工具函数staticMiddleware
    fs.writeFileSync(`${getRootPath()}/routes/utils/staticMiddleware.js`,createRoutesUtilsStaticMiddleware(config));
    // 初始化工具函数errorMiddleware
    fs.writeFileSync(`${getRootPath()}/routes/utils/errorMiddleware.js`,createRoutesUtilsErrorMiddleware(config));

}