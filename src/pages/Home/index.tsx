import * as C from './styles'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/Form";
import { CharacterContext } from "../../contexts/character";
import { typeCharacter } from "../../types/item";
import { Pagination } from "../../components/Pagination";
import { Card } from '../../components/Card';
export function Home() {


   const { character, addFavorite, favorites, info, fetchCharacter } = useContext(CharacterContext)

   function addItemFavorite(item: typeCharacter) {

      const newList = [...favorites]
      if (!newList.includes(item)) {
         newList.push(item)
         addFavorite(newList)
      }
   }

   function onPrevious() {
      fetchCharacter(info.prev)
   }

   function onNext() {
      fetchCharacter(info.next)

   }
   return (
      <div>
         <C.Container>
            <div className="title">
              <h1>RICK AND MORTY</h1>
            </div>

            <Form />
            <div className="items">
               {character.map((item) => {
                  return (   
                     <Card item={item} key={item.id} favoriteItem={addItemFavorite}/>
                  )
               })}
            </div>
            <Pagination next={info.next} prev={info.prev} onPrevious={onPrevious} onNext={onNext} />
         </C.Container>
      </div>
   )
}