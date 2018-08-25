import MyClass from '../src/index';

// http://www.chaijs.com/api/bdd/
// https://devhints.io/chai
const { expect } = require('chai');

let instanceMyClass = null;

describe('MyClass', function () {
  beforeEach(() => {
    instanceMyClass = new MyClass();
  });
  it('instanceMyClass', function () {
    expect(instanceMyClass.options).to.be.an('object');
    expect(instanceMyClass).to.be.an.instanceof(MyClass);
  });
  it('instanceMyClass.methodAdd', function () {
    expect(instanceMyClass.methodAdd(1, 1)).to.be.equal(2);
  });
});