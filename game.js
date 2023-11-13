var Game_vue = new Vue({
    el: '#principal',
    data: {

<<<<<<< HEAD
        posicaoLeftMapa: 0,

        boneco: {
            posX: 235, // Defina a posição x inicial aqui
            posY: 285, // Defina a posição y inicial aqui
            frente: true, // Define se está de frente ou de lado
=======
        boneco: {
            posX: 100, // Defina a posição x inicial aqui
            posY: 100, // Defina a posição y inicial aqui
>>>>>>> 33e3c594a3c72662dcae5e2b4686111d92498ff1
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

<<<<<<< HEAD
        },

        moverMapa (direita = true, esquerda = false){
            if(direita){
                Game_vue.posicaoLeftMapa -= 5;
                for (let i = 0; i < Game_vue.listaPontos.length; i++) {
                    Game_vue.listaPontos[i].posX -= 5;                    
                }
            }else{                
                Game_vue.posicaoLeftMapa += 5;
                for (let i = 0; i < Game_vue.listaPontos.length; i++) {
                    Game_vue.listaPontos[i].posX += 5;                    
                }
            }            
=======
>>>>>>> 33e3c594a3c72662dcae5e2b4686111d92498ff1
        }

    }

});

$(document).keydown(function (e) {

<<<<<<< HEAD
    e.preventDefault()

=======
>>>>>>> 33e3c594a3c72662dcae5e2b4686111d92498ff1
    switch (e.keyCode) {

        case 38: // pra cima
            Game_vue.boneco.posY -= 5;
            Game_vue.verificar_puzzle();
<<<<<<< HEAD
            Game_vue.boneco.frente = true;
=======
>>>>>>> 33e3c594a3c72662dcae5e2b4686111d92498ff1
            break;

        case 40: // pra baixo
            Game_vue.boneco.posY += 5;
            Game_vue.verificar_puzzle();
<<<<<<< HEAD
            Game_vue.boneco.frente = true;
            break;

        case 39: // pra direita

            if(Game_vue.boneco.posX > 500){
                Game_vue.moverMapa (true, false);
            }else{
                Game_vue.boneco.posX += 5;
            }

            Game_vue.verificar_puzzle();
            Game_vue.boneco.frente = false;
            $("#ladoIvena").css("transform", "none");
            break;

        case 37: // pra esquerda

            if(Game_vue.posicaoLeftMapa < 0 ){
                Game_vue.moverMapa (false, true);
            }else{
                Game_vue.boneco.posX -= 5;
            }          

            Game_vue.verificar_puzzle();
            Game_vue.boneco.frente = false;
            $("#ladoIvena").css("transform", "rotateY(180deg)");
            break;

    }
});
=======
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
>>>>>>> 33e3c594a3c72662dcae5e2b4686111d92498ff1
