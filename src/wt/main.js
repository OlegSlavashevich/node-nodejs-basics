import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const workerPath = `${__dirname}/worker.js`;
    const cpuCount= os.cpus().length

    const processes = [];

    const n = 10;

    for (let i = n; i < n + cpuCount; i++) {
        processes.push(
            new Promise((resolve) => {
                const worker = new Worker(workerPath);
                worker.postMessage(i);
                worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
                worker.on('error', (error) => resolve({ status: error, data: null }));
            })
        );
    }

    const result = await Promise.all(processes);

    console.log(result);
};

await performCalculations();