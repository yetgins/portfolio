import React from "react";
import {
  MyWorksContainer,
  Works,
  Work,
  WorkDetail,
  WorkHeader,
  SiteLink,
} from "./MyWorks.styles";

const MyWorks = () => {
  return (
    <MyWorksContainer>
      <h1>My Works</h1>
      <Works>
        <Work>
          <WorkHeader>Mayadem Website</WorkHeader>
          <SiteLink href="https://mayadem-8be264.netlify.app/" target="_blank">
            <img src="works/mayadem-website.webp" alt="mayadem" width="100%" />
          </SiteLink>
          <WorkDetail>
            Supported the frontend design in the renewal of their own websites ,
            Using technologies such as HTML, CSS, JavaScript, React, and
            Styled-Components.
          </WorkDetail>
        </Work>
        <Work>
          <WorkHeader>E-Commerce Website</WorkHeader>
          <SiteLink href="https://e-commerce-c1b8d.firebaseapp.com/" target="_blank">
          <img
            src="works/e-commerce-website.webp"
            alt="e-commerce"
            width="100%"
          />
          </SiteLink>
          <WorkDetail>
            Technologies: React , React-Router , Axios , Context API, Firebase ,
            Stripe, Jest
          </WorkDetail>
          <WorkDetail>
            Features: This project is an e-commerce website where users can add
            products to their cart and do the checkout of the products. This
            project has full stripe integration for handling payments. For
            authentication, it's being handled by firebase authentication.
            Besides the project also uses firebase hosting and firebase cloud
            firestore database. Cloud functions provided by firebase are used
            for back-end. So, it's using serverless architecture. It also used
            React Context API.
          </WorkDetail>
        </Work>
        <Work>
          <WorkHeader>Todo App</WorkHeader>
          <SiteLink href="https://todo-app-bfccd1.netlify.app/" target="_blank">
          <img src="works/todo-app.webp" alt="todo" width="100%" />
          </SiteLink>
          <WorkDetail>
            Technologies: React , React Router , Axios , Bootstrap
          </WorkDetail>
          <WorkDetail>
            Features: Adding , Updating, Deleting, Checking when done or not
            done a Todo, Searching the todos, Can be using with different
            usernames.
          </WorkDetail>
        </Work>
      </Works>
    </MyWorksContainer>
  );
};

export default MyWorks;
