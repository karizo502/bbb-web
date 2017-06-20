import React, { Component } from 'react'
import styles from './css/login.css'

export default class extends Component {

  render() {
    return (<div className="{styles.login-wrapper} columns">
    <div className="column is-8 is-hidden-mobile {styles.hero-banner}">
      <section className=" {styles.hero} is-fullheight is-dark">
        <div className="{styles.hero-body}">
          <div className="container section">
            <div className="has-text-right">
              <h1 className="title is-1">Login</h1> <br />
              <p className="title is-3">Secure User Account Login</p>
            </div>
            </div>
        </div>
        <div className="{styles.hero-footer}">
          <p className="has-text-centered">Image © Glenn Carstens-Peters via unsplash</p>
        </div>
      </section>  
    </div>
    <div className="column is-4">
      <section className="{styles.hero} is-fullheight">
        <div className="{styles.hero-heading}">
          <div className="section has-text-centered">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" width="150px" />
          </div>
        </div>
        <div className="{styles.hero-body}">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <h1 className="{ styles.avatar} has-text-centered section">
                  <img src="https://placehold.it/128x128" />
                </h1>
                <div className="login-form">
                  <p className="control has-icon has-icon-right">
                    <input className="input {styles.email-input}" type="text" placeholder="jsmith@example.org" />
                    <span className="icon user">
                      <i className="fa fa-user"></i>
                    </span>
                  </p>
                  <p className="control has-icon has-icon-right">
                    <input className="input {styles.password-input}" type="password" placeholder="●●●●●●●" />
                    <span className="icon user">
                      <i className="fa fa-lock"></i>
                    </span>
                  </p>
                  <p className="control {styles.login}">
                    <button className="button is-success is-outlined is-large is-fullwidth">Login</button>
                  </p>
                </div>
                <div className="section {styles.forgot-password}">
                  <p className="has-text-centered">
                    <a href="#">Forgot password</a>
                    <a href="#">Need help?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </div>
  </div>
    )
  }

  
}