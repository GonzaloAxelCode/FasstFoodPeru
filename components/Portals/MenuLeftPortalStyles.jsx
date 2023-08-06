import styled from "styled-components";

export const PortalWrapperAbsolute = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  z-index: ${(props) => (props.isOpen ? "21000" : "-21000")};
`;
export const CloseArea = styled.div`
  width: 100%;
`;
export const AreaMenu = styled.div`
  position: relative;
  background-color: #fff;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  -webkit-transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);

  .button-close2 {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    svg {
      fill: #a3a3a3;
      color: #a3a3a3;
      font-weight: 300;

      width: 25px;
      height: 25px;
    }
    padding: 1em;
  }
`;