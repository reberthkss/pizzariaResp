const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
let data;
let precoTotal = 0;



let numPedido = 0;
let url = "mongodb://localhost:27017/";
const client = new MongoClient(url, { useUnifiedTopology: true });


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {

    client.connect((err) => {
        const db = client.db(dbName);

        // Get the documents collection
        const collection = db.collection('documents');
        // Find some documents
        collection.find({
            "nome": "reberth"
        }).toArray(function (err, docs) {
            assert.equal(err, null);
            console.log("Found records and sending");

            data = JSON.stringify(docs);

            // client.close();
            res.send(data);
        });
    })

});

//PIZZAS

app.get("/listapizzas", (req, res) => {

    client.connect((err) => {
        let dbName = "pizzas";
        let db = client.db(dbName);


        findPizza(db, res);




    })
});

app.post("/cadastrarpizza", (req, res) => {

    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let preco = parseFloat(req.body.valor);
    let dbName = 'pizzas';
    client.connect((err) => {
        const db = client.db(dbName);
        insertPizza(db, res, nome, descricao, preco);
    })
})

app.post('/findpizza', (req, res) => {
    let dbName = 'pizzas';
    let query = { nome: req.body.target };

    client.connect((err) => {
        let db = client.db(dbName);

        findPizza(db, res, query);
    });
});


app.post('/updatepizza', (req, res) => {
    const dbName = "pizzas";
    client.connect((err) => {
        const db = client.db(dbName);

        updatePizza(db, req, res);
    })
});

app.post('/excluirpizza', (req, res) => {
    const dbName = "pizzas";

    client.connect((err) => {
        const db = client.db(dbName);
        const target = req.body.nome;
        deletePizza(db, target, res);
    })
});

//CLIENTES

app.get("/listaclientes", (req, res) => {

    client.connect((err) => {
        let dbName = "clientes";
        let db = client.db(dbName);
        let target = {};

        findCliente(db, res, target);




    })
});

///// FAZER UMA LÓGICA AQUI QUE BUSCA O NOME DO ENDEREÇO PELO NÚMERO DO CEP
app.post("/cadastrarcliente", (req, res) => {

    let nome = req.body.nome;
    let telefone = req.body.telefone;
    let cep = req.body.cep;
    let numCasa = req.body.numCasa;
    let pontoReferencia = req.body.pontoReferencia;

    let dbName = 'clientes';
    client.connect((err) => {
        const db = client.db(dbName);
        insertClient(db, res, nome, telefone, cep, numCasa, pontoReferencia);
    })
})

app.post('/procurarcliente', (req, res) => {
    let dbName = 'clientes';
    let query = { nome: req.body.target };

    client.connect((err) => {
        let db = client.db(dbName);

        findCliente(db, res, query);
    });
});


app.post('/atualizarcliente', (req, res) => {
    const dbName = "clientes";
    client.connect((err) => {
        const db = client.db(dbName);

        updateCliente(db, req, res);
    })
});

app.post('/excluircliente', (req, res) => {
    const dbName = "clientes";

    client.connect((err) => {
        const db = client.db(dbName);
        const target = req.body.target;
        deleteCliente(db, target, res);
    })
});
app.post('/getClient', (req, res) => {
    const dbName = 'clientes';
    console.log(typeof req.body.target);
    let query = { telefone: req.body.target };
    client.connect((err) => {
        let db = client.db(dbName);

        findCliente(db, res, query);
    })
});
app.post('/precototal', (req, res) => {
    // let pedidoData = JSON.parse(req.body);]
    // console.log(req.body.target);
    data = JSON.parse(req.body.target);

    client.connect((err) => {

        getPrecoTotal(client, data, res, null, 'cliente');
    });
})
// PEDIDOS
app.post('/novopedido', (req, res) => {

    const dbName = 'pedidos';
    let data = JSON.parse(req.body.target);

    client.connect((err) => {
        const db = client.db(dbName);

        /// VOU ENVIAR OS DADOS DA PIZZA COMO ARRAY.
        //  O ARRAY DE PIZZAS VAI SER -> [{nome:'baiana',quantidade:10},{nome:'peruana',quantidade:20},{nome:'boliviana':quantidade:30}]
        //  Um objeto com o nome e a quantidade

        // let pizzas = req.body.pizzas;



        getNumLastOrder(client, data, res, db, null);

        // getPrecoTotal(client, data, res, req.body.numeroPedido, null);



    });



});

app.post('/getpedidos', (req, res) => {
    const dbName = 'pedidos';

    let query = {};
    let target = parseInt(req.body.target);

    if (req.body.target !== undefined) {
        query = { numPedido: target };
    }





    client.connect((err) => {
        const db = client.db(dbName);
        let pedido = [];
        const collection1 = db.collection('aberto');
        const collection2 = db.collection('andamento');
        const collection3 = db.collection('finalizados');

        collection1.find(query).toArray((err, docs) => {
            for (let i = 0; i < docs.length; i++) {
                pedido.push(docs[i]);
            }
            collection2.find(query).toArray((err, docs) => {
                for (let i = 0; i < docs.length; i++) {
                    pedido.push(docs[i]);
                }

                collection3.find(query).toArray((err, docs) => {
                    for (let i = 0; i < docs.length; i++) {
                        pedido.push(docs[i]);
                    }
                    // console.log(pedido);
                    res.send(pedido);
                })
            })
        })
    })
});

app.post('/updatepedido', (req, res) => {
    let dbName = 'pedidos';
    numPedido = parseInt(req.body.target);
    let data = JSON.parse(req.body.data);
    precoTotal = parseFloat(data[0].precoTotal);
    let quantidade = [data[0].quantidade];

    client.connect((err) => {
        let db = client.db(dbName);

        let collection = db.collection('aberto');

        collection.deleteOne({ numPedido: numPedido }, (err, result) => {

            insertPedido(client, res, numPedido, data, quantidade, () => {
                res.send('Pedido atualizado!');
            })

        })
    })
})
app.post('/despachar', (req, res) => {

    client.connect((err) => {
        despacharPedido(client, req.body.target, res);
    });

})

app.listen(3000, () => {
    console.log('listen in');
});

/// PIZZA

const insertPizza = function (db, res, nome, descricao, preco) {
    // Get the documents collection
    const collection = db.collection('pizzasCadastradas');
    // Insert some documents
    collection.insertOne({ nome: nome, descricao: descricao, preco: preco }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);
        console.log("Pizza inserida no banco");

        res.send("Pizza Cadastrada com sucesso!!!");

    });

}


const findPizza = function (db, res, target) {
    // Get the documents collection
    const collection = db.collection('pizzasCadastradas');
    // Find some documents
    collection.find(target).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Pizzas Encontradas");

        data = docs;

        // console.log(data);
        res.send(data);
    });


}

const deletePizza = function (db, target, res) {
    // Get the documents collection
    const collection = db.collection('pizzasCadastradas');
    // Delete document where a is 3
    collection.deleteOne({ nome: target }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        res.send("pizza deletada com sucesso!");
    });
}


/// FAZER LOGICA PRA VERIFICAR SE TEM UMA PIZZA COM NOME IGUAL ANTES MESMO DE ATUALIZAR
const updatePizza = function (db, req, res) {
    // Get the documents collection
    const collection = db.collection('pizzasCadastradas');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ nome: req.body.target }
        , { $set: { nome: req.body.nome, descricao: req.body.descricao, preco: req.body.valor } }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);

        });

    res.send("atualizado");
}

/// CLIENTE


const insertClient = function (db, res, nome, telefone, cep, numCasa, pontoReferencia) {
    // Get the documents collection
    const collection = db.collection('cadastrados');
    // Insert some documents
    collection.insertOne({ nome: nome, telefone: telefone, cep: cep, numCasa: numCasa, pontoReferencia: pontoReferencia }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);
        console.log("cliente cadastrado");

        res.send("cliente cadastrado com sucesso");

    });

}

const findCliente = function (db, res, target) {
    // Get the documents collection
    const collection = db.collection('cadastrados');
    // Find some documents

    collection.find(target).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("clientes Encontradas");

        data = docs;

        console.log(docs);
        res.send(data);
    });


}
/// FAZER LOGICA PRA VERIFICAR SE TEM UMA PIZZA COM NOME IGUAL ANTES MESMO DE ATUALIZAR
const updateCliente = function (db, req, res) {
    // Get the documents collection
    const collection = db.collection('cadastrados');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ nome: req.body.target }
        , { $set: { nome: req.body.nome, telefone: req.body.telefone, cep: req.body.cep, numCasa: req.body.numCasa, pontoReferencia: req.body.pontoReferencia } }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);

        });

    res.send("atualizado");
}
const deleteCliente = function (db, target, res) {
    console.log(target);
    // Get the documents collection
    const collection = db.collection('cadastrados');
    // Delete document where a is 3
    collection.deleteOne({ nome: target }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log('removido');
        res.send("cliente deletado com sucesso!");
    });
}

/// PEDIDOS


//// PEDIDOS
/////COLLECTIONS -> abertos, andamento, finalizados
//// insert = abertos
//// update = andamento ou finalizados

// pizzas === array de objetos pizzas


const insertPedido = function (client, res, numeroPedido, pizzas, quantidade, callback) {
    console.log('ENTROU NO INSERT PEDIDOOOOO ');
    // Get the documents collection
    const db = client.db('pedidos');
    let status = pizzas[0].status;
    const collection = db.collection(status);
    const telCliente = pizzas[0].telCliente;

    console.log("O STATUS DO PEDIDO É " + status);
    // Values 
    let nomePizzas;
    if (status === 'aberto') {

        for (let j = 0; j < pizzas.length; j++) {
            nomePizzas = [];
            console.log(typeof pizzas[j].nome);
            console.log(typeof nomePizzas);
            nomePizzas.push(pizzas[j].nome);
        }
    } else {
        console.log("ENTROU NO ANDAMENTO");

        nomePizzas = pizzas[0].nome;
    }



    // Insert some documents
    collection.insertOne({ numPedido: numeroPedido, status: status, telCliente: telCliente, pizzas: nomePizzas, quantidade: quantidade, precoTotal: precoTotal }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);
        console.log("pedido inserido no banco");


        callback(db, numeroPedido, res);

    });

}

const getNumLastOrder = function (client, data, res, db, from) {
    console.log("ENTROU GETNUMLASTORDER");
    // Get the documents collection
    const collection1 = db.collection('aberto');
    const collection2 = db.collection('andamento');
    const collection3 = db.collection('finalizados');
    numPedido = 1;
    // Find some documents
    collection1.find({}).sort({ numPedido: -1 }).toArray(function (err, docs) {
        console.log("OK1");
        assert.equal(err, null);
        console.log(docs);
        if (docs.length !== 0) {
            numPedido = docs[0].numPedido + 1;
        }

        console.log(numPedido);
        collection2.find({}).sort({ numPedido: -1 }).toArray((err, docs) => {

            console.log("OK2");
            console.log(docs);
            console.log(docs.length);
            if (docs.length !== 0) {
                if (numPedido <= parseInt(docs[0].numPedido)) {
                    numPedido = parseInt(docs[0].numPedido) + 1;
                };
            }
            console.log(numPedido);

            console.log("OK2.1");
            collection3.find({}).sort({ numPedido: -1 }).toArray((err, docs) => {
                console.log("OK3");
                if (docs.length !== 0) {
                    if (numPedido <= parseInt(docs[0].numPedido)) {
                        numPedido = parseInt(docs[0].numPedido) + 1;
                    }
                }
                console.log(numPedido);
                console.log(docs);

                // if (docs.length === 0) numPedido = 1;


                getPrecoTotal(client, data, res, numPedido, from);
            });


        });



    });



}

const getPrecoTotal = (client, pizzas, res, numPedido, from) => {

    console.log("ENTROU NO GETPRECOTOTAL");

    console.log(numPedido);
    let db = client.db('pizzas');
    let collection = db.collection('pizzasCadastradas');
    // let precoTotal = 0;
    precoTotal = 0;
    let quantidades = [];

    for (let i = 0; i < pizzas.length; i++) {
        let t = 0;
        collection.find({ nome: pizzas[i].nome }).toArray((err, docs) => {
            quantidades.push(pizzas[i].quantidade);
            assert.equal(err, null);
            precoTotal += docs[t].preco * pizzas[i].quantidade;

            let lengthPizza = parseInt(pizzas.length);


            if (i === lengthPizza - 1 && from === null) {
                console.log("ENTROUUUUU");
                insertPedido(client, res, numPedido, pizzas, quantidades, (db, numeroPedido, res) => {
                    res.send('ok');
                });
            }
            if (i === lengthPizza - 1 && from === 'cliente') res.send(precoTotal.toString());

        });


    };



}

// #TODO
////// FAZER A PARTE QUE NAO DEIXA DESPACHAR UM PEDIDO JÁ DESPACHADO!
const despacharPedido = (client, numPedidoTarget, res) => {

    const db = client.db('pedidos');

    const collection = db.collection('aberto');

    collection.find({ numPedido: parseInt(numPedidoTarget) }).toArray((err, docs) => {

        let numPedido = docs[0].numPedido;
        let pizzas = {
            nome: docs[0].pizzas,
            telCliente: docs[0].telCliente,
            quantidade: docs[0].quantidade,
            status: 'andamento'
        };

        console.log(pizzas);

        let pizzasArray = [pizzas];
        let quantidade = docs[0].quantidade;
        precoTotal = docs[0].precoTotal;


        insertPedido(client, res, numPedido, pizzasArray, quantidade, (db, numPedido, res) => {
            const collection = db.collection('aberto');

            collection.deleteOne({ numPedido: parseInt(numPedido) }, (err) => {
                res.send("pedido atualizado!");
            })
        });
    })

}

const insertDocuments = function (db, res) {
    // Get the documents collection
    const collection = db.collection('pizzas');
    // Insert some documents
    collection.insertOne({ pizza: "Portuguesa", descricao: "ervilha e ovo" }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        assert.equal(1, result.ops.length);
        console.log("Pizza inserida no banco");

        res.send("");

    });

}

const findDocuments = function (db, res) {
    // Get the documents collection
    const collection = db.collection('pizzas');
    // Find some documents
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Pizzas Encontradas");

        data = docs;

        // console.log(data);
        res.send(data);
    });


}

const updateDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ a: 2 }
        , { $set: { b: 1 } }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
}

const removeDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Delete document where a is 3
    collection.deleteOne({ nome: "reberth" }, function (err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
}



// numPedido
// pizzas[{ nome, quantidade, precototal }]
// precototal
// bebidas[{nome,}]
// outros[]


