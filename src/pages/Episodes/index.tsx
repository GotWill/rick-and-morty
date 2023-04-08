import * as C from './styles'
import imgEpisode from '../../assets/img/episode.png'
import { MagnifyingGlass } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../contexts/character";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import { Loading } from "../../components/Loading";
import { Link } from 'react-router-dom';


export function Episodes() {
    const { episodes, getEpisode } = useContext(CharacterContext)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300)
    }, [])

    const schema = z.object({
        name: z.string(),
    })

    type SearchFormInputs = z.infer<typeof schema>

    const { handleSubmit, register } = useForm<SearchFormInputs>({
        resolver: zodResolver(schema)
    })

    function submitForm(data: SearchFormInputs) {
        const { name } = data;
        getEpisode(name)
    }
    return (
        <div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <C.Container>
                        <div className="img">
                            <img src={imgEpisode} alt="" />
                        </div>

                        <form onSubmit={handleSubmit(submitForm)}>
                            <MagnifyingGlass size={20} />
                            <input {...register('name')} type="text" placeholder="Filter by name" required />
                        </form>

                        <div className="items">
                            {episodes.map((episode) => {
                                return (
                                    <div className="item" key={episode.id}>
                                        
                                            <Link to={`/episode/${episode.id}`}>
                                             <h2>{episode.name}</h2>  
                                            </Link>
                                        
                                        <span>{episode.air_date}</span>
                                        <span className="bold">{episode.episode}</span>
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