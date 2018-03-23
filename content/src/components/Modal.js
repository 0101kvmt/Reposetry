import styled from 'styled-components';

export const Modal = styled.div`
  display: ${props => props.display.main};
  position: fixed;
  padding-top: 85px;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 85%;
  height: 75%;
  border-radius: 15px;
`;

export const ModalContent = styled.div`
   background-color: #fefefe;
   margin: auto;
   padding: 20px;
   width: 97%;
   height: 87%;
   overflow-y: scroll;
`;

export const ModalBlock = styled.div`
  position: relative;
  background-color: #96beff;
  border-radius: 15px;
  width: 95%;
  padding: 15px;
  margin: 10px;
  font-family: Arial;
  &:hover {
    background-color: #72a8ff;
  }
`;

export const ModalText = styled.p`
  position: relative;
  display: inline-block;
  color: black;
  font-size: 15px;
`;

export const ModalScroll = styled.div`

`;

export const ModalLink = styled.a`
  color: black;
`;

export const ModalDelete = styled.a`
  position: absolute;
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-family: Raleway;
  right: 30px;
  top: 20px;

  &:hover {
    text-decoration: none;
  }
`;

export const CloseButton = styled.a`
  color: black;
  position: absolute;
  text-decoration: none;
  font-size: 30px;
  font-family: Raleway;
  right: 23px;
  top: 8px;

  &:hover {
    text-decoration: none;
  }
`;
