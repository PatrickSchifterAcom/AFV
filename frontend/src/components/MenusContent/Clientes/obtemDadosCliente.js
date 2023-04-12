
export async function obtemDadosCliente(codERP, cpfCNPJ, setDadosCliente, setOpenContent, setAlert, openModal) {
    try {
      const token = localStorage.getItem('token');

      if ((codERP !== null && codERP !== undefined) || (cpfCNPJ !== null && cpfCNPJ !== undefined)) {

        fetch('http://localhost:3030/cliente', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            coderp: codERP,
            cpfcnpj: cpfCNPJ
          })
        })
          .then(response => response.json())
          .then((data) => {
            if (data.sucess) {
              const dataR = data.data[0]
              setDadosCliente(dataR);
              setOpenContent(true);
            } else {
              setAlert(data.info);
              openModal();
            }
          })
      }
    } catch (error) {
      console.error(error);
    }
  }