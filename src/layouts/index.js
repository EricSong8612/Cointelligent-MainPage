import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () =>
<div style={{
  fontFamily: 'Montserrat',
  margin: '1em auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem'
}}>
  <div style={{
    fontSize: '3em',
    float: 'left'
  }}>
   <Link style={{color:'rgb(31,199,142)'}} to='/'>C</Link>
  </div>
  <div className='nav'>
    <i id='navicon' className="fa fa-bars" aria-hidden="true"></i>
    <ul id='navls' style={{listStyle:'none', padding:'0', margin:'0', fontSize: '0.8em', textAlign:'right'}}>
      <li><a href="http://markets.cointelligent.io">MARKET</a></li>
      <li><Link style={{textDecoration:'none', boxShadow: "none"}} to='/blog/'>BLOG</Link></li>
      <li><a href="https://www.facebook.com/Cointelligent-121465488504619/"><i className='fa fa-facebook-square'></i></a></li>
      <li><a href="https://www.instagram.com/cointelligent/"><i className='fa fa-instagram'></i></a></li>
      <li><a href="https://twitter.com/cointelligentco"><i className='fa fa-twitter'></i></a></li>
    </ul>
  </div>
  <div className='clearFloat'></div>
</div>

const TemplateWrapper = ({children}) =>
<div>
  <Helmet title="Cointelligent" meta={[
    {
      name: 'description',
      content: 'Cointelligent is the most intelligent and beautiful source for prices, data, market analysis, and news for all your favorite cryptocurrencies. '
    }, {
      name: 'keywords',
      content: 'cryptocurrency, bitcoin, ethereum, app, litecoin, iota, coin, crypto, currency, iphone, ios'
    }
  ]} link={[
    {
      href: "//fonts.googleapis.com/css?family=Roboto:100,300,400",
      rel: "stylesheet"
    }, {
      href: "//fonts.googleapis.com/css?family=Lato:light",
      rel: "stylesheet"
    }, {
      href: "//fonts.googleapis.com/css?family=Montserrat:bold",
      rel: "stylesheet"
    }, {
      href: "//fonts.googleapis.com/css?family=Josefin Sans:400,700",
      rel: "stylesheet"
    }, {
      href: "//fonts.googleapis.com/css?family=Source Sans Pro",
      rel: "stylesheet"
    }, {
      href: "//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css",
      rel: "stylesheet",
      type: 'text/css'
    }, {
      href: "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      rel: "stylesheet"
    }
  ]}/>
  <Header/>
  <div>
    {children()}
  </div>
</div>

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
