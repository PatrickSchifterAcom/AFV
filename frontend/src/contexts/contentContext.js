import { useState, createContext } from 'react';
import { dadosClientei } from '../components/MenusContent/Clientes/initObjs';

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {

    const [openContent, setOpenContent] = useState(false);
    const [dadosCliente, setDadosCliente] = useState(dadosClientei);

    return (
        <ContentContext.Provider value={{ setDadosCliente, setOpenContent, openContent, dadosCliente }}>
            {children}
        </ContentContext.Provider>
    )
}
