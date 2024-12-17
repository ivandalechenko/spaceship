import { Container, Sprite, AnimatedSprite, Graphics, Text } from './pixi';

export default (app, textures, w, h, openTab, setshowtext, settext) => {

    const bg = Sprite.from(textures.bg)
    bg.label = 'bg'


    bg.width = w * 0.8
    bg.height = h
    bg.x = w * 0.1
    bg.y = 0
    bg.interactive = true
    app.stage.addChild(bg);



    const backGlass = Sprite.from(textures.backGlass)
    backGlass.label = 'backGlass'
    backGlass.width = w
    backGlass.height = h
    backGlass.x = 0
    backGlass.y = 0
    app.stage.addChild(backGlass);

    const floor = Sprite.from(textures.floor)
    floor.label = 'floor'
    floor.width = w * 0.8
    floor.height = h
    floor.x = w * 0.1
    floor.y = 0
    app.stage.addChild(floor);


    // const table = Sprite.from(textures.table)
    // table.label = 'table'
    // table.width = w
    // table.height = h
    // table.x = 0
    // table.y = 0
    // app.stage.addChild(table);


    const backestPcLeft = Sprite.from(textures.backestPcLeft)
    backestPcLeft.label = 'backestPcLeft'
    backestPcLeft.width = w
    backestPcLeft.height = h * 1.1
    backestPcLeft.x = 0
    backestPcLeft.y = 0 - (h * 0.05)
    app.stage.addChild(backestPcLeft);

    const backestPcRight = Sprite.from(textures.backestPcRight)
    backestPcRight.label = 'backestPcRight'
    backestPcRight.width = w
    backestPcRight.height = h * 1.1
    backestPcRight.x = 0
    backestPcRight.y = 0 - (h * 0.05)
    app.stage.addChild(backestPcRight);


    const backPcLeft = Sprite.from(textures.backPcLeft)
    backPcLeft.label = 'backPcLeft'
    backPcLeft.width = w
    backPcLeft.height = h * 1.1
    backPcLeft.x = 0
    backPcLeft.y = 0 - (h * 0.05)
    app.stage.addChild(backPcLeft);

    const backPcRight = Sprite.from(textures.backPcRight)
    backPcRight.label = 'backPcRight'
    backPcRight.width = w
    backPcRight.height = h * 1.1
    backPcRight.x = 0
    backPcRight.y = 0 - (h * 0.05)
    app.stage.addChild(backPcRight);

    const middlePcLeft = Sprite.from(textures.middlePcLeft)
    middlePcLeft.label = 'middlePcLeft'
    middlePcLeft.width = w
    middlePcLeft.height = h * 1.1
    middlePcLeft.x = 0
    middlePcLeft.y = 0 - (h * 0.05)
    app.stage.addChild(middlePcLeft);

    const middlePcRight = Sprite.from(textures.middlePcRight)
    middlePcRight.label = 'middlePcRight'
    middlePcRight.width = w
    middlePcRight.height = h * 1.1
    middlePcRight.x = 0
    middlePcRight.y = 0 - (h * 0.05)
    app.stage.addChild(middlePcRight);


    const rightLink = Sprite.from(textures.rightLink)
    rightLink.label = 'rightLink'
    rightLink.width = (w / 2000) * 146
    rightLink.height = (h / 1125) * 305
    // rightLink.anchor.set(0, 1)
    rightLink.x = (w / 2000) * 1480
    rightLink.y = (h / 1125) * 472
    app.stage.addChild(rightLink);
    rightLink.eventMode = 'static';
    rightLink.cursor = 'pointer';
    rightLink.on('mouseenter', () => {
        rightLink.texture = textures.rightLinkStroke
        settext('SOCIALS')
        setshowtext(true)
    });
    rightLink.on('mouseout', () => {
        rightLink.texture = textures.rightLink
        setshowtext(false)
    });






    const table = Sprite.from(textures.table)
    table.label = 'table'
    table.width = w
    table.height = h
    table.x = 0
    table.y = 0
    app.stage.addChild(table);


    const chars = Sprite.from(textures.chars)
    chars.label = 'chars'
    chars.width = w
    chars.height = h
    chars.x = 0
    chars.y = 0
    app.stage.addChild(chars);


    const centerRight = Sprite.from(textures.centerRight)
    centerRight.label = 'centerRight'
    centerRight.width = (w / 2000) * 201
    centerRight.height = (h / 1125) * 437
    centerRight.x = (w / 2000) * 1175
    centerRight.y = (h / 1125) * 480
    app.stage.addChild(centerRight);


    centerRight.eventMode = 'static';
    centerRight.cursor = 'pointer';
    centerRight.on('mouseenter', () => {
        centerRight.texture = textures.centerRightStroke
        settext('ROADMAP')
        setshowtext(true)
    });
    centerRight.on('mouseout', () => {
        centerRight.texture = textures.centerRight
        setshowtext(false)
    });


    const centerLeft = Sprite.from(textures.centerLeft)
    centerLeft.label = 'centerLeft'
    centerLeft.width = (w / 2000) * 197
    centerLeft.height = (h / 1125) * 421
    centerLeft.x = (w / 2000) * 640
    centerLeft.y = (h / 1125) * 460
    app.stage.addChild(centerLeft);


    centerLeft.eventMode = 'static';
    centerLeft.cursor = 'pointer';
    centerLeft.on('mouseenter', () => {
        centerLeft.texture = textures.centerLeftStroke
        settext('F.A.Q.')
        setshowtext(true)
    });
    centerLeft.on('mouseout', () => {
        centerLeft.texture = textures.centerLeft
        setshowtext(false)
    });


    const frontPcLeft = Sprite.from(textures.frontPcLeft)
    frontPcLeft.label = 'frontPcLeft'
    frontPcLeft.width = w
    frontPcLeft.height = h * 1.1
    frontPcLeft.x = 0
    frontPcLeft.y = 0 - (h * 0.05)
    app.stage.addChild(frontPcLeft);


    const frontPcRight = Sprite.from(textures.frontPcRight)
    frontPcRight.label = 'frontPcRight'
    frontPcRight.width = w
    frontPcRight.height = h * 1.1
    frontPcRight.x = 0
    frontPcRight.y = 0 - (h * 0.05)
    app.stage.addChild(frontPcRight);
    // frontPcRight.alpha = 0


    const topGlass = Sprite.from(textures.topGlass)
    topGlass.label = 'topGlass'
    topGlass.width = w
    topGlass.height = h
    topGlass.x = 0
    topGlass.y = 0
    app.stage.addChild(topGlass);


    const seat = Sprite.from(textures.seat)
    seat.label = 'seat'
    seat.width = w
    seat.height = h
    seat.x = 0
    seat.y = 0
    app.stage.addChild(seat);


    const vasilyok = Sprite.from(textures.vasilyok)
    vasilyok.label = 'vasilyok'
    vasilyok.width = (w / 2000) * 251
    vasilyok.height = (h / 1125) * 285
    vasilyok.x = w / 2
    vasilyok.y = (h / 1125) * 600
    vasilyok.anchor.set(.5, 0)
    app.stage.addChild(vasilyok);
    const blink = Sprite.from(textures.blink)
    blink.label = 'blink'
    blink.width = (w / 2000) * 251
    blink.height = (h / 1125) * 285
    blink.x = w / 2
    blink.y = (h / 1125) * 600
    blink.anchor.set(.5, 0)
    blink.alpha = 0;
    blink.interactive = false;
    app.stage.addChild(blink);
    setInterval(() => {
        blink.alpha = 1;
        setTimeout(() => {
            blink.alpha = 0;
        }, 300);
    }, 5000);
    vasilyok.eventMode = 'static';
    vasilyok.cursor = 'pointer';
    vasilyok.on('mouseenter', () => {
        vasilyok.texture = textures.vasilyokStroke
        settext('$PATCHY')
        setshowtext(true)
    });
    vasilyok.on('mouseout', () => {
        vasilyok.texture = textures.vasilyok
        setshowtext(false)
    });
    const smile = Sprite.from(textures.smile)
    smile.label = 'smile'
    smile.width = (w / 2000) * 251
    smile.height = (h / 1125) * 285
    smile.x = w / 2
    smile.y = (h / 1125) * 600
    smile.anchor.set(.5, 0)
    smile.alpha = 0;
    smile.interactive = false;
    app.stage.addChild(smile);





    const steerYpos = 900;
    const steer = Sprite.from(textures.steer)
    steer.label = 'steer'
    steer.width = w
    steer.height = h
    steer.interactive = false;
    steer.anchor.set(.5, (1 / 1125) * steerYpos)
    steer.x = w / 2
    steer.y = (h / 1125) * steerYpos
    app.stage.addChild(steer);
    steer.angle = -20
    let targetAngle = 0;
    let animationSpeed = 0.05;
    let turning = false;
    app.ticker.add(() => {
        if (turning) {
            steer.angle += (targetAngle - steer.angle) * animationSpeed;
            if (Math.abs(targetAngle - steer.angle) < 0.1) {
                steer.angle = targetAngle;
                turning = false;
                setTimeout(startTurning, Math.random() * 5000 + 400);
            }
        }
    });
    function startTurning() {
        turning = true;
        targetAngle = Math.random() * 40 - 20; // Новый случайный угол от -20 до 20
    }
    startTurning();


    const shturval = Sprite.from(textures.shturval)
    shturval.label = 'shturval'
    shturval.width = w
    shturval.height = h
    shturval.x = 0
    shturval.y = 0
    shturval.interactive = false;

    // shturval.alpha = 0
    app.stage.addChild(shturval);



    const left = Sprite.from(textures.left)
    left.label = 'left'
    left.width = (w / 100) * 25
    left.height = (h / 100) * 65
    left.anchor.set(0, 1)
    left.x = 0
    left.y = h * 1.05
    app.stage.addChild(left);
    left.eventMode = 'static';
    left.cursor = 'pointer';
    left.on('mouseenter', () => {
        left.texture = textures.leftStroke
        settext('TOKENOMICS')
        setshowtext(true)
    });
    left.on('mouseout', () => {
        left.texture = textures.left
        setshowtext(false)
    });


    const right = Sprite.from(textures.right)
    right.label = 'right'
    right.width = w
    right.height = h * 1.1
    right.x = 0
    right.y = 0 - (h * 0.05)
    app.stage.addChild(right);


    const blinkers = new Container()
    const blinkersWrapper = new Container()
    blinkersWrapper.label = 'blinkersWrapper'
    app.stage.addChild(blinkersWrapper);
    blinkersWrapper.addChild(blinkers);

    blinkers.label = 'blinkers'
    blinkersWrapper.label = 'blinkersWrapper'


    const rightLinkBlinker = new Graphics();
    const rightLinkBlinkerBorder = new Graphics();
    rightLinkBlinkerBorder.circle(0, 0, 15); // Радиус 50
    rightLinkBlinker.circle(0, 0, 10); // Радиус 50
    rightLinkBlinkerBorder.label = 'rightLinkBlinkerBorder';
    rightLinkBlinker.label = 'rightLinkBlinker';
    rightLinkBlinkerBorder.stroke(0xffffff); // Белый цвет
    rightLinkBlinker.fill(0xffffff); // Белый цвет
    rightLinkBlinkerBorder.alpha = .5
    rightLinkBlinkerBorder.position.set(rightLink.x + (w / 2000) * 100, rightLink.y + (w / 1100) * 100);
    rightLinkBlinker.position.set(rightLink.x + (w / 2000) * 100, rightLink.y + (w / 1100) * 100);
    blinkers.addChild(rightLinkBlinkerBorder);
    blinkers.addChild(rightLinkBlinker);
    let rightLinkBlinkerBorderscale = 0;
    let rightLinkBlinkerBorderalpha = 1;
    app.ticker.add(() => {
        rightLinkBlinkerBorderscale += 0.01;
        rightLinkBlinkerBorderalpha -= 0.005;
        rightLinkBlinkerBorder.scale.set(rightLinkBlinkerBorderscale);
        rightLinkBlinkerBorder.alpha = rightLinkBlinkerBorderalpha;
        if (rightLinkBlinkerBorderalpha <= 0) {
            rightLinkBlinkerBorderscale = 0;    // Сбрасываем масштаб
            rightLinkBlinkerBorderalpha = 1;    // Сбрасываем прозрачность
        }
    });



    const vasilyokBlinker = new Graphics();
    const vasilyokBlinkerBorder = new Graphics();
    vasilyokBlinkerBorder.circle(0, 0, 15); // Радиус 50
    vasilyokBlinker.circle(0, 0, 10); // Радиус 50
    vasilyokBlinkerBorder.label = 'vasilyokBlinkerBorder';
    vasilyokBlinker.label = 'vasilyokBlinker';
    vasilyokBlinkerBorder.stroke(0xffffff); // Белый цвет
    vasilyokBlinker.fill(0xffffff); // Белый цвет
    vasilyokBlinkerBorder.alpha = .5
    vasilyokBlinkerBorder.position.set(vasilyok.x - (w / 2000) * 25, vasilyok.y + (w / 1100) * 120);
    vasilyokBlinker.position.set(vasilyok.x - (w / 2000) * 25, vasilyok.y + (w / 1100) * 120);
    blinkers.addChild(vasilyokBlinkerBorder);
    blinkers.addChild(vasilyokBlinker);
    let vasilyokBlinkerBorderscale = 0;
    let vasilyokBlinkerBorderalpha = 1;
    app.ticker.add(() => {
        vasilyokBlinkerBorderscale += 0.01;
        vasilyokBlinkerBorderalpha -= 0.005;
        vasilyokBlinkerBorder.scale.set(vasilyokBlinkerBorderscale);
        vasilyokBlinkerBorder.alpha = vasilyokBlinkerBorderalpha;
        if (vasilyokBlinkerBorderalpha <= 0) {
            vasilyokBlinkerBorderscale = 0;    // Сбрасываем масштаб
            vasilyokBlinkerBorderalpha = 1;    // Сбрасываем прозрачность
        }
    });


    const centerRightBlinker = new Graphics();
    const centerRightBlinkerBorder = new Graphics();
    centerRightBlinkerBorder.circle(0, 0, 15); // Радиус 50
    centerRightBlinker.circle(0, 0, 10); // Радиус 50
    centerRightBlinkerBorder.label = 'centerRightBlinkerBorder';
    centerRightBlinker.label = 'centerRightBlinker';
    centerRightBlinkerBorder.stroke(0xffffff); // Белый цвет
    centerRightBlinker.fill(0xffffff); // Белый цвет
    centerRightBlinkerBorder.alpha = .5
    centerRightBlinkerBorder.position.set(centerRight.x + (w / 2000) * 100, centerRight.y + (w / 1100) * 100);
    centerRightBlinker.position.set(centerRight.x + (w / 2000) * 100, centerRight.y + (w / 1100) * 100);
    blinkers.addChild(centerRightBlinkerBorder);
    blinkers.addChild(centerRightBlinker);

    let centerRightBlinkerBorderscale = 0;
    let centerRightBlinkerBorderalpha = 1;
    app.ticker.add(() => {
        centerRightBlinkerBorderscale += 0.01;
        centerRightBlinkerBorderalpha -= 0.005;
        centerRightBlinkerBorder.scale.set(centerRightBlinkerBorderscale);
        centerRightBlinkerBorder.alpha = centerRightBlinkerBorderalpha;
        if (centerRightBlinkerBorderalpha <= 0) {
            centerRightBlinkerBorderscale = 0;    // Сбрасываем масштаб
            centerRightBlinkerBorderalpha = 1;    // Сбрасываем прозрачность
        }
    });


    const centerLeftBlinker = new Graphics();
    const centerLeftBlinkerBorder = new Graphics();
    centerLeftBlinkerBorder.circle(0, 0, 15); // Радиус 50
    centerLeftBlinker.circle(0, 0, 10); // Радиус 50
    centerLeftBlinkerBorder.label = 'centerLeftBlinkerBorder';
    centerLeftBlinker.label = 'centerLeftBlinker';
    centerLeftBlinkerBorder.stroke(0xffffff); // Белый цвет
    centerLeftBlinker.fill(0xffffff); // Белый цвет
    centerLeftBlinkerBorder.alpha = .5
    centerLeftBlinkerBorder.position.set(centerLeft.x + (w / 2000) * 100, centerLeft.y + (w / 1100) * 100);
    centerLeftBlinker.position.set(centerLeft.x + (w / 2000) * 100, centerLeft.y + (w / 1100) * 100);
    blinkers.addChild(centerLeftBlinkerBorder);
    blinkers.addChild(centerLeftBlinker);

    let centerLeftBlinkerBorderscale = 0;
    let centerLeftBlinkerBorderalpha = 1;
    app.ticker.add(() => {
        centerLeftBlinkerBorderscale += 0.01;
        centerLeftBlinkerBorderalpha -= 0.005;
        centerLeftBlinkerBorder.scale.set(centerLeftBlinkerBorderscale);
        centerLeftBlinkerBorder.alpha = centerLeftBlinkerBorderalpha;
        if (centerLeftBlinkerBorderalpha <= 0) {
            centerLeftBlinkerBorderscale = 0;    // Сбрасываем масштаб
            centerLeftBlinkerBorderalpha = 1;    // Сбрасываем прозрачность
        }
    });


    const leftBlinker = new Graphics();
    const leftBlinkerBorder = new Graphics();
    leftBlinkerBorder.circle(0, 0, 15); // Радиус 50
    leftBlinker.circle(0, 0, 10); // Радиус 50
    leftBlinkerBorder.label = 'leftBlinkerBorder';
    leftBlinker.label = 'leftBlinker';
    leftBlinkerBorder.stroke(0xffffff); // Белый цвет
    leftBlinker.fill(0xffffff); // Белый цвет
    leftBlinkerBorder.alpha = .5
    leftBlinkerBorder.position.set(left.x + (w / 2000) * 300, left.y - (w / 1100) * 200);
    leftBlinker.position.set(left.x + (w / 2000) * 300, left.y - (w / 1100) * 200);
    blinkers.addChild(leftBlinkerBorder);
    blinkers.addChild(leftBlinker);

    let leftBlinkerBorderscale = 0;
    let leftBlinkerBorderalpha = 1;
    app.ticker.add(() => {
        leftBlinkerBorderscale += 0.01;
        leftBlinkerBorderalpha -= 0.005;
        leftBlinkerBorder.scale.set(leftBlinkerBorderscale);
        leftBlinkerBorder.alpha = leftBlinkerBorderalpha;
        if (leftBlinkerBorderalpha <= 0) {
            leftBlinkerBorderscale = 0;    // Сбрасываем масштаб
            leftBlinkerBorderalpha = 1;    // Сбрасываем прозрачность
        }
    });



    app.ticker.add((delta) => {
        const blinkSpeed = 0.005;
        blinkers.alpha = 0.8 + 0.2 * Math.sin(app.ticker.lastTime * blinkSpeed);
    });






    const circle = new Graphics();
    circle.circle(0, 0, 40); // Радиус 50
    circle.stroke(0xffffff); // Белый цвет
    circle.interactive = false; // Отключаем интерактивность
    app.stage.addChild(circle);

    // Создаем текст
    const text = new Text('Click to\nexplore', {
        fontFamily: 'Arial',
        fontSize: 14,
        fill: 0xFFFFFF, // Черный цвет текста
        // fill: 0x000000, // Черный цвет текста
        align: 'center',
    });
    text.anchor.set(0.5); // Центровка текста
    circle.addChild(text);

    // Обновляем позицию круга
    bg.on('pointermove', (event) => {
        const pos = event.data.global;
        circle.position.set(pos.x, pos.y - 15);
        circle.alpha = 0
        blinkersWrapper.alpha = 1
    });

    const showAndMoveCircle = (event) => {
        const pos = event.data.global;
        circle.position.set(pos.x, pos.y - 15);
        circle.alpha = 1
        blinkersWrapper.alpha = 0
    }
    vasilyok.on('pointermove', (event) => { showAndMoveCircle(event) });
    rightLink.on('pointermove', (event) => { showAndMoveCircle(event) });
    centerRight.on('pointermove', (event) => { showAndMoveCircle(event) });
    centerLeft.on('pointermove', (event) => { showAndMoveCircle(event) });
    left.on('pointermove', (event) => { showAndMoveCircle(event) });


    vasilyok.on('pointerdown', () => { showAndMoveCircle(openTab('vasilyok')) });
    rightLink.on('pointerdown', () => { showAndMoveCircle(openTab('rightLink')) });
    centerRight.on('pointerdown', () => { showAndMoveCircle(openTab('centerRight')) });
    centerLeft.on('pointerdown', () => { showAndMoveCircle(openTab('centerLeft')) });
    left.on('pointerdown', () => { showAndMoveCircle(openTab('left')) });


}