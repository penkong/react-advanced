import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
// Nprogress to notify user for fetching and changes that are currently happen
//
// after we listen for events on router

Router.onRouteChangeStart = () => {
  console.log("triggerd start");
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  console.log("triggerd complete");
  NProgress.done();
};
Router.onRouteChangeError = () => {
  console.log("triggerd error");
  NProgress.done();
};
// styled components normally dont work on server.
// fixed by getInitialProps and costum document
const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media screen and (max-width: 1000px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    justify-content: space-between;
    align-items: stretch;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;
//
const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>sick</a>
          </Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </StyledHeader>
  );
};

export default Header;
