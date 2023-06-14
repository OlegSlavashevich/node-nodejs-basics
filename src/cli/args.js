const parseArgs = () => {
    const args = process.argv.slice(2);

    const argsAsArray = [];

    for (let i = 0; i < args.length; i += 2) {
        argsAsArray.push([args[i].slice(2), args[i + 1]]);
    }

    const result = argsAsArray.map((ar => `${ar[0]} is ${ar[1]}`)).join(', ');

    console.log(result);
};

parseArgs();