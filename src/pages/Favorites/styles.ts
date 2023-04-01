import styled from "styled-components";

export const Container = styled.div`
     max-width: 1200px;
     margin: 7rem  auto;

     h1,h2{
        text-align: center;
        margin: 3rem;
     }
     .items {
       display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        margin-top: 2rem;

        .item{
         width: 240px;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
            border-radius: 4px;

            img{
                width: 100%;

                &:hover{
                    transform: scale(1.1);
                    animation-duration: 4s;
                     animation-delay: 2s;
                }
            }

            .info{
                padding: 20px 10px;
                display: flex;
                justify-content: space-between;
                gap: 10px;

                .details{
                    flex-direction: column;

                    a{
                        text-decoration: none;
                        color: #000;
                    }
                }
                h3{
                    font-weight: bold;
                    font-size: 20px;
                    margin-bottom: 5px;
                  
                }
            }
        }
     }
      
`;