import styled from "styled-components";

const Header = styled.h1`
    font-weight: lighter;
    font-size: x-large;
`;

function CreatePage() {
    return (
        <>
            <Header>Create Team</Header>
            <div className='container'></div>
        </>
    );
}

export default CreatePage;