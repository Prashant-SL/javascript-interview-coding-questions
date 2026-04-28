function randomSleep() {
    let randomNumber = Math.ceil(Math.random() * 10) * 100;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomNumber < 600) {
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


function myPromiseAllSettled(tasks) {
    let result = [];
    let completed = 0;

    return new Promise((resolve, reject) => {
        tasks.forEach((task, index) => {
            Promise.resolve(task)
                .then((a) => {
                    completed += 1;

                    result[index] = {
                        "status": "fulfilled",
                        "value": a
                    };

                    if (completed >= tasks.length) {
                        resolve(result);
                    }
                })
                .catch((err) => {
                    completed += 1;

                    result[index] = {
                        "status": "rejected",
                        "reason": err
                    };

                    if (completed >= tasks.length) {
                        resolve(result);
                    }
                })
        });
    })
}

myPromiseAllSettled(tasks).then((data) => console.log({ data })).catch((err) => console.log({ err }))