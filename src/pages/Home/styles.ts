import styled from "styled-components";



export const Container = styled.div`

max-width: 1500px;
    margin: 6.5rem  auto;

 

   
    

    .title{
        text-align: center;
        
        h1{
          font-size: 6rem;
          color: #FFF ;
          text-shadow: 4px 4px 2px rgb(0 0 0);
        }


        @media (max-width: 500px) {
          h1{
            font-size: 4rem;
          }
        }
    }

    .items{
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        margin-top: 2rem;
    }
   

`;