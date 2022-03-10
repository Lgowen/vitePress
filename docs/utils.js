const fs = require("fs");
const path = require("path")

const leetcodePath = path.resolve('./docs/leetcode')


export function readAllFiles() {
    return new Promise((resolve) => {
        return fs.readdir(leetcodePath, (err, files) => {
          if (err) console.log(err);
          const object = {
            text: "LeetCode",
            children: [],
          };

          files.forEach((fileName) => {
            
            const fileDir = path.join(leetcodePath, fileName);
        
            const content = fs.readFileSync(fileDir, "utf-8");
        
            const reg = /(?<=#).*?(?=#)/;
        
            const name = content.match(reg)[0];

            object.children.push({
              text: name,
              link: `/leetcode/${fileName.split('.')[0]}`,
            });
        
          });
          resolve(object)
        });
      })

}