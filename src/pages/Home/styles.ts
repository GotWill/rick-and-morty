import styled from "styled-components";



export const Container = styled.div`

max-width: 1200px;
    margin: 6.5rem  auto;



   
    

    .img{
        text-align: center;
    }

    .items{
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
                h2{
                    font-weight: bold;
                    font-size: 20px;
                    margin-bottom: 5px;
                  
                }

                .heart{   

   input[type=checkbox] {
   position: absolute;
    margin-left: 21px;
    margin-top: 20px;
    height: 20px;
    width: 20px;
    appearance: none;
    cursor: pointer;
}                 

svg{
  cursor:pointer; overflow:visible; width:60px;
  #heart{transform-origin:center; animation:animateHeartOut .3s linear forwards;}
  #main-circ{transform-origin:29.5px 29.5px;}
}
.checkboxI:checked + label svg{
    #heart{transform:scale(.2); fill:#E2264D; animation:animateHeart .3s linear forwards .25s;}
    #main-circ{transition:all 2s; animation:animateCircle .3s linear forwards; opacity:1;}
    #grp1{
      opacity:1; transition:.1s all .3s;
      #oval1{
        transform:scale(0) translate(0, -30px);
        transform-origin:0 0 0;
        transition:.5s transform .3s;}
      #oval2{
        transform:scale(0) translate(10px, -50px);
        transform-origin:0 0 0;
        transition:1.5s transform .3s;}
    }
    #grp2{
      opacity:1; transition:.1s all .3s;
      #oval1{
        transform:scale(0) translate(30px, -15px); 
        transform-origin:0 0 0;
        transition:.5s transform .3s;}
      #oval2{
        transform:scale(0) translate(60px, -15px); 
        transform-origin:0 0 0;
        transition:1.5s transform .3s;}
    }
    #grp3{
      opacity:1; transition:.1s all .3s;
      #oval1{
        transform:scale(0) translate(30px, 0px);
        transform-origin:0 0 0;
        transition:.5s transform .3s;}
      #oval2{
        transform:scale(0) translate(60px, 10px);
        transform-origin:0 0 0;
        transition:1.5s transform .3s;}
    }
    #grp4{
      opacity:1; transition:.1s all .3s;
      #oval1{
        transform:scale(0) translate(30px, 15px);
        transform-origin:0 0 0;
        transition:.5s transform .3s;}
      #oval2{
        transform:scale(0) translate(40px, 50px);
        transform-origin:0 0 0;
        transition:1.5s transform .3s;}
    }
    #grp5{
      opacity:1; transition:.1s all .3s;
      #oval1{
        transform:scale(0) translate(-10px, 20px);
        transform-origin:0 0 0;
        transition:.5s transform .3s;}
      #oval2{
        transform:scale(0) translate(-60px, 30px);
        transform-origin:0 0 0;
        transition:1.5s transform .3s;}
    }
    #grp6{
      opacity:1; transition:.1s all .3s;
      #oval1{
        transform:scale(0) translate(-30px, 0px);
        transform-origin:0 0 0;
        transition:.5s transform .3s;}
      #oval2{
        transform:scale(0) translate(-60px, -5px);
        transform-origin:0 0 0;
        transition:1.5s transform .3s;}
    }
    #grp7{
      opacity:1; transition:.1s all .3s;
      #oval1{
        transform:scale(0) translate(-30px, -15px);
        transform-origin:0 0 0;
        transition:.5s transform .3s;}
      #oval2{
        transform:scale(0) translate(-55px, -30px);
        transform-origin:0 0 0;
        transition:1.5s transform .3s;}
    }
    #grp2{opacity:1; transition:.1s opacity .3s;}
    #grp3{opacity:1; transition:.1s opacity .3s;}
    #grp4{opacity:1; transition:.1s opacity .3s;}
    #grp5{opacity:1; transition:.1s opacity .3s;}
    #grp6{opacity:1; transition:.1s opacity .3s;}
    #grp7{opacity:1; transition:.1s opacity .3s;}
}

@keyframes animateCircle{
  40%{transform:scale(10); opacity:1; fill:#DD4688;}
  55%{transform:scale(11); opacity:1; fill:#D46ABF;}
  65%{transform:scale(12); opacity:1; fill:#CC8EF5;}
  75%{transform:scale(13); opacity:1; fill:transparent; stroke:#CC8EF5; stroke-width:.5;}
  85%{transform:scale(17); opacity:1; fill:transparent; stroke:#CC8EF5; stroke-width:.2;}
  95%{transform:scale(18); opacity:1; fill:transparent; stroke:#CC8EF5; stroke-width:.1;}
  100%{transform:scale(19); opacity:1; fill:transparent; stroke:#CC8EF5; stroke-width:0;}
}

@keyframes animateHeart{
  0%{transform:scale(.2);}
  40%{transform:scale(1.2);}
  100%{transform:scale(1);}
}

@keyframes animateHeartOut{
  0%{transform:scale(1.4);}
  100%{transform:scale(1);}
}
                }
   
            }
        }
    }
   

`;