import { createHash } from 'node:crypto'
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;

    const fileData = await readFile(filePath);

    const hash = createHash('sha256')
        .update(fileData)
        .digest('hex');

    console.log(hash);
};

await calculateHash();