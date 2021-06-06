import styled from 'styled-components'

export const Table = styled.table`
    border-collapse: collapse;
`

export const TableRow = styled.tr`
    border-bottom: 1px solid #ddd;

    &:last-child {
        border-bottom: none;
    }
`

export const TableCell = styled.td`
    padding: .4rem .3rem;
    margin: 0;
    font-size: .8rem;
`
