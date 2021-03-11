import styled from 'styled-components';


export const HomeWrapper = styled.div`
    margin-top:80px;
    position: relative;
    background: url('works/background.webp') no-repeat;
    background-size:cover;
    background-position:center;
    height:90vh;
`;

export const HomeInfo = styled.div`
    display:flex;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
`;

export const SocialIcons = styled.div`
  margin-top:20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  @media screen and (max-width: 425px) {
    display:flex;
    flex-direction:column;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 36px;
`;