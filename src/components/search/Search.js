import { useState } from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
    border: 1px solid;
    display: flex;
    width: 50%;
    align-self: center;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
`;

const Row = styled.div`
    padding: 10px;
    flex-direction: row;
    padding: 10px 20px;
`;

const Label = styled.label`
    padding: 10px 30px;
    font-size: large;
`;

const Select = styled.select`
    padding: 0 10px;
    border-radius: 10px;
    font-size: large;
`;

const Button = styled.button`
    align-self: center;
    background-color: #E2F6FF;
    color: #006DA4;
    border-radius: 10px;
    padding: 10px 20px;
    border-color: #006DA4;
    font-size: large;
    font-weight: bold;
`;

const GAMES = [
    {
        name: "Marvel Rivals",
        positions: ["Vanguard", "Duelist", "Strategist"]
    },
    {
        name: "League Of Legends",
        positions: ["Top", "Jungle", "Mid", "Adc", "Support"]
    },
    {
        name: "Overwatch",
        positions: ["Tank", "Damage", "Support"]
    }
];

function Search() {

    const [game, setGame] = useState(GAMES[0]);

    const changeGame = (event) => {
        const game = GAMES.find(game => game.name === event.target.value);
        setGame(game);
    };

    return (
        <Conatiner>
            <Row>
                <Label>Game</Label>
                <Select onChange={changeGame}>
                    {GAMES.map(game => <option key= {game.name}>{game.name}</option>)}
                </Select>
            </Row>
            <Row>
                <Label>Position</Label>
                <Select>
                    {game.positions.map(position => <option  key={position}>{position}</option>)}
                </Select>
            </Row>
            <Button>Search</Button>
        </Conatiner>
    );
}

export default Search;