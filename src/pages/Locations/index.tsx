import * as C from './styles'
import Img from '../../assets/img/location.png'
import { typeLocation } from '../../types/item';
import { useContext, useEffect, useState } from 'react';
import { api } from '../../api';
import { Loading } from '../../components/Loading';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CharacterContext } from '../../contexts/character';
import { Link } from 'react-router-dom';

export function Locations() {

    const [localtion, setLocation] = useState<typeLocation[]>([])
    const [loading, setLoading] = useState(false);

    const { getLocationName, locations } = useContext(CharacterContext)

    async function getLocation() {
        const response = await api.get('/location')
        setLocation(response.data.results)
    }

    const schema = z.object({
        name: z.string(),
    })

    type SearchFormInputs = z.infer<typeof schema>

    const { handleSubmit, register } = useForm<SearchFormInputs>({
        resolver: zodResolver(schema)
    })

    function submitForm(data: SearchFormInputs) {
        const { name } = data;
        getLocationName(name)
    }

    useEffect(() => {
        setLoading(true);
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

                        <form onSubmit={handleSubmit(submitForm)}>
                            <MagnifyingGlass size={20} />
                            <input {...register('name')} type="text" placeholder="Filter by name" required />
                        </form>

                        <div className="items">
                            {locations.map((localtion) => {
                                return (
                                    <div className="item" key={localtion.id}>

                                        <Link to={`/location/${localtion.id}`}>
                                           <h2> {localtion.name}</h2>
                                        </Link>

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