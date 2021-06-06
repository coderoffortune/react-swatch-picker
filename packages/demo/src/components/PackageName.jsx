import styled from 'styled-components'

const Container = styled.div`
    font-size: .9rem;
    padding: 0 0 1rem;

    label {
        text-transform: uppercase;
        font-weight: bold;
        font-size: .8rem;
        margin-bottom: .5rem;
    }
`

const PackageName = ({children}) => 
    <Container>
        <label>NPM package name:</label> {children}
    </Container>

export default PackageName
