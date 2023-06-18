import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const fileToCompress = `${__dirname}/files/fileToCompress.txt`;
    const compressedFilePath = `${__dirname}/files/archive.gz`;

    const readStream = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(compressedFilePath);

    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();