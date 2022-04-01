const fs = require("fs");
const path = require("path");

export function readAllFiles(path, isNeedSort = false) {

  const files = getFileNames(path);

  if (isNeedSort) {
    files.sort((a, b) => {
      return matchNumber(a) - matchNumber(b);
    });
  }

  const reg = /(?<=#).*?(?=#)/; // 匹配 # # 中间的所有内容

  const children = [];

  const pathName = path.substring(path.lastIndexOf('/') + 1, path.length)

  files.forEach((fileName) => {
    const content = getFileInfo(path, fileName);

    const name = content.match(reg)[0];

    children.push({
      text: name,
      link: `/${pathName}/${fileName.split(".")[0]}`,
    });

  });

  return [{
      text: `${pathName}`,
      children
  }]
}

function matchNumber(str) {
  const reg = /\d+/g;

  const res = str.match(reg);

  if (res.length) return res[0];
}

function getFileNames(dirFilePath) {
  return fs.readdirSync(dirFilePath);
}

function getFileInfo(dirFilePath, fileName) {
  const fileDir = path.join(dirFilePath, fileName);
  return fs.readFileSync(fileDir, "utf-8");
}
