/* WIP */

import React from "react";

export const Contact = () => (
  <div className="content">
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="Name..." />
      </div>
    </div>
    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input className="input" type="email" placeholder="Email..." />
      </div>
      {errors && <p className="help is-danger">This email is invalid</p>}
    </div>
    <div className="field">
      <label className="label">Message</label>
      <div className="control">
        <textarea className="textarea" placeholder="Message..."></textarea>
      </div>
    </div>
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
      <div className="control">
        <button className="button is-text">Cancel</button>
      </div>
    </div>
  </div>
);
