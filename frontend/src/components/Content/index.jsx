import React, {useContext} from 'react';

import { ContentProvider } from '../../contexts/contentContext';

import PopUpMenuUser from '../PopUpMenuUser';
import Tabs from '../Tabs';
import { MenuContext } from '../../contexts/menuContext';

import Clientes from '../MenusContent/Clientes';
import GraficosDashboard from '../MenusContent/GraficosDashboard';
import Representada from '../MenusContent/Representadas';
import CadastroDeProdutos from '../MenusContent/CadastroDeProdutos';
import TabelasDePrecos from '../MenusContent/TabelasDePrecos';
import WorkFlowDeOrcamentos from '../MenusContent/WorkFlowDeOrcamentos';
import CarteiraDePedido from '../MenusContent/CarteiraDePedido';
import EmpresaControladora from '../MenusContent/EmpresaControladora';
import LocaisDeVenda from '../MenusContent/LocaisDeVenda';
import Ofertas from '../MenusContent/Ofertas';
import PoliticasDeComissoes from '../MenusContent/PoliticasDeComissoes';
import ComissoesXDesconto from '../MenusContent/ComissoesXDesconto';
import PrecoXEstrutura from '../MenusContent/PrecoXEstrutura';
import PrecoXPrazo from '../MenusContent/PrecoXPrazo';
import DescontoVolume from '../MenusContent/DescontoVolume';
import DescontoPorTipoDeCliente from '../MenusContent/DescontoPorTipoDeCliente';
import FreteCIF from '../MenusContent/FreteCIF';
import TipoDePedido from '../MenusContent/TipoDePedido';
import CondicoesDePagamento from '../MenusContent/CondicaoDePagamento';
import PrazoDePagamento from '../MenusContent/PrazoDePagamento';
import DescontoComercial from '../MenusContent/DescontoComercial';
import LinhasDeProdutos from '../MenusContent/LinhaDeProduto';
import Margens from '../MenusContent/Margens';
import RegrasDePrecos from '../MenusContent/RegrasDePrecos';
import Mensagens from '../MenusContent/Mensagens';
import RegioesDeVendas from '../MenusContent/RegioesDeVendas';
import WorkFlow from '../MenusContent/WorkFlow';
import PerfilDeAcesso from '../MenusContent/PerfilDeAcesso';
import Usuarios from '../MenusContent/Usuarios';

const Content = () => {

  const {activeTab} = useContext(MenuContext);


  return (
    <div className='content-container'>
      <PopUpMenuUser />
      <Tabs />
      {activeTab === 2? <GraficosDashboard />: <div></div>}
      
      {activeTab === 4? <ContentProvider><Clientes /></ContentProvider>: <div></div>}
      {activeTab === 5? <Representada />: <div></div>}
      {activeTab === 7? <CadastroDeProdutos />: <div></div>}
      {activeTab === 9? <TabelasDePrecos />: <div></div>}
      {activeTab === 11? <WorkFlowDeOrcamentos />: <div></div>}
      {activeTab === 12? <CarteiraDePedido />: <div></div>}
      {activeTab === 14? <EmpresaControladora />: <div></div>}
      {activeTab === 15? <LocaisDeVenda />: <div></div>}
      {activeTab === 17? <Ofertas />: <div></div>}
      {activeTab === 18? <PoliticasDeComissoes />: <div></div>}
      {activeTab === 19? <ComissoesXDesconto />: <div></div>}
      {activeTab === 20? <PrecoXEstrutura />: <div></div>}
      {activeTab === 21? <PrecoXPrazo />: <div></div>}
      {activeTab === 22? <DescontoVolume />: <div></div>}
      {activeTab === 23? <DescontoPorTipoDeCliente />: <div></div>}
      {activeTab === 24? <FreteCIF />: <div></div>}
      {activeTab === 26? <TipoDePedido />: <div></div>}
      {activeTab === 27? <CondicoesDePagamento />: <div></div>}
      {activeTab === 28? <PrazoDePagamento />: <div></div>}
      {activeTab === 29? <DescontoComercial />: <div></div>}
      {activeTab === 30? <LinhasDeProdutos />: <div></div>}
      {activeTab === 31? <Margens />: <div></div>}
      {activeTab === 32? <RegrasDePrecos />: <div></div>}
      {activeTab === 33? <Mensagens />: <div></div>}
      {activeTab === 34? <RegioesDeVendas />: <div></div>}
      {activeTab === 35? <WorkFlow />: <div></div>}
      {activeTab === 37? <PerfilDeAcesso />: <div></div>}
      {activeTab === 38? <Usuarios />: <div></div>}
    </div>
  )
}

export default Content