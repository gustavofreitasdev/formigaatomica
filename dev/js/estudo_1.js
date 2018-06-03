cytoscape({

  container: document.getElementById('cy'),

  elements: [
    { // node n1
      group: 'nodes', // 'nodes' for a node, 'edges' for an edge
      // NB the group field can be automatically inferred for you but specifying it
      // gives you nice debug messages if you mis-init elements


      data: { // element data (put json serialisable dev data here)
        id: 'no1', // mandatory (string or number) id for each element, assigned automatically on undefined
        parent: 'grupo1', // indicates the compound node parent id; not defined => no parent
      },

      // scratchpad data (usually temp or nonserialisable data)
      scratch: {
        _foo: 'bar' // app fields prefixed by underscore; extension fields unprefixed
      },

      position: { // the model position of the node (optional on init, mandatory after)
        x: 100,
        y: 100
      },

      selected: false, // whether the element is selected (default false)

      selectable: true, // whether the selection state is mutable (default true)

      locked: false, // when locked a node's position is immutable (default false)

      grabbable: true, // whether the node can be grabbed and moved by the user

      classes: 'foo bar' // a space separated list of class names that the element has
    },

    { // node n2
      data: {
        id: 'no2'
      },
      renderedPosition: {
        x: 200,
        y: 200
      } // can alternatively specify position in rendered on-screen pixels
    },

    { // node n3
      data: {
        id: 'no3',
        parent: 'grupo1'
      },
      position: {
        x: 123,
        y: 234
      }
    },

    { // node nparent
      data: {
        id: 'grupo1',
        position: {
          x: 200,
          y: 100
        }
      }
    },

    { // edge e1
      data: {
        id: 'aresta1',
        // inferred as an edge because `source` and `target` are specified:
        source: 'no1', // the source node id (edge comes from this node)
        target: 'no2' // the target node id (edge goes to this node)
      }
    }
  ],

  layout: {
    name: 'preset'
  },

  // so we can see the ids
  style: [{
    selector: 'node',
    style: {
      'content': 'data(id)'
    }
  }]

});