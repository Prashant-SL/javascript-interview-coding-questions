const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function retryWithBackoff(fn, retries = 5, base = 500) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt >= retries) throw err;

      const jitter = Math.random() * 200;
      const delay = base * 2 ** attempt + jitter;
      console.log("Retrying in", delay, " seconds", attempt);
      await sleep(delay);
    }
  }
}

retryWithBackoff(fakeDbConnect);

function fakeDbConnect() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const connected = Math.random() < 0.05;

      if (connected) {
        console.log("success", {
          connected: true,
          client: "FakeDB",
          connectedAt: new Date().toISOString(),
        });

        resolve({
          connected: true,
          client: "FakeDB",
          connectedAt: new Date().toISOString(),
        });
      } else {
        console.log("ERROR", "Database connection failed");
        reject(new Error("Database connection failed"));
      }
    }, 1000);
  });
}
