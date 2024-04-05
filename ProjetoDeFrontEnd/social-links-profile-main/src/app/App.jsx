import '../app'
import Container from './Container/Container'
import Profile from './Profile/Profile';
import JessicaImage from '../../images/avatar-jessica.jpeg'

const App = ()=>{
    return(
        <Container>
            <Profile
                image={JessicaImage}
                name='Jessica Randall'
                location='London, United Kingdom'
                role="Full stack Developer"
                />
                <Button
                link='https://www.github./GabigoldoSenai'
                name='GitHub'
                />
                <Button
                link=''
                name='Linkedin'
                />
        </Container>
    )
}

export default App;