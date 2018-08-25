class MyClass {
  constructor(options) {
    const defaultOpts = {};
    this.options = Object.assign(defaultOpts, options);
  }

  methodAdd(a, b) {
    return a + b;
  }
}

// module.exports = MyClass;
export default MyClass;