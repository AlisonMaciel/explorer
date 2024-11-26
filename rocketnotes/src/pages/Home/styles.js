import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background-color: ${({theme}) => console.log(theme)};
`
export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`
export const Menu = styled.ul`
    grid-area: menu;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding-top: 64px;
    text-align: center;

    > li {
        margin-bottom: 24px;
    }
`
export const NewNotes = styled(Link)`
    grid-area: newnote;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    font-size: 16px;

    > svg {
        margin-right: 8px;
    }
`
export const Search = styled.div`
    grid-area: search;
    margin: 64px 64px 0; 
`
export const Content = styled.div`
    grid-area: content;
    overflow-y: auto;
    margin: 64px;
`