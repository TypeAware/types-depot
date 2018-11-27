'use strict';

const {TypeCreator, symbols, utils} = require('type-creator');

const tc = new TypeCreator();

const v = tc.registerSymbols({
  foo: {value: Symbol('zoom0'), kind:'Dummy1'},
  bar:{value: Symbol('zoom1'), kind:'Dummy2'}
});


exports.entities = tc.createEntities({

});


//  serves the JSON for the API docs generator on the client
exports.serve = tc.createAPIJSON().serve();  // returns middleware that will respond with the json