export const delay = delay =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, delay * 1000)
  );

const onTimeout = (delay, cb) => () => {
  cb(new Error("Response timeout"));
};

export const timeout = delay => (req, res, next) => {
  const timer = setTimeout(() => {
    req.timedout = true;

    if (!res.headersSent) {
      req.emit("timeout", delay);

      res.send = () => {};
      res.sendStatus = () => {};
      res.json = () => {};
    }
  }, delay);

  timer.unref();

  req.on("timeout", onTimeout(delay, next));

  req.timedout = false;

  next();
};
