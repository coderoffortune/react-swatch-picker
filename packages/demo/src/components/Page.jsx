import styled from 'styled-components'

const Page = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 769px) {
        flex-direction: row;
    }
`

export default Page
