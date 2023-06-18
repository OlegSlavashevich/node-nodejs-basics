import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    `${__dirname}/files/fileToCompress.txt`
    const fileToDecompress = `${__dirname}/files/archive.gz`;
    const decompressedFilePath = `${__dirname}/files/fileToCompress.txt`;

    const readStream = fs.createReadStream(fileToDecompress);
    const writeStream = fs.createWriteStream(decompressedFilePath);

    const gunZip = zlib.createGunzip();

    readStream.pipe(gunZip).pipe(writeStream);
};

await decompress();