import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
<div>
  <div className='intro'>
    <div id='introP1'><h1>Cointelligent</h1> is the most beautiful way to keep track of the crypto world</div>
    <p id='introP2'>Real-time crptocurrency data, analysis, and news. Join our beta today and get 30 days premium free.</p>
    <div id="mc_embed_signup" dangerouslySetInnerHTML={{
      __html: ' <form action="//waverly.us16.list-manage.com/subscribe/post?u=1015f645f85b3308693f3b0c4&amp;id=a848998694" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="YOUR EMAIL" required><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1015f645f85b3308693f3b0c4_a848998694" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="JOIN NOW" name="subscribe" id="mc-embedded-subscribe" class="button"></div></div></form>'
    }}></div>
  </div>

  <div className='appIntro'>
    <img id='appImg' alt='Cointelligent App' src='https://s3.amazonaws.com/cointelligent/Markets%402x.png'></img>
    <div className='colorBar bar_1'></div>
    <div className='colorBar bar_2'></div>
    <div className='colorBar bar_3'></div>
    <div className='colorBar bar_4'></div>
    <div className='colorBar bar_5'></div>
    <div className='colorBar bar_6'></div>
  </div>

  <div className='clear'></div>

  <div className="waves">
    <div className="wave wave_1"></div>
    <div className="wave wave_2"></div>
    <div className="wave wave_3"></div>
    <div className="wave wave_4"></div>
    <div className="wave wave_5"></div>
  </div>
</div>

export default IndexPage
