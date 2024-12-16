import './scss/App.scss'
import { Application, Container } from './pixi';
import { useEffect, useRef } from 'react';

import loadTextures from "./loadTextures";
import initScene from "./initScene.js";
import mouseMove from "./mouseMove.js";


function App() {
  const pixiScene = useRef(null);
  const leftLink = useRef(null);
  let layers = [];
  let blinkInt;

  useEffect(() => {
    let app;
    let textures;
    // const TARGET_FPS = 60;
    // const FRAME_INTERVAL = 1000 / TARGET_FPS;

    const initGame = async (notextures = false) => {
      if (!notextures) {
        textures = await loadTextures();
      }

      const w = document.documentElement.clientWidth;
      const h = document.documentElement.clientHeight;

      app = new Application();
      await app.init({
        backgroundAlpha: 0,
        background: '#000', width: w, height: h
      });

      if (!pixiScene.current) return;
      pixiScene.current.appendChild(app.canvas);

      layers = initScene(app, textures, w, h);

      leftLink.current.addEventListener('mouseenter', () => {
        const left = app.stage.children.find(el => el.label == 'left')
        left.texture = textures.leftStroke
      })
      leftLink.current.addEventListener('mouseout', () => {
        const left = app.stage.children.find(el => el.label == 'left')
        left.texture = textures.left
      })

      // blinking
      const vasilyok = app.stage.children.find(el => el.label == 'vasilyok')
      blinkInt = setInterval(() => {
        vasilyok.texture = textures.blink;
        setTimeout(() => {
          vasilyok.texture = textures.vasilyok;
        }, 300);
      }, 5000);

      // steer
      // const steer = app.stage.children.find(el => el.label == 'steer')
      // steer.angle = 0;
      // blinkInt = setInterval(() => {
      //   setTimeout(() => {
      //     vasilyok.texture = textures.vasilyok;
      //   }, 300);
      // }, 5000);

      const scene = new Container();
      scene.label = 'scene';
      app.stage.addChild(scene);
    };

    initGame();

    const handleResize = () => {
      if (app) {
        app.destroy(true, { children: true, texture: true, baseTexture: true });
      }
      if (pixiScene.current) {
        pixiScene.current.innerHTML = '';
      }
      initGame(true);
    };

    const handleMouseMove = (event) => {
      const { clientX } = event;
      const centerX = window.innerWidth / 2;
      mouseMove(clientX, centerX, app)
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (app) {
        app.destroy(true, { children: true, texture: true, baseTexture: true });
      }
      if (pixiScene.current) {
        pixiScene.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div className="App_selectors free_img">
        <div className='App_selectors_left' ref={leftLink}></div>
      </div>
      <div ref={pixiScene} id="canvasWrapperPixi">

      </div>
    </>
  )
}

export default App;
