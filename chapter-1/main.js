(function() {
    'use strict'
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    let colors = ['blue','yellow','red','green','cyan','orange']

    // TODO
    let c; let color
    for (let x=10; x<400; x+=20) {
        for(let y=10; y<400; y+=20) {
            c = Shape.Circle(x,y,10);
            const rndInt = Math.floor(Math.random() * 6)
            c.fillColor=colors[rndInt];
        }
    }
    paper.view.draw();
    console.log('First Canvas drawn');

    paper.setup(document.getElementById('secondCanvas'));

    let f = Shape.Circle(200,200,80);
    f.fillColor = 'black';
    let text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = "hello world";
    let tool = new Tool();
    tool.onMouseDown = function(event) {
        let e = Shape.Circle(event.point, 20);
        e.fillColor = 'purple'
    }
    paper.view.draw();
    console.log('Second Canvas drawn');
    

    // end of code
}())


