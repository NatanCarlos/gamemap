var Game_vue = new Vue({
    el: '#principal',
    data: {

        posicaoLeftMapa: 0,

        boneco: {
            posX: 235, // Defina a posição x inicial aqui
            posY: 285, // Defina a posição y inicial aqui
            frente: true, // Define se está de frente ou de lado
        },
    
        listaPontos: [
            {
                posX: 200, // Defina a posição x inicial aqui
                posY: 200, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Ailos',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': '"https://wordwall.net/pt/embed/0e93533288034039829563692fb9a9ba?themeId=56&templateId=72&fontStackId=0',
            },
            {
                posX: 400, // Defina a posição x inicial aqui
                posY: 380, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Banco do Brasil',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://wordwall.net/pt/embed/32ad9abf3fea42eb94f15cf87c9f36f7?themeId=56&templateId=10&fontStackId=0',
            },

            {
                posX: 450, // Defina a posição x inicial aqui
                posY: 380, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Banco do Brasil',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://wordwall.net/pt/embed/5dc90c30c73047999855354654866563?themeId=56&templateId=5&fontStackId=0'
            },


            {
                posX: 500, // Defina a posição x inicial aqui
                posY: 380, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Banco do Brasil',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://wordwall.net/pt/embed/a09a9dfe4a09461da6233b3a6ee91146?themeId=56&templateId=11&fontStackId=0' 
            },

            {
                posX: 550, // Defina a posição x inicial aqui
                posY: 380, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Banco do Brasil',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://wordwall.net/pt/embed/b79d9f01b45c4710bf71b4f0e9cdec2d?themeId=56&templateId=72&fontStackId=0'
            },

            {
                posX: 600, // Defina a posição x inicial aqui
                posY: 380, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Banco do Brasil',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://wordwall.net/pt/embed/90c90d04905d41aba7a4c0936faf9e57?themeId=56&templateId=36&fontStackId=0'
            },

            {
                posX: 650, // Defina a posição x inicial aqui
                posY: 380, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Banco do Brasil',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://wordwall.net/pt/embed/e6192ddaede64b8799cf7369a26e7e87?themeId=56&templateId=10&fontStackId=0'
            },

            {
                posX: 700, // Defina a posição x inicial aqui
                posY: 380, // Defina a posição y inicial aqui
                jaAbriu: false,
                'descricao': 'Banco do Brasil',
                'link_img': '/ponto_mapa.png?raw=true',
                'link_puzzle': 'https://wordwall.net/pt/embed/a7c77f987b3f4a80b7866dc6e13cba1d?themeId=56&templateId=5&fontStackId=0'
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

        }

    }

});

$(document).keydown(function (e) {


    switch (e.keyCode) {

        case 38: // pra cima
            Game_vue.boneco.posY -= 5;
            Game_vue.verificar_puzzle();

            Game_vue.boneco.frente = true;

            break;

        case 40: // pra baixo
            Game_vue.boneco.posY += 5;
            Game_vue.verificar_puzzle();

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

        