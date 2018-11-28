'use strict';

const {TypeCreator, symbols, utils} = require('type-creator');


const tc = new TypeCreator();
const {set, setType, setTypeMap} = tc.getTypeUtils();
const {ts,go,java} = tc.getLangSymbols();
const cmn = tc.getCommonSymbols();
const {defs} = tc.getDefaults();

const v = tc.registerSymbols({
  foo: {value: Symbol('zoom0'), kind:'Dummy1'},
  bar:{value: Symbol('zoom1'), kind:'Dummy2'}
});


const ent = tc.registerEntities('default',{
  
  Inner: {
    Zoom: set(ts.Interface,{
    
    })
  },
  
  foo: {
    
    PUT: {
      
      basic: set({
        
        DogPigRoop:  set(ts.Interface,{
          dog: defs.String,
          pig: defs.Boolean,
          roop:[{}],
          stoop: [defs.Boolean]
        }),
        
        v: set(ts.Interface,{
          zoom: setType({
            link: 'DogPigRoop'
          }),
          // boom: setArray(inline, [defaultString]),
          // toom: setArray(inline, [
          //   []
          // ]),
          // faz: setArray(literal,[
          //   'Entities.Inner.Zoom', 'Froom', 'Star'
          // ]),
          path: '/foo',
        }),
        
        req: set(go.Struct, ts.Interface, {
          headers: {
            'x_requested_by': 'foo'
          },
          body: set({
            // foo: 'string',
            // bar:'number',
            // zoom: 'boolean'
            foo: defs.String,
            bar: defs.Int,
            zoom: defs.Boolean
          })
        }),
        res: set(go.Struct, {
          headers: {}
        })
      }),
        
        tragic: set(ts.Interface,{
        path: '/foo',
        req: set(go.Struct,{
          headers: {
            'x_requested_by': 'foo'
          },
          body: set({
            foo: 'string'
          })
        }),
        res: set(go.Struct, {
          headers: {}
        })
      })
    },
    
    GET: {
      miasmic: set(ts.Interface,{
        path: '/foo',
        req: set(go.Struct,{
          headers: {
            'x_requested_by': 'foo'
          },
          body: set({
            foo: 'string',
          })
        }),
        res: set(go.Struct,{
          headers: {}
        })
      })
    }
  },
  
  
  bar: {
    PUT: {
      basic: set(ts.Interface,{
        
        [cmn.Optional]:['path'],
        
        path: '/foo',
        req: set(go.Struct,{
          headers: {},
          body: {}
        }),
        res: set(go.Struct,{
          headers: {}
        })
      })
    },
    
    GET: {
      basic: set(ts.Interface,{
        path: '/foo',
        req: set(go.Struct,{
          headers: {},
          body: {}
        }),
        res: set(go.Struct,{
          headers: {}
        })
      })
      
    }
  }
  




});





exports.tc = tc;