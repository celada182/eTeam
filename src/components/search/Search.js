import styled from 'styled-components';

const Conatiner = styled.div`
    border: 1px solid;
`;

const Button = styled.button``;

function Search() {
    return (
        <Conatiner>
            <label>Game</label>
            <select>
                <option>League Of Legends</option>
                <option>Marvel Rivals</option>
                <option>Valorant</option>
                <option>Overwatch</option>
            </select>
            <Button>Search</Button>
        </Conatiner>
    );
}

export default Search;