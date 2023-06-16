import { spawn } from 'node:child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [`${__dirname}/files/script.js`, ...args]);

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['firstArg', 'secArg']);
