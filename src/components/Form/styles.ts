import styled from "styled-components";

export const Container = styled.div`
 form{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 1rem;

        input, select{
            width: 250px;
            border: 1px solid #cecece;
            border-radius: 10px;
            outline: none;
            padding: 20px;
        }

        button {
            background: #00b0c8;
            border: 1px solid #8afd72;
            width: 250px;
            color: #fff;
            font-weight: bold;
            border-radius: 15px;
            padding: 20px 10px;
            cursor: pointer;

            &:hover{
                background: #0695a9;
                transition: 2s;
            }

        }
    }
`