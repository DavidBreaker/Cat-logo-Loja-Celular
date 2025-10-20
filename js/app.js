$(document).ready(function () {
    cardapio.eventos.init();

})

var cardapio = {};

var MEU_CARRINHO = [];

var CELULAR_EMPRESA = '5588998359343';

cardapio.eventos = {

    init: () => {
        cardapio.metodos.carregarBotaoWhatsapp();

    }
}

cardapio.metodos = {
    carregarBotaoWhatsapp: () => {

        var texto = 'Olá! gostaria de fazer um *pedido*';

        let encode = encodeURI(texto);
        let URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`;

        $("#btnWhatsapp").attr('href', URL);
    },

    mensagem: (texto, cor = 'red', tempo = 3500) => {

        let msg = `<div class="toast ${cor}">${texto}</div>`;

        $("#container-mensagens").append(texto);

    },
}

cardapio.templates = {

    item: 
        `<div class="col-12 col-lg-3 col-md-3 col-sm-6 col-second mb-5 animated wow fadeInUp delay 05s">
            <div class="card card-item" id="\${id}">
                <div class="img-produto">
                   <img src="\${img}"/>
                </div>
                <p class="title-produto text-center mt-4">
                   <b>\${name}</b>
                </p>
                <p class="price-produto text-center">
                   <b>R$ \${price}</b>
                </p>
                <div class="add-carrinho">
                   <span class="btn-menos" onclick="cardapio.metodos.diminuirQuantidade('\${id}')"><i class="fas fa-minus"></i></span>
                   <span class="add-numero-itens" id="qntd-\${id}">0</span>
                   <span class="btn-mais" onclick="cardapio.metodos.aumentarQuantidade('\${id}')"><i class="fas fa-plus"></i></span>
                   <span class="btn btn-add" onclick="cardapio.metodos.adicionarAoCarrinho('\${id}')"><i class="fa fa-shopping-bag"></i></span>
                 </div>
            </div>
        </div>
       `
}