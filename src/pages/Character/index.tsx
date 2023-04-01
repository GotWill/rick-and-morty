import { Header } from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import * as C from './styles'
import { useEffect, useState } from "react";
import { typeCharacter } from "../../types/item";
import { api } from "../../api";
import { ArrowLeft } from "phosphor-react";
import { typeEpisode } from "../../types/item";
import { Footer } from "../../components/Footer";

export function Character(){

    const {id} = useParams()
    const [character, setCharacter] = useState({} as typeCharacter )
    const [episodes, setEpisodes] = useState<typeEpisode[]>([])


    async function getCharacter(){
    const response = await api.get(`character/${id}`)
     setCharacter(response.data)
    }

    async function getEpisodes(){
        const response = await api.get('episode/[1,2,3,4,5,6]')
         setEpisodes(response.data)
        }

    useEffect(() => {
        getCharacter()
        getEpisodes()
    },[])


    return (
        <div>
            <Header/>

            <C.Container>
              <div className="d-flex-header">
                 <div className="flex">
                  <Link to="/">
                     <ArrowLeft size={24} />
                  </Link>
                   <span> GO BACK</span>
                 </div>
                 <div className="img">
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                 </div>
                 <div></div>
              </div>

              <C.ContainerDetails>
                 <div>
                    <h2>Informações</h2>

                    <div className="details">
                        <div className="item">
                            <h3>Gender</h3>
                            <span>{character.gender}</span>
                        </div>
                        <div className="item">
                            <h3>Status</h3>
                            <span>{character.status}</span>
                        </div>
                        <div className="item">
                            <h3>Specie</h3>
                            <span>{character.species}</span>
                        </div>
                        <div className="item">
                            <h3>Origin</h3>
                            <span>{character.location?.name}</span>
                        </div>
                        <div className="item">
                            <h3>Type</h3>
                            <span>{character.type === '' ? '...' : character.type}</span>
                        </div>
                        <div className="item">
                            <h3>Location</h3>
                            <span>{character.location?.name}</span>
                        </div>
                    </div>
                 </div>
                 <div>
                    <h2>Episodios</h2>

                    <div className="details">
                    {episodes.map((episode) => {
                        return (
                            <div className="item" key={episode.id}>
                                <h3>{episode.episode}</h3>
                                <span>{episode.name}</span>&ensp;&ensp; 
                               
                            </div>
                        )
                     })}
                    </div>
                     

                 </div>
              </C.ContainerDetails>
            </C.Container>

            <Footer/>
        </div>
    )
}