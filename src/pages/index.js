import React, { Component } from 'react';
import Link from 'gatsby-link';

import arrow from '../images/arrow.png';
import bg from '../images/bg.svg';


class IndexPage extends Component {
  state = {animation: 'paused'}

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event) {
    let scrollTop = event.target.scrollingElement.scrollTop;
    // console.log(scrollTop);
    if (scrollTop > 590) {
      this.setState({animation: 'running'})
    }
  }

  render() {
    return(
      <div id='main'>
        <div className='content mainIntro'>
          <div className='intro'>
            <div id='introP1'><h1>Cointelligent</h1> is the most beautiful way to keep track of the crypto world</div>
            <p id='introP2'>Real-time crptocurrency data, analysis, and news. Join our beta today and get 30 days premium free.</p>
            <div className="mc_embed_signup" dangerouslySetInnerHTML={{
              __html: ' <form action="//waverly.us16.list-manage.com/subscribe/post?u=1015f645f85b3308693f3b0c4&amp;id=a848998694" method="post" class="mc-embedded-subscribe-form validate" name="mc-embedded-subscribe-form" target="_blank" novalidate><div class="mc_embed_signup_scroll"><input type="email" value="" name="EMAIL" class="email mce-EMAIL" placeholder="YOUR EMAIL" required><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1015f645f85b3308693f3b0c4_a848998694" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="JOIN" name="subscribe" class="mc-embedded-subscribe button"></div></div></form>'
            }}></div>
          </div>

          <div className='appIntro'>
            <div id='appImg'>
              <img alt='Cointelligent App' src='https://s3.amazonaws.com/cointelligent/Markets%402x.png'></img>
              <div className='circle'></div>
            </div>
            <div className='colorBar bar_1'></div>
            <div className='colorBar bar_2'></div>
            <div className='colorBar bar_3'></div>
            <div className='colorBar bar_4'></div>
            <div className='colorBar bar_5'></div>
            <div className='colorBar bar_6'></div>
          </div>

          <div className='clearFloat'></div>
        </div>

        <div className='bgImg'>
          <img alt='background' src={bg}></img>
        </div>

        <div className='content diagramIntro'>
          <h2>Everything you need to make sense of the crypto world</h2>
          <p>Feel overwhelmed by the chaos of crypto markets? </p>
          <p>Understanding the crypto world is complicated, </p>
          <p>Cointelligent combines all the most important info </p>
          <p>into one integrated and simple interface </p>
          <div className='diagram'>
            <div className='animDiagram'>
              <img id='btc' className='diagramImg' alt='bitcoin'
                   src='https://s3.amazonaws.com/cointelligent/bitcoin%403x.png'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <img id='eth' className='diagramImg' alt='ethereum'
                   src='https://s3.amazonaws.com/cointelligent/ethereum%403x.png'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <img id='gdax' className='diagramImg' alt='GDAX'
                   src='https://s3.amazonaws.com/cointelligent/GDAX%403x.png'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <img id='iota' className='diagramImg' alt='iota'
                   src='https://s3.amazonaws.com/cointelligent/iota%403x.png'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <img id='ltc' className='diagramImg' alt='litecoin'
                   src='https://s3.amazonaws.com/cointelligent/litecoin%403x.png'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <img id='monero' className='diagramImg' alt='monero'
                   src='https://s3.amazonaws.com/cointelligent/monero%403x.png'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <img id='navc' className='diagramImg' alt='navcoin'
                   src='https://s3.amazonaws.com/cointelligent/navcoin%403x.png'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <img id='neo' className='diagramImg' alt='neo'
                   src='https://s3.amazonaws.com/cointelligent/neo%402x.png'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <div className='diagramText' id='longText'
                   style={{animationPlayState: `${this.state.animation}`}}>
                <p>Back at $3,500: Has Bitcoin's Price Found a Short-Term Bottom?</p>
                <p>
                  The sell-off in the bitcoin-US dollar exchange rate (BTC/USD) appears
                  to have stalled, with prices trading at $3,550 at press time.
                </p>
              </div>
              <div className='diagramText' id='ethText'
                   style={{animationPlayState: `${this.state.animation}`}}>
                <div>
                  <p>ETH</p>
                  <p>+ $12.30</p>
                </div>
              </div>
            </div>
            <div className='staticDiagram'>
              <img id='arrow' className='diagramImg' src={arrow} alt='arrow'
                   style={{animationPlayState: `${this.state.animation}`}}></img>
              <div className='phone'
                   style={{animationPlayState: `${this.state.animation}`}}>
                <p>c</p>
                <i className="fa fa-circle-thin"></i>
              </div>
            </div>
          </div>
        </div>

        <div className='bg'>
          <div className='topBorder'></div>
        </div>

        <div className='content coinIQ'>
          <h2>Coin IQ</h2>
          <div className='right'>
            <h3>Introducing the most powerful way to keep updated with market chatter</h3>
            <p>Know what the market is saying about your investments and have the confidence to make the right decisions</p>
          </div>
          <div className='left'>
            <div className='news'>
              <ul>
                <li>
                  <p><i className='fa fa-circle'></i> China's ban is causing a panic</p>
                  <p><span className='source'>Reddit</span> <span>Negative</span></p>
                </li>
                <li>
                  <p><i className='fa fa-circle'></i> I just bought 70 ETH, take that JP Morgan</p>
                  <p><span className='source'>Bitcoin Talk</span> <span>Positive</span></p>
                </li>
                <li>
                  <p><i className='fa fa-circle'></i> Navcoin's new wallet is awesome!</p>
                  <p><span className='source'>Twitter</span> <span>Positive</span></p>
                </li>
              </ul>
            </div>
          </div>
          <div className='clearFloat'></div>
        </div>

        <div className='content joinUs'>
          <h2>Join our early beta and get</h2>
          <h2>access to <span>Coin IQ</span> for 30 days free</h2>
          <div className="mc_embed_signup" dangerouslySetInnerHTML={{
            __html: ' <form action="//waverly.us16.list-manage.com/subscribe/post?u=1015f645f85b3308693f3b0c4&amp;id=a848998694" method="post" class="mc-embedded-subscribe-form validate" name="mc-embedded-subscribe-form" target="_blank" novalidate><div class="mc_embed_signup_scroll"><input type="email" value="" name="EMAIL" class="email mce-EMAIL" placeholder="YOUR EMAIL" required><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_1015f645f85b3308693f3b0c4_a848998694" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="JOIN" name="subscribe" class="mc-embedded-subscribe button"></div></div></form>'
          }}></div>
        </div>

        <div className='content copyRight'>
          <h1><Link to='/'>Cointelligent</Link></h1>
          <p>All Rights Reserved</p>
          <div className='footNav'>
            <ul>
              <li><a href='mailto:partnerships@cointelligent.io'>Partnerships</a></li>
              <li><a href='mailto:team@cointelligent.io'>Join Us</a></li>
              <li><a href='mailto:contact@cointelligent.io'>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
