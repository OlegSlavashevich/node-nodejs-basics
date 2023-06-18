import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const sourceFolder = `${__dirname}/files`;

    if (!existsSync(sourceFolder))
        throw new Error('FS operation failed');

    const files = await readdir(sourceFolder);

    console.log(files);
};

await list();