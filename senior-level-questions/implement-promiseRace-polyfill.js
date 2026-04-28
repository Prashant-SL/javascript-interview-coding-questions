function randomSleep() {
    let randomNumber = Math.ceil(Math.random() * 10) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber < 5000) {
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


function myPromiseRace(tasks) {

    return new Promise((resolve, reject) => {
        tasks.forEach((task, index) => {
            Promise.resolve(task)
                .then((a) => {
                    // resolvedTasks += 1;
                    // result[index] = a;

                    // if (resolvedTasks >= tasks.length) {
                    //     resolve(result);
                    // }
                    resolve(a);
                })
                .catch((err) => {
                    reject(err);
                })
        });
    })
}


myPromiseRace(tasks).then((data) => console.log({ data })).catch((err) => console.log({ err }))