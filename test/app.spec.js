import {expect} from 'chai';
import {foo} from '../src/app';

describe('app', () => {

  it('#foo should double', () => {
    const r = foo(33);
    expect(r).to.equal(66);
  });

});
