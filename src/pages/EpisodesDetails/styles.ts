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

        
        .item{
            width: 240px;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
            border-radius: 4px;
            background: white;

            

            img{
                width: 100%;

                &:hover{
                    transform: scale(1.1);
                    animation-duration: 4s;
                     animation-delay: 2s;
                }
            }

            .info{
                padding: 0px 10px;

                p{
                    color: #000;
                }

                .details{
                    flex-direction: column;

                    a{
                        text-decoration: none;
                        color: #000;
                    }
                }
                h2{
                    font-weight: bold;
                    font-size: 20px;
                    margin-bottom: 5px;
                  
                }
            }
        }
     }
`;