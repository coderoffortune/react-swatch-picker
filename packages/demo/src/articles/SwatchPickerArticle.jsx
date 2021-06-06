import { useState } from 'react'
import styled from 'styled-components'

import SwatchPicker from 'react-swatch-picker'

import Article from '../components/Article'
import Code from '../components/Code'
import Dependencies from '../components/Dependencies'
import HStack from '../components/HStack'
import PackageName from '../components/PackageName'
import Section from '../components/Section'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import Title from '../components/Title'

const SelectedColor = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    background-color: ${(props) => props.color};
`

const SwatchPickerArticle = () => {
    const [selectedColor, setSelectedColor] = useState('#000')

    const swatchPickerDependencies = [
        ['react', '17.0.2'],
        ['react-dom', '17.0.2'],
        ['@material-ui/core', '4.11.4'],
        ['@material-ui/icons', '4.11.2'],
    ]

    return (
        <Article>
            <Title>Swatch Picker</Title>

            <Text>
                This swatch picker has been inspired by the Polymer one.
            </Text>
            <Text>
                <PackageName>react-swatch-picker</PackageName>
                <Dependencies dependencies={swatchPickerDependencies} />
            </Text>

            <Section>
                <Subtitle>Base usage</Subtitle>
                
                <SwatchPicker />

                <Code>
                    &lt;SwatchPicker /&gt;
                </Code>
            </Section>

            <Section>
                <Subtitle>Pre selected color</Subtitle>
                
                <SwatchPicker color="#8e24aa" />

                <Code>
                    &lt;SwatchPicker color="#8e24aa" /&gt;
                </Code>
            </Section>

            <Section>
                <Subtitle>Custom color list</Subtitle>
                
                <SwatchPicker colorList={['#000', '#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff', '#fff']} />

                <Code>
                    {`<SwatchPicker colorList={[
    '#000',
    '#f00',
    '#0f0',
    '#00f',
    '#ff0',
    '#f0f',
    '#0ff',
    '#fff'
]} />`}
                </Code>
            </Section>

            <Section>
                <Subtitle>Close colors panel on color selection</Subtitle>
                
                <SwatchPicker closeOnPick={true} />

                <Code>
                    &lt;SwatchPicker closeOnPick=&#123;true&#125; /&gt;
                </Code>
            </Section>

            <Section>
                <Subtitle>Get selected color</Subtitle>
                
                <HStack>
                    <SwatchPicker onColorSelect={color => setSelectedColor(color)} />

                    <SelectedColor color={selectedColor} />
                </HStack>

                <Code>
                    &lt;SwatchPicker onColorSelect=&#123;callback&#125; /&gt;
                </Code>
            </Section>
        </Article>
    )
}

export default SwatchPickerArticle
