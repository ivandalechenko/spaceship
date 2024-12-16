import { Container, Sprite } from './pixi';

export default (app, textures, w, h) => {
    const bg = Sprite.from(textures.bg)
    bg.label = 'bg'
    bg.width = w
    bg.height = h
    bg.x = 0
    bg.y = 0
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
    floor.width = w
    floor.height = h
    floor.x = 0
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
    vasilyok.width = w
    vasilyok.height = h
    vasilyok.x = 0
    vasilyok.y = 0
    app.stage.addChild(vasilyok);

    const steer = Sprite.from(textures.steer)
    steer.label = 'steer'
    steer.width = w
    steer.height = h
    // steer.pivot.x = steer.width / 2
    // steer.pivot.y = 0
    steer.x = 0
    steer.y = 0
    app.stage.addChild(steer);
    // steer.angle = 0

    const shturval = Sprite.from(textures.shturval)
    shturval.label = 'shturval'
    shturval.width = w
    shturval.height = h
    shturval.x = 0
    shturval.y = 0
    app.stage.addChild(shturval);

    const left = Sprite.from(textures.left)
    left.label = 'left'
    left.width = w
    left.height = h * 1.1
    left.x = 0
    left.y = 0 - (h * 0.05)
    app.stage.addChild(left);
}