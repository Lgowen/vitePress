const fs = require("fs");
const path = require("path");

const leetcodePath = path.resolve("./docs/leetcode");

export function readAllFiles() {
  const files = getFileNames(leetcodePath);

  files.sort((a, b) => {
    return matchNumber(a) - matchNumber(b);
  });

  const reg = /(?<=#).*?(?=#)/; // 匹配 # # 中间的所有内容

  const children = [];

  files.forEach((fileName) => {
    const content = getFileInfo(leetcodePath, fileName);

    const name = content.match(reg)[0];

    children.push({
      text: name,
      link: `/leetcode/${fileName.split(".")[0]}`,
    });
  });


  return [{
      text: 'LeetCode',
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
