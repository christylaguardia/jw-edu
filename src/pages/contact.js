import React from "react"
import { Hero } from "../components/Hero";
import { Navigation } from '../components/Navigation';;

export default () => (
  <div>
    <Navigation />
    <Hero title="Contact" />
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-half">
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">

              <p style={{ display: 'none' }}>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input name="name" className="input" type="text" placeholder="Name" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Email</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input name="email" className="input" type="email" placeholder="Recipient email" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Message</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <textarea name="message" class="textarea" placeholder="Message"></textarea>
                      </p>
                  </div>
                </div>
              </div>

              <div data-netlify-recaptcha="true"></div>

              <div className="buttons has-addons is-right">
                <button className="button is-primary" type="submit">Send</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
);
