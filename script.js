let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let mouse = { x: 0, y: 0 };
let draw = false;

let text = document.getElementById('text')

context.strokeStyle = 'black';

canvas.addEventListener('mousedown', function (e) {
    let ClientRect = this.getBoundingClientRect();
    mouse.x = e.clientX - ClientRect.left;
    mouse.y = e.clientY - ClientRect.top;

    draw = true;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
});

canvas.addEventListener('mousemove', function (e) {
    if (draw === true) {
        let ClientRect = this.getBoundingClientRect();
        mouse.x = e.clientX - ClientRect.left;
        mouse.y = e.clientY - ClientRect.top;

        context.lineTo(mouse.x,mouse.y);
        context.stroke();

        text.classList.add('flex')
    }
});
canvas.addEventListener('mouseup',function(e){
    let ClientRect = this.getBoundingClientRect();
        mouse.x = e.clientX - ClientRect.left;
        mouse.y = e.clientY - ClientRect.top;

        context.lineTo(mouse.x,mouse.y);
        context.stroke();
        context.closePath()
        draw = false;
})

canvas.addEventListener('dblclick',function(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    text.classList.remove('flex')

})