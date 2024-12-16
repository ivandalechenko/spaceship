import { Container, Sprite } from './pixi';

export default (clientX, centerX, app) => {
    const kef = 50



    const middlePcLeft = app.stage.children.find(el => el.label == 'middlePcLeft')
    middlePcLeft.x = clientX / kef - centerX / kef - centerX / kef
    const middlePcRight = app.stage.children.find(el => el.label == 'middlePcRight')
    middlePcRight.x = clientX / kef - centerX / kef + centerX / kef

    const backPcLeft = app.stage.children.find(el => el.label == 'backPcLeft')
    backPcLeft.x = clientX / kef - centerX / kef - centerX / kef
    const backPcRight = app.stage.children.find(el => el.label == 'backPcRight')
    backPcRight.x = clientX / kef - centerX / kef + centerX / kef

    const backestPcLeft = app.stage.children.find(el => el.label == 'backestPcLeft')
    backestPcLeft.x = clientX / kef - centerX / kef - centerX / kef
    const backestPcRight = app.stage.children.find(el => el.label == 'backestPcRight')
    backestPcRight.x = clientX / kef - centerX / kef + centerX / kef

    const floor = app.stage.children.find(el => el.label == 'floor')
    floor.x = clientX / kef - centerX / kef

    const backGlass = app.stage.children.find(el => el.label == 'backGlass')
    backGlass.x = clientX / kef - centerX / kef

    const topGlass = app.stage.children.find(el => el.label == 'topGlass')
    topGlass.x = clientX / kef - centerX / kef



    const frontPcLeft = app.stage.children.find(el => el.label == 'frontPcLeft')
    frontPcLeft.x = (clientX / kef) / 2 - centerX / kef / 2 - centerX / kef
    const left = app.stage.children.find(el => el.label == 'left')
    left.x = (clientX / kef) / 2 - centerX / kef / 2 - centerX / kef

    const frontPcRight = app.stage.children.find(el => el.label == 'frontPcRight')
    frontPcRight.x = (clientX / kef) / 2 - centerX / kef + centerX / kef


    const vasilyok = app.stage.children.find(el => el.label == 'vasilyok')
    vasilyok.x = -(clientX / kef) / 5 - centerX / kef

    const seat = app.stage.children.find(el => el.label == 'seat')
    seat.x = -(clientX / kef) / 20 - centerX / kef

    const steer = app.stage.children.find(el => el.label == 'steer')
    steer.x = -(clientX / kef) / 3 - centerX / kef

    const shturval = app.stage.children.find(el => el.label == 'shturval')
    shturval.x = -(clientX / kef) - centerX / kef





    // const frontPcLeft = app.stage.children.find(el => el.label == 'frontPcLeft')
    // frontPcLeft.x = clientX / 30 - centerX / 30 - (centerX / 30)
    // const frontPcRight = app.stage.children.find(el => el.label == 'frontPcRight')
    // frontPcRight.x = clientX / 30 - centerX / 30 + (centerX / 30)

    // const middlePcLeft = app.stage.children.find(el => el.label == 'middlePcLeft')
    // middlePcLeft.x = clientX / 50 - centerX / 50 - centerX / 25
    // const middlePcRight = app.stage.children.find(el => el.label == 'middlePcRight')
    // middlePcRight.x = clientX / 50 - centerX / 50 + centerX / 25

    // const backPcLeft = app.stage.children.find(el => el.label == 'backPcLeft')
    // backPcLeft.x = clientX / 80 - centerX / 80 - centerX / 30
    // const backPcRight = app.stage.children.find(el => el.label == 'backPcRight')
    // backPcRight.x = clientX / 80 - centerX / 80 + centerX / 30

    // const backestPcLeft = app.stage.children.find(el => el.label == 'backestPcLeft')
    // backestPcLeft.x = clientX / 120 - centerX / 120 - centerX / 30
    // const backestPcRight = app.stage.children.find(el => el.label == 'backestPcRight')
    // backestPcRight.x = clientX / 120 - centerX / 120 + centerX / 30

    // const backPc = app.stage.children.find(el => el.label == 'backPc')
    // backPc.x = clientX / 100 - centerX / 100

    // const floor = app.stage.children.find(el => el.label == 'floor')
    // floor.x = clientX / 200 - centerX / 200

    // const backGlass = app.stage.children.find(el => el.label == 'backGlass')
    // backGlass.x = clientX / 150 - centerX / 150

    // const topGlass = app.stage.children.find(el => el.label == 'topGlass')
    // topGlass.x = clientX / 200 - centerX / 200

    const bg = app.stage.children.find(el => el.label == 'bg')
    bg.x = clientX / 100 - centerX / 100


}