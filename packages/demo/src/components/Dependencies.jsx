import styled from 'styled-components'

import { Table, TableRow, TableCell } from './InfoTable'

const Container = styled.div`
    font-size: .9rem;
    padding: 0 0 1rem;

    ${Table} {
        margin-left: 1rem;
    }

    label {
        text-transform: uppercase;
        font-weight: bold;
        font-size: .8rem;
        display: block;
        margin-bottom: .5rem;
    }
`

const Dependencies = ({dependencies}) =>
    <Container>
        <label>Dependencies</label>

        <Table>
            {
                dependencies && dependencies.map(([name, version]) => 
                    <TableRow>
                        <TableCell>{name}</TableCell><TableCell>&gt;= {version}</TableCell>
                    </TableRow>
                )
            }
        </Table>
    </Container>

export default Dependencies
