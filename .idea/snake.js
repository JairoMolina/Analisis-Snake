const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const box = 20;

let snake = [{ x: 9 * box, y: 9 * box }];
let direction = 'RIGHT';
let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

document.addEventListener('keydown', directionControl);

function directionControl(event) {
    if (event.keyCode === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (event.keyCode === 38 && direction !== 'DOWN') direction = 'UP';
    if (event.keyCode === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (event.keyCode === 40 && direction !== 'UP') direction = 'DOWN';
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //UNA DE LAS MODIFICACIONES SUCEDE EN EL DIBUJADO Y LA ASIGNACIÓN DE COLOR A LA CABEZA
    //LA IDEA ES LA MISMA, PERO AL SER AHORA UNA COLA SE MANEJA DE MANERA DIFERENTE
    for (let i = 0; i < snake.length; i++) {
        //LA CABEZA ES EL ÚLTIMO ELEMENTO VISUALMENTE, PERO ES EL PRIMERO EN LA COLA
        ctx.fillStyle = (i === snake.length - 1) ? 'green' : 'lightgreen';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[snake.length - 1].x;
    let snakeY = snake[snake.length - 1].y;

    if (direction === 'LEFT') snakeX -= box;
    if (direction === 'UP') snakeY -= box;
    if (direction === 'RIGHT') snakeX += box;
    if (direction === 'DOWN') snakeY += box;

    let newHead = { x: snakeX, y: snakeY };

    if (snakeX === food.x && snakeY === food.y) {
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.shift(); //EN LUGAR DE UTILIZAR .pop SE UTILIZA .shift PARA ELIMINAR EL PRIMER ELEMENTO
    }

    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        alert('Game Over!');
    }

    snake.push(newHead); //EN LUFAR DE UTILIZAR .unshift SE UTILIZA .push PARA AGREGAR EL ULTIMO ELEMENTO

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + (snake.length - 1), 10, 20);
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

let game = setInterval(draw, 100);