import styled from "styled-components";

export const Container = styled.div`
margin-top: 2rem;
.load-more{
      
      display: flex;
      justify-content: space-evenly;

      button{
        width: 154px;
        height: 36px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        color: #2196F3;
        font-weight: 500;
        font-size: 14px;
        color: white;
        font-weight: 700;
      }
      .next {
        background-color: #1b256a;

        &:hover{
                background: #061024;
                border: 1px solid #fff;
                transition: 1s;
            }
      }
      .prev{
        background: #018c63;

        &:hover{
                background: none;
                border: 1px solid #fff;
                transition: 1s;
            }
      }
    }

`;