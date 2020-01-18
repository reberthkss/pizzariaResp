
// Cadastrar pizza --> Vai cadastrar pizza no sistema deles e nos outros sistemas
// Editar pizza --> Vai editar as pizzas no sistema deles e nos outros sitemas
// Cadastrar cliente --> só no sistema deles
// Novo pedido --> só no sistema deles
// Despachar pedido --> Vai despachar os pedidos do sistema ou de outro sistema
// Editar pedido --> só no sistema deles


// TO DO
// Tornar clicavel os icones do menu -- OK
// Tornar clicavel o icone do menu -- OK
// Fazer barra de pesquisa funcionar
// Fazer opção de adicionar Pizzas -- 
//-> Tá faltando fazer correções na posição do botão
//-> Tá faltando adicionar evento para quando for clicado "adicionar mais" -- OK
// Fazer opção de Editar pizzas -- 
// Fazer opção de adicionar cliente --
//-> Tá faltando fazer correções pra quando for clicado "adicionar mais"/*  */ -- OK
// Fazer opção de editar cliente -- 
// Fazer opção de Novo pedido --
// Fazer opção de despachar pedido --
// Fazer opção de editar pedido --
// Fazer a tela 2-3 da janela de realizar pedido....
// Criar um footer para segurar os botão e também o preço total do pedido - -OK
// Tem que colocar o metodo de metodo de pagamento na pagina 2-3 ou 3-3
// Remover o recurso do bootstrap 
//  FAZER TODA LOGICA DE CADASTRAR A PIZZA -- OK
// TEM QUE COLOCAR AS QUESTÕES DE TRAVAS NOS FORMULARIOS
////////////////// CADASTRO DE PIZZA
////////////////// CADASTRO DE CLIENTE
////////////////// CADASTRO DE PEDIDO
// Executar a requisição get dos dados da pizza - OK
// FAZER A PARTE PARA EDITAR PIZZAS!!!! -- OK
// ADICIONAR PRECO DA PIZZA NO METODO GETPIZZASCADASTRADAS



///// VARIAVEIS QUE SERÃO DA DATABASE:
//////////// numPedido -> POIS QUANDO CASSO RECARREGUE A PÁGINA, O NAVEGADOR TEM QUE PUXAR TODOS OS PEDIDOS DA DATA BASE
//////////// 

// TO FIX
// Corrigir a posição do botão de finalizar -- 
// PORQUE QUANDO EU REALIZO O APPENDCHILD DO MESMO ELEMENTO MAIS DE UMA VEZ, NÃO FUNCIONA? -- Porque tem que usar o atributo x.appendChild(y.cloneChild(true))
// Corrigir a aparição dos botãos do footer -- OK
let i = 1;
let numPedido = 0; // <<<< ISSO VAI SER UM GLOBAL 

let numPizzaForm = 0; // Essas duas vão ser auxiliares para poder controlaros números no cadastro de pizas
let numClientForm = 0;//Essas duas vão ser auxiliares para poder controlaros números no cadastro de clientes



let AUX = 0;
// let res = 0;

// AUXILIARES DA ANIMAÇÃO
let aux2 = 0;
let animate;

// AUXILIARES PARA REALIZAR A EDIÇÃO DO PEDIDO

let idToChange;
let auxSelect = 0;

// AUXILIARES PARA ADIÇÃO DE PIZZA

let buttonOk = true;

window.onload = () => {
    /*
       let secondPage = document.getElementById("secondPage");
       let cadastrarPizza = document.getElementById("cadastrarPizza");
       let editarPizza = document.getElementById("editarPizza");
       let cadastrarCliente = document.getElementById("cadastrarCliente");
       let editarCliente = document.getElementById("editarCliente");
       let novoPedido = document.getElementById("novoPedido");
       let despacharPedido = document.getElementById("despacharPedido");
       let editarPedido = document.getElementById("editarPedido");
       let menuIcon = document.getElementById("menuNav");
   
   
   
       cadastrarPizza.style.cursor = "pointer";
       editarPizza.style.cursor = "pointer";
       cadastrarCliente.style.cursor = "pointer";
       editarCliente.style.cursor = "pointer";
       novoPedido.style.cursor = "pointer";
       despacharPedido.style.cursor = "pointer";
       editarPedido.style.cursor = "pointer";
       menuIcon.style.cursor = "pointer";
   
       cadastrarPizza.onclick = () => {
           newPage("cadastrarPizza");
       }
   
       editarPizza.onclick = () => {
           newPage('editarPizza');
       }
   
       cadastrarCliente.onclick = () => {
           newPage("cadastrarCliente");
       }
   
       editarCliente.onclick = () => {
           newPage("editarCliente");
       }
   
       novoPedido.onclick = () => {
           newPage("novoPedido");
       }
   
       despacharPedido.onclick = () => {
           newPage("despacharPedido");
       }
   
       editarPedido.onclick = () => {
           newPage("editarPedido");
       }
       */

    getPizzaCadastradas();
    getClientesCadastrados();
    getPedidos();
}


const adicionarPizza = () => {

}

//Cadastrar Pizza - Editar Pizzas - Cadastrar Cliente - Editar Cliente - Novo Pedido - Despachar Pedido - Editar pedido
const newPage = (opt) => {

    // AUXILIARES
    let res;

    // Gerais
    let body = document.getElementById("principalPizza");
    let background = document.createElement("span");
    let bloco = document.createElement("div");
    let container = document.createElement("div");
    let row = document.createElement("div");
    let title = document.createElement("h5");
    let textTitle = document.createElement("b");
    let image = document.createElement("img");
    let quebra = document.createElement("br");
    let adicionarMais = document.createElement("div");
    let imagePlus = document.createElement("img");
    let textAdicionar = document.createElement("b");
    let button = document.createElement("button");

    // Especificos
    //Pizza
    let pizza = document.createElement("form");
    let titlePizza = document.createElement("input");
    let descricaoPizza = document.createElement("input");
    let precoPizza = document.createElement("input");

    // Cliente
    let cliente = document.createElement("div");
    let clientForm = document.createElement('form');
    let nomeCliente = document.createElement("input");
    let telCliente = document.createElement("input");
    let cepCliente = document.createElement("input");
    let numCasaCliente = document.createElement("input");
    let pontoReferenciaCliente = document.createElement("input");

    // Pedido
    // 1-3
    let pedido = document.createElement("div");
    let numTelCliente = document.createElement("input");
    let targetClient = document.createElement("input");
    let enderecoCliente = document.createElement("input");

    // 2-3 -- > TA VAZIO PORQUE EU PENSEI QUE POSSO CRIAR AS PROPRIEDADES DENTRO DOS METODOS SET


    setGeralProps(i,
        body,
        background,
        bloco,
        container,
        row,
        title,
        textTitle,
        image,
        adicionarMais,
        imagePlus,
        textAdicionar,
        button);


    switch (opt) {
        case "cadastrarPizza":
            setPizzaProp(bloco, pizza, titlePizza, descricaoPizza, precoPizza, image, button, adicionarMais);

            adicionarMais.addEventListener("click", () => {
                if (buttonOk) {
                    return alert("Clique no botão finalizar antes de seguir para o proximo cadastro!");
                }
                let novaPizza = document.createElement("form");
                setPizzaProp(bloco, novaPizza, titlePizza, descricaoPizza, precoPizza, image, button, adicionarMais);
                let quebra = document.createElement("br");
                bloco.removeChild(bloco.lastChild);
                novaPizza.appendChild(image);
                novaPizza.appendChild(titlePizza);
                novaPizza.appendChild(descricaoPizza);
                novaPizza.appendChild(quebra);
                novaPizza.appendChild(precoPizza);
                novaPizza.appendChild(button);
                bloco.appendChild(novaPizza);
                bloco.appendChild(adicionarMais);
                buttonOk = true;


            });


            renderNovaPizza(body, background, quebra, textTitle, container, row, bloco, button, adicionarMais, textAdicionar, imagePlus, title, titlePizza, descricaoPizza, precoPizza, pizza, image);
            break;
        case "editarPizza":
            let pizzaDiv = idToChange;

            if (pizzaDiv === undefined || pizzaDiv.indexOf('pizza') === -1) {
                return alert('Por favor, selecione uma pizza para editar!!');
            }

            setEditPizzaProps(bloco, button);

            row.appendChild(bloco);
            container.appendChild(row);
            body.appendChild(background);
            body.appendChild(container);

            break;
        case "cadastrarCliente":
            setClienteProp(cliente, nomeCliente, telCliente, cepCliente, numCasaCliente, pontoReferenciaCliente, image, textTitle, button, clientForm);

            adicionarMais.onclick = () => {
                numClientForm++;
                if (buttonOk) {
                    return alert("Clique no botão finalizar antes!");
                }

                let novoCliente = document.createElement("div");
                setClienteProp(novoCliente, nomeCliente, telCliente, cepCliente, numCasaCliente, pontoReferenciaCliente, image, textTitle, button, clientForm);
                let quebra = document.createElement("br");



                bloco.removeChild(bloco.lastChild);
                clientForm.appendChild(nomeCliente);
                clientForm.appendChild(telCliente);
                clientForm.appendChild(cepCliente);
                clientForm.appendChild(numCasaCliente);
                clientForm.appendChild(pontoReferenciaCliente);
                novoCliente.appendChild(image);
                novoCliente.appendChild(clientForm);
                novoCliente.appendChild(button);
                bloco.appendChild(novoCliente);
                bloco.appendChild(adicionarMais);
                buttonOk = true;
            }
            renderNovoCliente(body, background, textTitle, container, row, bloco, button, adicionarMais, textAdicionar, imagePlus, title, nomeCliente, telCliente, cepCliente, numCasaCliente, pontoReferenciaCliente, cliente, image, clientForm);
            break;
        case "editarCliente":

            let clienteDiv = idToChange;

            if (clienteDiv === undefined || clienteDiv.indexOf('cliente') === -1) {
                return alert('selecione um cliente para editar!');
            }

            setEditClienteProps(bloco, button);
            body.appendChild(background);
            body.appendChild(bloco);
            break;
        case "novoPedido":
            // SE FOR POSSIVEL SETAR TODAS AS PROPRIEDADES VAI CONTINUAR
            res = setPedidoProps(i, body, pedido, bloco, button, numTelCliente, targetClient, enderecoCliente, adicionarMais, textAdicionar, imagePlus);
            if (res) {
                row.appendChild(bloco);
                container.appendChild(row);
                body.appendChild(background);
                body.appendChild(container);
            }
            break;
        case "despacharPedido":
            if (idToChange === undefined || idToChange.indexOf('ped') === -1) {
                return alert('Por favor selecione um pedido');
            }
            // #TOCHECK
            ///// #LOGICA
            /////// Colocar + informações nessa caixa de informação (exemplo: você dseja despachar para o cliente tal, no endereço tal, 5 pizzas....)
            res = confirm('Deseja despachar este pedido?');

            if (res) {
                numPedido = parseInt(idToChange.substring(6));
                const target = "target=" + numPedido;

                const xhttp = new XMLHttpRequest;

                xhttp.open('POST', 'http://localhost:3000/despachar');
                xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

                xhttp.onreadystatechange = () => {
                    if (xhttp.status === 200 && xhttp.readyState === 4) {
                        console.log(xhttp.responseText);
                    }
                }

                xhttp.send(target);
            }

            break;
        case "editarPedido":
            res = setEditPedidoProps(bloco, button);

            if (res) {
                row.appendChild(bloco);
                container.appendChild(row);
                body.appendChild(background);
                body.appendChild(container);
            }
            break;

    }
}

const setPizzaProp = (bloco, pizza, titlePizza, descricaoPizza, precoPizza, image, button, adicionarMais) => {

    let msg = document.createElement("span");

    msg.style.marginLeft = "auto";
    msg.style.marginTop = "auto";
    msg.style.position = "absolute";
    titlePizza.setAttribute("type", "text");
    titlePizza.setAttribute("name", "titlePizza");
    titlePizza.setAttribute("placeholder", "DIGITE AQUI O NOME DA PIZZA");
    titlePizza.setAttribute("class", "nomePizza");
    titlePizza.setAttribute("size", "30");
    titlePizza.style.border = "none";
    titlePizza.style.marginLeft = "58px";

    descricaoPizza.setAttribute("type", "text");
    descricaoPizza.setAttribute("name", "descricaoPizza");
    descricaoPizza.setAttribute("placeholder", "DIGITE AQUI A DESCRICAO DA PIZZA");
    descricaoPizza.setAttribute("class", "descricaoPizza");
    descricaoPizza.setAttribute("size", "40");
    descricaoPizza.style.border = "none";
    descricaoPizza.style.marginLeft = "58px";

    image.src = "assets/imgs/icons/pizza.png";

    precoPizza.setAttribute("type", "text");
    precoPizza.setAttribute("name", "valorPizza");
    precoPizza.setAttribute("placeholder", "DIGITE AQUI O VALOR DA PIZZA");
    precoPizza.setAttribute("size", "40");
    precoPizza.setAttribute("class", "descricaoPizza");
    precoPizza.style.marginLeft = "58px";
    precoPizza.style.border = "none";

    pizza.style.paddingBottom = "50px";
    pizza.style.borderBottom = "0.5px solid grey";
    pizza.style.marginTop = "50px";
    pizza.style.marginLeft = "30px";
    pizza.setAttribute('method', 'POST');
    pizza.setAttribute('name', 'formPizza' + numPizzaForm);

    button.setAttribute('type', 'submit');






    /// TODO
    // FAZER TODA LOGICA DE CADASTRAR A PIZZA NO SERVIDOR
    button.onclick = () => {

        let res = registerPizza();

        if (res) {
            numPizzaForm++;

            for (let j = pizza.childNodes.length - 1; j >= 0; j--) {
                pizza.removeChild(pizza.childNodes[j]);
            }
            msg.innerHTML = "PIZZA CADASTRADA COM SUCESSO!";
            pizza.appendChild(msg);
            buttonOk = false;
        } else {
            alert("Houve um erro no registro da pizza! Tente novamente!");
        }

    };

    return;
}

const setClienteProp = (cliente, nomeCliente, telCliente, cepCliente, numCasaCliente, pontoReferenciaCliente, image, textTitle, button, clientForm) => {


    clientForm.setAttribute('method', 'POST');
    clientForm.setAttribute('name', 'clienteForm' + numClientForm);

    // cliente.style.paddingBottom = "100px";
    cliente.style.borderBottom = "0.5px solid grey";
    // cliente.style.marginTop = "50px";
    // cliente.style.marginLeft = "30px";
    cliente.style.height = "221px";

    nomeCliente.style.marginLeft = "200px";
    nomeCliente.style.marginTop = "50px";
    nomeCliente.style.border = "none";
    nomeCliente.setAttribute("placeholder", "NOME DO CLIENTE AQUI");
    nomeCliente.setAttribute("name", "clienteName");
    nomeCliente.setAttribute("size", "19");

    telCliente.style.marginLeft = "200px";
    telCliente.style.border = "none";
    telCliente.setAttribute("placeholder", "TEL. DO CLIENTE AQUI");
    telCliente.setAttribute("name", "telCliente");
    telCliente.setAttribute("size", "19");

    cepCliente.style.marginLeft = "200px";
    cepCliente.style.border = "none";
    cepCliente.setAttribute("placeholder", "CEP DO CLIENTE AQUI");
    cepCliente.setAttribute("name", "cepCliente");
    cepCliente.setAttribute("size", "19");

    numCasaCliente.style.marginLeft = "200px";
    numCasaCliente.style.border = "none";
    numCasaCliente.setAttribute("placeholder", "NUM. CASA AQUI");
    numCasaCliente.setAttribute("name", "numCasaCliente");
    numCasaCliente.setAttribute("size", "19");

    pontoReferenciaCliente.style.marginLeft = "200px";
    pontoReferenciaCliente.style.border = "none";
    pontoReferenciaCliente.setAttribute("placeholder", "PONTO DE REFERENCIA");
    pontoReferenciaCliente.setAttribute("name", "pontoReferenciaCliente");
    pontoReferenciaCliente.setAttribute("size", "19");



    image.src = "assets/imgs/icons/customer.png";
    image.style.height = "200px";
    image.style.width = "200px";
    textTitle.innerHTML = "Cadastrar Cliente";

    button.setAttribute('type', 'submit');
    button.onclick = () => {
        let msg = document.createElement("span");



        let res = registerClient();

        //# TODO
        /// #DATABASE
        ///// FAZER A PARTE QUE VAI TRATAR OS ERROS
        if (res) {
            for (let j = cliente.childNodes.length - 1; j >= 0; j--) {
                cliente.removeChild(cliente.childNodes[j]);
            }

            msg.innerHTML = "Cliente cadastrado com sucesso!!!";
            cliente.appendChild(msg);
            cliente.style.height = "auto";
            buttonOk = false;
        }

    };

    button.style.marginLeft = "200px";

}
function setGeralProps(i, body, background, bloco, container, row, title, textTitle, image, adicionarMais, imagePlus, textAdicionar, button) {
    container.setAttribute("class", "container-fluid");

    row.setAttribute("class", "row px-lg-5");

    adicionarMais.style.marginTop = "50px";
    adicionarMais.style.marginLeft = "110px";
    adicionarMais.style.cursor = "pointer";

    bloco.setAttribute("class", "col page shadow");
    bloco.style.height = "768px";
    bloco.style.position = "absolute";
    bloco.style.width = "417px";
    bloco.style.marginTop = "63px";


    background.style.backgroundColor = "black";
    background.style.height = "93.8%";
    background.style.width = "100%";
    background.style.position = "fixed";
    background.style.opacity = "50%";
    background.onclick = () => {
        i = 0;
        body.removeChild(body.lastChild);
        body.removeChild(body.lastChild);
    }

    title.setAttribute("class", "tituloBloco");


    textAdicionar.innerHTML = "Adicionar mais";
    textAdicionar.style.marginLeft = "15px";

    imagePlus.src = "assets/imgs/icons/Plus.png";
    imagePlus.style.display = "block";
    imagePlus.style.cssFloat = "left";

    image.setAttribute("class", "iconPizza");
    image.style.position = "absolute";
    image.style.display = "block";
    image.style.marginTop = "15px";
    image.style.marginLeft = "auto";
    image.style.cssFloat = "left";
    // image.style.width = "153.6px";
    // image.style.height = "173px";

    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.border = "none";
    button.style.marginTop = "5px";
    button.innerHTML = "Finalizar";
}

function render() {

    for (let i = 0; i < arguments.length; i++) {

    }
}

function renderNovaPizza(body, background, quebra, textTitle, container, row, bloco, button, adicionarMais, textAdicionar, imagePlus, title, titlePizza, descricaoPizza, precoPizza, pizza, image) {
    pizza.appendChild(image);
    pizza.appendChild(titlePizza);
    pizza.appendChild(descricaoPizza);
    pizza.appendChild(quebra);
    pizza.appendChild(precoPizza);
    pizza.appendChild(button);
    title.appendChild(textTitle);
    bloco.appendChild(title);
    bloco.appendChild(pizza);
    adicionarMais.appendChild(imagePlus);
    adicionarMais.appendChild(textAdicionar);
    bloco.appendChild(adicionarMais);
    row.appendChild(bloco);
    container.appendChild(row);
    body.appendChild(background);
    body.appendChild(container);



}

function renderNovoCliente(body, background, textTitle, container, row, bloco, button, adicionarMais, textAdicionar, imagePlus, title, nomeCliente, telCliente, cepCliente, numCasaCliente, pontoReferenciaCliente, cliente, image, clientForm) {


    clientForm.appendChild(nomeCliente);
    clientForm.appendChild(telCliente);
    clientForm.appendChild(cepCliente);
    clientForm.appendChild(numCasaCliente);
    clientForm.appendChild(pontoReferenciaCliente);
    adicionarMais.appendChild(imagePlus);
    adicionarMais.appendChild(textAdicionar);
    title.appendChild(textTitle);
    cliente.appendChild(image);
    cliente.appendChild(clientForm);
    cliente.appendChild(button);
    bloco.appendChild(title);
    bloco.appendChild(cliente);
    bloco.appendChild(adicionarMais);
    row.appendChild(bloco);
    container.appendChild(row);
    body.appendChild(background);
    body.appendChild(container);
}

const setPedidoProps = (i, body, pedido, bloco, buttonNext, numTelCliente, targetClient, enderecoCliente, adicionarMais, textAdicionar, imagePlus) => {
    // #DATABASE
    // CHAMADA AJAX PRA PROCURAR NO BANCO DE DADOS ALGUM CLIENTE COM O MESMO NUMERO DE TELEFONE E SE ENCONTRAR ARMAZENAR OS DADOS DA CHAMADA
    // TODA VEZ QUE OCORRER UM CLICK NO BOTÃO VOLTAR, OS DADOS DIGITADOS SERÃO ARMAZENADOS NO LOCAL STORAGE
    // QUANDO INICIALIZAR ESTÁ  FUNÇÃO SERÁ INICIADA UMA BUSCA NAS VARIAVEIS LOCAIS PARA VERIFICAR SE TINHA ALGUM VALOR PREENCHIDO


    // DIVS
    let pizzasDiv = document.createElement("div");
    let bebidasDiv = document.createElement("div");
    let outrosDiv = document.createElement("div");
    let revisaoDiv = document.createElement("div");
    let newOrder = document.createElement("div");

    newOrder.setAttribute("class", "col page shadow novoPedido");


    // footer
    let foooter = document.createElement("div");
    let buttonBack = document.createElement("button");
    let precoTotalSpan = document.createElement("span");

    buttonBack.style.backgroundColor = "red";
    buttonBack.style.color = "white";
    buttonBack.style.border = "none";
    buttonBack.style.marginTop = "5px";
    buttonBack.innerHTML = "Voltar";
    buttonBack.style.position = "absolute";
    buttonBack.style.bottom = "20px";
    buttonBack.style.right = "120px";

    buttonNext.innerHTML = "Prosseguir";
    buttonNext.style.right = "20px";
    buttonNext.style.bottom = "20px";
    buttonNext.style.position = "absolute";
    buttonNext.style.width = "90px";
    buttonNext.setAttribute('disabled', '');
    buttonNext.style.opacity = "0.3";

    foooter.appendChild(buttonBack);
    foooter.appendChild(buttonNext);


    // NOVO PEDIDO



    buttonNext.onclick = () => {
        const xhttp = new XMLHttpRequest;
        foooter.appendChild(buttonBack);
        foooter.appendChild(buttonNext);
        let pedidosDiv = document.getElementById("pedidosDiv");
        let res;
        if (i === 3) {
            res = confirm("confirma?");
        }

        if (res) {
            //#DATABASE
            // PEGAR TODAS AS INFORMAÇÕES, E PLOTAR EM UMA DIV SÓ E COLOCAR NA TELA INICIAL DE PEDIDOS;
            // FAZ AQUI UMA CHAMADA XHTTP PARA REALIZAR O PEDIDO NO SERVIDOR

            const xhttp = new XMLHttpRequest;
            let pedidoObj = {
                nome: pizzaList.value,
                quantidade: quantidade.value,
                telCliente: numTelCliente.value,
                status: "aberto"
            };
            let pedidoData = [];
            pedidoData.push(pedidoObj);

            let target = "target=" + JSON.stringify(pedidoData);


            xhttp.open('POST', 'http://localhost:3000/novopedido');
            xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            xhttp.onreadystatechange = () => {
                if (xhttp.status === 200 && xhttp.readyState === 4) {
                    numPedido = parseInt(xhttp.responseText);
                    //#DATABASE
                    // AQUI EMBAIXO AAS INFORMAÇÕES VAO SER CONSULTADAS NO BANCO DE DADOS



                    body.removeChild(body.lastChild);
                    body.removeChild(body.lastChild);

                    getPedidos();

                }
            }
            xhttp.send(target);


            return;
        } else {
            if (i === 3) {
                // O PEDIDO VAI SER UM ARRAY
                // VAI TER UM ARRAY COM TODOS OS PEDIDOS ATIVOS
                // O NÚMERO ATUAL DO PEDIDO VAI SER O TAMANHO DO ARRAY ANTERIOR
                // numPedido = array.length

                stringPedido.innerHTML = "Pedido " + numPedido;

                return;
            }
        }

        ////#TOcheck
        if (i == 0) {
            console.log("entrou");
        }

        let aux;


        for (aux = bloco.childNodes.length - 1; aux >= 0; aux--) {
            bloco.removeChild(bloco.childNodes[aux]);
        }

        // console.log(i);
        switch (i) {

            case 1:
                pizzasDiv.appendChild(pizzaHead);



                xhttp.open('GET', 'http://localhost:3000/listapizzas');
                xhttp.onreadystatechange = (callback) => {
                    if (xhttp.status === 200 && xhttp.readyState === 4) {
                        let pizzas = JSON.parse(xhttp.responseText);
                        // ESSE FOR VAI BUSCAR AS PIZZAS CADASTRADAS NO SISTEMA E VAI GERAR UMA LISTA 
                        for (let x = 0; x < pizzas.length; x++) {
                            let optionList = document.createElement("option");
                            optionList.value = pizzas[x].nome;
                            optionList.innerHTML = pizzas[x].nome;
                            pizzaList.appendChild(optionList);
                        }


                    }
                }
                xhttp.send();


                for (let x = 0; x < 10; x++) {
                    let optionList = document.createElement("option");

                    optionList.value = x + 1;
                    optionList.innerHTML = x + 1;

                    quantidade.appendChild(optionList);
                }

                pizzasDiv.appendChild(pizzaList);
                pizzasDiv.appendChild(quantidade);
                // pizzasDiv.appendChild(adicionarMais);
                bloco.appendChild(pizzasDiv);

                // // bebidasDiv.appendChild(bebidaHead);
                // // // ESSE FOR VAI BUSCAR AS BEBIDAS CADASTRADAS NO SISTEMA E VAI GERAR UMA LISTA 
                // // for (let x = 0; x < 5; x++) {
                // //     let optionList = document.createElement("option");
                // //     optionList.value = x;
                // //     optionList.innerHTML = x;
                // //     bebidasList.appendChild(optionList);
                // // }
                // // bebidasDiv.appendChild(bebidasList);
                // // // bebidasDiv.appendChild(adicionarMais.cloneNode(true));
                // // bloco.appendChild(bebidasDiv);


                // outrosDiv.appendChild(outrosHead);
                // // ESSE FOR VAI BUSCAR AS OUTRAS OPÇÕES CADASTRADAS NO SISTEMA E VAI GERAR UMA LISTA 
                // for (let x = 0; x < 5; x++) {
                //     let optionList = document.createElement("option");
                //     optionList.value = x;
                //     optionList.innerHTML = x;
                //     outrosList.appendChild(optionList);
                // }
                // outrosDiv.appendChild(outrosList);
                // // outrosDiv.appendChild(adicionarMais.cloneNode(true));
                // bloco.appendChild(outrosDiv);

                bloco.appendChild(foooter);

                i++;
                break;
            case 2:
                buttonNext.innerHTML = "Finalizar";

                // #TODO
                ////// Criar um array para armazenar todas as pizzas selecionadas e a quantidade
                /////////ARRAY DE OBJETOS;

                let pedidoData = {
                    nome: pizzaList.value,
                    quantidade: quantidade.value
                };

                let pedidosArray = [];

                pedidosArray.push(pedidoData);

                let target = "target=" + JSON.stringify(pedidosArray);



                xhttp.open('POST', 'http://localhost:3000/precototal');
                xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
                xhttp.onreadystatechange = () => {
                    if (xhttp.status === 200 && xhttp.readyState === 4) {

                        clientName.value = targetClient.value;
                        telPhoneClient.value = numTelCliente.value;
                        addressClient.value = enderecoCliente.value;

                        let descricaoPedido = "Pizza " + pizzaList.value + " - " + "Quantidade: " + quantidade.value;

                        pizzaSelecionada.value = descricaoPedido;
                        precoTotalPizza.value = xhttp.responseText;

                        revisaoDiv.appendChild(revisaoDoPedido);
                        revisaoDiv.appendChild(nomeClienteRev);
                        revisaoDiv.appendChild(clientName);
                        revisaoDiv.appendChild(telefoneClienteRev);
                        revisaoDiv.appendChild(telPhoneClient);
                        revisaoDiv.appendChild(enderecoClienteRev);
                        revisaoDiv.appendChild(addressClient);
                        revisaoDiv.appendChild(revisaoDasInformacoesClient);
                        revisaoDiv.appendChild(pizzaSelecionada);
                        // revisaoDiv.appendChild(bebidaSelecionada);
                        revisaoDiv.appendChild(revisaoPreco);
                        revisaoDiv.appendChild(precoTotalPizza);
                        // revisaoDiv.appendChild(precoTotalBebida);
                        // revisaoDiv.appendChild(precoTotalOutro);

                        bloco.appendChild(revisaoDiv);
                        bloco.appendChild(foooter);
                        i++;
                    }
                }

                xhttp.send(target);


                break;
            case 3:
                // AQUI VAI FAZER UMA REQUISIÇÃO AJAX PARA ENVIAR OS DADOS DO PEDIDO PARA O BANCO DE DADOS/XML
                let res; // RES vai ser o resultado do processo de armazenamento no banco de dados
                // i = 1;





                if (res) {


                    //if res ? 2x(duas vezes) -> body.removeChild(body.lastChild);
                    body.removeChild(body.lastChild);
                    body.removeChild(body.lastChild);


                }
                break;

        }




    }

    buttonBack.onclick = () => {

        // console.log(i);
        i--;

        foooter.appendChild(buttonBack);
        foooter.appendChild(buttonNext);

        switch (i) {
            case 0:
                body.removeChild(body.lastChild);
                body.removeChild(body.lastChild);
                break;
            case 1:


                for (let aux = bloco.childNodes.length - 1; aux >= 0; aux--) {
                    bloco.removeChild(bloco.childNodes[aux]);
                }


                bloco.appendChild(numTelCliente);
                bloco.appendChild(targetClient);
                bloco.appendChild(enderecoCliente);
                bloco.appendChild(foooter);
                break;
            case 2:

                for (let aux = bloco.childNodes.length - 1; aux >= 0; aux--) {
                    bloco.removeChild(bloco.childNodes[aux]);
                }
                buttonNext.innerHTML = "Prosseguir";
                bloco.appendChild(pizzasDiv);
                bloco.appendChild(bebidasDiv);
                bloco.appendChild(outrosDiv);
                bloco.appendChild(foooter);

                break;
            case 3:

                bloco.appendChild(foooter);
                break;

        }
    }

    // div content - HEAD
    // 2 - 3
    let pizzaHead = document.createElement("h5");
    let bebidaHead = document.createElement("h5");
    let outrosHead = document.createElement("h5");
    // 3 - 3
    let revisaoDoPedido = document.createElement("h5");
    let revisaoDasInformacoesClient = document.createElement("h5");
    let revisaoPreco = document.createElement("h5");
    let nomeClienteRev = document.createElement('h6');
    let telefoneClienteRev = document.createElement('h6');
    let enderecoClienteRev = document.createElement('h6');

    let clientName = document.createElement("input");
    let telPhoneClient = document.createElement("input");
    let addressClient = document.createElement("input");

    let bebidaSelecionada = document.createElement("input");
    let outroSelecionada = document.createElement("input");
    let pizzaSelecionada = document.createElement("input"); // NA ATRIBUIÇÃO, FAZER UM FOR PARA BUSCAR TODAS AS PIZZAS CADASTRADAS E ARMAZENAR AS INFORMAÇÕES NUM ARRAY
    // let pizzaSelecionada = []; -- > VAR GLOBAL
    // for(let j = xhtppresponse.lenght - 1 ; j > 0 ; j++)
    // pizzaSelecionada.push(xhttpresponse[j])
    let precoTotalPizza = document.createElement("input");
    let precoTotalBebida = document.createElement("input");
    let precoTotalOutro = document.createElement("input");

    let stringPedido = document.createElement("span");



    pizzaHead.setAttribute("class", "title");
    bebidaHead.setAttribute("class", "title");
    outrosHead.setAttribute("class", "title");
    revisaoDoPedido.setAttribute("class", "title");
    revisaoDasInformacoesClient.setAttribute("class", "title");
    revisaoPreco.setAttribute("class", "title");

    clientName.setAttribute("disabled", "");
    telPhoneClient.setAttribute("disabled", "");
    addressClient.setAttribute("disabled", "");
    pizzaSelecionada.setAttribute("disabled", "");
    bebidaSelecionada.setAttribute("disabled", "");
    outroSelecionada.setAttribute("disabled", "");
    precoTotalPizza.setAttribute("disabled", "");
    precoTotalBebida.setAttribute("disabled", "");
    precoTotalOutro.setAttribute("disabled", "");


    pizzaHead.innerHTML = "<b>Pizzas</b>";
    bebidaHead.innerHTML = "<b>Bebidas</b>";
    outrosHead.innerHTML = "<b>Opções adicionais</b>";
    revisaoPreco.innerHTML = "<b>Revisão do Preço</b>";
    revisaoDoPedido.innerHTML = "<b>Revisão do Cliente</b>";
    revisaoDasInformacoesClient.innerHTML = "<b>Revisão do Pedido</b>";
    nomeClienteRev.innerHTML = "Nome";
    telefoneClienteRev.innerHTML = "Telefone";
    enderecoClienteRev.innerHTML = "Endereço";


    // LISTS
    let pizzaList = document.createElement("select");
    let bebidasList = document.createElement("select");
    let outrosList = document.createElement("select");
    let quantidade = document.createElement("select");



    /// EU NAO LEMBRO PORQUE EU FIZ ISSO - 24/12
    pizzaList.onchange = () => {
        (pizzaList.value === Pizza1.num) ? precoTotal += parseFloat(Pizza1.preco) : "";
        (pizzaList.value === Pizza2.num) ? precoTotal += parseFloat(Pizza2.preco) : "";

        console.log(precoTotal);
    }

    // CONTADORES
    let precoTotal = 0;


    // TO DO
    // VAI OBTER DADOS DA REQUIÇÃO AJAX CASO EXISTA UM CLIENTE COM O NÚMERO ESPECIFICADO PELO CAMPO

    targetClient.setAttribute("disabled", "");
    enderecoCliente.setAttribute("disabled", "");
    numTelCliente.setAttribute("placeholder", "DIGITE O NUMERO DO TELEFONE");

    enderecoCliente.innerHTML = "cde<br />";
    targetClient.innerHTML = "abc";

    adicionarMais.appendChild(imagePlus);
    adicionarMais.appendChild(textAdicionar);

    bloco.style.marginLeft = "548px";


    numTelCliente.onchange = () => {
        // VOU COLOCAR A REQUISIÇÃO DO AJAX AQUI PARA OBTER O VALOR DO CAMPO E PROCURAR NA DATABASE
        const xhttp = new XMLHttpRequest;
        const target = 'target=' + numTelCliente.value;

        xhttp.open('POST', 'http://localhost:3000/getClient');
        xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

        xhttp.onreadystatechange = () => {
            if (xhttp.status === 200 && xhttp.readyState === 4) {

                let cliente = JSON.parse(xhttp.responseText);
                if (cliente.length === 0) return alert('nenhum cliente cadastrado com esse numero');
                targetClient.value = cliente[0].nome;
                enderecoCliente.value = cliente[0].cep + " " + cliente[0].numCasa;
                buttonNext.removeAttribute('disabled');
                buttonNext.style.opacity = '1';
            }
        }

        xhttp.send(target);
        // targetClient.setAttribute("value", numTelCliente.value); /*<- AQUI VAI SER A VARIAVEL OBTIDA PELO AJAX*/
    }


    bloco.appendChild(telefoneClienteRev);
    bloco.appendChild(numTelCliente);
    bloco.appendChild(nomeClienteRev);
    bloco.appendChild(targetClient);
    bloco.appendChild(enderecoClienteRev);
    bloco.appendChild(enderecoCliente);
    bloco.appendChild(foooter);
    return 1;
}


const setEditPedidoProps = (bloco, buttonNext) => {



    if (idToChange === undefined || idToChange.indexOf('pedi') === -1) {
        alert("POR FAVOR SELECIONE UM PEDIDO PARA EDITAR!");
        return 0;
    }

    ///// #TODO
    /////// FAZER AS AÇÕES DE CLICK DO MOUSE
    numPedido = parseInt(idToChange.substring(6));
    const xhttp = new XMLHttpRequest;
    let target = "target=" + numPedido;
    let img = document.createElement('img');

    let revisaoDiv = document.createElement("div");
    //3 - 3
    let revisaoDoPedido = document.createElement("h5");
    let revisaoDosDadosDoCliente = document.createElement('h4');
    let revisaoDasInformacoesClient = document.createElement("h5");
    let revisaoDosDadosDoPedido = document.createElement('h4');
    let revisaoDosDadosDoPreco = document.createElement('h4');



    let clientName = document.createElement("input");
    let telPhoneClient = document.createElement("input");
    let addressClient = document.createElement("input");




    let spanClient = document.createElement('p');
    let spanTelPhoneClient = document.createElement('p');
    let spanAddressClient = document.createElement('p');

    let Client = document.createElement('div');
    let Telefone = document.createElement('div');
    let Endereco = document.createElement('div');
    let Pizza = document.createElement('div');

    spanClient.innerHTML = "Cliente";
    spanTelPhoneClient.innerHTML = "Telefone";
    spanAddressClient.innerHTML = "Endereço";

    let inputsClients = [clientName, telPhoneClient, addressClient];
    let inputsClientsTxt = [spanClient, spanTelPhoneClient, spanAddressClient];
    let inputClientsDiv = [Client, Endereco, Telefone];

    // let bebidaSelecionada = document.createElement("input");
    // let outroSelecionada = document.createElement("input");
    let pizzaSelecionada = document.createElement("input");
    let quantidade = document.createElement('input');
    let quantidadeAnterior;

    let inputsPizzas = [pizzaSelecionada];
    // /\
    // |    <-- É UMA SETA PRA CIMA referenciando  A PIZZA SELECIONADA
    // NA ATRIBUIÇÃO, FAZER UM FOR PARA BUSCAR TODAS AS PIZZAS CADASTRADAS E ARMAZENAR AS INFORMAÇÕES NUM ARRAY
    // let pizzaSelecionada = []; -- > VAR GLOBAL
    // for(let j = xhtppresponse.lenght - 1 ; j > 0 ; j++)
    // pizzaSelecionada.push(xhttpresponse[j])
    let precoTotalPizza = document.createElement("input");
    // let precoTotalBebida = document.createElement("input");
    // let precoTotalOutro = document.createElement("input");

    let inputsPrecoTotal = [precoTotalPizza];




    // footer
    let footer = document.createElement("div");
    let buttonBack = document.createElement("button");
    let precoTotalSpan = document.createElement("span");

    buttonBack.style.backgroundColor = "red";
    buttonBack.style.color = "white";
    buttonBack.style.border = "none";
    buttonBack.style.marginTop = "5px";
    buttonBack.innerHTML = "Voltar";
    buttonBack.style.position = "absolute";
    buttonBack.style.bottom = "20px";
    buttonBack.style.right = "120px";

    buttonBack.onclick = () => {
        document.body.removeChild(document.body.lastChild);
        document.body.removeChild(document.body.lastChild);
    }

    buttonNext.innerHTML = "Prosseguir";
    buttonNext.style.right = "20px";
    buttonNext.style.bottom = "20px";
    buttonNext.style.position = "absolute";
    buttonNext.style.width = "90px";

    buttonNext.onclick = () => {
        let pedidoObj = {
            nome: document.getElementById('pizzas').value,
            quantidade: document.getElementById('quantidade').value,
            telCliente: telPhoneClient.value,
            precoTotal: (parseFloat(precoTotalPizza.value) / parseInt(quantidadeAnterior)) * parseInt(document.getElementById('quantidade').value),
            status: "aberto"
        };
        let pedidoData = [];
        pedidoData.push(pedidoObj);

        let Target = "target=" + numPedido + "&data=" + JSON.stringify(pedidoData);

        xhttp.open('POST', 'http://localhost:3000/updatepedido');
        xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                document.body.removeChild(document.body.lastChild);
                document.body.removeChild(document.body.lastChild);
            }
        }
        xhttp.send(Target);


    }
    footer.appendChild(buttonBack);
    footer.appendChild(buttonNext);

    revisaoDoPedido.setAttribute("class", "title");
    revisaoDasInformacoesClient.setAttribute("class", "title");

    revisaoDosDadosDoCliente.setAttribute('class', 'sub-title');
    revisaoDosDadosDoPedido.setAttribute('class', 'sub-title');
    revisaoDosDadosDoPreco.setAttribute('class', 'sub-title');

    clientName.setAttribute("disabled", "");
    telPhoneClient.setAttribute("disabled", "");
    addressClient.setAttribute("disabled", "");
    pizzaSelecionada.setAttribute("disabled", "");
    quantidade.setAttribute('disabled', '');
    precoTotalPizza.setAttribute("disabled", "");


    clientName.id = "clientName";
    telPhoneClient.id = "telPhoneClient";
    addressClient.id = "addressClient";
    pizzaSelecionada.id = "pizzaSelecionada";
    quantidade.id = "quantidade";
    precoTotalPizza.id = "precoTotalPizza";



    /// #TODO
    /////// CORRIGIR O EFEITO DE SELEÇÃO DOS PEDIDOS. -- OK
    ///////// TA BUGADO  --OK
    //////////////// SELECIONAR UM PEDIDO, DEPOIS SELECIONAR OUTRO O ANTERIOR VOLTA AO NORMAL MAS O QUE FOI CLICADO NAO FICA COM EFEITO
    //////////////// E DEPOIS SE SELECIONAR UMA PIZZA POR EXEMPLO, O PEDIDO NAO DES-SELECIONA

    ////// TEM QUE FAZER A OPÇÃO DE CLICAR NO BOTÃO PARA ATUALIZAR AS INFORMAÇÕES DO PEDIDO
    //////// SÓ PODE EDITAR O NÚMERO DO TELEFONE DO CLIENTE QUE VAI REALIZAR O PEDIDO
    ///////  


    revisaoDoPedido.innerHTML = "<b>Revisão do Cliente</b>";
    revisaoDasInformacoesClient.innerHTML = "<b>Revisão do Pedido</b>";

    revisaoDosDadosDoCliente.innerHTML = "Revisão dos dados do Cliente";
    revisaoDosDadosDoPedido.innerHTML = "Revisão dos dados do Pedido";
    revisaoDosDadosDoPreco.innerHTML = "Revisão do Preço";

    quantidade.style.width = "50px";
    quantidade.style.marginLeft = "10px";

    bloco.style.marginLeft = "548px";


    img.src = "assets/imgs/icons/edit.png";
    img.style.cursor = "pointer";
    img.onclick = () => {
        telPhoneClient.removeAttribute('disabled');
    }

    telPhoneClient.onchange = () => {

        target = "target=" + telPhoneClient.value;

        xhttp.open('POST', 'http://localhost:3000/getClient');

        xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                let cliente = JSON.parse(xhttp.responseText);
                clientName.value = cliente[0].nome;
                addressClient.value = cliente[0].cep + " - " + cliente[0].numCasa;
                telPhoneClient.setAttribute('disabled', '');
            }
        }

        xhttp.send(target);
    }
    revisaoDiv.appendChild(revisaoDasInformacoesClient);
    revisaoDiv.appendChild(revisaoDosDadosDoCliente);

    Telefone.appendChild(spanTelPhoneClient);
    Telefone.appendChild(telPhoneClient);
    Telefone.appendChild(img);

    Client.appendChild(spanClient);
    Client.appendChild(clientName);

    Endereco.appendChild(spanAddressClient);
    Endereco.appendChild(addressClient);

    revisaoDiv.appendChild(Telefone);
    revisaoDiv.appendChild(Client);
    revisaoDiv.appendChild(Endereco);
    // CONFIGURAR AS PROPRIEDADES DE ONCLICK



    let img2 = img.cloneNode(true);

    img2.onclick = () => {
        // pizzaSelecionada.removeAttribute('disabled');
        let pizzas = document.createElement('select');
        let Quantidade = document.createElement("select");

        pizzas.id = "pizzas";
        Quantidade.id = "quantidade";

        xhttp.open('GET', 'http://localhost:3000/listapizzas');

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                let Pizzas = JSON.parse(xhttp.responseText);
                for (let i = 0; i < Pizzas.length; i++) {
                    let optPizza = document.createElement('option');

                    optPizza.value = Pizzas[i].nome;
                    optPizza.innerHTML = Pizzas[i].nome;
                    pizzas.appendChild(optPizza);
                }

                for (let i = 0; i < 10; i++) {
                    let optQuantidade = document.createElement('option');

                    optQuantidade.value = i + 1;
                    optQuantidade.innerHTML = i + 1;

                    Quantidade.appendChild(optQuantidade);
                }

                Pizza.removeChild(Pizza.lastChild);
                Pizza.removeChild(Pizza.lastChild);
                Pizza.removeChild(Pizza.lastChild);

                Pizza.appendChild(pizzas);
                Pizza.appendChild(Quantidade);
            }
        }

        xhttp.send();
    }

    revisaoDiv.appendChild(revisaoDosDadosDoPedido);
    Pizza.appendChild(pizzaSelecionada);
    Pizza.appendChild(quantidade);
    Pizza.appendChild(img2);
    revisaoDiv.appendChild(Pizza);

    for (let i = 0; i < inputsPizzas.length; i++) {
        ///// Chamada do XHTTP REQUEST PARA SABER QUANTAS PIZZAS NO PEDIDO.
        /////// CRIAR UM INPUT PARA CADA PIZZA
        ///////// CADA INPUT VAI SER UMA OPTION DE LIST
        /////////// QUANDO ALTERAR VAI TER QUE ALTERAR NO BANCO DE DADOS
    }

    revisaoDiv.appendChild(revisaoDosDadosDoPreco);
    revisaoDiv.appendChild(precoTotalPizza);




    bloco.appendChild(revisaoDiv);
    bloco.appendChild(footer);

    xhttp.open('POST', 'http://localhost:3000/getpedidos');

    xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhttp.onreadystatechange = () => {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
            const pedido = JSON.parse(xhttp.responseText);
            pizzaSelecionada.value = pedido[0].pizzas;
            quantidade.value = pedido[0].quantidade;
            quantidadeAnterior = pedido[0].quantidade;
            precoTotalPizza.value = pedido[0].precoTotal;

            target = "target=" + pedido[0].telCliente;
            xhttp.open('POST', 'http://localhost:3000/getClient');

            xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

            xhttp.onreadystatechange = () => {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    let cliente = JSON.parse(xhttp.responseText);

                    clientName.value = cliente[0].nome;
                    telPhoneClient.value = cliente[0].telefone;
                    addressClient.value = cliente[0].cep + " - " + cliente[0].numCasa;

                }
            }
            xhttp.send(target);





        }
    }
    xhttp.send(target);


    return 1;
}


/// ESSE É MELHOR FAZER QUANDO ESTIVER OBTENDO OS DADOS DAS PIZZAS DO SERVIDOR -- OK
const setEditPizzaProps = (bloco, buttonNext) => {
    // VAI BUSCAR NO BANCO DE DADOS AS INFORMAÇÕES DA PIZZA -- OK
    let idDivToChange = document.getElementById(idToChange);
    let pizzaToEdit = idDivToChange.childNodes[1].childNodes[0].innerHTML;
    let iconPizza = document.createElement("img");
    let pizzaToFound = "target=" + pizzaToEdit;

    iconPizza.setAttribute('class', 'iconPizza');

    let nomeField = document.createElement('input');
    let descricaoField = document.createElement('input');
    let precoField = document.createElement('input');

    let targetPizzaDB;

    precoField.style.marginLeft = "48px";

    let divPizza = document.createElement('div');
    let excluirButton = document.createElement('button');

    divPizza.setAttribute('class', 'pizza');

    excluirButton.innerHTML = "Excluir";

    excluirButton.style.border = "none";
    excluirButton.style.backgroundColor = "red";
    excluirButton.style.color = "white";
    excluirButton.style.width = "90px";
    excluirButton.style.marginLeft = "10px";

    excluirButton.onclick = () => {
        const xhttp = new XMLHttpRequest;
        const pizzaTarget = "nome=" + nomeField.value;

        xhttp.open('POST', 'http://localhost:3000/excluirpizza');

        xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                getPizzaCadastradas();

                document.body.removeChild(document.body.lastChild);
                document.body.removeChild(document.body.lastChild);

                idToChange = undefined;
            }
        }

        xhttp.send(pizzaTarget);
    }



    nomeField.setAttribute('disabled', "");
    descricaoField.setAttribute('disabled', "");
    precoField.setAttribute('disabled', "");

    buttonNext.innerHTML = "Atualizar";

    buttonNext.addEventListener('click', () => {
        const xhttp = new XMLHttpRequest;
        const newData = "target=" + targetPizzaDB + "&nome=" + nomeField.value + "&descricao=" + descricaoField.value + "&valor=" + precoField.value;
        xhttp.open('POST', 'http://localhost:3000/updatepizza');

        xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                console.log(xhttp.responseText);
            }
        }

        xhttp.send(newData);
    })



    let arrayField = [nomeField, descricaoField, precoField];




    let xhttp = new XMLHttpRequest;

    xhttp.open('POST', 'http://localhost:3000/findpizza');

    xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhttp.onreadystatechange = () => {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
            let pizzaEncontrada = JSON.parse(xhttp.responseText);
            nomeField.value = pizzaEncontrada[0].nome;
            descricaoField.value = pizzaEncontrada[0].descricao;
            precoField.value = pizzaEncontrada[0].preco;

            targetPizzaDB = pizzaEncontrada[0].nome;
        }
    }
    xhttp.send(pizzaToFound);

    divPizza.appendChild(iconPizza);



    for (let i = 0; i < arrayField.length; i++) {

        let iconEdit = document.createElement('img');
        let iconAndField = document.createElement('div');

        iconPizza.src = "assets/imgs/icons/pizza.png";
        iconEdit.src = "assets/imgs/icons/edit.png";

        iconAndField.appendChild(arrayField[i]);
        iconAndField.appendChild(iconEdit);

        iconEdit.style.cursor = "pointer";
        iconEdit.onclick = () => {
            arrayField[i].removeAttribute('disabled');
        }
        divPizza.appendChild(iconAndField);
    }
    divPizza.appendChild(buttonNext);
    divPizza.appendChild(excluirButton);
    bloco.appendChild(divPizza);


}
const setEditClienteProps = (bloco, buttonNext) => {
    const idDivToChange = document.getElementById(idToChange);
    let clienteToEdit = idDivToChange.childNodes[1].childNodes[0].innerHTML;
    let iconCliente = document.createElement('img');
    let tituloBloco = document.createElement('h3');
    tituloBloco.innerHTML = "Edição dos dados do cliente <br />";
    let clienteToFound = "target=" + clienteToEdit;

    iconCliente.setAttribute('class', 'iconCliente');
    iconCliente.src = "assets/imgs/icons/customer.png";

    let nomeField = document.createElement('input');
    let telefoneField = document.createElement('input');
    let cepField = document.createElement('input');
    let numCasaField = document.createElement('input');
    let pontoReferenciaField = document.createElement('input');

    let fields = [nomeField, telefoneField, cepField, numCasaField, pontoReferenciaField];
    let descricao = ['Nome', 'Telefone', 'CEP', 'Numero da Casa', 'Ponto de referencia'];




    nomeField.setAttribute('disabled', '');
    telefoneField.setAttribute('disabled', '');
    cepField.setAttribute('disabled', '');
    numCasaField.setAttribute('disabled', '');
    pontoReferenciaField.setAttribute('disabled', '');

    nomeField.style.marginLeft = '50px';
    telefoneField.style.marginLeft = '50px';
    cepField.style.marginLeft = "50px";
    numCasaField.style.marginLeft = "50px";
    pontoReferenciaField.style.marginLeft = "50px";

    let clienteDiv = document.createElement('div');


    clienteDiv.setAttribute('class', 'cliente');



    let xhttp = new XMLHttpRequest;

    xhttp.open('POST', 'http://localhost:3000/procurarcliente');

    xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhttp.onreadystatechange = () => {

        if (xhttp.readyState === 4 && xhttp.status === 200) {
            let cliente = JSON.parse(xhttp.responseText);

            nomeField.value = cliente[0].nome;
            telefoneField.value = cliente[0].telefone;
            cepField.value = cliente[0].cep;
            numCasaField.value = cliente[0].numCasa;
            pontoReferenciaField.value = cliente[0].pontoReferencia;



        }
    }

    xhttp.send(clienteToFound);

    clienteDiv.appendChild(iconCliente);
    clienteDiv.appendChild(tituloBloco);

    for (let i = 0; i < fields.length; i++) {
        let edit = document.createElement('img');
        let campo = document.createElement('h5');

        campo.innerHTML = descricao[i];

        edit.onclick = () => {
            fields[i].removeAttribute('disabled');
        };
        edit.style.cursor = "pointer";
        let iconAndField = document.createElement('div');
        edit.src = 'assets/imgs/icons/edit.png';

        iconAndField.appendChild(campo);
        iconAndField.appendChild(fields[i]);
        iconAndField.appendChild(edit);
        clienteDiv.appendChild(iconAndField);

    }

    buttonNext.innerHTML = "Atualizar";
    buttonNext.onclick = () => {
        let newData = clienteToFound + '&nome=' + nomeField.value + '&telefone=' + telefoneField.value + '&cep=' + cepField.value + '&numCasa=' + numCasaField.value + '&pontoReferencia=' + pontoReferenciaField.value;

        let xhttp = new XMLHttpRequest;

        xhttp.open('POST', 'http://localhost:3000/atualizarcliente');

        xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

        xhttp.onreadystatechange = () => {
            console.log(xhttp.responseText);

            getClientesCadastrados();
        }

        xhttp.send(newData);

        idDivToChange = undefined;
    }

    let excluirButton = document.createElement('button');
    excluirButton.innerHTML = "Excluir";

    excluirButton.style.border = "none";
    excluirButton.style.backgroundColor = "red";
    excluirButton.style.color = "white";
    excluirButton.style.width = "90px";
    excluirButton.style.marginLeft = "10px";

    excluirButton.onclick = () => {
        let xhttp = new XMLHttpRequest;
        let clienteToRem = clienteToFound;
        let target = clienteToRem;
        console.log(clienteToRem);

        xhttp.open('POST', 'http://localhost:3000/excluircliente');

        xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                console.log(xhttp.responseText);

                document.body.removeChild(document.body.lastChild);
                document.body.removeChild(document.body.lastChild);
                getClientesCadastrados();
            }
        }

        xhttp.send(target);
        idDivToChange = undefined;
    }


    bloco.style.marginLeft = "50px";
    bloco.appendChild(clienteDiv);
    bloco.appendChild(buttonNext);
    bloco.appendChild(excluirButton);

}

const getPizzaCadastradas = () => {
    ///// TODA LOGICA DE OBTER AS PIZZAS CADASTRADAS DO BANCO DE DADOS
    // VAI ARMAZENAR AS PIZZAS EM UM ARRAY
    // ESSE METODO VAI FICAR NO ONLOAD -- 24/12 VAI NAO KKK

    const pizzasCadastradas = document.getElementById("pizzasCadastradas");
    // console.log(pizzasCadastradas.childNodes[0]);
    for (let j = pizzasCadastradas.childNodes.length - 1; j > 1; j--) {
        pizzasCadastradas.removeChild(pizzasCadastradas.childNodes[j]);
    }

    let xhttp = new XMLHttpRequest;

    xhttp.open("GET", "http://localhost:3000/listapizzas");

    xhttp.onreadystatechange = () => {
        console.log("entrou");
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            let pizzas = JSON.parse(xhttp.responseText);
            let i = 0;




            do {

                let pizzasCadastradasID = document.querySelector("#pizzasCadastradas");
                let pizzaDiv = document.createElement("div");
                let pizzaImg = document.createElement("img");
                let pizzaData = document.createElement("div");
                let pizzaTitle = document.createElement("b");
                let pizzaDescrip = document.createElement("b");
                let precoPizza = document.createElement('b');

                pizzaDiv.setAttribute("class", "pizza");
                pizzaImg.src = "assets/imgs/icons/pizza.png";
                pizzaImg.setAttribute("class", "iconPizza");
                pizzaTitle.setAttribute("class", "nomePizza");
                pizzaDescrip.setAttribute("class", "descricaoPizza");




                pizzaDiv.setAttribute("id", "pizza" + i);
                pizzaTitle.innerHTML = pizzas[i].nome;
                pizzaTitle.setAttribute('id', pizzas[i].nome);
                pizzaDescrip.innerHTML = pizzas[i].descricao;
                precoPizza.innerHTML = " R$ " + pizzas[i].preco;

                pizzaData.appendChild(pizzaTitle);
                pizzaData.appendChild(pizzaDescrip);
                pizzaData.appendChild(precoPizza);
                pizzaDiv.appendChild(pizzaImg);
                pizzaDiv.appendChild(pizzaData);
                pizzasCadastradasID.appendChild(pizzaDiv);

                pizzaDiv.onclick = () => {

                    if (idToChange === undefined) {
                        pizzaDiv.style.boxShadow = ('1px 1px 10px green');
                        idToChange = pizzaDiv.id;
                    } else {
                        if (pizzaDiv.id != idToChange) {
                            let opt = idToChange.substring(0, 3);

                            switch (opt) {
                                case 'ped':
                                    document.getElementById(idToChange).setAttribute('class', 'col page shadow novoPedido');
                                    pizzaDiv.style.boxShadow = '1px 1px 10px green';

                                    idToChange = pizzaDiv.id;
                                    break;
                                case 'piz':
                                    document.getElementById(idToChange).style.boxShadow = '0px 0px 0px transparent';
                                    pizzaDiv.style.boxShadow = '1px 1px 10px green';
                                    idToChange = pizzaDiv.id;
                                    break;
                                case 'cli':
                                    document.getElementById(idToChange).style.boxShadow = '0px 0px 0px transparent';
                                    pizzaDiv.style.boxShadow = '1px 1px 10px green';
                                    idToChange = pizzaDiv.id;
                                    break;

                            }
                        } else {
                            document.getElementById(pizzaDiv.id).style.boxShadow = "0px 0px 0px transparent";
                            idToChange = undefined;
                        }
                    }
                }
                i++;

            } while (i < pizzas.length)

            // console.log(xhttp.responseText);
        }
    }


    xhttp.send();
}



const registerPizza = () => {

    const nomePizza = document.forms['formPizza' + numPizzaForm]['titlePizza'].value;
    const descricaoPizza = document.forms['formPizza' + numPizzaForm]['descricaoPizza'].value;
    const valorPizza = parseFloat(document.forms['formPizza' + numPizzaForm]['valorPizza'].value);

    let string = "nome=" + nomePizza + "&descricao=" + descricaoPizza + "&valor=" + valorPizza;

    const xhttp = new XMLHttpRequest;

    xhttp.open('POST', 'http://localhost:3000/cadastrarpizza');
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.onreadystatechange = () => {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
            console.log(xhttp.responseText);
            getPizzaCadastradas();
        }
    }

    xhttp.send(string);

    return 1;
}


const getClientesCadastrados = () => {

    let i = 0;

    // const clientesCadastrados = document.getElementById("clientesCadastrados");
    // console.log(pizzasCadastradas.childNodes[0]);
    for (let j = clientesCadastrados.childNodes.length - 1; j > 1; j--) {
        clientesCadastrados.removeChild(clientesCadastrados.childNodes[j]);
    }

    const xhttp = new XMLHttpRequest;

    xhttp.open('GET', 'http://localhost:3000/listaclientes');

    xhttp.onreadystatechange = () => {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
            let clientes = JSON.parse(xhttp.responseText);

            do {

                let clientesCadastradosID = document.querySelector("#clientesCadastrados");
                let clienteDiv = document.createElement("div");
                let clienteImg = document.createElement("img");
                let clienteData = document.createElement("div");
                let clienteNome = document.createElement("b");
                let clienteTelefone = document.createElement("b");


                clienteDiv.setAttribute("class", "cliente");
                clienteImg.src = "assets/imgs/icons/customer.png";
                clienteImg.setAttribute("class", "iconCliente");
                clienteNome.setAttribute("class", "nomeCliente");
                clienteTelefone.setAttribute("class", "descricaoCliente");


                clienteImg.style.marginLeft = "50px";


                clienteDiv.setAttribute("id", "cliente" + i);
                clienteNome.innerHTML = clientes[i].nome;
                clienteNome.setAttribute('id', clientes[i].nome);
                clienteTelefone.innerHTML = " - " + clientes[i].telefone;


                clienteData.appendChild(clienteNome);
                clienteData.appendChild(clienteTelefone);
                clienteDiv.appendChild(clienteImg);
                clienteDiv.appendChild(clienteData);
                clientesCadastradosID.appendChild(clienteDiv);

                clienteDiv.onclick = () => {

                    if (idToChange === undefined) {
                        clienteDiv.style.boxShadow = ('1px 1px 10px green');
                        idToChange = clienteDiv.id;
                    } else {
                        if (clienteDiv.id != idToChange) {
                            let opt = idToChange.substring(0, 3);


                            switch (opt) {
                                case 'ped':
                                    document.getElementById(idToChange).setAttribute('class', 'col page shadow  novoPedido');
                                    clienteDiv.style.boxShadow = ('1px 1px 10px green');

                                    idToChange = clienteDiv.id;

                                    break;
                                case 'cli':

                                    document.getElementById(idToChange).style = '0px 0px 0px transparent';
                                    clienteDiv.style.boxShadow = '1px 1px 10px green';

                                    idToChange = clienteDiv.id;
                                    break;
                                case 'piz':
                                    document.getElementById(idToChange).setAttribute('class', 'pizza');
                                    document.getElementById(idToChange).style.boxShadow = "0px 0px 0px transparent"
                                    clienteDiv.style.boxShadow = '1px 1px 10px green';

                                    idToChange = clienteDiv.id;
                                    break;
                            }


                            // document.getElementById(idToChange).setAttribute('class', 'cliente');
                            // document.getElementById(idToChange).style.boxShadow = "0px 0px 0px transparent";
                            // clienteDiv.style.boxShadow = ('1px 1px 10px green');
                            idToChange = clienteDiv.id;
                        } else {

                            document.getElementById(clienteDiv.id).style.boxShadow = "0px 0px 0px transparent";
                            idToChange = undefined;
                        }
                    }
                }
                i++;

            } while (i < clientes.length)

        }
    }

    xhttp.send();
}

//// #TODO
//////// # LÓGICA
/////////// FAZER IGUAL O MÉTODO REGISTERPIZZA (UTILIZOU FORMS) -- OK

////# TODO 
////// #VALIDAÇÕES
///////// FAZER CONTROLE DAS VALIDAÇÕES DO FORMULÁRIO
const registerClient = () => {
    let nomeCliente = document.forms['clienteForm' + numClientForm]['clienteName'].value;
    let telCliente = document.forms['clienteForm' + numClientForm]['telCliente'].value;
    let cepCliente = document.forms['clienteForm' + numClientForm]['cepCliente'].value;
    let numCasaCliente = document.forms['clienteForm' + numClientForm]['numCasaCliente'].value;
    let pontoReferenciaCliente = document.forms['clienteForm' + numClientForm]['pontoReferenciaCliente'].value;

    let query = "nome=" + nomeCliente + "&telefone=" + telCliente + "&cep=" + cepCliente + "&numCasa=" + numCasaCliente + "&pontoReferencia=" + pontoReferenciaCliente;

    const xhttp = new XMLHttpRequest;

    xhttp.open('POST', 'http://localhost:3000/cadastrarcliente');

    xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            console.log(xhttp.responseText);

            getClientesCadastrados();
        }
    }

    xhttp.send(query);


    return true;
}
///// PARA ACESSAR O NOME DA PIZZA CORRESPONDENTE DO DIV =
///////////document.getElementById('pizza0').childNodes[0] -- OK

const getPedidos = () => {

    ///#TODO
    ////#EFFECT
    ///////Colocar efeito de sombra para dizr quando estiver um pedido estiver a caminho - em preparo - entregue
    ////#LOGICA
    ////// Retirar a criação do bloco lá no setpedidoprops -- OK
    ///#BUG
    ////// Verificar BUG ao selecionar o pedido e depois selecionar o cliente

    const xhttp = new XMLHttpRequest;

    xhttp.open('POST', 'http://localhost:3000/getpedidos');
    xhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = () => {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
            const pedidos = JSON.parse(xhttp.responseText);
            let pedidosDiv = document.querySelector("#pedidosDiv");

            // console.log(pedidosDiv.childNodes.length);

            for (let i = pedidosDiv.childNodes.length - 1; i > 0; i--) {
                pedidosDiv.removeChild(pedidosDiv.childNodes[i]);
            }

            for (let i = 0; i < pedidos.length; i++) {
                let newOrder = document.createElement("div");
                let stringPedido = document.createElement('p');
                let pizza = document.createElement('span');
                let qtdPizza = document.createElement('span');


                numPedido = pedidos[i].numPedido;
                newOrder.setAttribute("class", "col page shadow novoPedido");

                stringPedido.innerHTML = "Pedido " + numPedido;
                pizza.innerHTML = pedidos[i].pizzas;
                qtdPizza.innerHTML = pedidos[i].quantidade;
                newOrder.setAttribute("id", "pedido" + numPedido);

                newOrder.onclick = () => {

                    // #TOCHECK EU TENHO Q FAZER ALGUMA COISA AQUI EM BAIXO???

                    if (idToChange === newOrder.id) {
                        console.log("hey");
                    }

                    console.log(idToChange);
                    console.log(newOrder.id);
                    if (idToChange === undefined) {
                        newOrder.setAttribute('class', 'col page novoPedido');
                        newOrder.style.boxShadow = ('1px 1px 10px #253a7e');
                        idToChange = newOrder.id;
                    } else {
                        if (newOrder.id !== idToChange) {
                            let opt = idToChange.substring(0, 3);
                            console.log(opt);
                            switch (opt) {
                                case "cli":
                                    document.getElementById(idToChange).setAttribute('class', 'cliente');
                                    document.getElementById(idToChange).style.boxShadow = "0px 0px 0px transparent";
                                    newOrder.setAttribute('class', 'col page novoPedido');
                                    newOrder.style.boxShadow = ('1px 1px 10px #253a7e');
                                    idToChange = newOrder.id;

                                    break;
                                case "piz":

                                    document.getElementById(idToChange).setAttribute('class', 'pizza');
                                    document.getElementById(idToChange).style.boxShadow = '0px 0px 0px transparent';

                                    newOrder.setAttribute('class', 'col page  novoPedido');
                                    newOrder.style.boxShadow = "1px 1px 10px #253a7e";

                                    idToChange = newOrder.id;


                                    break;
                                case "ped":
                                    document.getElementById(idToChange).setAttribute('class', 'col page shadow novoPedido');
                                    newOrder.setAttribute('class', 'col page novoPedido');
                                    newOrder.style.boxShadow = ('1px 1px 10px #253a7e');
                                    idToChange = newOrder.id;
                                    break;
                            }
                            // document.getElementById(idToChange).setAttribute('class', 'col page shadow novoPedido');

                        } else {
                            document.getElementById(idToChange).setAttribute('class', 'col page shadow novoPedido');
                            idToChange = undefined;
                        }
                    }
                }
                newOrder.appendChild(stringPedido);
                newOrder.appendChild(pizza);
                newOrder.appendChild(qtdPizza);
                pedidosDiv.appendChild(newOrder);
            }



        }
    }
    xhttp.send();

}
/// legenda

/// # DATABASE == MONGODB
/// # LÓGICA  == CONSTRUIR NO PADRÃO DO PROJETO
//  # VALIDAÇÕES == VALIDAÇÕES QUE TEM DE SEREM FEITAS
//  # EFFECT
