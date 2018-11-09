global['requestAnimationFrame'] = (callback) => {
  // tslint:disable-next-line:no-string-based-set-timeout
  setTimeout(callback, 0);
};
