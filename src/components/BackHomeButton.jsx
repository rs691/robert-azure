import {useCallback } from 'react';
import styled from 'styled-components';


const StyleButtonTwelve = styled.button`
  border: 1px solid #f4db7d;
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
  color: white;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
     background: #ff6a3d;
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




function BackHomeButton() {
    const navigate = (url) => {
        window.location.href = url;
    };

    const handleBack = useCallback((e) => {
        e.preventDefault();
        navigate('/');
    }, []);



  return (
    <>
    <div className="button-container">
    <StyleButtonTwelve onClick={handleBack}>
      Back Home
    </StyleButtonTwelve>
    </div>
    </>
  );
}
export default BackHomeButton;