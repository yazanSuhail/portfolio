import styled from "styled-components";

export const Container = styled.div`
    padding-left: 3px;
    position: absolute;
    bottom: 37px;
    width: 530px;
`;

export const InnerContainer = styled.div`
    width: 100%;
    outline: 3px solid red;

`;


export const GridContainer = styled.div`
`;

export const GridItem1 = styled.div`
outline: 1px solid green;
width:100%;
height: 100%;
`;

export const GridItem2 = styled.div`
outline: 1px solid green;
width:100%;
height: 100%;
display: flex;
justify-content: space-between;

div:first-child{
    border:2px solid gray ;
   }

   div{
    width: 100%;
   }
`;

export const GridItem3 = styled.div`
outline: 1px solid green;
width:100%;
height: 100%;
`;