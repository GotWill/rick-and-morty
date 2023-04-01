import styled from "styled-components";

export const Container = styled.div`
    max-width: 900px;
    margin: 8rem  auto;

    .d-flex-header{
        display: flex;
        align-items: flex-start;
        justify-content: space-around;

        .flex{
            display: flex;
            align-items: center;
            gap: 10px;

            a{
                color: #000;
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
    color: #8E8E93;
    font-weight: 500;
}

.details{
    margin-top: 1rem;
    width: 400px;
    
    .item{
        padding: 10px 0;
        border-bottom: 1px solid #6E798C;

        h3{
            color: #081F32;
            font-weight: bold;
            margin-bottom: 5px;
        }
        span{
            color: #6E798C;
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