import { NavLink } from 'react-router-dom'
import styled, {css} from 'styled-components'


export const Container = styled.div`  
    position: relative;
    flex: 0 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 10rem;
`
export const Title = styled.div`
        text-align: center;
        font-size: 2.5rem;
        font-weight: 600;
        color: #1AC073;
`
export const LinkIcon = styled.div`
    width: 15%;
    height: 100%;
    svg{
        width: 100%;
    }
`
export const Links = styled.nav`
    display: flex;
    flex-direction: column;
    .active{
        position: relative;
        &::after{
            content: "";
            top: 0;
            bottom: 0;
            transform: translateX(-30%);
            position: absolute;
            display: block;
            width: 30%;
            height: 100%;
            background-image: linear-gradient(90deg, #1AC073 0%, rgba(26, 192, 115, 0) 91.25%);
            opacity: 0.2;
            border-radius: .5rem;
        }
        ${LinkIcon}{
            svg{
                filter: grayscale(0);
            }
        }
    }
`
export const LinkContainer = styled(NavLink)`
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${LinkIcon}{
        svg{
            filter: grayscale(1);
        }
    }
`

export const Link = styled.span`
    flex: 1;
    padding-left: 1.3rem;
    font-size: 1.5rem;
`
export const DrawerFooter = styled.div`
    position: relative;
    margin-top: auto;
`
export const LogOutImg = styled.div`
    width: 20%;
    cursor: pointer;
    display: inline-block;
    svg{
        width: 100%;
    }
`
