import styled from 'styled-components';

export const Container = styled.div`
     max-width: 1200px;
     margin: 7rem  auto;

     .d-flex-header{
        display: flex;
        align-items: flex-start;
        justify-content: space-around;

        h1{
                color: #FFF;
                font-size: 36px;
            }

        .flex{
            display: flex;
            align-items: center;
            gap: 10px;
            
           


            a{
                color: rgb(255, 255, 255);
                display: flex;
                align-items: center;
                gap: 15px;
                text-decoration: none;
            }
        }

        @media (max-width: 767px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
     }

     

     .details {
        display: flex;
        justify-content: space-evenly;
        margin: 1rem 0;
        color: #FFF;
     }
     .cast {
        max-width: 1000px;
        margin: 3rem  auto;

        h2 {
        color: #FFF;

        @media (max-width: 600px) {
            margin: 3rem  2rem auto;

        }
     }
     }

     .items{
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        margin: 2rem;
     }
`;