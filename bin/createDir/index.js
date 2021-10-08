import execa from "execa"
import chalk from "chalk";
import question from '../question/index.js';
import { createConfig } from "../config.js";
import createPackName from "./createPackName/index.js";
import createIndex from './createIndex/index.js';
import createInit from './createInit/index.js';
import createPackageJson from './createPackageJson/index.js';
import createNodemon from './createNodemon/index.js';
import createPublic from './createPublic/index.js';
import createModels from './createModels/index.js';
import createServices from './createServices/index.js';
import createRoute from './createRoute/index.js';
import path from "path";

/**
 * 1. 收集用户输入问题
 */
const answer = await question();
const config = createConfig(answer);
/**
 * 2. 初始化项目
 */
// 初始化项目名
createPackName(config,getRootPath)
// 初始化全局index.js
createIndex(config,getRootPath)
// 初始化全局init.js
createInit(config,getRootPath)
// 初始化package.json文件
createPackageJson(config,getRootPath)
// 初始化createNodemon.json文件
createNodemon(config,getRootPath)
// 初始化pubilc文件夹
createPublic(config,getRootPath)
// 初始化modles文件夹
createModels(config,getRootPath)
// 初始化services文件夹
createServices(config,getRootPath)
// 初始化文件夹routes
createRoute(config,getRootPath)

/**
 * 3.安装依赖
 */
console.log(chalk.greenBright(`正在安装依赖  ->>>>>>>>>>>>>>`))
execa("npm install",{
    cwd:getRootPath(),
    stdio:[2,2,2]
}).then(()=>{
    console.log(chalk.green(`cd ${config.packageName}`))
    console.log(chalk.green(`npm run start`))
})


function getRootPath(){
    // return "./hei"
    let url = path.resolve('./');
    return `${url}/${config.packageName}`
}