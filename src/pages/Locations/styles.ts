import styled from "styled-components";

export const Container = styled.div`
     max-width: 1200px;
     margin: 7rem  auto;

     .header{
        text-align: center;
     }

     .items{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 2rem;

        .item{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            padding: 20px;
            width: 240px;
            height: 128px;
            background: #FAFAFA;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
            border-radius: 4px;

            span{
                margin-top: 5px;
                color: rgba(0, 0, 0, 0.6);
            }
        }
     }
`;