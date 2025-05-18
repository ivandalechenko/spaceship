import { useState } from 'react';
import './scss/Faq.scss';
import Tab from "./Tab";
export default ({ close }) => {
    const [tab, settab] = useState('whatIs');
    return (
        <div className='App_tab' onClick={close}>
            <div className='Faq App_tab_inner' onClick={(e) => { e.stopPropagation() }}>
                <div className='App_tab_cross free_img'>
                    <img src="/img/cross.svg" alt="" onClick={(e) => {
                        close()
                    }} />
                </div>
                <div className='Faq_content'>
                    <div className='Faq_nav'>
                        <Tab text={'What is Patchy?'} selected={tab === 'whatIs'} onClick={() => { settab('whatIs') }} />
                        <Tab text={'What can I do to help Patchy become the eternal cult?'} selected={tab === 'useless'} onClick={() => { settab('useless') }} />
                        <Tab text={'Which chain is $PATCHY build on?'} selected={tab === 'which'} onClick={() => { settab('which') }} />
                        <Tab text={'Is Patchy a rug?'} selected={tab === 'isrug'} onClick={() => { settab('isrug') }} />
                        <Tab text={'Where and how can I buy $PATCHY?'} selected={tab === 'where'} onClick={() => { settab('where') }} />
                    </div>
                    <div className='Faq_text' style={{
                        overflowY: tab === 'useless' && 'scroll'
                    }}>
                        {tab === 'whatIs' && <>
                            <div className='Faq_header'>
                                What is Patchy?
                            </div>
                            <div className='Faq_answer'>
                                Patchy is a cosmic gecko born from the raw energy of the universe’s greatest memes.
                                <br /><br />
                                He pilots a star-cruiser packed with his meme brotherhood, racing through galaxies to spread chaos, joy, and dankness.
                                Wherever Patchy goes, laughter follows. His mission? To unite the weird, the wild, and the wonderfully absurd in one interstellar meme party.
                                <br /><br />
                                He’s not just a gecko — he’s a cult.
                            </div>
                        </>}
                        {tab === 'useless' && <>
                            <div className='Faq_header'>
                                What can I do to help Patchy become the eternal cult?
                            </div>
                            <div className='Faq_answer'>
                                Think you're useless? Nah. You're just early. Everyone starts confused in crypto — that’s half the fun. Want Patchy to go cult status? Here’s how:
                                <br /><br />
                                <div className='Faq_answer_bold'>
                                    Retweet & Repost.
                                </div>
                                If you see Patchy, share Patchy. Be loud. You are the community.
                                <br /><br />
                                <div className='Faq_answer_bold'>
                                    Make Memes.
                                </div>
                                Weird? Funny? Cringe? Good. Drop those Patchy memes everywhere.
                                <br /><br />
                                <div className='Faq_answer_bold'>
                                    Tag Influencers.
                                </div>
                                Don’t be shy — tag them until they have to ask: “Who’s Patchy?”
                                <br /><br />
                                <div className='Faq_answer_bold'>
                                    Join Meme Raids.
                                </div>
                                Midnight? Doesn’t matter. If it’s Patchy time, it’s go time.
                                <br /><br />
                                <div className='Faq_answer_bold'>
                                    Create Chaos.
                                </div>
                                Spam GIFs, react like crazy, stir it up. Vibes = content = cult.
                            </div>
                        </>}
                        {tab === 'which' && <>
                            <div className='Faq_header'>
                                Which chain is $PATCHY build on?
                            </div>
                            <div className='Faq_answer'>
                                Solana
                            </div>

                        </>}
                        {tab === 'isrug' && <>
                            <div className='Faq_header'>
                                Is Patchy a rug?
                            </div>
                            <div className='Faq_answer'>
                                <div className='Faq_answer_bold'>
                                    Patchy is CULT
                                </div>
                                <br />
                                <img src="/img/bonk.jpg" alt="" />
                            </div>

                        </>}
                        {tab === 'where' && <>
                            <div className='Faq_header'>
                                Where and how can I buy $PATCHY
                            </div>
                            <div className='Faq_answer'>

                                You can buy $PATCHY easily on Solana using your Phantom wallet and Jupiter aggregator.
                                <br /><br />

                                Install  <a href='https://phantom.com/' target='_blank' className='Faq_answer'>
                                    Phantom Wallet
                                </a>  and deposit some SOL.
                                <br /><br />

                                Go to                             <a href='https://jup.ag/swap/SOL-6D6ccmg71x56V5Je1Mh82MFPYL38gaZqNc2LG1XMbonk' target='_blank' className='Faq_answer'>
                                    Jupiter
                                </a> Aggregator.
                                <br /><br />

                                Connect your wallet.
                                <br /><br />

                                Swap SOL for $PATCHY and approve the transaction.
                                Boom — you’re now part of the cosmic cult.
                                <br /><br />

                                Buy on Radium if you prefer using a DEX directly.
                            </div>

                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}