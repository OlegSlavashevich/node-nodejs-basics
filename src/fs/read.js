import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileToRead = `${__dirname}/files/fileToRead.txt`;

    if (!existsSync(fileToRead))
        throw new Error('FS operation failed');

    const data = await readFile(fileToRead, 'utf8');

    console.log(data);
};

await read();