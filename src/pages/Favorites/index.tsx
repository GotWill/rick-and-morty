import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import * as C from './styles'
import { CharacterContext } from "../../contexts/character";
import { Loading } from "../../components/Loading";

export function Favorites() {
    const { favorites } = useContext(CharacterContext)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300)
    },[])

    return (
        <div>
            <Header />

            {
                loading ? (
                    <Loading/>
                ): (
                    <C.Container>
                    {
                        favorites.length > 0 ? (
                            <div>
                                <h1>Mys Favorites</h1>
    
                                <div className="items">
                                    {favorites.map((item) => {
                                        return (
                                            <div className="item" key={item.id}>
                                                <img src={item.image} alt={item.name} />
    
                                                <div className="info">
                                                    <div className="details">
                                                        <h3>{item.name}</h3>
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