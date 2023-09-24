import styled from "styled-components";
import { AppTheme, DeviceMinSize } from "./App.style";

export const Section6 = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${AppTheme.colors.lessBG};
  padding: ${AppTheme.Padding_1};

`;

export const Div70 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  @media only screen and (min-width: ${DeviceMinSize.laptop}) {
    width: 90%;
  } ;
  @media only screen and (min-width: ${DeviceMinSize.laptop}) {
    width: 80%;
  } ;
`;

export const Div30 = styled.div`
  width: 100%;
  @media only screen and (min-width: ${DeviceMinSize.tablet}) {
    width: 50%;
    padding: 0.5rem 0.5rem;
  } ;
  @media only screen and (min-width: ${DeviceMinSize.laptop}) {
    width: 33%;
    margin: 0;
    padding: 0 0.2rem;
    /* padding: 0.5rem 0.5rem; */
  } ;
`;

export const Card = styled.div`
  border-radius: ${AppTheme.BorderRadius};;
  background-color: ${AppTheme.colors.background};
  max-height: 500px;
  overflow: hidden;

    h1{
      font-weight: bold;
      text-align: center;
      font-size: 1rem;
      overflow: hidden;

    }
   p{
    padding: 0 1rem;
    font-size: 0.8rem;
    }
    a{
      text-decoration: none;
      color: ${AppTheme.colors.forground};
    }
    @media only screen and (max-width: ${DeviceMinSize.tablet}) {
      margin: 1rem 0;
  } ;
  @media only screen and (min-width: ${DeviceMinSize.laptop}) {
    margin: 1rem 0;
  } ;

`;



export const ImgContainer = styled.div`
img{
    border-top-right-radius: 9px;
    border-top-left-radius: 9px;
    width: 100%;
}
`;


