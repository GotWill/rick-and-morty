import styled from "styled-components";

export const Container = styled.div`
    max-width: 900px;
    margin: 8rem  auto;

    h2{
        color: #FFF;
    }

    .d-flex-header{
        display: flex;
        align-items: flex-start;
        justify-content: space-around;

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

        .img{
            display: flex;
            flex-direction: column;
            align-items: center;
            

            img{
              border-radius: 50%;
              margin-bottom: 15px;
              border: 5px solid #F2F2F7;
            }
        }


        @media (max-width: 600px) {
           
                flex-direction: column;
                align-items: center;

                .flex{
                    margin-bottom: 15px;
                }
            
        }
      
    }
`

export const ContainerDetails = styled.div`
margin-top: 3rem;
display: flex;
justify-content: space-between;
align-items: baseline;

h2{
    color: #FFF;
    font-weight: 500;
}

.details{
    margin-top: 1rem;
    width: 400px;
    
    .item{
        padding: 10px 0;
        border-bottom: 1px solid #6E798C;

        h3{
            color: #FFF;
            font-weight: bold;
            margin-bottom: 5px;
        }
        span{
            color: #FFF;
            font-size: 14px;
            font-weight: 400;
        }
    }
}

@media (max-width: 600px) {
    .details {
        width: 100%;
    }
}

@media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
}



`;