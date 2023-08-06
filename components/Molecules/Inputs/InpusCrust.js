import styled, { css } from "styled-components";
import P from "../../Atoms/Parrafos/P";
import React, { useState } from "react";
import { connect } from "react-redux";

export const BaseStylesInput = css`
  width: 100%;
  padding: 25px;
  border: 2px solid #f1f1f1;
  border-radius: 8px;
  position: relative;
  margin-bottom: 20px;
  .title-abs {
    font-size: 14px;
    font-family: "Rubik 700";
    position: absolute;
    top: -1em;
    padding: 5px 8px;
    z-index: 2;
    background-color: #fff;
  }
  p {
    padding: 0 0 1em 0;
    margin: 0;
  }
  .option-checkbox {
    font-size: 11px;
    font-family: "Rubik 600";
    color: #333;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: #f1f1f1;

    padding: 0.6em 0.5em;
    border-radius: 5px;

    label {
      cursor: pointer;
      text-transform: uppercase;
      padding-top: 3px;
      padding-left: 3px;
      width: 100%;

      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }
  .option-radio {
    font-size: 11px;
    font-family: "Rubik 600";
    color: #333;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: #f1f1f1;
    padding: 0.6em 0.5em;
    border-radius: 5px;
    span {
      text-transform: uppercase;
      padding-top: 3px;
      padding-left: 3px;
    }

    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    background-color: #f1f1f1;
    padding: 0.6em 0.5em;
    border-radius: 5px;
  }
  .inputs-radios,
  .inputs-checkbox {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 0.5em;
  }
  input {
    cursor: pointer;
  }
`;

export const FoodCrust = styled.div`
  ${BaseStylesInput};

  padding: 25px;
  .option-radio {
    padding: 0em 0.4em;
  }
`;
function InpusCrust({ crust, getCrust, product }) {
  return product.crusts ? (
    <FoodCrust>
      <p className="title-abs">CRUST</p>
      <P color="#666666" size="15px" style={{ fontStyle: "italic" }}>
        Please, choose your preferred crust type.
      </P>
      <div className="inputs-radios">
        {product.crusts.map((cr, index) => {
          return (
            <Radius key={index} ischecked={cr.name === crust.name}>
              <label className="option-radio" htmlFor="">
                <RadiusInput
                  type="radio"
                  checked={cr.name === crust.name}
                  setchecked={(cr) => getCrust(cr)}
                  cr={cr}
                />
                <Text setchecked={(cr) => getCrust(cr)} cr={cr}>
                  <span>
                    {cr.name} {cr.price === 0 ? "Free" : cr.price}
                  </span>
                </Text>
              </label>
            </Radius>
          );
        })}
      </div>
    </FoodCrust>
  ) : null;
}

function Radius({ ischecked, children }) {
  const [checked, setchecked] = useState(ischecked);
  const allChildren = React.Children.map(children, (child) => {
    const propsParaPasar = {
      checked,
      setchecked,
    };
    const clone = React.cloneElement(child, propsParaPasar);
    return clone;
  });
  return allChildren;
}

const RadiusInput = ({ checked, setchecked, cr }) => {
  return (
    <input type="radio" onChange={() => setchecked(cr)} checked={checked} />
  );
};

const Text = ({ setchecked, cr, children }) => {
  return (
    <div
      style={{ width: "100%", height: "100%", padding: "0.8em" }}
      onClick={() => setchecked(cr)}
    >
      {children}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: {},
  };
};

export default connect(mapStateToProps)(InpusCrust);
