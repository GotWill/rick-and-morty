import styled from "styled-components";

export const Container = styled.div`
 form{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 1rem;

        input, select{
            width: 375px;
            border: 1px solid #cecece;
            border-radius: 10px;
            outline: none;
            padding: 16px 20px;

            @media (max-width: 1280px) {
                width: 280px;
            }
        }

        button {
            background: #0a1434;
            width: 250px;
            border: 1px solid #fff;
            color: #fff;
            font-weight: bold;
            border-radius: 15px;
            padding: 16px 10px;
            cursor: pointer;
            font-size: 20px;

            @media (max-width: 1280px) {
                width: 280px;
            }

            &:hover{
                background: #061024;
                color: #fff;
                transition: 2s;
            }

        }
    }
`