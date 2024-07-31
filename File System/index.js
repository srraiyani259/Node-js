const fs=require("fs")

fs.writeFileSync("welcome.txt","Hello JS ");
fs.appendFileSync("welcome.txt","module file");