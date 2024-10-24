import { useState } from 'react';
import styled from 'styled-components';
import { GAMES } from "../../games";

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

const Logo = styled.div`
    width: 30px;
    height: 30px;
    padding: 5px;
    & > img {
        width: 100%;
        height: 100%;
    }
`;

const Choose = styled.div`
    grid-column: 2 / 2;
    display: flex;
`;

const Select = styled.select`
    padding: 5px 10px;
    border-radius: 10px;
    font-size: large;
    background-color: #E2F6FF;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    border: none;
    text-align: center;
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

function Search() {

    const [game, setGame] = useState(GAMES[0]);
    const [position, setPosition] = useState(game.positions[0]);

    const changeGame = (event) => {
        const game = GAMES.find(game => game.name === event.target.value);
        setGame(game);
        setPosition(game.positions[0]);
    };

    const changePosition = (event) => {
        const position = game.positions.find(position => position.name === event.target.value);
        setPosition(position);
    };

    return (
        <Conatiner>
            <Row>
                <Label>Game</Label>
                <Choose>
                    <Logo><img src={game.image} alt={game.image} /></Logo>
                    <Select onChange={changeGame} value={game.name}>
                        {GAMES.map(game =>
                            <Option key={game.name}>
                                {game.name}
                            </Option>)}
                    </Select>
                </Choose>
            </Row>
            <Row>
                <Label>Position</Label>
                <Choose>
                    <Logo><img src={position.image} alt={position.image} /></Logo>
                    <Select onChange={changePosition} value={position.name}>
                        {game.positions.map(position => <Option key={position.name}>{position.name}</Option>)}
                    </Select>
                </Choose>
            </Row>
            <Row>
                <Label>Day(s)</Label>
                <Days>
                    <Day />Mon<Day />Tue<Day />Wen<Day />Thu<Day />Fri<Day />Sat<Day />Sun
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