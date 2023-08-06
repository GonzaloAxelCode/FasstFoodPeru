import React, { useContext } from "react";
import styled from "styled-components";

import PortalSlidingContainer from "../../Portals/SlidingPortal";
import { FullContext } from "../../../pages/_app";
import ProductPresent from "../ProductPresent/ProductPresent";
import { connect } from "react-redux";
const WrapperContent = styled.div`
  height: 100vh;
  padding: 0 0 3em 0;
  overflow-y: auto;
`;
function JustProductOrder({ product }) {
  const { openSlidingOrderProduct, setOpenSlidingOrderProduct } =
    useContext(FullContext);
  return (
    <PortalSlidingContainer
      isOpen={openSlidingOrderProduct}
      setIsOpen={setOpenSlidingOrderProduct}
    >
      <WrapperContent>{product && <ProductPresent />}</WrapperContent>
    </PortalSlidingContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};
export default connect(mapStateToProps)(JustProductOrder);
