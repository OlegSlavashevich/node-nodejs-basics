import fs from 'fs/promises';
import { existsSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const filePath = `${__dirname}/files/wrongFilename.txt`;
    const targetFilePath = `${__dirname}/files/properFilename.md`;

    if (!existsSync(filePath) || existsSync(targetFilePath))
        throw new Error('FS operation failed');

    await fs.rename(filePath, targetFilePath);
};

await rename();