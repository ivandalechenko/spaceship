import { Container, Sprite } from './pixi';

export default (clientX, centerX, app, w, mob) => {
    const kef = 50;

    // const blinkersWrapper = app.stage.children.find(el => el.label == 'blinkersWrapper')
    // const blinkers = blinkersWrapper.children.find(el => el.label == 'blinkers')


    let add = 0;
    if (mob) {
        add = (w / 2) * clientX / centerX - w / 2
    }

    try {
        const middlePcLeft = app.stage.children.find(el => el.label == 'middlePcLeft')
        middlePcLeft.x = (clientX / kef - centerX / kef - centerX / kef) + add
    } catch { }
    try {

        const middlePcRight = app.stage.children.find(el => el.label == 'middlePcRight')
        middlePcRight.x = (clientX / kef - centerX / kef + centerX / kef) + add
    } catch { }

    try {

        const backPcLeft = app.stage.children.find(el => el.label == 'backPcLeft')
        backPcLeft.x = (clientX / kef - centerX / kef - centerX / kef) + add
    } catch { }
    try {

        const backPcRight = app.stage.children.find(el => el.label == 'backPcRight')
        backPcRight.x = (clientX / kef - centerX / kef + centerX / kef) + add
    } catch { }

    try {

        const backestPcLeft = app.stage.children.find(el => el.label == 'backestPcLeft')
        backestPcLeft.x = (clientX / kef - centerX / kef - centerX / kef) + add
    } catch { }
    try {

        const backestPcRight = app.stage.children.find(el => el.label == 'backestPcRight')
        backestPcRight.x = (clientX / kef - centerX / kef + centerX / kef) + add
    } catch { }

    try {

        const floor = app.stage.children.find(el => el.label == 'floor')
        floor.x = (clientX / kef - centerX / kef) + add + w * 0.1
    } catch { }

    try {

        const backGlass = app.stage.children.find(el => el.label == 'backGlass')
        backGlass.x = (clientX / kef - centerX / kef) + add
    } catch { }

    try {

        const topGlass = app.stage.children.find(el => el.label == 'topGlass')
        topGlass.x = (clientX / kef - centerX / kef) + add
    } catch { }

    try {

        const rightLink = app.stage.children.find(el => el.label == 'rightLink')
        rightLink.x = (((w / 2000) * 1500) + clientX / kef - centerX / kef) + add
    } catch { }

    try {

        const centerRight = app.stage.children.find(el => el.label == 'centerRight')
        centerRight.x = ((w / 2000) * 1175 + clientX / kef - centerX / kef) + add
    } catch { }

    try {

        const centerLeft = app.stage.children.find(el => el.label == 'centerLeft')
        centerLeft.x = ((w / 2000) * 640 + clientX / kef - centerX / kef) + add
    } catch { }



    try {

        const frontPcLeft = app.stage.children.find(el => el.label == 'frontPcLeft')
        frontPcLeft.x = ((clientX / kef) / 2 - centerX / kef / 2 - centerX / kef) + add
    } catch { }
    try {
        const left = app.stage.children.find(el => el.label == 'left')
        left.x = ((clientX / kef) / 2 - centerX / kef / 2 - centerX / kef) + add

        // const leftBlinkerBorder = blinkers.children.find(el => el.label == 'leftBlinkerBorder')
        // leftBlinkerBorder.x = ((clientX / kef) / 2 - centerX / kef / 2 - centerX / kef) + add
        // const leftBlinker = blinkers.children.find(el => el.label == 'leftBlinker')
        // leftBlinker.x = ((clientX / kef) / 2 - centerX / kef / 2 - centerX / kef) + add
    } catch { }

    try {

        const frontPcRight = app.stage.children.find(el => el.label == 'frontPcRight')
        frontPcRight.x = ((clientX / kef) / 2 - centerX / kef + centerX / kef) + add
    } catch { }




    try {

        const vasilyok = app.stage.children.find(el => el.label == 'vasilyok')
        vasilyok.x = (-(clientX / kef) / 5 - centerX / kef + w / 2) + add
    } catch { }
    try {

        const blink = app.stage.children.find(el => el.label == 'blink')
        blink.x = (-(clientX / kef) / 5 - centerX / kef + w / 2) + add

    } catch { }

    try {

        const smile = app.stage.children.find(el => el.label == 'smile')
        smile.x = (-(clientX / kef) / 5 - centerX / kef + w / 2) + add

    } catch { }


    try {

        const seat = app.stage.children.find(el => el.label == 'seat')
        seat.x = (-(clientX / kef) / 20 - centerX / kef) + add
    } catch { }

    try {

        const steer = app.stage.children.find(el => el.label == 'steer')
        steer.x = (-(clientX / kef) / 3 - centerX / kef + w / 2) + add
    } catch { }

    try {

        const shturval = app.stage.children.find(el => el.label == 'shturval')
        shturval.x = (-(clientX / kef) - centerX / kef) + add
    } catch { }

    try {

        const right = app.stage.children.find(el => el.label == 'right')
        right.x = ((clientX / kef) / 2 - centerX / kef + centerX / kef) + add
    } catch { }



    try {

        const chars = app.stage.children.find(el => el.label == 'chars')
        chars.x = ((clientX / kef) / 1.2 - centerX / kef) + add
    } catch { }

    try {

        const table = app.stage.children.find(el => el.label == 'table')
        table.x = ((clientX / kef) / .9 - centerX / kef) + add
    } catch { }



    try {
        const bg = app.stage.children.find(el => el.label == 'bg')
        bg.x = (clientX / 100 - centerX / 100) + add + w * 0.1
    } catch { }

    try {
        const blinkersWrapper = app.stage.children.find(el => el.label == 'blinkersWrapper')
        blinkersWrapper.x = add
    } catch { }




}