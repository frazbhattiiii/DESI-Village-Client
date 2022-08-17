import styled from "styled-components";
import { colorPrimary, colorTertiary, colorWhite } from "../../abstracts/variables";
import { ListTitle, ListTitleContainer } from "../../Pages/vendor-routes/reports/reports.styles";

export const MealContainer = styled(ListTitleContainer)`
    background-color: ${colorWhite};
    box-shadow: .1rem 1.7rem 4.4rem rgba(3, 2, 41, 0.07);
    border-radius: .7rem;
    padding: 1rem .7rem;
    margin-top: 1.5rem;
    cursor: pointer;
`
export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1.3rem;
`
export const ItemImage = styled.img`
    width: 30%;
`
export const AvailabilityContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    border-radius: 2rem;
    padding: 0.5rem 0;
    color: ${({availability}) => (availability ? `${colorPrimary}` : `${colorTertiary}`)};
    background-color: ${({availability}) => (availability ? `rgba(26, 192, 115,0.1)`:`rgba(231, 29, 54,0.1)`)};;
`