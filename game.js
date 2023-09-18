var Game_vue = new Vue({
    el: '#principal',
    data: {

        boneco: {
            posX: 100, // Defina a posição x inicial aqui
            posY: 100, // Defina a posição y inicial aqui
        },

        listaPontos: [
            {
                posX: 200, // Defina a posição x inicial aqui
                posY: 200, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Ailos',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://getbootstrap.com/docs/5.2/components/modal/',
            },
            {
                posX: 400, // Defina a posição x inicial aqui
                posY: 380, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Banco do Brasil',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://api.jquery.com/prepend/',
            },
        ],
    },

    methods: {


        verificar_puzzle() {

            var tolerancia_img = 15;

            for (let i = 0; i < this.listaPontos.length; i++) {
                const ponto = this.listaPontos[i];
                
                var limit_x1 = ponto.posX - tolerancia_img;
                var limit_x2 = ponto.posX + tolerancia_img;
                var limit_y1 = ponto.posY - tolerancia_img;
                var limit_y2 = ponto.posY + tolerancia_img;

                if(
                    !ponto.jaAbriu &&
                    this.boneco.posX >= limit_x1 && 
                    this.boneco.posX <= limit_x2 && 
                    this.boneco.posY >= limit_y1 && 
                    this.boneco.posY <= limit_y2
                ){               
                    
                    Game_vue.listaPontos[i].jaAbriu = true;
                    $("#divIframe .conteudo").html(`
                    <iframe 
                        src="${Game_vue.listaPontos[i].link_puzzle}"
                    ></iframe>
                    `); 
                    $("#divIframe").show();                  

                }

            }           

        }

    }

});

$(document).keydown(function (e) {

    switch (e.keyCode) {

        case 38: // pra cima
            Game_vue.boneco.posY -= 5;
            Game_vue.verificar_puzzle();
            break;

        case 40: // pra baixo
            Game_vue.boneco.posY += 5;
            Game_vue.verificar_puzzle();
            break;

        case 39: // pra direita
            Game_vue.boneco.posX += 5;
            Game_vue.verificar_puzzle();
            break;

        case 37: // pra esquerda
            Game_vue.boneco.posX -= 5;
            Game_vue.verificar_puzzle();
            break;

    }
});
