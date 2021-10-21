import React from 'react';
import styled from 'styled-components';

const Navbar: React.FC = () => {
    return (
        <Container>
            <div>Address book</div>
        </Container>
    );
};

export default Navbar;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background-color: #1976d2;
    font-size: 28px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        width: 90%;
    }
`;
