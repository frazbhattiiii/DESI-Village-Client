import styled from "styled-components";
import { colorBlack, colorGrey, colorPrimary, colorWhite } from "../../../abstracts/variables";
import ReactPaginate from "react-paginate";
export const ReportsContainer = styled.div`
    flex: 1;
    display: flex;
`
export const MealsListContainer = styled.div`
    background-color: ${colorGrey};
    flex: 1 0 auto;
    padding: 2rem 4rem 0 4rem;
    overflow-x: auto;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: .5rem;
    }

/* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
 
/* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888; 
    }

/* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`
export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
`
export const ListTitleContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr 1fr 1fr 2fr;
    column-gap: 10rem;
`
export const ListTitle = styled.span`
    text-align: left;
    font-size: 1.4rem;
    font-weight: 600;
`
export const ReportsDetail = styled.div`
    flex: 0 1 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 2rem;
    row-gap: 1rem;
`
export const Paginate = styled(ReactPaginate)`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 3rem 15rem;
    li a,
    li.previous a,
    li.next a,
    li.break a {
    border-radius: .4rem;
    padding: 0.5rem 1rem;
    border: rgba(0,0,0,0.4) 1px solid;
    cursor: pointer;
    }
    li.active a {
        background-color: ${colorPrimary};
        border-color: transparent;
        color: ${colorWhite};
        min-width: 32px;
    }
    li.disabled a {
        display: none;
    }
    li.disable,
    li.disabled a {
        cursor: default;
    }
`
export const ItemImg = styled.img`
    width: 60%;
    border-radius: 0.5rem;
    object-fit: contain;
    object-position: center;
`
export const TagsContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
    flex-wrap: wrap;
    width: 100%;
`
export const Tag = styled.span`
    padding: .5rem 1.5rem;
    background-color: ${colorPrimary};
    border-radius: .3rem;
    font-size: 1.2rem;
    color: ${colorWhite};
`
export const DetailItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: .5rem;
    width: 100%;
`
export const ItemContainer = styled.div`
    padding: 1rem 1.5rem;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`
export const ItemKey = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
`
export const ItemValue = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
`
export const FooterContainer = styled.div`
    margin-top: auto;
    width: 100%;
`