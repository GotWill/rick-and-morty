import { Header } from "../../components/Header";
import LogoText from '../../assets/img/logo-text.png';
import * as C from './styles'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { CharacterContext } from "../../contexts/character";
import { typeCharacter } from "../../types/item";
import { Pagination } from "../../components/Pagination";
export function Home() {


   const { character, addFavorite, favorites, info } = useContext(CharacterContext)
  

   function addItemFavorite(item: typeCharacter){

      const newList = [...favorites]
      if(!newList.includes(item)){
         newList.push(item)
         addFavorite(newList)
      }
   }
   

   function onPrevious(){
     
   }

   function onNext(){
      
   }
  


  
   return (
      <div>
         <Header />
         <C.Container>
            <div className="img">
               <img src={LogoText} alt="" />
            </div>

            <Form />
            <div className="items">
               {character.map((item) => {
                  return (
                     <div className="item" key={item.id}>
                        <Link to={`/character/${item.id}`}>
                           <img src={item.image} alt={item.name} />
                        </Link>

                        <div className="info">
                           <div className="details">
                              <Link to={`/character/${item.id}`}>
                                 <h3>{item.name}</h3>
                              </Link>
                              <p>{item.species}</p>
                           </div>

                           <div className="heart">
                            
                              <input type="checkbox" id="check" className="checkboxI" onClick={() => addItemFavorite(item)}/>
                              <label htmlFor="checkbox">
                                 <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
                                       <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2" />
                                       <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                                       <g id="grp7" opacity="0" transform="translate(7 6)">
                                          <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                                          <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                                       </g>

                                       <g id="grp6" opacity="0" transform="translate(0 28)">
                                          <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                                          <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                                       </g>

                                       <g id="grp3" opacity="0" transform="translate(52 28)">
                                          <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                                          <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                                       </g>

                                       <g id="grp2" opacity="0" transform="translate(44 6)">
                                          <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                                          <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                                       </g>

                                       <g id="grp5" opacity="0" transform="translate(14 50)">
                                          <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                                          <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                                       </g>

                                       <g id="grp4" opacity="0" transform="translate(35 50)">
                                          <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                                          <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                                       </g>

                                       <g id="grp1" opacity="0" transform="translate(24)">
                                          <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                                          <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                                       </g>
                                    </g>
                                 </svg>
                              </label>

                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>

            <Pagination next={info.next} prev={info.prev} onPrevious={onPrevious} onNext={onNext}/>
         </C.Container>

         <Footer />
      </div>
   )
}