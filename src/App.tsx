import './App.css'
import { Button } from './components/Button'
import { Container } from './components/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { Greet } from './components/Greet'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Counter } from './components/state/Counter'
import { Status } from './components/Status'

function App() {
    const personName = {
        first: 'souhail',
        last: 'ouabou',
    }
    const nameList = [
        {
            first: 'souhail',
            last: 'ouabou',
        },
        {
            first: 'adam',
            last: 'kent',
        },
        {
            first: 'imad',
            last: 'bouh',
        },
    ]

    return (
        <div className="App">
            
            {/* <Greet name="Shlo" messageCount={20} isLoggedIn={false} />
            <Person name={personName} />
            <PersonList names={nameList} />
            <Status status="loading" />
            <Heading>PlaceHolder text</Heading>
            <Oscar>
                <Heading>PlaceHolder text inside Oscar</Heading>
            </Oscar>
            <Greet name="Shlo" isLoggedIn={false} />
            <Button
                handleClick={(event, id) => {
                    console.log('Button Clicked', event, id)
                }}
            />
            <Input value="" handleChange={(event) => console.log(event)} />
            <Container
                styles={{ border: '1px solid black', padding: '1rem' }}
            /> 
            <Counter/>*/}
            <ThemeContextProvider>
                <Box/>
            </ThemeContextProvider>
        </div>
    )
}

export default App
