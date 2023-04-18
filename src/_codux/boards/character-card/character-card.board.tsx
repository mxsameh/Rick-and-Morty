import { createBoard } from '@wixc3/react-board';
import CharacterCard from '../../../components/CharacterCard';

export default createBoard({
    name: 'Character Card',
    Board: () => <CharacterCard character={{
        id: 1,
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        name: 'Rick',
        species: 'Human',
        status: 'Alive'
    }} key={1} />
});
