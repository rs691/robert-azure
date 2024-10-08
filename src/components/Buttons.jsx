import styled from "styled-components";
import './Buttons.css';



const StyleButtonOne = styled.button`
  border: 1px solid #3498db;
  background: none;
  width: 150px;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #3498db;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
    height: 0%;
  }
  &:hover::before {
    height: 180%;
  }
`;

const StyleButtonOneA = styled.button`
  border: 1px solid #3498db;
  background: none;
  width: 150px;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #3498db;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
    height: 0%;
  }
  &:hover::before {
    height: 180%;
  }
`;

const StyleButtonTwo = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  width: 150px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &:hover {
    color: #fff;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #3498db;
    z-index: -1;
    transition: 0.8s;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    height: 0%;
  }
  &:hover::before {
    height: 180%;
  }
`;

const StyleButtonThree = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  width: 150px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
  &:hover {
    color: #3498db;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #3498db;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
    height: 180%;
  }
  &:hover::before {
    height: 0%;
  }
`;

const StyleButtonFour = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  width: 150px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
  &:hover {
    color: #3498db;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #3498db;
    z-index: -1;
    transition: 0.8s;
    bottom: 0;
    border-radius: 50% 50% 0 0;
    height: 180%;
  }
  &:hover::before {
    height: 0%;
  }
`;

const StyleButtonFive = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  width: 150px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: #3498db;
    transition: 0.8s;  
    transform: scaleX(0);
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

/*
* Credit for insparation: Youtube channel "DarkCode"
*/
const StyleButtonNine = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  width: 150px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: -1;
    background: #3498db;
    transition: 0.8s;  
    transform: scaleX(0);
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

/*
* Credit for insparation: Youtube channel "DarkCode"
*/
const StyleButtonTen = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  width: 150px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    z-index: -1;
    background: #3498db;
    transition: 0.8s;  
    transform: scaleY(0);
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    transform: scaleY(1);
  }
`;

/*
* Credit for insparation: Youtube channel "DarkCode"
*/
const StyleButtonEleven = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  width: 150px;
  font-size: 20px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
    background: #3498db;
    transition: 0.8s;  
    width: 100%;
    height: 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    height: 300%;
  }
`;

/*
* Credit for insparation: Youtube channel "DarkCode"
*/
const StyleButtonTwelve = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  font-size: 20px;
  width: 150px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
    background: #3498db;
    transition: 0.8s;  
    width: 100%;
    height: 0;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    height: 300%;
  }
`;

/*
* Credit for insparation: Youtube channel "Online Tutorials"
*/
const StyleButtonThirteen = styled.button`
  border: 1px solid #3498db;
  background: none;
  padding: 10px 20px;
  font-size: 20px;
  width: 150px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #3498db;
    transition: 0.8s;  
    transform: translateX(-100%);
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    transform: translateX(0);
  }
`;

const StyleButtonFourteen = styled.button`
  border: none;
  background: none;
  padding: 10px 20px;
  font-size: 20px;
  width: 150px;
  font-family: "montserrat";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3498db;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    height: 0;
    left: 0;
    right: 0;
    top: -2px;
    bottom: 0;
    border: 1px solid black;
    background: transparent;
    transition: 0.8s;  
  }
  &:hover::before {
    height: 100%;
  }
`;



function Buttons() {
    
  return (
    <div>
        <div className="container">
      <div className="button-container">
        <StyleButtonOne>Hover Me</StyleButtonOne>
      </div>
      <div className="button-container">
        <StyleButtonOneA>Hover Me</StyleButtonOneA>
      </div>
      <div className="button-container">
        <StyleButtonTwo>Hover Me</StyleButtonTwo>
      </div>
      <div className="button-container">
        <StyleButtonThree>Hover Me</StyleButtonThree>
      </div>
      <div className="button-container">
        <StyleButtonFour>Hover Me</StyleButtonFour>
      </div>
      <div className="button-container">
        <StyleButtonFive>Click Me</StyleButtonFive>
      </div>
      <div className="button-container">
        <StyleButtonNine>Hover Me</StyleButtonNine>
      </div>
      <div className="button-container">
        <StyleButtonTen>Hover Me</StyleButtonTen>
      </div>
      <div className="button-container">
        <StyleButtonEleven>Hover Me</StyleButtonEleven>
      </div>
      <div className="button-container">
        <StyleButtonTwelve>Back To22 Main</StyleButtonTwelve>
      </div>
      <div className="button-container">
        <StyleButtonThirteen>Hover Me A</StyleButtonThirteen>
      </div>
      
    </div>
      <StyleButtonFourteen>Click me</StyleButtonFourteen>
      <button className="button">Click me</button>
    </div>
  );
}
export default Buttons;