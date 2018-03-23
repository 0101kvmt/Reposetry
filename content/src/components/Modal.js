import styled from 'styled-components';

export const Modal = styled.div`
  display: block;
  position: fixed;
  padding-top: 100px;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const ModalContent = styled.div`
   background-color: #fefefe;
   margin: auto;
   padding: 20px;
   border: 1px solid #888;
   width: 80%;
   height: 80%;
   overflow-y: scroll;
`;

export const ModalBlock = styled.div`
  background-color: #96beff;
  border-radius: 15px;
  width: 95%;
  padding: 15px;
  margin: 10px;

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
export const CloseButton = styled.div`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
`;
