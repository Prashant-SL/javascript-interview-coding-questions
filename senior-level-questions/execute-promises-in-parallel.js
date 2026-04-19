const createPromise = () => {
  const delay = Math.floor(Math.random() * 10) * 100;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 5) {
        reject("Rejected after" + delay);
      } else {
        resolve("Resolved after" + delay);
      }
    }, delay);
  });
};

const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();
const p4 = createPromise();
const p5 = createPromise();

const tasks = [p1, p2, p3, p4, p5];

const executeParallel = async (tasks, cb) => {
  let result = [];
  let errors = [];

  let completed = 0;

  for (let task = 0; task < tasks.length; task++) {
    tasks[task]
      .then((val) => {
        console.log("val", val);
        result.push(val);
      })
      .catch((err) => {
        console.log("err", err);
        errors.push(err);
      })
      .finally(() => {
        completed++;

        if (completed >= tasks.length) {
          console.log({ result });
          cb(result, errors);
        }
      });
  }
};

executeParallel(tasks, () => {
  console.log("cb");
});
