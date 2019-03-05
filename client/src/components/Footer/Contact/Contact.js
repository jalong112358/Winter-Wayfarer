import React, { Component } from "react";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import "./Contact.css";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    errors: {},
    success: false,
    sending: false
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newMessage = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };
    var postTo = "/api/form";
    axios
      .post(postTo, newMessage)
      .then(response =>
        this.setState({
          errors: response.data[0],
          success: response.data[1],
          sending: response.data[1]
        })
      )
      .catch(e => console.log(e));

    this.setState({
      sending: true
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <Element name="contact" className="contact">
        <h1>Contact Us</h1>
        <form noValidate onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            onChange={this.handleChange}
            className={
              this.state.errors.name ? "error contact-name" : "contact-name"
            }
            name="name"
            type="text"
          />
          <span className="error-message">{this.state.errors.name}</span>

          <label htmlFor="email">Email:</label>
          <input
            onChange={this.handleChange}
            className={
              this.state.errors.email ? "error contact-email" : "contact-email"
            }
            name="email"
            type="email"
          />
          <span className="error-message">{this.state.errors.email}</span>
          <label htmlFor="subject">Subject:</label>
          <input
            onChange={this.handleChange}
            className={
              this.state.errors.subject
                ? "error contact-subject"
                : "contact-subject"
            }
            name="subject"
            type="text"
          />
          <span className="error-message">{this.state.errors.subject}</span>
          <label htmlFor="message">Message:</label>
          <textarea
            onChange={this.handleChange}
            className={
              this.state.errors.message
                ? "error contact-message"
                : "contact-message"
            }
            name="message"
          />
          <span className="error-message">{this.state.errors.message}</span>
          <button type="submit">SEND</button>
          {!this.state.success && this.state.sending ? (
            <div class="spinner">
              <div class="bounce1" />
              <div class="bounce2" />
              <div class="bounce3" />
            </div>
          ) : null}
          {this.state.success ? (
            <span className="message-sent">Message sent. Thank you!</span>
          ) : null}
        </form>
      </Element>
    );
  }
}

export default Contact;
