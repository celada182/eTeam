import styled from "styled-components";
import Search from "../../components/search/Search";

const Header = styled.h1`
    font-weight: lighter;
    font-size: x-large;
`;

function SearchPage() {
    return (
        <>
            <Header>Search Team</Header>
            <Search />
        </>
    );
}

export default SearchPage;