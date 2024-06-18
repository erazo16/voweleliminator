import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 99vh;
    background-color: #242424;
    flex-direction: column;
`

export const InputStyle = styled.input`
    border-radius: 5px;
    padding: 9px;
    background-color: transparent;
    border: 1px solid #AAB7B8;
    

    &:focus{
        outline: none;
    }
`

export const ButtonStyle = styled.button`
    background-color: #E74C3C;
    color: white;
    padding: 9px;
    border: 1px solid #E74C3C;
    border-radius: 5px;
    cursor: pointer;

    &:focus{
        outline: none;
    };

    &:hover{
        background-color: transparent;
        color: #E74C3C;
    }
`

export const TextResult = styled.h3`
    font-weight: bold;
`

export const ContainerResult = styled.div`
    margin-top: 2rem;
    width: 30%;
`

export const containerContent = styled.div`
    display: flex;
    justify-content: center;

`


