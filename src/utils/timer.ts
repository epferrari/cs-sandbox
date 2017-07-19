var timer;

export default timer = {
  t: Date.now(),
  reset() {
    this.t = Date.now();
  },
  log() {
    console.log(Date.now() - this.t);
  }
};
