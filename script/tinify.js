const tinify = require('tinify');
// const apiKey = require('./api_key');
const fs = require('fs');
const path = require('path');
// API Key
tinify.key = "v07K1l3ZD87SKzJDcFnZ6tfrGXNp6Jkm";

// 执行图片压缩任务，返回promise对象
const task = file => {
    const source = tinify.fromFile(file.fromFile);
    source.toFile(file.toFile);
    return source._url;
}
// 通过输入文件夹和输出文件夹，返回一个数组
const fromDir = (inDir, outDir, _files = []) => {
    const files = fs.readdirSync(inDir);
    for (let file of files) {
        const filePath = `${inDir}/${file}`;
        const toFilePath = `${outDir}/${file}`;
        if (fs.statSync(filePath).isDirectory()) {
            if (!fs.existsSync(`${outDir}/${file}`)) { 
                fs.mkdirSync(`${outDir}/${file}`)
            }
            fromDir(filePath, toFilePath, _files)
        } else {
            if (file === '.DS_Store') {
                fs.unlinkSync(`${inDir}/${file}`);
            } else { 
                try {
                    fs.accessSync(toFilePath);
                } catch (err) {
                    _files.push({
                        fromFile: filePath,
                        toFile: toFilePath,
                    });
                }
            }
        }
    }
    return _files;
}

const rootDir = fs.realpathSync(process.cwd());
const screenshotDir = path.resolve(rootDir, '../src/assets/products');
const screenshotOutDir = path.resolve(rootDir, './productsV2');

const files = fromDir(screenshotDir, screenshotOutDir);

// 遍历数组，顺序执行各任务
if (files.length === 0) {
    return;
}
let current = task(files[0]);
for (let i = 1; i < files.length; i++) {
    current = current.then(task(files[i]));
}