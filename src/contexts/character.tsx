import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { typeCharacter, typeEpisode, typeInfo } from "../types/item";
import { api } from "../api";

type characterProps = {
    getCharacter: (name?: string, specie?: string, gender?: string) => Promise<void>;
    getEpisode: (name?: string) => Promise<void>
    addFavorite: (item: typeCharacter[]) => void;
    updateCharacter: (item: typeCharacter[]) => void;
    character: typeCharacter[];
    episodes: typeEpisode[];
    favorites: typeCharacter[];
    info: typeInfo
}

export const CharacterContext = createContext({} as characterProps)

type childrenProps = {
    children: ReactNode
}

export function CharacterProvider({ children }: childrenProps) {

    const [character, setCharacter] = useState<typeCharacter[]>([])
    const [favorites, setFavorites] = useState<typeCharacter[]>([])
    const [episodes, setEpisodes] = useState<typeEpisode[]>([])
    const [info, setInfo] = useState({} as typeInfo)

    function addFavorite(item: typeCharacter[]) {
        setFavorites(item)
    }

    function updateCharacter(item: typeCharacter[]){
        setCharacter(item)
    }

    async function getCharacter(name: string = "", specie: string = "", gender: string = "") {
        try {
            const response = await api.get(`/character/?name=${name}&species=${specie}&gender=${gender}`)
            setCharacter(response.data.results)
            setInfo(response.data.info)
        } catch (error) {
            alert("Nada encontrado.")
        }

    }

    async function getEpisode(name: string = "") {
        try {
            const response = await api.get(`/episode?name=${name}`);
            setEpisodes(response.data.results)
        } catch (error) {
            alert("Nada encontrado.")
        }
    }



    useEffect(() => {
        getCharacter()
        getEpisode()
    }, [])

    return (
        <CharacterContext.Provider value={{ getCharacter, addFavorite, updateCharacter, character, favorites, episodes, info, getEpisode }}>
            {children}
        </CharacterContext.Provider>
    )
}

