import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    bottom: 32px;
    width: 530px;
    border: 3px solid rgb(16, 66, 175);
    border-radius: 8px;
`;

export const InnerContainer = styled.div`
    width: 100%;
    border-radius: 8px;
`;


export const GridContainer = styled.div`
`;

export const GridItem1 = styled.div`
width:100%;
height: 100%;
background: linear-gradient(
    rgb(31, 47, 134) 0px,
    rgb(49, 101, 196) 3%,
    rgb(54, 130, 229) 6%,
    rgb(68, 144, 230) 10%,
    rgb(56, 131, 229) 12%,
    rgb(43, 113, 224) 15%,
    rgb(38, 99, 218) 18%,
    rgb(35, 91, 214) 20%,
    rgb(34, 88, 213) 23%,
    rgb(33, 87, 214) 38%,
    rgb(36, 93, 219) 54%,
    rgb(37, 98, 223) 86%,
    rgb(36, 95, 220) 89%,
    rgb(33, 88, 212) 92%,
    rgb(29, 78, 192) 95%,
    rgb(25, 65, 165) 98%
  );
`;

export const GridItem2 = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: space-between;
color: #000;

div:first-child{
    border:2px solid gray ;
    background-color: #ffff;
    
   }
   div:nth-child(2){
    background-color: #b1e4f9;
   }
   div{
    width: 100%;
   }
`;

export const GridItem3 = styled.div`
outline: 1px solid green;
width:100%;
height: 100%;
background: linear-gradient(
    rgb(31, 47, 134) 0px,
    rgb(49, 101, 196) 3%,
    rgb(54, 130, 229) 6%,
    rgb(68, 144, 230) 10%,
    rgb(56, 131, 229) 12%,
    rgb(43, 113, 224) 15%,
    rgb(38, 99, 218) 18%,
    rgb(35, 91, 214) 20%,
    rgb(34, 88, 213) 23%,
    rgb(33, 87, 214) 38%,
    rgb(36, 93, 219) 54%,
    rgb(37, 98, 223) 86%,
    rgb(36, 95, 220) 89%,
    rgb(33, 88, 212) 92%,
    rgb(29, 78, 192) 95%,
    rgb(25, 65, 165) 98%
  );
`;