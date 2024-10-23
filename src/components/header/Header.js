import styled from 'styled-components';

const Conatiner = styled.div`
    position: fixed;
    width: 100%;
    padding: 10px;
    top: 0;
    background-color: #E2F6FF;
    border: 1px solid;
    color: #006DA4;
    font-weight: bold;
    font-size: larger;
`;

function Header() {
    return (
        <Conatiner>eTeam</Conatiner>
    );
}

export default Header;