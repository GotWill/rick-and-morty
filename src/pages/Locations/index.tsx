import * as C from './styles'
import Img from '../../assets/img/location.png'
import { typeLocation } from '../../types/item';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import { Loading } from '../../components/Loading';

export function Locations() {

    const [localtion, setLocation] = useState<typeLocation[]>([])
    const [loading, setLoading] = useState(false);

    async function getLocation() {
        const response = await api.get('/location')
        setLocation(response.data.results)
    }

    useEffect(() => {

        setLoading(true);
        getLocation()
        setTimeout(() => {
            setLoading(false);
        }, 300)
    }, [])

    return (
        <div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <C.Container>
                        <div className="header">
                            <img src={Img} alt="" />
                        </div>

                        <div className="items">
                            {localtion.map((localtion) => {
                                return (
                                    <div className="item" key={localtion.id}>
                                        <h2>{localtion.name}</h2>
                                        <span>{localtion.type}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </C.Container>
                )
            }
        </div>

    )
}