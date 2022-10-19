import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  /* height: ${(props) => (props.extendNavbar ? "68vh" : "55px")}; */
  height: '84px';
  background-color: #346611;
  /* background-color: salmon; */
  display: flex;
  flex-direction: column;
  @media (max-width: 380px) {
    height: ${(props) => (props.extendNavbar ? "78vh" : "55px")};
  }

`;

export const LeftContainer = styled.div`
  flex: 90%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  /* background: red; */
  @media (max-width: 700px) {
    justify-content: flex-start;
    flex: 60%;
    /* background: red; */
    /* padding-right: 35%; */
  };
`;

export const DropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) and (max-width: '1200px') {
    width: 100%;
    flex-direction: column;
  };
`;

export const LeftDropContainer = styled.div`
  flex: 40%;
  display: flex;
  align-items: center;
  background: red;
  /* @media (min-width: 600px) and (max-width: '1200px') {
    flex-direction: row;
    flex: 0%;
  }; */
  @media (max-width: 500px) {
    flex: 0%;
  };
`;

export const RightContainer = styled.div`
  flex: 10%;
  display: flex;
  justify-content: flex-end;
  /* background: #000; */
  @media (max-width: 700px) {
    justify-content: flex-end;
    flex: 30%;
    width: 50%;
    /* background: blue; */
  };
  @media (min-width: 700px) {
    flex: 50%;
    /* background: red; */
    justify-content: flex-end;
  }
`;

export const RightDropContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: salmon; */
  flex-direction: column;
  @media (max-width: 500px) {
    flex: 100%;
    flex-direction: column;
  };
`;

export const LoginFormSub = styled.form`
  display: flex;
  width: 100%;
  padding: 20px;
  @media (max-width: 500px) {
    flex: 100%;
    flex-direction: column;
  };
`;

export const DropColumn1 = styled.div`
  flex: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  /* background: #000; */
`;

export const DropColumn2 = styled.div`
  flex: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  /* background: red; */
`;

export const DropColumn3 = styled.div`
  flex: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: blue; */
  justify-content: flex-start;
  @media (max-width: 500px) {
    justify-content: center;
    /* padding-right: 15px; */
  };
`;

export const ForgotPassword = styled.a`
  top: 0;
  color: #fff;
  font-size: 18px;
  display: inline-block;
  font-style: italic;
  background-color: none;
  &:hover {
    background-color: none;
  }
  &:link {
    background-color: #2EB67D;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
`;

export const NavbarText = styled.div`
  font-size: 50px;
  white-space: nowrap;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Open-sans, sans';
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const NavbarButton = styled.button`
  margin: 15px 70px;
  /* padding: 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  background: #555555;
  color: #fff;
  font-size: 20px;
  @media screen and (max-width: 500px) {
    margin: 18px 15px;
    font-size: 16px;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled.a`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  @media (max-width: 700px) {
    display: none;
  }
`;


export const Logo = styled.img`
  /* margin: 10px; */
  cursor: pointer;
  max-width: 13%;
  @media (max-width: 700px) {
    max-width: 45%;
  }
  @media (min-width: 200px) and (max-width: 480px ) {
    max-width: 55%;
    /* padding-left: 80px; */
  }
  @media (min-width: 768px) and (max-width: 1024px ) {
    max-width: 35%;
  }
  @media (min-width: 900px) and (max-width: 1400px ) {
    max-width: 25%;
  }
  @media (min-width: 1200px) and (max-width: 1400px ) {
    max-width: 20%;
  }
`;



