import { useState } from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 50%;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
`;

const Row = styled.div`
    display: grid;
    padding: 10px 50px;
    justify-content: space-between;
`;

const Label = styled.label`
    padding: 10px 30px;
    font-size: large;
    grid-column: 1 / 2;
`;

const Select = styled.select`
    padding: 5px 10px;
    border-radius: 10px;
    font-size: large;
    background-color: #E2F6FF;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    border: none;
    text-align: center;
    grid-column: 2 / 2;
`;

const Option = styled.option`
    color: #E2F6FF;
    background-color: #006DA4;
    text-align: center;
`;

const Days = styled.div`
    grid-column: 2 / 2;
    text-align: center;
    padding: 10px;
`;

const Day = styled.input.attrs({ type: 'checkbox' })``;

const Hour = styled.input.attrs({ type: 'time' })`
    grid-column: 2 / 2;
    padding: 10px;
    border: none;
    border-radius: 10px;
`;

const Button = styled.button`
    align-self: center;
    background-color: #E2F6FF;
    color: #006DA4;
    border-radius: 10px;
    padding: 10px 20px;
    border: none;
    font-size: large;
    font-weight: bold;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
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
                    {GAMES.map(game => <Option key={game.name}>{game.name}</Option>)}
                </Select>
            </Row>
            <Row>
                <Label>Position</Label>
                <Select>
                    {game.positions.map(position => <Option key={position}>{position}</Option>)}
                </Select>
            </Row>
            <Row>
                <Label>Day(s)</Label>
                <Days>
                    Mon<Day />Tue<Day />Wed<Day />Thu<Day />Fri<Day />Sat<Day />Sun<Day />
                </Days>
            </Row>
            <Row>
                <Label>Hour</Label>
                <Hour />
            </Row>
            <Button>Search</Button>
        </Conatiner>
    );
}

export default Search;