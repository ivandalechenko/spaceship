import { useState } from 'react';
import './scss/Faq.scss';
import Tab from "./Tab";
export default ({ close }) => {
    const [tab, settab] = useState('whatIs');
    return (
        <div className='App_tab'>
            <div className='Faq App_tab_inner'>
                <div className='App_tab_cross free_img'>
                    <img src="/img/cross.svg" alt="" onClick={(e) => {
                        close()
                    }} />
                </div>
                <div className='Faq_content'>
                    <div className='Faq_nav'>
                        <Tab text={'What is Patchy?'} selected={tab === 'whatIs'} onClick={() => { settab('whatIs') }} />
                        <Tab text={'I am a useless community member. What can I do to help Patchy become the eternal cult?'} selected={tab === 'useless'} onClick={() => { settab('useless') }} />
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
                                Patchy is a gecko from space created by the largest memes in the space
                            </div>
                        </>}
                        {tab === 'useless' && <>
                            <div className='Faq_header'>
                                I am a useless community member. What can I do to help Patchy become the eternal cult?
                            </div>
                            <div className='Faq_answer'>
                                Ah, so you're saying you're "useless"? Nah, fam, you're just early to the game. Most of us in crypto started out the same—wondering what the heck we're even doing here. Guess what? That's part of what makes this space fun. You wanna help Patchy ascend to eternal cult status? Here's how:

                                1. Retweet. Repost. Rinse and Repeat.
                                If Patchy is on your feed, it should be on everyone else's too. Retweet, repost, and reply to everything. Be loud. Act like you own the joint (because, honestly, as a community member, you kinda do). Spreading Patchy propaganda is a must.
                                2. Meme Madness.
                                Got a basic grasp of dragging, dropping, and adding text? Congrats, you're officially part of the Patchy Meme Team. Patchy's gotta be everywhere. Make memes, make people laugh, and make influencers confused but intrigued. The weirder, the better.
                                3. Influencer Ambush.
                                If you know an influencer—or at least follow one—you've got a job. Tag them. Keep tagging them until they notice. Remember, subtlety is overrated in meme culture. If they don't know Patchy now, they will once you're done. And they'll thank you for it. Probably.
                                4. Meme Raid Squad.
                                When the call goes out for a meme raid or a social push, you answer. Doesn't matter if it's midnight, Patchy demands loyalty. Participate in every raid, every hype cycle, and every ridiculous "Gecko Dance at 4 a.m." contest we throw. You'll be doing your part.
                                5. Create Chaos in Chats.
                                Engage. Spam reactions, start random convos, drop GIFs that make zero sense but get people laughing. Chaos is content, and content is what fuels Patchy's cult status. Discord, Telegram—wherever Patchy lives, make noise. You're not "useless" if you can create vibes.
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
                                <img src="/img/bonk.jpg" alt="" />
                            </div>

                        </>}
                        {tab === 'where' && <>
                            <div className='Faq_header'>
                                Where and how can I buy $PATCHY
                            </div>
                            <a href='https://raydium.io/' target='_blank' className='Faq_answer'>
                                Radium
                            </a>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}