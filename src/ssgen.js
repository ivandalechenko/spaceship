import fs from 'fs';

function generateSpriteSheet(imageWidth, imageHeight, frameWidth, frameHeight) {
    const frames = {};
    const columns = Math.floor(imageWidth / frameWidth);
    const rows = Math.floor(imageHeight / frameHeight);

    let index = 1;
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            const frameName = `tremor1 ${index}.png`;
            frames[frameName] = {
                frame: {
                    x: x * frameWidth,
                    y: y * frameHeight,
                    w: frameWidth,
                    h: frameHeight
                },
                rotated: false,
                trimmed: false,
                spriteSourceSize: {
                    x: 0,
                    y: 0,
                    w: frameWidth,
                    h: frameHeight
                },
                sourceSize: {
                    w: frameWidth,
                    h: frameHeight
                }
            };
            index++;
        }
    }

    const spriteSheet = {
        frames,
        meta: {
            app: "http://www.texturepacker.com",
            version: "1.0",
            image: "sprite.png",
            format: "RGBA8888",
            size: { w: imageWidth, h: imageHeight },
            scale: "1",
        }
    };

    fs.writeFileSync('tremor1.json', JSON.stringify(spriteSheet, null, 4));
    console.log("Файл ss.json успешно сохранён.");
}

// Чтение аргументов из консоли
const args = process.argv.slice(2);
if (args.length !== 4) {
    console.log("Использование: node ssgen.js imageWidth imageHeight frameWidth frameHeight");
    process.exit(1);
}

const [imageWidth, imageHeight, frameWidth, frameHeight] = args.map(Number);
generateSpriteSheet(imageWidth, imageHeight, frameWidth, frameHeight);
