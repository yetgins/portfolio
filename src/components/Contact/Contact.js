import React from "react";
import { ContactContainer, AddressMap } from "./Contact.styles";

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact me</h1>
      <AddressMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.974033872224!2d29.094831314783885!3d41.025824026294984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8f7421a6bab%3A0x16e40677a468b4d9!2zw5xtcmFuaXllIMOHYXLFn8SxIE1ldHJv!5e0!3m2!1str!2str!4v1615398693189!5m2!1str!2str"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
      <h4>Phone</h4>
      <p>0534 791 69 93</p>
      <h4>E-mail</h4>
      <p>saitahmety@gmail.com</p>
      <h4>Address</h4>
      <p>İstanbul</p>
    </ContactContainer>
  );
};

export default Contact;
