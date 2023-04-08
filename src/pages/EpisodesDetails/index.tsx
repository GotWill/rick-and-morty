import * as C from './styles'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { typeEpisode, typeCharacter } from '../../types/item'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'
import axios from 'axios'
import { Loading } from '../../components/Loading'

export function EpisodesDetails() {

    const [episode, setEpisode] = useState({} as typeEpisode)
    const [character, setCharacter] = useState<typeCharacter[]>([])
    const [loading, setLoading] = useState(false)
    const cards: typeCharacter[] = []
    let count = 0;


    const { id } = useParams()





    function getEpisodes() {
        Promise.all([
            api.get(`/episode/${id}`)
                .then(function (response) {
                    setEpisode(response.data)
                    const characters = response.data.characters
                    characters.forEach((element: string) => {
                        axios.get(element).then(function (response) {
                            cards.push({
                                id: response.data.id,
                                name: response.data.name,
                                image: response.data.image,
                                gender: response.data.gender,
                                location: response.data.location,
                                species: response.data.species,
                                status: response.data.status,
                                type: response.data.type
                            })

                            setCharacter(cards)
                        })
                    });
                })
        ])
    }



    useEffect(() => {
        setLoading(true)
        getEpisodes()
        setTimeout(() => {
            setLoading(false)

        },3000)
    }, [])




    return (
        <>
             {
            loading ? (
                <Loading />
            ) : (
                <C.Container>
                <div className="d-flex-header">
                    <div className="flex">
                        <Link to="/episodes">
                            <ArrowLeft size={24} />
                            <span> GO BACK</span>
                        </Link>
    
                    </div>
                    <div className="img">
    
                        <h1>{episode.name}</h1>
                    </div>
                    <div></div>
                </div>
    
                <div className="details">
                    <div>
                        <strong>Episode</strong>
                        <p>{episode.episode}</p>
                    </div>
                    <div>
                        <strong>Date</strong>
                        <p>{episode.air_date}</p>
                    </div>
                    <div></div>
                </div>
    
    
    
    
                <div className="cast">
                    <h2>Cast</h2>
                </div>
    
                <div className="items">
                {character.map((character) => {
                    return (
                        <div className="item" key={`${character.id}${count++}`}>
                            <Link to={`/character/${character.id}`}>
                                <img src={character.image} alt={character.name} />
                            </Link>
    
                            <div className="info">
                                <div className="details">
                                    <Link to={`/character/${character.id}`}>{character.name}</Link>
                                    <p>{character.species}</p>
                                </div>
    
    
                            </div>
                        </div>
                    )
                })}
                </div>
              
    
    
    
            </C.Container>
            )
        }
       
        </>
       
    )
}