function randomSleep() {
    let randomNumber = Math.ceil(Math.random() * 10) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber < 1000) {
                reject("Rejected at " + randomNumber)
            } else {
                resolve("Resolved at " + randomNumber)
            }
        }, randomNumber);
    })
};

const tasks = [
    randomSleep(),
    randomSleep(),
    randomSleep(),
    randomSleep(),
    randomSleep(),
    randomSleep(),
];


function myPromiseAny(tasks) {
    let result = [];
    let errors = [];
    let rejectedTasks = 0;

    return new Promise((resolve, reject) => {
        tasks.forEach((task, index) => {
            Promise.resolve(task)
                .then((a) => {
                    resolve(a);
                })
                .catch((err) => {
                    rejectedTasks += 1;
                    errors[index] = err;

                    if (rejectedTasks >= tasks.length) {
                        reject(errors);
                    }
                })
        });
    })
}


myPromiseAny(tasks).then((data) => console.log({ data })).catch((err) => console.log({ err }))