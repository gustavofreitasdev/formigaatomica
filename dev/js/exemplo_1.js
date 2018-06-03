cytoscape({
    // Elemento que irá ser escrito o grafo
    container: document.getElementById('cy'),

    elements: [
        /* Lista de Nós */
        {
            group: 'nodes',
            data: {
                id: 'no-1'
            },
            position: {
                x: 100,
                y: 200
            }
        },
        {
            group: 'nodes',
            data: {
                id: 'no-2'
            },
            position: {
                x: 200,
                y: 200
            }
        },
        {
            group: 'nodes',
            data: {
                id: 'no-3'
            },
            position: {
                x: 123,
                y: 234
            }
        },
        {
            group: 'nodes',
            data: {
                id: 'no-4'
            },
            position: {
                x: 230,
                y: 200
            }
        },
        /*Lista de Arestas */
        {
            data: {
                id: 'aresta-1',
                source: 'no-1',
                target: 'no-2'
            }
        },
        {
            data: {
                id: 'aresta-2',
                source: 'no-2',
                target: 'no-3'
            }
        }
    ],

    layout: {
        name: 'preset'
    },

    style: [{
        selector: 'node',
        style: {
            'cotent': 'data(id)'
        }
    }]
});