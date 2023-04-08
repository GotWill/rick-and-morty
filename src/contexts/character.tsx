import { createContext, ReactNode, useEffect, useState } from "react";
import { typeCharacter, typeEpisode, typeInfo, typeLocation } from "../types/item";
import { api } from "../api";
import axios from "axios";

type characterProps = {
    getCharacter: (name?: string, specie?: string, gender?: string) => Promise<void>;
    fetchCharacter: (url: string) => void;
    getEpisode: (name?: string) => Promise<void>;
    getLocationName: (name?: string) => Promise<void>
    addFavorite: (item: typeCharacter[]) => void;
    updateCharacter: (item: typeCharacter[]) => void;
    character: typeCharacter[];
    episodes: typeEpisode[];
    locations: typeLocation[];
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
    const [locations, setLocations] = useState<typeLocation[]>([])

    const [info, setInfo] = useState({} as typeInfo)

    const initialUrl = "https://rickandmortyapi.com/api/character"

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

      function fetchCharacter(url: string) {
            try {
                axios.get(url).then(function (response) {
                    setCharacter(response.data.results)
                    setInfo(response.data.info)
                })
            } catch (error) {
                console.log(error)
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

    async function getLocationName(name: string = "") {
        try {
            const response = await api.get(`/location?name=${name}`);
            setLocations(response.data.results)
        } catch (error) {
            alert("Nada encontrado.")
        }
    }


    useEffect(() => {
        // getCharacter()
        getLocationName()
        fetchCharacter(initialUrl)
        getEpisode()
    }, [])

    return (
        <CharacterContext.Provider value={{getCharacter, getLocationName, fetchCharacter, addFavorite, updateCharacter, character, favorites, episodes, info, locations, getEpisode }}>
            {children}
        </CharacterContext.Provider>
    )
}

