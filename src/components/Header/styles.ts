import styled from "styled-components";

export const Header = styled.header`
   
    width: 100%;
    box-shadow: 0 5px 10px -5px rgb(0 0 0 / 15%);
    /* background-color: #fff; */
    background: #0b15349c;
    padding: 20px;
    position: fixed;
    z-index: 999;
    top: 0;

    img{
        filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(83deg) brightness(110%) contrast(101%);
    }

    .container{
        max-width: 1200px;
        margin: 0px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        nav ul {
            list-style: none;
            display: flex;
            gap: 15px;

            a{
                text-decoration: none;
                font-weight: 700;
                font-size: 18px;
                color: #fff;

                &:hover{
                    opacity: 0.5;
                }
            }
           
        }
    }
`;
