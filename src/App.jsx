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
  const [text, settext] = useState('MEOW');
  const [showtext, setshowtext] = useState(false);
  const [hideSpaceship, sethideSpaceship] = useState(false);
  const [perehod, setperehod] = useState(false);
  const [showSellError, setshowSellError] = useState(false);


  let layers = [];
  const [openedTab, setopenedTab] = useState('');
  const lastmobpos = useRef(null)
  const fingerdown = useRef(null)
  const pixiScene = useRef(null);
  const newmobpos = useRef(null)
  const mobpos = useRef(null)
  // const mobpos = useRef(null)

  const openTab = (tab) => {
    setopenedTab(tab)
  }

  const appRef = useRef(null)

  useEffect(() => {
    let app;
    let textures;
    // const TARGET_FPS = 60;
    // const FRAME_INTERVAL = 1000 / TARGET_FPS;

    const initGame = async (notextures = false) => {
      console.log('loading textures');

      if (!notextures) {
        textures = await loadTextures();
      }

      console.log('loaded!');

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

      appRef.current = app; // Сохранение ссылки на приложение
      await app.init({
        backgroundAlpha: 0,
        background: '#000', width: w, height: h
      });

      if (!pixiScene.current) return;
      pixiScene.current.appendChild(app.canvas);

      layers = initScene(app, textures, w, h, openTab, setshowtext, settext);

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
      let kef = 2
      let okef = 2


      if (h > w * 2) {
        w = w * 3
        kef = 3
        okef = 4

        mob = true
      }
      if (h > w * 1.5) {
        w = w * 2.5
        kef = 2.5
        okef = 3
        mob = true
      }
      if (h > w) {
        w = w * 2
        kef = 2
        okef = 1
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

        if (okef === 1) {
          if (clientX < 0) {
            clientX = 1
          }
        } else {
          if (clientX < 0 - wIsh / 4) {
            clientX = 1 - wIsh / 4
          }
        }

        if (clientX > w - centerX) {
          clientX = w - centerX
        }


        // if (clientX > wIsh / 3) {
        //   clientX = w / 3
        // } else if (clientX > wIsh / 2.5) {
        //   clientX = w / 2.5
        // } else if (clientX > wIsh / 2) {

        // console.log(clientX);


        // if (clientX > w * kef) {
        //   clientX = w / kef
        // }

      }

      console.log(clientX);

      fingerdown.current = true;

      if (mobpos.current) {
        mouseMove(clientX, centerX, app, w, mob);
      }

      mobpos.current = clientX
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



  const buy = () => {
    const app = appRef.current; // Сохранение ссылки на приложение
    const smile = app.stage.children.find(el => el.label == 'smile')
    smile.alpha = 1
    setTimeout(() => {
      smile.alpha = 0
    }, 3000);
  }

  const sell = async () => {
    const app = appRef.current; // Сохранение ссылки на приложение
    const steer = app.stage.children.find(el => el.label == 'steer')
    const textures = await loadTextures();

    steer.texture = textures.steerBad

    setTimeout(() => {
      steer.texture = textures.steer
    }, 3000);
  }


  const gotoship = () => {
    setperehod(true);
    setTimeout(() => {
      sethideSpaceship(true)
      setTimeout(() => {
        setperehod(false);
      }, 500);
    }, 300);
  }

  const [canBeClicked, setcanBeClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setcanBeClicked(true)
    }, 5000);
  }, [])

  const [spaceshipOffsetX, setspaceshipOffsetX] = useState(0);
  const [spaceshipOffsetY, setspaceshipOffsetY] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const spaceshipParalax = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;

    setspaceshipOffsetX(x);
    setspaceshipOffsetY(y);

    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  }

  // spaceshipClickMove

  return (
    <>
      <div className='App_perehod_wrapper free_img' >
        <div className='App_perehod' style={{
          opacity: perehod ? 1 : 0
        }}>

        </div>
      </div>

      {
        !hideSpaceship && <>
          <div className='App_spaceship_wrapper free_img'>
            <div className='App_spaceship' onMouseMove={spaceshipParalax} style={{
              backgroundPosition: `${-spaceshipOffsetX}px ${-spaceshipOffsetY}px`
            }}>
              <img src="/img/ship.png" style={{
                transform: `translate(${spaceshipOffsetX}px, ${spaceshipOffsetY}px)`
              }} className={`${canBeClicked && 'canBeClicked'}`} alt="" onClick={() => {
                canBeClicked && gotoship()
              }} />
            </div>
          </div>

          <div
            className='App_spaceshipClick_wrapper free_img'
          >
            <div
              className='App_spaceshipClick'
            >
              <img
                style={{
                  position: 'relative',
                  transform: `translate(${cursorPos.x - 50}px, ${cursorPos.y - 50}px)`
                }}
                src="/img/clickTo.svg"
                alt=""
              />
            </div>
          </div>


          {/* clickTo */}
        </>
      }

      {text && hideSpaceship && <div className='App_text_wrapper free_img'><div className='App_text'>
        <div className='App_text_inner' style={{
          opacity: showtext ? 1 : 0
        }} >
          <div className="App_text_inner_inner" style={{
            translate: `0px ${showtext ? 0 : 100}px`
          }}>
            {text}
          </div>
        </div>
      </div>
      </div>}
      {hideSpaceship && <div className='App_vids_wrapper free_img'><div className='App_vids'>
        {/* <div className='App_vids_inner'> */}
        <video autoPlay muted loop playsinline webkit-playsinline>
          <source src="/img/v1.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop playsinline webkit-playsinline>
          <source src="/img/v2.mp4" type="video/mp4" />
        </video>
        {/* </div> */}
      </div>
      </div>}
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
              <Tab text={'Twitter'} link="https://x.com/patchyoneth" />
              <Tab text={'Telegram'} link="https://t.me/patchyoneth" />
              <Tab text={'Dexscreener'} link="https://www.dextools.io/app/en/ether/pair-explorer/0xfeded496880ef5c8e2d90b1efb0f2ed63929c3b3" />
              <Tab text={'Dextools'} link="https://dexscreener.com/ethereum/0xfeded496880ef5c8e2d90b1efb0f2ed63929c3b3" />
              {/* <Tab text={'Coingecko'} /> */}
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
        </div>}


      </div>
      {
        hideSpaceship && <div className='App_buysell_wrapper free_img'>
          <div className='App_buysell'>
            <div className='App_buysell_btns'>
              <div className='App_buysell_btn' onClick={() => {
                buy()
              }}>
                BUY
              </div>
              <div className={`App_buysell_btn ${showSellError && 'App_buysell_btn_err'}`} onClick={() => {
                setshowSellError(true)
                sell()
              }}>
                {showSellError ? 'ERROR' : 'SELL'}
              </div>
            </div>
            {/* <div className='App_buysell_img'>
            <img src="/img/bot.svg" alt="" />
          </div> */}
          </div>
        </div>
      }
      <div ref={pixiScene} id="canvasWrapperPixi" style={{
        zIndex: hideSpaceship ? '3' : '-1'
      }}>
      </div>

    </>
  )
}

export default App;
