import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import CharacterCard from "./CharacterCard";
import { Icharacter } from "./CharacterCard";

const Characters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    // const { data } = useFetch(url);

    const [info, setInfo] = useState<any>(null);
    const [characters, setCharacters] = useState<Icharacter[] | []>([]);

      useEffect(() => {
        fetchCharacter(url)
      }, []);

    const fetchCharacter = async (url : string) =>
    {
        const response = await fetch(url);
        response.json()
        .then((data: any) => {
            const newCharacters = data.results;
            const allCharacters = [...characters, ...newCharacters];

            setCharacters(allCharacters);
            setInfo(data.info);
        });
    }

    const loadMore = async () => {
        let nextUrl = info.next;
        fetchCharacter(nextUrl)
    };

    return (
        <>
            {characters && (
                <>
                    <div className="characters-grid">
                        {characters.map((character: Icharacter) => (
                            <CharacterCard character={character} key={character.id} />
                        ))}
                    </div>
                    <button className="more-btn" onClick={loadMore}>more</button>
                </>
            )}
        </>
    );
};

export default Characters;
