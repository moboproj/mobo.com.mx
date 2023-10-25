import React, { Component } from 'react';
import '../../css/bootstrap.css'

function TableTerminosDevoluciones(){
  const estilo = {
    with: "12.25%",
    height: "93"
  }
   const rowSpan = 2;

    return(
      
<table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th style={estilo}>Marca</th>
            <th style={estilo}>Categoría</th>
            <th style={estilo}>Tiempo de Devoluciones o cambio Garantía 365 Por satisfacción</th>
            <th style={estilo}>Requisitos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-center'  style={estilo}>MOBO</td>
            <td>Accesorios</td>
            <td>1 año</td>
            <td>- Comprobante de Compra (orden de compra para compras online y ticket de compra para compras en tiendas)<br/> - Devolución del producto con empaque original.</td>
          </tr>
          <tr>
            <td>Mica Protectora, Protector de Pantalla y Vidrio Protector</td>
            <td>No Aplica</td>
            <td></td>
          </tr>     
    </tbody>
</table> 

    );
}

export default TableTerminosDevoluciones;