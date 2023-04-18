import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { Icharacter } from "./CharacterCard";
import { gsap } from "gsap";

const removeHiddenClass = () => {
    const els = document.querySelectorAll(".character_hidden");
    els.forEach((el) => {
        el.classList.remove("character_hidden");
    });
};
const animateChars = () => {
    gsap.to(".character_hidden", {
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        onComplete: () => {removeHiddenClass()},
    });
};

const Characters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    const [info, setInfo] = useState<any>(null);
    const [characters, setCharacters] = useState<Icharacter[] | []>([]);

    useEffect(() => {
        fetchCharacter(url);
    }, []);

    useEffect(()=>{
    // const els = document.querySelectorAll(".character");
    if(characters.length){
        animateChars()
    }



    },[characters])
    const fetchCharacter = async (url: string) => {
        const response = await fetch(url);
        response.json().then((data: any) => {
            const newCharacters = data.results;
            const allCharacters = [...characters, ...newCharacters];

            setCharacters(allCharacters);
            setInfo(data.info);
        });
    };

    const loadMore = async () => {
        let nextUrl = info.next;
        fetchCharacter(nextUrl);
    };

    return (
        <>
            {characters && (
                <>
                    <div className="characters-grid">
                        {characters.map((character: Icharacter, index: number) => (
                            <CharacterCard character={character} key={index} />
                        ))}
                    </div>
                    {characters.length != 0 && (
                        <button className="more-btn" onClick={loadMore}>
                            more
                        </button>
                    )}
                </>
            )}
        </>
    );
};

export default Characters;
