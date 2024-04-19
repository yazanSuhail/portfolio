import React from 'react'
import { Container, GridContainer, GridItem1, GridItem2, GridItem3, InnerContainer } from './styles'

function StartMenuList({ state }) {
    return (
        <Container>
            <InnerContainer>
                <GridItem1>{state}</GridItem1>
                <GridItem2>2</GridItem2>
                <GridItem3>3</GridItem3>
            </InnerContainer>
        </Container>
    )
}

export { StartMenuList }