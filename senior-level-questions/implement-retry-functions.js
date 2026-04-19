async function retry(fn, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await fn();
    } catch (err) {
      console.log("This is", attempt, " attempt");
      if (attempt >= retries) {
        throw err;
      }
    }
  }
}

retry(() => {
  // 20% chance that fn will return true
  if (Math.random() < 0.8) {
    throw new Error("Random failure");
  }
  return "Success!";
}, 3);
