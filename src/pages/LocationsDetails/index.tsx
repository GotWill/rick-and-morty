import * as C from './styles'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { typeLocation, typeCharacter } from '../../types/item'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'
import axios from 'axios'
import { Loading } from '../../components/Loading'

export function LocationsDetails() {

    const [location, setLocations] = useState({} as typeLocation)
    const [residents, setResidents] = useState<typeCharacter[]>([])
    const [loading, setLoading] = useState(false)
    const cards: typeCharacter[] = []
    let count = 0;
    const { id } = useParams()

    function getLocations() {
        Promise.all([
            api.get(`/location/${id}`)
                .then(function (response) {
                    setLocations(response.data)
                    const characters = response.data.residents
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
                                setResidents(cards) 
                        })
                    });
                })
        ])
    }
    useEffect(() => {
        setLoading(true)
        getLocations()
        setTimeout(() => {
            setLoading(false)

        }, 3000)
    }, [id])

    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <C.Container>
                        <div className="d-flex-header">
                            <div className="flex">
                                <Link to="/locations">
                                    <ArrowLeft size={24} />
                                    <span> GO BACK</span>
                                </Link>

                            </div>
                            <div className="img">
                                <h1>{location.name}</h1>
                            </div>
                            <div></div>
                        </div>

                        <div className="details">
                            <div>
                                <strong>Type</strong>
                                <p>{location.type}</p>
                            </div>
                            <div>
                                <strong>Dimension</strong>
                                <p>{location.dimension}</p>
                            </div>
                            <div></div>
                        </div>

                        {
                            residents.length > 0 ? (
                                <>
                                    <div className="cast">
                                        <h2>residents</h2>
                                    </div>

                                    <div className="items">
                                        {residents.map((resident) => {
                                            return (
                                                <div className="item" key={`${resident.id}${count++}`}>

                                                    <Link to={`/character/${resident.id}`}>
                                                      <img src={resident.image} alt={resident.name} />
                                                    </Link>

                                                    <div className="info">
                                                        <div className="details">
                                                            <h2>{resident.name}</h2>
                                                            <p>{resident.species}</p>
                                                        </div>


                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>
                            ) : (

                                <h2 style={{ color: '#FFF' }}>there are no residents
                                </h2>
                            )
                        }
                    </C.Container>
                )
            }

        </>

    )
}