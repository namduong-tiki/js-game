window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = 500;
    canvas.height = 500;


    class InputHandler {
        constructor(game) {
            this.game = game;

            window.addEventListener('keydown', (e) => {
                const index = this.game.keys.indexOf(e.key)

                if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && index === -1) {
                    this.game.keys.push(e.key)
                }
            })
            window.addEventListener('keyup', e => {
                const index = this.game.keys.indexOf(e.key)

                if (index > -1) {
                    this.game.keys.splice(index, 1)
                }
            })
            console.log('ngoai trong listenr', this.game.key)

        }
    }
    class Projectile {
        constructor(game, x, y){
            this.game = game;
            this.x = x;
            this.y = y;
            this.width = 10;
            this.height= 3;
            this.speed = 3;
            this.makerForDeleteion = false;
        }
        update(){
            this.x += this.speed;
            if(this.x > this.game.width * 0.8){
                this.makerForDeleteion = true;
            }
        }
        draw(context){
            context.fillStyle = 'black'
            context.fillRect(this.x, this.y, this.width,this.height)
        }
    }
    class Particle {

    }
    class Player {
        constructor(game) {
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = 0;
            this.maxSpeed = 5;
        }
        update() {
            if (this.game.keys.includes('ArrowUp')) {
                this.speedY = -1
            } else if (this.game.keys.includes('ArrowDown')) {
                this.speedY = 1
            }else{
                this.speedY = 0
            }
            this.y += this.speedY;
        }
        draw(context) {
            context.fillRect(this.x, this.y, this.width, this.height)
        }

    }
    class Enemy {

    }
    class Layer {

    }
    class Background {

    }
    class UI {

    }
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height
            this.player = new Player(this)
            this.inpit = new InputHandler(this)
            this.keys = []
            this.projectiles = []

        }
        update() {
            this.player.update();
        }
        draw(context) {
            this.player.draw(context)
        }
        shootTop(){
            this.projectiles.push(new Projectile)
        }
    }
    const game = new Game(canvas.width, canvas.height)
    function animated() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.update();
        game.draw(ctx)
        requestAnimationFrame(animated)
    }
    animated()
})