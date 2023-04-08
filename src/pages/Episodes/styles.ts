import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
     margin: 7rem  auto;

     .img{
        display: flex;
        justify-content: center;
     }

     form{

        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        input{
        width: 500px;
        height: 56px;
        border: 1px solid #E5E5E5;
        border-radius: 10px;
        outline: none;
        padding: 20px 40px;
        color: rgba(0, 0, 0, 0.5);
        }

        svg{
            position: absolute;
            margin-left: -450px;
            color: rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 600px){
            input{
                width: 90%;
            }

            svg{
                margin-left: -308px;
            }
        }
        
     }

     .items{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 2rem;
        padding: 0 10px;
        row-gap: 33px;

        .item{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            padding: 20px;
            width: 230px;
            height: 128px;
            background: #FAFAFA;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
            border-radius: 4px;

            a{
                text-decoration: none;
            }
           

            h2{
                font-size: 20px;
            }

            span{
                margin-top: 5px;
                color: rgba(0, 0, 0, 0.6);
                font-weight: 400;
            }

            .bold {
                font-weight: 700;

            }
        }
     }
`;