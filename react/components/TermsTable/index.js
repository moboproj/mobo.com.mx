import React, { memo, useState, useEffect } from 'react'
import styles from './styles'

const TermsTable= () => {

    const [isTerms,setIsTerms]=useState(false)

    useEffect(()=>{
        const url=window?.location?.pathname;
        console.log('Términos: ',url.indexOf('terminos-y-condiciones')!=-1);
        setIsTerms(url.toLowerCase()=='/terminos-y-condiciones' ? true : false);
    },[])

    if(!isTerms)
        return <></>

    return <>
        <div className={styles.tableContainer}>
            <table>
                <tbody>
                    <tr>
                        <th>Marca</th>
                        <th>Categoría</th>
                        <th>Motivo</th>
                        <th>Tiempo de Garantía por defecto de Fabrica</th>
                        <th>Garantía Cambios Físicos</th>
                        <th>Requisitos</th>
                    </tr>

                    <tr>
                        <td rowspan="2">Reacondicionados</td>
                        <td rowspan="2">iPhone y Applewatch</td>
                        <td>Defecto de fábrica</td>
                        <td>90 días</td>
                        <td>A través de Contact Center, compras en tienda y compras en línea</td>
                        <td>- Comprobante de Compra (orden de compra para compras online) </td>
                    </tr>
                    <tr>
                        <td>Garantia de Satisfacción</td>
                        <td>30 días</td>
                        <td>Aplica únicamente en compras en línea.</td>
                        <td>- Comprobante de Compra. <br/> - Retorno del producto con empaque original </td>
                    </tr>


                    <tr>
                        <td rowspan="2">Reacondicionados</td>
                        <td rowspan="2">iPad, Macbook y Chromebook</td>
                        <td>Defecto de fábrica</td>
                        <td>90 días</td>
                        <td>Contact Center</td>
                        <td>- Comprobante de Compra <br/>- Retorno del Producto con empaque original (empaque opcional)</td>
                    </tr>
                    <tr>
                        <td>Garantia de Satisfacción</td>
                        <td>30 días</td>
                        <td>Aplica únicamente en compras en línea.</td>
                        <td>- Comprobante de Compra.<br/>- Retorno del producto con empaque original </td>
                    </tr>


                    <tr>
                        <td rowspan="2">Reacondicionados</td>
                        <td rowspan="2">iWatch</td>
                        <td>Defecto de fábrica</td>
                        <td>90 días</td>
                        <td>Con Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Retorno  del producto con empaque original</td>
                    </tr>
                    <tr>
                        <td>Garantia de Satisfacción</td>
                        <td>30 días</td>
                        <td>Aplica únicamente en compras en línea.</td>
                        <td>- Comprobante de Compra.<br/>- Retorno del producto con empaque original </td>
                    </tr>




                    <tr>
                        <td rowspan="2">Mobo</td>
                        <td>Accesorios</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Con Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Retorno  del producto con empaque original</td>
                    </tr>
                    <tr>
                        <td>Mica Protectora, Protector de Pantalla y Vidrio Protector</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra (orden de compra para compras online) <br/>- Retorno del producto con empaque original </td>
                    </tr>


                    <tr>
                        <td>SCOSCHE</td>
                        <td>Accesorios</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Con Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Retorno  del producto con empaque original</td>
                    </tr>

                    <tr>
                        <td>APPLE</td>
                        <td>Accesorios</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año Directo con APPLE.</td>
                        <td>Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Directo con los servicios autorizados Apple consultar la pagina <a href="https://support.apple.com/es-mx">https://support.apple.com/es-mx</a> o <a href="https://support.apple.com/es-mx/repair">https://support.apple.com/es-mx/repair</a></td>
                    </tr>


                    <tr>
                        <td>BEATS</td>
                        <td>Accesorios</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año Directo con APPLE.</td>
                        <td>Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Directo con los servicios autorizados Apple consultar la pagina <a href="https://support.apple.com/es-mx">https://support.apple.com/es-mx</a> o <a href="https://support.apple.com/es-mx/repair">https://support.apple.com/es-mx/repair</a></td>
                    </tr>


                    <tr>
                        <td>BELKIN</td>
                        <td>Accesorios</td>
                        <td>Defecto de fábrica</td>
                        <td>2 años</td>
                        <td>Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Retorno del Producto con empaque original (empaque opcional)</td>
                    </tr>


                    


                    <tr>
                        <td rowspan="2">ZAGG</td>
                        <td rowSpan="2">Micas protectoras/ Accesorios</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Retorno  del producto con empaque original (empaque opcional)</td>
                    </tr>
                    <tr>
                        <td>Defecto de fábrica</td>
                        <td>De Por vida Directo con ZAGG.</td>
                        <td>Después de un Año  directo con ZAGG</td>
                        <td>- El clientes tiene que registrar su producto para reclamar  la garantía en la siguiente página  www.zagg.com
                        <br/>- El cliente tendrá que enviar el productos por su cuenta por paquetería a la dirección que marca la página Web.
                        <br/>- El cliente tendrá que realizar un pago de USD $5.99 por la Web , esto es para cubrir parte del envió de USA - MX.</td>
                    </tr>



                    <tr>
                        <td rowspan="7">Motorola</td>
                        <td>Combos (equipo accesorio)</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año Directo con Motorola para el equipo y 1 año directo con Mobo para accesorios</td>
                        <td>Para el equipo no aplica. Para el accesorio con Contact Center.</td>
                        <td>- Comprobante de Compra <br/>- Retorno  del producto con empaque original (empaque opcional)</td>
                    </tr>
                    <tr>
                        <td>Combos (equipo accesorio)</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año Directo con Motorola.</td>
                        <td>No Aplica.</td>
                        <td>- Comprobante de Compra .
                        <br/>- El cliente tiene que llamar al Tel: 018000210000 de Atención a Clientes de Motorola.
                        <br/>- Retorno del Productocon empaque original y  accesorios completos.</td>
                    </tr>
                    <tr>
                        <td>Accesorios</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Con Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Retorno  del producto con empaque original (empaque opcional)</td>
                    </tr>
                    <tr>
                        <td>Moto Mods para la Venta</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Lo aplica la Tienda en donde se realizó la compra o con Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Retorno  del producto con empaque original (empaque opcional)</td>
                    </tr>
                    <tr>
                        <td>Moto Mods que viene Incluido con el Equipo</td>
                        <td>Defecto de fábrica</td>
                        <td>90 días</td>
                        <td>No aplica</td>
                        <td>- Comprobante de Compra <br/>- El cliente tiene que llamar al Tel: 018000210000 de Atención a Clientes de Motorola.<br/>- Retorno del Productocon empaque original y  accesorios completos.</td>
                    </tr>
                    <tr>
                        <td>Dispositivos móviles</td>
                        <td>Defecto de fábrica.<b>No aplica devolución</b></td>
                        <td>1 año Directo con Motorola.</td>
                        <td>No aplica</td>
                        <td>- Orden de compra <br/>- El cliente tiene que llamar al Tel: 018000210000 de Atención a Clientes de Motorola.<br/>- Empaque original y  accesorios completos.</td>
                    </tr>
                    <tr>
                        <td>Accesorios de Dispositivos móviles</td>
                        <td>Defecto de fábrica.</td>
                        <td>1 año Directo con Motorola.</td>
                        <td>No aplica</td>
                        <td>- Orden de compra del Dispositivo Movil.<br/>- El cliente tiene que llamar al Tel: 018000210000 de Atención a Clientes de Motorola.</td>
                    </tr>




                    <tr>
                        <td rowspan="3">Samsung</td>
                        <td>Accesorios</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra <br/>- Retorno del producto con empaque original (empaque opcional)</td>
                    </tr>
                    <tr>
                        <td>Dispositivos móviles</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Directo con Samsung</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Contact Center de Samsung</td>
                    </tr>
                    <tr>
                        <td>Accesorios de Dispositivos móviles</td>
                        <td>Defecto de fábrica</td>
                        <td>1 año</td>
                        <td>Directo con Samsung</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Contact Center de Samsung</td>
                    </tr>
                    



                    <tr>
                        <td rowspan="2">Lenovo</td>
                        <td>Dispositivos móviles</td>
                        <td>Defecto de fábrica.<b>No aplica devolución</b></td>
                        <td>1 año Directo con Lenovo</td>
                        <td>No aplica</td>
                        <td>- Orden de compra.
                            <br/>- El cliente tiene que llamar al Tel: 018002833192 de Atención a Clientes o consultar la pagina <a href="www.lenovo.com/mx/es/" target="_blank">www.lenovo.com/mx/es/</a>
                            <br/>- Empaque original y  accesorios completos.
                        </td>
                    </tr>
                    <tr>
                        <td>Accesorios de Dispositivos móviles</td>
                        <td>Defecto de fábrica.</td>
                        <td>1 año Directo con Lenovo</td>
                        <td>No aplica</td>
                        <td>- Orden de compra del Dispositivo móvil
                            <br/>- El cliente tiene que llamar al Tel: 018002833192 de Atención a Clientes o consultar la pagina <a href="www.lenovo.com/mx/es/" target="_blank">www.lenovo.com/mx/es/</a>
                        </td>
                    </tr>



                    <tr>
                        <td rowspan="2">Xiaomi</td>
                        <td>Dispositivos móviles</td>
                        <td>Defecto de fábrica.<b>No aplica devolución</b></td>
                        <td>1 año</td>
                        <td>Con Contact Center</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Contact Center.</td>
                    </tr>
                    <tr>
                        <td>Accesorios de Dispositivos móviles</td>
                        <td>Defecto de fábrica.</td>
                        <td>1 año</td>
                        <td>Con Contact Center</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Contact Center.</td>
                    </tr>



                    <tr>
                        <td rowspan="2">Nokia</td>
                        <td>Dispositivos móviles</td>
                        <td>Defecto de fábrica.</td>
                        <td>1 año directo con Nokia</td>
                        <td>No aplica</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Tel: 018006442762 del Centro de Servicio o consultar la pagina <a href='https://www.garma.com.mx/' target='_blank'>https://www.garma.com.mx/</a>
                            <br/>- Empaque original y  accesorios completos.</td>
                    </tr>
                    <tr>
                        <td>Accesorios de Dispositivos móviles</td>
                        <td>Defecto de fábrica.</td>
                        <td>1 año directo con Nokia</td>
                        <td>No aplica</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Tel: 018006442762 del Centro de Servicio o consultar la pagina <a href='https://www.garma.com.mx/' target='_blank'>https://www.garma.com.mx/</a>
                            <br/>- Empaque original y  accesorios completos.</td>
                    </tr>


                    <tr>
                        <td rowspan="2">Mobo</td>
                        <td>Dispositivos móviles</td>
                        <td>Defecto de fábrica.</td>
                        <td>1 año</td>
                        <td>Con Contact Center</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Contact Center.</td>
                    </tr>
                    <tr>
                        <td>Accesorios de Dispositivos móviles</td>
                        <td>Defecto de fábrica.</td>
                        <td>1 año</td>
                        <td>Con Contact Center</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Contact Center.</td>
                    </tr>


                    <tr>
                        <td rowspan="2">Reacondicionados IPhone y Samsung</td>
                        <td>Dispositivos móviles</td>
                        <td>Fallas Técnicas</td>
                        <td>90 días</td>
                        <td>Con Contact Center</td>
                        <td>- Orden de compra.<br/>- El cliente tiene que llamar al Contact Center.</td>
                    </tr>
                    <tr>
                        <td>Accesorios de Dispositivos móviles</td>
                        <td>Defecto de fábrica.</td>
                        <td>90 días</td>
                        <td>Lo aplica la Tienda en donde se realizó la compra o con Contact Center por compras en linea.</td>
                        <td>- Comprobante de compra.<br/>- Retorno del Productocon empaque original (empaque opcional)</td>
                    </tr>





                    <tr>
                        <td rowspan="4">AT&T-Unefon</td>
                        <td rowSpan="2">SIM Card </td>
                        <td>Problemas Fisico</td>
                        <td>1 día</td>
                        <td>Lo aplica la Tienda en donde se realizó la compra o con Contact Center por compras en linea.</td>
                        <td>- Comprobante de compra.<br/>- Retorno del Productocon empaque original (empaque opcional) y que la SIM muestre algun daño fisico</td>
                    </tr>
                    <tr>
                        <td>Problema de activacion.</td>
                        <td>Desde el momento de la compra.</td>
                        <td>Centro de Atención a Clientes de AT&T.</td>
                        <td>- El cliente tiene marcar al 018002009333 o 018001010288 desde un telefono AT&T *611 sin costo.</td>
                    </tr>
                    <tr>
                        <td>Dispositivos móviles Samsung Grand Prime Plus y J7 Neo</td>
                        <td>Defecto de fabrica.</td>
                        <td>1 año</td>
                        <td>Centro de Atención a Clientes de AT&T.</td>
                        <td>- El cliente tiene marcar al 018002009333 o 018001010288 desde un telefono AT&T *611 sin costo.<br/>- Acudir al centro de servicio con su Orden de compra y equipo.</td>
                    </tr>
                    <tr>
                        <td>Dispositivos móviles Hisense</td>
                        <td>Defecto de fabrica.</td>
                        <td>1 año</td>
                        <td>Centro de Atención a Clientes de AT&T.</td>
                        <td>- El cliente tiene marcar al 018002009333 o 018001010288 desde un telefono AT&T *611 sin costo.<br/>- Acudir al centro de servicio con su Orden de compra y equipo.</td>
                    </tr>


                    <tr>
                        <td>Telcel</td>
                        <td>Tiempo Aire</td>
                        <td></td>
                        <td></td>
                        <td>No aplica</td>
                        <td>No aplica</td>
                    </tr>





                    <tr>
                        <td rowspan="5">Tarjetas de prepago</td>
                        <td>GOOGLE PLAY</td>
                        <td>Problema de activacion. </td>
                        <td>No aplica</td>
                        <td>No aplica</td>
                        <td>- Se activan al momento de la Venta.<br/>- Para problemas de activación será necesario el Orden de compra y se tendrá que revisar directo con los servicios autorizados de Google Play consultar la página play.google.com/canjear.</td>
                    </tr>
                    <tr>
                        <td>ITUNES</td>
                        <td>Problema de activacion. </td>
                        <td>No aplica</td>
                        <td>No aplica</td>
                        <td>- Se activan al momento de la Venta.<br/>- Para problemas de activación será necesario el Orden de compra y se tendrá que revisar directo con los servicios autorizados de Apple consultar la página https://support.apple.com/es-mx.</td>
                    </tr>
                    <tr>
                        <td>NETFLIX</td>
                        <td>Problema de activacion. </td>
                        <td>No aplica</td>
                        <td>No aplica</td>
                        <td>- Se activan al momento de la Venta.<br/>- Para problemas de activación será necesario el Orden de compra y se tendrá que revisar directo con los servicios de Netflix en la página  wwww.netflix.com.mx/terminostarjeta</td>
                    </tr>
                    <tr>
                        <td>XBOX</td>
                        <td>Problema de activacion.</td>
                        <td>No aplica</td>
                        <td>No aplica</td>
                        <td>- Se activan al momento de la Venta.<br/>- Para problemas de activación será necesario el Orden de compra y se tendrá que revisar directo con los servicios de Xbox en la página  xbox.com/howtoredeem-console</td>
                    </tr>
                    <tr>
                        <td>PLAYSTATION</td>
                        <td>Problema de activacion. </td>
                        <td>No aplica</td>
                        <td>No aplica</td>
                        <td>- Se activan al momento de la Venta.<br/>- Para problemas de activación será necesario el Orden de compra y se tendrá que revisar directo con los servicios de Xbox en la página  xbox.com/howtoredeem-console</td>
                    </tr>


                    <tr>
                        <td rowspan="3">Huawei</td>
                        <td>Accesorios y Wearables (Smart Watch y Pulsera inteligente )</td>
                        <td>Defecto de fabrica.</td>
                        <td>15 días</td>
                        <td>Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra.<br/>- Retorno del Producto con empaque original (empaque opcional)</td>
                    </tr>
                    <tr>
                        <td>Equipos electronicos (Smartphone, Tablets Lap Tops)</td>
                        <td>Defecto de fabrica.</td>
                        <td>15 días</td>
                        <td>Centro de atencion a clientes de Huawei.</td>
                        <td>- El cliente tiene que llamar al Tel: 01 (800) 1482934 del Centro de atencion a clientes de Huawei o consultar la pagina <a href='https://consumer.huawei.com/mx/support/warranty-policy/' target='_blank'>https://consumer.huawei.com/mx/support/warranty-policy/</a>
                            <br/>- Retorno del Producto con empaque original (empaque opcional)
                            <br/>- Ticket de compra.
                            <br/> -Empaque original y  accesorios completos.
                        </td>
                    </tr>
                    <tr>
                        <td>Accesorios de Dispositivos móviles.</td>
                        <td>Defecto de fabrica.</td>
                        <td>15 días</td>
                        <td>Contact Center por compras en linea.</td>
                        <td>- Comprobante de Compra.<br/>- Retorno del Producto con empaque original (empaque opcional)</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </>

}

export default TermsTable