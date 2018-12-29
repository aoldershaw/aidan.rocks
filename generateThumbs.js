const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const thumbnailSize = 500;

const inDir = "./static/projects/full";
const outDir = "./static/projects/thumb";

fs.readdir(inDir, (err, files) => {
  if (err) {
    console.error("Failed to load files", err);
  } else {
    files.forEach(file => {
      console.log(`Processing ${file}...`);
      sharp(path.join(inDir, file))
        .resize({ width: thumbnailSize, kernel: sharp.kernel.cubic })
        .toFile(path.join(outDir, file), (err, info) => {
          if (err) {
            console.error(`Failed to save ${file}`, err);
          } else {
            console.log(`Successfully saved ${file}`);
          }
        });
    });
  }
});
