const fs = require('fs');
const basePath = './src/assets/dummyAPIResponse';
const join = require('path').join;
const path = require('path');
let fileList = [];
function getJsonFiles(jsonPath) {
  let jsonFiles = [];
  function findJsonFile(path) {
    let files = fs.readdirSync(path);
    files.forEach(function (item, index) {
      let fPath = join(path, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      if (stat.isFile() === true) {
        jsonFiles.push(item);
      }
    });
  }
  findJsonFile(jsonPath);
  fileList = jsonFiles;
}

const scanProducts = direction => {
  const products = [];
  const categorys = fs.readdirSync(direction);
  categorys.forEach((categoryitem, index) => {
    const categoryPath = path.join(direction, categoryitem);
    let productNames = fs.readdirSync(categoryPath);
    productNames.forEach((productNameItem, index) => {
      const files = fs.readdirSync(path.join(categoryPath, productNameItem));
      const fengmian = fs.readdirSync(
        path.join(categoryPath, `${productNameItem}/封面图`)
      );
      const abrasive = fs.readdirSync(
        path.join(categoryPath, `${productNameItem}/模具图`)
      );
      const productItem = {
        id: productNameItem,
        projectName: productNameItem,
        categoryId: categoryitem,
        title: productNameItem,
        leftImg: fengmian.find(
          e =>
            /(.*\.png$)|(.*\.jpg)|(.*\.jpeg)/.test(e) &&
            e.split('.')[0] === "left"
        ),
        rightImg: fengmian.find(
          e =>
            /(.*\.png$)|(.*\.jpg)|(.*\.jpeg)/.test(e) &&
            e.split('.')[0] !== "left"
        ),
        detailImgs: files.filter(e => /(.*\.png$)|(.*\.jpg)|(.*\.jpeg)/.test(e)),
        abrasiveimgs:abrasive.filter(e => /(.*\.png$)|(.*\.jpg)|(.*\.jpeg)/.test(e))
      };
      products.push(productItem);
    });
  });

  return products;
};
const products = scanProducts('../src/assets/products');

fs.writeFile('products.json', JSON.stringify(products), err => {
  if (err) {
    throw err;
  }
  console.log('JSON data is saved.');
});
