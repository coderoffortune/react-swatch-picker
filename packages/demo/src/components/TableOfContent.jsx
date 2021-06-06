import { Link, useRouteMatch } from "react-router-dom"
import styled, { css } from 'styled-components'

import Subtitle from './Subtitle'

const Sidebar = styled.aside`
    padding: 1rem;
    max-width: 100%;

    @media (min-width: 670px) {
        min-width: 12rem;
        max-width: 15rem;
    }
`

const InnerSidebar = styled.div`
    position: sticky;
    top: 1rem;
`

const MenuLevel = styled.ul`
    list-style: none;
    margin: .5rem 0 0;
    padding-left: 1rem;
    
    ul {
        padding-left: 1.5rem;
    }
`
const MenuItem = styled.li`
    list-style: none;
    margin-bottom: .5rem;
    text-transform: uppercase;
    font-size: .8rem;

    a {
        color: #000;

        ${props => props.active && css`
            font-weight: bold;
        `}
    }
`

const MenuItemLink = ({ to, children }) => {
    let match = useRouteMatch({
        path: to,
        exact: true
    })

    return (
        <MenuItem active={match}>            
            <Link to={to}>{children}</Link>
        </MenuItem>
    )
}

const TableOfContent = () =>
    <Sidebar>
        <InnerSidebar>
            <Subtitle>Table of Content</Subtitle>
            <nav>
                <MenuLevel>
                    <MenuItem>
                        Components
                        <MenuLevel>
                            <MenuItemLink to="/swatch-picker">Swatch Picker</MenuItemLink>
                        </MenuLevel>
                    </MenuItem>
                </MenuLevel>
            </nav>
        </InnerSidebar>
    </Sidebar>

export default TableOfContent
