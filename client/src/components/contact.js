// import React, { Component } from 'react';



// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Contact Page</h1>
//       </div>
//     )
//   }
// }

// export default Contact;



import React, { Component } from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className="contact-us"
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqkypno"
        method="POST"
      >
        <h3>Please get in touch!</h3>
        {/* <!-- add your custom form HTML here --> */}
        <label>Email:</label>
        <input className="contact-Email" type="email" name="email" />
        <label>Message:</label>
        <input className="msg-Email" type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submit-contactUs">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

