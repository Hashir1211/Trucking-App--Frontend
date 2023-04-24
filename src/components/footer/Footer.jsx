import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <>
     <footer id="footer">
    <i className=" icons twit fab fa-twitter"></i>
    <i className=" icons fb fab fa-facebook-f"></i>
    <i className=" icons insta fab fa-instagram"></i>
    <i className=" icons mail fas fa-envelope"></i>
  <p>© Copyright 2023</p>

  </footer>
    </>
  )
}
