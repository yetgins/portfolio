import React from 'react'
import { HomeWrapper ,HomeInfo,SocialIconLink,SocialIcons} from './Home.styles';
import {
    FaGithub,
    FaHackerrank,
    FaLinkedin,
  } from "react-icons/fa";

const Home = () => {
    return (
        <HomeWrapper>
            <HomeInfo>
                <h1>Hi, I am Sait Ahmet Yetgin</h1>
                <h3>Front End Developer</h3>
                <SocialIcons>
                <SocialIconLink
                  href="https://www.linkedin.com/in/saitahmety/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/yetgins"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.hackerrank.com/saitahmety"
                  target="_blank"
                  aria-label="Hackerrank"
                >
                  <FaHackerrank />
                </SocialIconLink>
                </SocialIcons>
            </HomeInfo>
            
        </HomeWrapper>
    )
}

export default Home
