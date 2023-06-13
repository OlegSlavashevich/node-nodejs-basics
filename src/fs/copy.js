import { existsSync } from 'fs';
import { cp } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceFolder = `${__dirname}/files`;
    const destinationFolder = `${__dirname}/files_copy`;

    if (!existsSync(sourceFolder) || existsSync(destinationFolder))
        throw new Error('FS operation failed');

    await cp(sourceFolder, destinationFolder, { recursive: true });
};

await copy();
