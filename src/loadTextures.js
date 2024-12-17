import { Assets, Texture } from './pixi';

const loadTextures = async () => {
    const textures = {}
    textures.backGlass = await Assets.load(`/img/backGlass.png`);
    textures.bg = await Assets.load(`/img/bg.png`);
    textures.floor = await Assets.load(`/img/floor.png`);
    textures.topGlass = await Assets.load(`/img/topGlass.png`);
    textures.table = await Assets.load(`/img/table.png`);

    textures.backestPcLeft = await Assets.load(`/img/backestPcLeft.png`);
    textures.backPcLeft = await Assets.load(`/img/backPcLeft.png`);
    textures.middlePcLeft = await Assets.load(`/img/middlePcLeft.png`);
    textures.frontPcLeft = await Assets.load(`/img/frontPcLeft.png`);
    textures.backestPcRight = await Assets.load(`/img/backestPcRight.png`);
    textures.backPcRight = await Assets.load(`/img/backPcRight.png`);
    textures.middlePcRight = await Assets.load(`/img/middlePcRight.png`);
    textures.frontPcRight = await Assets.load(`/img/frontPcRight.png`);


    textures.vasilyok = await Assets.load(`/img/vasilyok.png`);
    textures.vasilyokStroke = await Assets.load(`/img/vasilyokStroke.png`);
    textures.blink = await Assets.load(`/img/blink.png`);
    textures.smile = await Assets.load(`/img/smile.png`);
    textures.seat = await Assets.load(`/img/seat.png`);
    textures.steer = await Assets.load(`/img/steer.png`);
    textures.steerBad = await Assets.load(`/img/steerBad.png`);
    textures.shturval = await Assets.load(`/img/shturval.png`);

    textures.left = await Assets.load(`/img/left.png`);
    textures.leftStroke = await Assets.load(`/img/leftStroke.png`);
    textures.right = await Assets.load(`/img/right.png`);
    textures.chars = await Assets.load(`/img/chars.png`);

    textures.rightLink = await Assets.load(`/img/rightLink.png`);
    textures.rightLinkStroke = await Assets.load(`/img/rightLinkStroke.png`);

    textures.centerRight = await Assets.load(`/img/centerRight.png`);
    textures.centerRightStroke = await Assets.load(`/img/centerRightStroke.png`);

    textures.centerLeft = await Assets.load(`/img/centerLeft.png`);
    textures.centerLeftStroke = await Assets.load(`/img/centerLeftStroke.png`);




    return textures
}

export default loadTextures
