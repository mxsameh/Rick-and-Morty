
export interface Icharacter {
    id: number
    name: string
    species: string
    image: string
    status: string
}

interface Iprops {
    character: Icharacter
}

const CharacterCard = (props: Iprops) => {
    const { character } = props
    return (
        <div className="character character_hidden">
            <img src={character.image} alt="" className="character_image character_card" />
            <h2 className="character_name">{character.name}</h2>
            <p className="character_species">{character.species}</p>
        </div>

    );
};

export default CharacterCard