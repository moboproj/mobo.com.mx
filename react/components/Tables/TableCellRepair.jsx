import React, { Component } from 'react';
import '../../css/tableCellRepair.css';
import '../../css/bootstrap.css';


function TableCellRepair(){
    const bgOrange = {
            padding: "10px 5px", 
            textAlign: "center", 
            background: "#fa7100",
            color: "#fff"
         
    };

return(
  <>
<div className="container">
    <div className="row mb-4">
      <div className="col-xs-12 col-md-12 text-center">                            
              <table className="table table-striped table-hover">
                  <tbody><tr>
                       <td  className="pricing-table-text">
                         <div className="text-center pricing-table-text">
                            <p><b>Tipo de reparación</b></p>
                          </div>
                       </td>
                       <td width="20%">
                       <div className="pricing-table-item text-center">
                           <div style={bgOrange} className="pricing-table-item-head">
                            <p>iPhone 11 pro max</p>
                            <span className="font-weight-bold">Precio</span>
                           </div>
                       </div>
                       </td>
                       <td width="20%">
                         <div className="pricing-table-item">
                             <div className="pricing-table-item-head" style={bgOrange}>
                                <p>iPhone 11 pro</p>
                                <span className="font-weight-bold">Precio</span>
                             </div>                                         
                          </div>
                        </td>
                        <td width="20%">
                           <div className="pricing-table-item">
                                <div className="pricing-table-item-head" style={bgOrange}>
                                     <p>iPhone 11</p>
                                     <span className="font-weight-bold">Precio</span>
                                </div>                                       
                            </div>
                         </td>
                    </tr>
                    <tr className="pricing-table-list">
                      <td>Pantalla</td>
                      <td>$5,999</td>
                      <td>$3,999</td>
                      <td>$2,999</td>
                    </tr>
                    <tr className="pricing-table-list">
                      <td>Batería</td>
                      <td>$1,399</td>
                      <td>$1,199</td>
                      <td>$999</td>
                    </tr>
              </tbody>
          </table>
      </div>
    </div>
    <div className="row mb-4">
        <div className="col-xs-12 col-md-12 text-center">                            
                <table className="table table-hover table-striped">
                    <tbody><tr>
                         <td  className="pricing-table-text">
                           <div className="text-center pricing-table-text">
                              <p><b>Tipo de reparación</b></p>
                            </div>
                         </td>
                         <td width="20%">
                         <div className="pricing-table-item">
                             <div className="pricing-table-item-head" style={bgOrange}>
                              <p>iPhone XS Max</p>
                              <span className="font-weight-bold">Precio</span>
                             </div>
                         </div>
                         </td>
                         <td width="20%">
                           <div className="pricing-table-item">
                               <div className="pricing-table-item-head" style={bgOrange}>
                                  <p>iPhone XS</p>
                                  <span className="font-weight-bold">Precio</span>
                               </div>                                         
                            </div>
                          </td>
                          <td width="20%">
                             <div className="pricing-table-item">
                                  <div className="pricing-table-item-head" style={bgOrange}>
                                       <p>iPhone XR</p>
                                       <span className="font-weight-bold">Precio</span>
                                  </div>                                       
                              </div>
                           </td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Pantalla</td>
                        <td>$4,999</td>
                        <td>$3,999</td>
                        <td>$2,999</td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Batería</td>
                        <td>$999</td>
                        <td>$999</td>
                        <td>$999</td>
                      </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="row mb-4">
        <div className="col-xs-12 col-md-12 text-center">                            
                <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                         <td className="pricing-table-text">
                           <div className="text-center pricing-table-text">
                              <p><b>Tipo de reparación</b></p>
                            </div>
                         </td>
                         <td width="20%">
                         <div className="pricing-table-item">
                             <div className="pricing-table-item-head" style={bgOrange}>
                              <p>iPhone X</p>
                              <span className="font-weight-bold">Precio</span>
                             </div>
                         </div>
                         </td>
                         <td width="20%">
                           <div className="pricing-table-item">
                               <div className="pricing-table-item-head" style={bgOrange}>
                                  <p>iPhone 8 Plus</p>
                                  <span className="font-weight-bold">Precio</span>
                               </div>                                         
                            </div>
                          </td>
                          <td width="20%">
                             <div className="pricing-table-item">
                                  <div className="pricing-table-item-head" style={bgOrange}>
                                       <p>iPhone 8</p>
                                       <span className="font-weight-bold">Precio</span>
                                  </div>                                       
                              </div>
                           </td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Pantalla Negra</td>
                        <td>$4,999</td>
                        <td>$3,999</td>
                        <td>$2,999</td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Pantalla Blanca</td>
                        <td>$4,999</td>
                        <td>$3,999</td>
                        <td>$2,999</td>
                      </tr>

                      <tr className="pricing-table-list">
                        <td>Batería</td>
                        <td>$999</td>
                        <td>$699</td>
                        <td>$999</td>
                      </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="row mb-4">
        <div className="col-xs-12 col-md-12 text-center">                            
                <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                         <td className="pricing-table-text">
                           <div className="text-center pricing-table-text">
                              <p><b>Tipo de reparación</b></p>
                            </div>
                         </td>
                         <td width="20%">
                         <div className="pricing-table-item">
                             <div className="pricing-table-item-head" style={bgOrange}>
                              <p>iPhone 7 Plus</p>
                              <span className="font-weight-bold">Precio</span>
                             </div>
                         </div>
                         </td>
                         <td width="20%">
                           <div className="pricing-table-item">
                               <div className="pricing-table-item-head" style={bgOrange}>
                                  <p>iPhone 7</p>
                                  <span className="font-weight-bold">Precio</span>
                               </div>                                         
                            </div>
                          </td>
                          <td width="20%">
                             <div className="pricing-table-item">
                                  <div className="pricing-table-item-head" style={bgOrange}>
                                       <p>iPhone 6S Plus</p>
                                       <span className="font-weight-bold">Precio</span>
                                  </div>                                       
                              </div>
                           </td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Pantalla Negra</td>
                        <td>$1,799</td>
                        <td>$1,699</td>
                        <td>$1,499</td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Pantalla Blanca</td>
                        <td>$1,799</td>
                        <td>$1,699</td>
                        <td>$1,499</td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Batería</td>
                        <td>$599</td>
                        <td>$599</td>
                        <td>$599</td>
                      </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="row">
        <div className="col-xs-12 col-md-12 text-center">                            
                <table className="table table-hover table-striped">
                    <tbody>
                      <tr>
                         <td className="pricing-table-text">
                           <div className="text-center pricing-table-text">
                              <p><b>Tipo de reparación</b></p>
                            </div>
                         </td>
                         <td width="20%">
                         <div className="pricing-table-item">
                             <div className="pricing-table-item-head" style={bgOrange}>
                              <p>iPhone 6s</p>
                              <span className="font-weight-bold">Precio</span>
                             </div>
                         </div>
                         </td>
                         <td width="20%">
                           <div className="pricing-table-item">
                               <div className="pricing-table-item-head" style={bgOrange}>
                                  <p>iPhone 6 Plus</p>
                                  <span className="font-weight-bold">Precio</span>
                               </div>                                         
                            </div>
                          </td>
                          <td width="20%">
                             <div className="pricing-table-item">
                                  <div className="pricing-table-item-head" style={bgOrange}>
                                       <p>iPhone 6</p>
                                       <span className="font-weight-bold">Precio</span>
                                  </div>                                       
                              </div>
                           </td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Pantalla Negra</td>
                        <td>$1,399</td>
                        <td>$1,299</td>
                        <td>$1,299</td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Pantalla Blanca</td>
                        <td>$1,399</td>
                        <td>$1,299</td>
                        <td>$1,299</td>
                      </tr>
                      <tr className="pricing-table-list">
                        <td>Batería</td>
                        <td>$599</td>
                        <td>$599</td>
                        <td>$599</td>
                      </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</>
    );
}

export default TableCellRepair