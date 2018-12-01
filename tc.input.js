'use strict';

const {TypeCreator, symbols, utils} = require('type-creator');


const tc = new TypeCreator();
const {set, setType, setTypeMap} = tc.getTypeUtils();
const {ts, go, java} = tc.getLangSymbols();
const cmn = tc.getCommonSymbols();
const {defs} = tc.getDefaults();

const v = tc.registerSymbols({
  foo: {value: Symbol('zoom0'), kind: 'Dummy1'},
  bar: {value: Symbol('zoom1'), kind: 'Dummy2'}
});


const custom = {
  
  int: setTypeMap({
    golang: 'int8',
    java: 'int',
    typescript: 'number'
  }),
  
  string: setTypeMap({
    golang: 'string',
    java: 'String',
    typescript: 'string'
  }),
  
  bool: setTypeMap({
    golang: 'bool',
    java: 'boolean',
    typescript: 'boolean'
  })
  
};


const ent = tc.registerEntities('default',{
  
  foo: set(go.Entity, cmn.AddPath, {
    
    PUT: set(cmn.AddPath, {
      
      basic: set(cmn.AddPath,ts.Interface, {
        
        req: set(go.File,cmn.AddPath,{
          headers: set(cmn.AddPath,{
            x_requested_by: custom.string
          }),
          body: {
            foo: defs.String,
            bar: defs.Int,
            zoom: defs.Boolean
          }
        }),
        res: set(go.File,{
          headers: {
          }
        })
      }),
      
      tragic: set(ts.Interface,{
        
        req: set(go.File,{
          headers: {
            x_requested_by: custom.string
          },
          body: {
            foo: custom.string
          }
        }),
        res: set(go.File,{
          headers: {
          
          }
        })
      })
    }),
    
    GET: {
      miasmic: set(ts.Interface,{
        
        req: set(go.File,{
          headers: {
            x_requested_by: custom.string
          },
          body: {
            foo: custom.string
          }
        }),
        res: set(go.File,{
          headers: {
          }
        })
      })
    }
  }),
  
  bar: set(go.Entity,{
    PUT: {
      basic: set(ts.Interface,{
        req: set(go.File,{
          headers: {
          
          },
          body: {
            mip: defs.String,
            mop: defs.Int,
            map: defs.Boolean
          }
        }),
        res: set(go.File,{
          headers: {
          }
        })
      })
    },
    
    GET: {
      basic: set(ts.Interface,{
        req: set(go.File,{
          headers: {
          
          },
          body: {
            tip: defs.String,
            top: defs.Int,
            tap: defs.Boolean
          }
        }),
        res: set(go.File,{
          headers: {
          
          }
        })
      })
    }
  }),
  
});

//
// const ent = tc.registerEntities('default', {
//
//   Inner: {
//     Zoom: set([ts.Interface], {})
//   },
//
//   foo: {
//
//     // x: ()=> ent.foo.GET.miasmic,
//
//     PUT: {
//
//       basic: set([go.File],{
//
//         DogPigRoop: set([ts.Interface], {
//           dog: defs.String,
//           pig: defs.Boolean,
//           // roop: [{}],
//           roop: [defs.Object],
//           stoop: [defs.Boolean]
//         }),
//
//         v: set([ts.Interface], {
//           zoom: setType({
//             link: 'DogPigRoop'
//           }),
//           // boom: setArray(inline, [defs.String]),
//           // toom: setArray(inline, [
//           //   []
//           // ]),
//           // faz: setArray(literal,[
//           //   'Entities.Inner.Zoom', 'Froom', 'Star'
//           // ]),
//           path: '/foo',
//         }),
//
//         req: set([go.Struct, ts.Interface], {
//           headers: {
//             'x_requested_by': 'foo'
//           },
//           body: set([],{
//             // foo: 'string',
//             // bar:'number',
//             // zoom: 'boolean'
//             foo: defs.String,
//             bar: defs.Int,
//             zoom: defs.Boolean
//           })
//         }),
//         res: set([go.Struct], {
//           headers: {}
//         })
//       }),
//
//       tragic: set([ts.Interface,go.File], {
//         path: '/foo',
//         req: set([go.Struct], {
//           headers: {
//             'x_requested_by': 'foo'
//           },
//           body: set([],{
//             foo: 'string'
//           })
//         }),
//         res: set([go.Struct], {
//           headers: {}
//         })
//       })
//     },
//
//     GET: {
//       miasmic: set([ts.Interface, go.File], {
//         path: '/foo',
//         req: set([go.Struct], {
//           headers: {
//             'x_requested_by': 'foo'
//           },
//           body: set([],{
//             foo: 'string',
//           })
//         }),
//         res: set([go.Struct], {
//           headers: {}
//         })
//       })
//     }
//   },
//
//
//   bar: {
//     PUT: {
//       basic: set([ts.Interface, go.File], {
//
//         [cmn.Optional]: ['path'],
//
//         path: '/foo',
//         req: set([go.Struct], {
//           headers: {},
//           body: {}
//         }),
//         res: set([go.Struct], {
//           headers: {}
//         })
//       })
//     },
//
//     GET: {
//       basic: set([ts.Interface, go.File], {
//
//         path: '/foo',
//         req: set([go.Struct], {
//
//           headers: {},
//           body: {}
//
//         }),
//         res: set([go.Struct], {
//
//           headers: {}
//
//         })
//       })
//
//     }
//   }
//
// });


exports.tc = tc;