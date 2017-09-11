import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
<div>
  <div style={{
    textAlign: 'center',
    marginTop: '50px'
  }}>
    <h1 style={{
      fontFamily: 'Montserrat',
      fontSize: '2.75em'
    }}>COINTELLIGENT</h1>
    <p style={{
      maxWidth: '520px',
      margin: '0 auto',
      marginBottom: '15px',
      fontWeight: '300',
      lineHeight: '1.2em'
    }}>The most intelligent and beautiful source of crpytocurrency data, analysis, and news right on your phone
    </p>
    <p style={{
      fontFamily: 'Montserrat',
      maxWidth: '300px',
      margin: '0 auto',
      marginBottom: '25px',
      lineHeight: '1.2em'
    }}>Sign up to join the beta and get the app for <span style={{textDecoration:'underline'}}>free</span> on launch day</p>

    <div id="mc_embed_signup" dangerouslySetInnerHTML={{
      __html: ' <form action="//waverly.us16.list-manage.com/subscribe/post?u=1015f645f85b3308693f3b0c4&amp;id=a848998694" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="YOUR EMAIL" required><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1015f645f85b3308693f3b0c4_a848998694" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="JOIN NOW" name="subscribe" id="mc-embedded-subscribe" class="button"></div></div></form>'
    }}/>

  </div>
  <div className="waves">
    <div className="wave wave_1"></div>
    <div className="wave wave_2"></div>
    <div className="wave wave_3"></div>
    <div className="wave wave_4"></div>
    <div className="wave wave_5"></div>
  </div>
</div>

export default IndexPage
