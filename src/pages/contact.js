import React from "react";
import withPageLayout from "../components/Layout/withPageLayout";

const Contact = () => (
  <div className="content">
    <h3 className="is-size-5">Need some support?</h3>
    <p></p>
    <p>
      If you're having thoughts about suicide or are worried about a friend or loved one the{" "}
      <a target="_blank" rel="noreferrer" href="https://suicidepreventionlifeline.org/talk-to-someone-now/">
        Lifeline network
      </a>{" "}
      is available 24/7 to provides free and confidential emotional support to people in suicidal crisis or emotional
      distress.
    </p>
    <h3 className="is-size-5">
      For all other inquires, please fill out the form below and we'll get back to you ASAP.
    </h3>
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
      {/* {errors && <p className="help is-danger">This email is invalid</p>} */}
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
export default withPageLayout(Contact, "Contact", "We'd love to hear from you!");
