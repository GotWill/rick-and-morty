export type typeCharacter = {
    id: number;
    name: string;
    species: string;
    image: string;
    status: string;
    type: string;
    gender: string;
    location: {
        name: string;
    }

}

export type typeEpisode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
}

export type typeLocation = {
    id: number;
    name: string;
    type: string;
    dimension: string;
}

export type typeInfo = {
    count: number;
    pages: number;
    next: string;
    prev: string;
}


