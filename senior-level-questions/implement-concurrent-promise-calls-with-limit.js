function mockPromise() {
    const randomNumber = Math.ceil(Math.random() * 10) * 100;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber < 100) {
                reject("Rejected at " + randomNumber);
            } else {
                resolve("Resolved at " + randomNumber);
            }
        }, randomNumber);
    });
}

const tasks = [
    () => mockPromise(),
    () => mockPromise(),
    () => mockPromise(),
    () => mockPromise(),
    () => mockPromise(),
    () => mockPromise(),
];

function promiseWithLimit(tasks, limit) {
    return new Promise((resolve, reject) => {
        let completed = 0;
        let running = 0;
        let nextIndex = 0;
        const result = new Array(tasks.length);

        function next() {
            // Start tasks up to the limit
            while (running < limit && nextIndex < tasks.length) {
                running++;

                // Execute the task function
                Promise.resolve(tasks[nextIndex]())
                    .then((data) => {
                        result[nextIndex] = data;
                        completed++;
                        running--;

                        if (completed === tasks.length) {
                            resolve(result);
                        } else {
                            next();
                        }
                    })
                    .catch((err) => {
                        reject(err);
                    })
                    .finally(() => {
                        nextIndex++;
                    });
            }
        }

        next();
    });
}

// Usage
promiseWithLimit(tasks, 2)
    .then((data) => console.log({ data }))
    .catch((err) => console.error(err));