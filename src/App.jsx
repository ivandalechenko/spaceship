import './scss/App.scss'
import { Application, Container } from './pixi';
import { useEffect, useRef, useState } from 'react';

import loadTextures from "./loadTextures";
import initScene from "./initScene.js";
import mouseMove from "./mouseMove.js";

import Faq from "./Faq.jsx";
import Tab from "./Tab.jsx";
import RunText from './RunText.jsx';


function App() {

  const pixiScene = useRef(null);
  let layers = [];
  const [openedTab, setopenedTab] = useState('');
  const fingerdown = useRef(null)
  const newmobpos = useRef(null)
  const mobpos = useRef(null)
  const lastmobpos = useRef(null)
  // const mobpos = useRef(null)

  const openTab = (tab) => {
    setopenedTab(tab)
  }

  useEffect(() => {

    let app;
    let textures;
    // const TARGET_FPS = 60;
    // const FRAME_INTERVAL = 1000 / TARGET_FPS;

    const initGame = async (notextures = false) => {
      if (!notextures) {
        textures = await loadTextures();
      }

      let w = document.documentElement.clientWidth;
      let h = document.documentElement.clientHeight;

      if (h > w * 2) {
        w = w * 3
      }
      if (h > w * 1.5) {
        w = w * 2.5
      }
      if (h > w) {
        w = w * 2
      }

      app = new Application();
      await app.init({
        backgroundAlpha: 0,
        background: '#000', width: w, height: h
      });

      if (!pixiScene.current) return;
      pixiScene.current.appendChild(app.canvas);

      layers = initScene(app, textures, w, h, openTab);

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



    const handleMove = (event) => {
      let wIsh = document.documentElement.clientWidth;
      let w = document.documentElement.clientWidth;
      let h = document.documentElement.clientHeight;
      let mob = false


      if (h > w * 2) {
        w = w * 3
        mob = true
      }
      if (h > w * 1.5) {
        w = w * 2.5
        mob = true
      }
      if (h > w) {
        w = w * 2
        mob = true
      }

      const centerX = w / 2;
      let clientX;
      if (event.type === 'mousemove') {
        // Координаты для мыши
        clientX = event.clientX;
      } else if (event.type === 'touchmove') {
        // Координаты для сенсорного экрана (берем первое касание)
        const lmb = lastmobpos.current || 0
        clientX = event.touches[0].clientX;
        if (!fingerdown.current) {
          newmobpos.current = clientX
        }
        // console.log(clientX);
        if (lmb) {
          clientX = lmb - newmobpos.current + event.touches[0].clientX;
        }
        if (clientX < 0) {
          clientX = 1
        }
        if (clientX > w / 2) {
          clientX = w / 2
        }

      }

      console.log(clientX);


      mobpos.current = clientX

      mouseMove(clientX, centerX, app, w, mob);
      fingerdown.current = true;
    };

    const handleTouchEnd = () => {
      lastmobpos.current = mobpos.current
      fingerdown.current = false;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);

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
      <div className="App_tab_wrapper free_img">
        {openedTab === 'left' && <div className='App_tab tokenomics'>
          <div className='App_tab_inner'>
            <div className='App_tab_cross free_img'>
              <img src="/img/cross.svg" alt="" onClick={(e) => {
                setopenedTab('')
              }} />
            </div>

            <div className='App_tab_header'>
              Tokenomics
            </div>
            <div className='App_tab_subheader'>
              1 No Fees, Just Vibes.
            </div>
            <div className='App_tab_p'>
              Degens can let loose on trading and finally be the market makers they've always dreamed of—no charges, no limits, just pure unhinged vibes. Nothing holding us back, only endless shitposts and degenerate dreams.
            </div>
            <div className='App_tab_subheader'>
              2 Liquidity Locked, Rug-Proof
            </div>
            <div className='App_tab_p'>
              $Patchy's liquidity is locked tighter than your ex's wallet. No funny business, just pure degeneracy unleashed.
            </div>
            <div className='App_tab_subheader'>
              3 Fixed Supply, Unlimited Chaos.
            </div>
            <div className='App_tab_p'>
              1 billion Patchy tokens, and that's it. Grab your share before the supply shock hits and the chaos begins.
            </div>
            <div className='App_tab_subheader'>
              4 Anti-Whale Defense, Fair for All.
            </div>
            <div className='App_tab_p'>
              Patchy keeps it balanced with a 1% max wallet limit. No greedy whales hoarding the stash, just a level playing field for all degens to dive in and share $Patchy
            </div>
          </div>
        </div>}

        {openedTab === 'centerLeft' && <Faq close={() => { setopenedTab('') }} />}
        {openedTab === 'centerRight' && <div className='App_tab roadmap'>
          <div className='App_tab_inner'>
            <div className='App_tab_cross free_img'>
              <img src="/img/cross.svg" alt="" onClick={(e) => {
                setopenedTab('')
              }} />
            </div>
            <div className='App_tab_header'>
              Roadmap
            </div>
            <div className='App_tab_content'>
              <img src="/img/roadmap.svg" alt="" />
            </div>
          </div>
        </div>}

        {openedTab === 'rightLink' && <div className='App_tab roadmap'>
          <div className='App_tab_inner'>
            <div className='App_tab_cross free_img'>
              <img src="/img/cross.svg" alt="" onClick={(e) => {
                setopenedTab('')
              }} />
            </div>
            <div className='App_tab_header'>
              Our Socials
            </div>
            <div className='App_tab_socials'>
              <Tab text={'Twitter'} />
              <Tab text={'Telegram'} />
              <Tab text={'Dexscreener'} />
              <Tab text={'Dextools'} />
              <Tab text={'Coingecko'} />
            </div>
          </div>
        </div>}

        {openedTab === 'vasilyok' && <div className='App_tab roadmap'>
          <div className='App_tab_inner'>
            <div className='App_tab_cross free_img'>
              <img src="/img/cross.svg" alt="" onClick={(e) => {
                setopenedTab('')
              }} />
            </div>
            <RunText />
          </div>
        </div>
        }

      </div>
      <div ref={pixiScene} id="canvasWrapperPixi">
      </div>
    </>
  )
}

export default App;
