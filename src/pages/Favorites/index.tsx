import { useContext, useEffect, useState } from "react";
import * as C from './styles'
import { CharacterContext } from "../../contexts/character";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";

export function Favorites() {
    const { favorites } = useContext(CharacterContext)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300)
    }, [])

    return (
        <div className="fo">
            {
                loading ? (
                    <Loading />
                ) : (
                    <C.Container>
                        {
                            favorites.length > 0 ? (
                                <div>
                                    <h1>Mys Favorites</h1>

                                    <div className="items">
                                        {favorites.map((item) => {
                                            return (
                                                <div className="item" key={item.id}>
                                                    <Link to={`/character/${item.id}`}>
                                                        <img src={item.image} alt={item.name} />
                                                    </Link>

                                                    <div className="info">
                                                        <div className="details">
                                                         <Link to={`/character/${item.id}`}>{item.name}</Link>
                                                            <p>{item.species}</p>
                                                        </div>


                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ) : (


                                <h2>There are no Favorites </h2>


                            )
                        }
                    </C.Container>
                )
            }
        </div>
    )
}