import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = `${__dirname}/files/fileToWrite.txt`;

    const writableStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writableStream);

    console.log('data to write:')
};

await write();