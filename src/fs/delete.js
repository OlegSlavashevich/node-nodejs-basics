import { unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const deleteFilePath = `${__dirname}/files/fileToRemove.txt`;

    if (!existsSync(deleteFilePath))
        throw new Error('FS operation failed');

    await unlink(deleteFilePath);
};

await remove();