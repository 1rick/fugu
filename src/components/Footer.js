import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 40px;

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
  }
`;

const Footer = () => (
  <Wrapper>
    <p>All thumbnails © of their respective owners.</p>
    <p>
      Page template forked from Raul Dronca's curated <a href="https://github.com/iRaul/podcasts-repo">podcast page</a>. An exercise in curation by <a href="https://twitter.com/1rick">@1rick</a>.
    </p>
  </Wrapper>
);

export default Footer;
