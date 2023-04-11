import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from '../components/pages/Login'
import Main from '../components/pages/Main'

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element= {<Login />} />
                <Route exact path='/main' element= {<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;