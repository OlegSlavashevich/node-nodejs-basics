import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = `${__dirname}/files/fresh.txt`;

    if (existsSync(filePath))
        throw new Error('FS operation failed');

    await writeFile(filePath, 'I am fresh and young');
};

await create();