import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Desplegable = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={styles.container}>
      <div style={styles.headerWrapper} onClick={toggleDropdown} tabIndex={0}>
        <div style={styles.headerContent} tabIndex={-1}>
          {/* Aplicar estilo para negritas en el título */}
          <span style={styles.title}>{title}</span>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} style={styles.icon} />
        </div>
      </div>
      {isOpen && (
        <div style={styles.content}>
          {/* Utilizar dangerouslySetInnerHTML para insertar contenido HTML */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

export default function DesplegableOlimp() {
  return (
    <div style={styles.wrapper}>
      <h3>Consulta más información</h3>
      {/* Ejemplos de Desplegable con contenido formateado */}
      <Desplegable
        title="¿Cómo hago válida la promoción?"
        content="
1.  Recuerda que la campaña Haz Historia con Mobo solo aplica para nuestras tiendas Físicas Mobo shop, no participan nuestro sitio web ni tiendas de mayoreo.<br><br>
2.	Haz tu compra mínimo 2 horas antes de la competencia en la que algún mexicano gane medalla Olímpica. Hora de Ciudad de México.<br><br>
3.	Solicita a tu vendedor el <b>ticket de compra físico</b> de la compra.<br><br>
4.	El vendedor deberá capturar tu nombre completo en sistema.<br><br>
5.	Tu reembolso se realizará en efectivo independientemente de tu forma de pago.<br><br>
6.	Fecha de redención del cupón del 14 al 21 de agosto.<br><br>
7.	Solo podrás solicitar tu reembolso en la tienda donde hiciste tu compra.<br><br>
8.	Deberás presentar una identificación oficial vigente.<br><br>
9.	Deberás presentar el ticket de compra físico original <b>(no reimpreso, no digital y no escaneado).</b><br><br>
"
      />
      <Desplegable
        title="¿Qué pasa si compré en una tienda Mobo shop ubicada en un Aeropuerto?"
        content="●	Solo en este caso, podrás acudir a tu tienda Mobo shop más cercana para realizar el canje."
      />
      <Desplegable
        title="Por favor consulta todos los términos y condiciones:"
        content="<br><b>Legales:</b> <br><br><br><br>

Del 26 al 28 de julio de 2024 I Hasta 33% de descuento en productos seleccionados<br><br><br><br>

●	Vigencia de la promoción del 26 al 28 de julio de 2024. <br><br>
●	No acumulable con otras promociones.<br><br>
●	Promoción válida en modelos seleccionados.<br><br>
●	Precios y promociones sujetos a cambios sin previo aviso.<br><br>
●	Descuentos aplicables hasta agotar existencias <br><br>
●	Consulta los códigos participantes en el mostrador. <br><br>
●	Aviso de privacidad <i>www.mobo.com.mx.</i><br><br><br><br><br><br>

Del 02 al 04 de agosto de 2024 I Hasta 33% de descuento en productos seleccionados<br><br><br><br>

●	Vigencia de la promoción del 02 al 04 de agosto de 2024. <br><br>
●	No acumulable con otras promociones.<br><br>
●	Promoción válida en modelos seleccionados.<br><br>
●	Precios y promociones sujetos a cambios sin previo aviso.<br><br>
●	Descuentos aplicables hasta agotar existencias.<br><br>
●	Consulta los códigos participantes en el mostrador. <br><br>
●	Aviso de privacidad <i>www.mobo.com.mx.</i><br><br><br><br>

Del 09 al 11 de agosto de 2024 I Hasta 33% de descuento en productos seleccionados<br><br><br><br>

●	Vigencia de la promoción del 09 al 11 de agosto de 2024. <br><br>
●	No acumulable con otras promociones. <br><br>
●	Promoción válida en modelos seleccionados.<br><br>
●	Precios y promociones sujetos a cambios sin previo aviso.<br><br>
●	Descuentos aplicables hasta agotar existencias.<br><br>
●	Consulta los códigos participantes en el mostrador. <br><br>
●	Aviso de privacidad <i>www.mobo.com.mx.</i><br><br><br><br>


Compra un SMARTWATCH MOBO KNOCK  y si México gana alguna medalla olímpica del 26 al 30 de julio de 2024  te reembolsamos el monto pagado por el reloj.<br><br><br><br>

Válido en compras del 26 al 30 de julio del producto SMARTWATCH KNOCK y si México gana alguna medalla olímpica te reembolsamos el importe pagado por el SMARTWATCH KNOCK.<br><br><br><br>

<b>Términos y Condiciones para la redención:</b><br><br><br><br>

●	Fecha de redención del cupón del 14 al 21 de agosto.<br><br>
●	Para redimir se necesita traer ticket original impreso, no aplica en tickets reimpresos Se deberá presentar Identificación oficial para el canje (INE, Pasaporte, Cédula profesional, Licencia de Manejo).<br><br>
●	Aplica solo por un artículo promocional por persona, promoción no acumulable e intransferible. <br><br>
●	Aplica en compras hechas mínimo 2 horas antes de las competencias ganadoras. <br><br>
●	El reembolso se hará en efectivo independientemente de la forma de pago original. <br><br>
●	No se aceptan cambios ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, Ni después de redimido el premio, Sólo se aceptan devoluciones por falla de fábrica.<br><br>
●	Si México gana alguna medalla olímpica en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia. <br><br>
●	Solo se puede redimir la promoción en la tienda donde se realizó la compra. Sólo en tiendas de aeropuerto aplica cambio en otra sucursal.<br><br><br><br>

<b>Requisitos:</b><br><br><br><br>

●	Al momento de la compra se deberá capturar el nombre completo del cliente.<br><br>
●	Presentar identificación oficial vigente (que coincida con el nombre registrado).<br><br>
●	Ticket de compra original (No reimpreso, No digital o Escaneado) <br><br>
●	Solo en caso de compras realizadas en sucursales Mobo shop ubicadas en Aeropuertos, el canje podrá ser en otra sucursal. <br><br><br><br>

<b>Excepciones.</b><br><br><br><br>

●	No se aceptan cambios, ni devoluciones.<br><br>
●	Válida hasta agotar existencias.<br><br>
●	Únicamente aplicable a un artículo SMARTWATCH MOBO KNOCK participante por persona y ticket.<br><br>
●	Promoción no acumulable.<br><br>

Compra un SMARTWATCH MOBO LINK y si México gana alguna medalla olímpica de 31 de julio al 5 de agosto  te reembolsamos el monto pagado por el reloj.<br><br><br><br>

Válido en compras del 31 de julio al 5 de agosto del 2024 del producto SMARTWATCH MOBO LINK y si México gana alguna medalla olímpica te reembolsamos el importe pagado por el SMARTWATCH MOBO LINK.<br><br><br><br>

●	Fecha de redención del cupón del 14 al 21 de agosto.
●	Para redimir se necesita traer ticket original impreso, no aplica en tickets reimpresos Se deberá presentar Identificación oficial para el canje. (INE, Pasaporte, Cédula profesional, Licencia de Manejo).<br><br><br><br>
●	Aplica solo por un artículo promocional por persona, promoción no acumulable e intransferible. <br><br>
●	Aplica en compras hechas mínimo 2 horas antes de las competencias ganadoras. <br><br>
●	El reembolso se hará en efectivo independientemente de la forma de pago original. <br><br>
●	No se aceptan cambios ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, Ni después de redimido el premio, Sólo se aceptan devoluciones por falla de fábrica.<br><br>
●	Si México gana alguna medalla olímpica en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia. <br><br>
●	Solo se puede redimir la promoción en la tienda donde se realizó la compra. Sólo en tiendas de aeropuerto aplica cambio en otra sucursal.<br><br>
●	


<b>Requisitos:</b><br><br><br><br>

●	Al momento de la compra se deberá capturar el nombre completo del cliente.<br><br>
●	Presentar identificación oficial vigente (que coincida con el nombre registrado).<br><br>
●	Ticket de compra original (No reimpreso, No digital o Escaneado) <br><br>
●	Solo en caso de compras realizadas en sucursales Mobo shop ubicadas en Aeropuertos, el canje podrá ser en otra sucursal. <br><br><br><br>

<b>Excepciones.</b><br><br><br><br>

●	No se aceptan cambios, ni devoluciones.<br><br>
●	Válida hasta agotar existencias.<br><br>
●	Únicamente aplicable a un artículo SMARTWATCH MOBO LINK participante por persona y ticket.<br><br><br><br>
●	Promoción no acumulable<br><br><br><br>

Compra unos AUDIFONOS MOBO HOWE  y si México gana alguna medalla olímpica del 6 al 11 de agosto de 2024  te reembolsamos  el monto pagado por los audífonos Howe.<br><br><br><br>

Válido en compras del 31 de julio al 5 de agosto del 2024 del producto AUDIFONOS MOBO HOWE BLANCO o NEGRO   y si México gana alguna medalla olímpica te reembolsamos el monto de tu compra.<br><br><br><br>

<b>Términos y Condiciones para la redención:</b><br><br><br><br>

●	Fecha de redención del cupón del 14 al 21 de agosto.<br><br>
●	Para redimir se necesita traer ticket original impreso, no aplica en tickets reimpresos Se deberá presentar Identificación oficial para el canje. (INE, Pasaporte, Cédula profesional, Licencia de Manejo).<br><br>
●	Aplica solo por un artículo promocional por persona, promoción no acumulable e intransferible. <br><br>
●	Aplica en compras hechas mínimo 2 horas antes de las competencias ganadoras. <br><br>
●	El reembolso se hará en efectivo independientemente de la forma de pago original. <br><br>
●	No se aceptan cambios ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, Ni después de redimido el premio, Sólo se aceptan devoluciones por falla de fábrica.<br><br>
●	Si México gana alguna medalla olímpica en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia. <br><br>
●	Solo se puede redimir la promoción en la tienda donde se realizó la compra. Sólo en tiendas de aeropuerto aplica cambio en otra sucursal.<br><br><br><br>

<b>Requisitos:</b><br><br><br><br>

●	Al momento de la compra se deberá capturar el nombre completo del cliente.<br><br>
●	Presentar identificación oficial vigente (que coincida con el nombre registrado).<br><br>
●	Ticket de compra original (No reimpreso, No digital o Escaneado) <br><br>
●	Solo en caso de compras realizadas en sucursales Mobo shop ubicadas en Aeropuertos, el canje podrá ser en otra sucursal. <br><br><br><br>

<b>Excepciones.</b><br><br><br><br>

●	No se aceptan cambios, ni devoluciones.<br><br>
●	Válida hasta agotar existencias.<br><br>
●	Únicamente aplicable a un artículo AUDÍFONOS MOBO HOWE participante por persona y ticket.<br><br>
●	Promoción no acumulable<br><br><br><br>


Compra un IPHONE SE y si México gana Oro Olímpico en cualquier competencia del 26 de julio al 11 de agosto, te reembolsamos el monto pagado por el Iphone SE.<br><br><br><br>

Válido en compras del 26 de julio al 11 de agosto del 2024 del producto IPHONE SE 64 gb y si México gana una medalla olímpica de oro te reembolsamos el monto de tu compra.<br><br><br><br>

<b>Términos y Condiciones para la redención:</b><br><br><br><br>

●	Fecha de redención del cupón del 14 al 21 de agosto.<br><br>
●	Para redimir se necesita traer ticket original impreso, no aplica en tickets reimpresos Se deberá presentar Identificación oficial para el canje. (INE, Pasaporte, Cédula profesional, Licencia de Manejo).<br><br>
●	Aplica solo por un artículo promocional por persona, promoción no acumulable e intransferible. <br><br>
●	Aplica en compras hechas mínimo 2 horas antes de las competencias ganadoras. <br><br>
●	El reembolso se hará en efectivo independientemente de la forma de pago original. <br><br>
●	No se aceptan cambio ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, Ni después de redimido el premio, Sólo se aceptan devoluciones por falla de fábrica.<br><br>
●	Si México gana oro en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia. <br><br>
●	Solo se puede redimir la promoción en la tienda donde se realizó la compra. Sólo en tiendas de aeropuerto aplica cambio en otra sucursal.<br><br><br><br>

<b>Requisitos:</b><br><br><br><br>

●	Al momento de la compra se deberá capturar el nombre completo del cliente.<br><br>
●	Presentar identificación oficial vigente (que coincida con el nombre registrado).<br><br>
●	Ticket de compra original (No reimpreso, No digital o Escaneado) <br><br>
●	Solo en caso de compras realizadas en sucursales Mobo shop ubicadas en Aeropuertos, el canje podrá ser en otra sucursal. <br><br><br><br>

<b>Excepciones.</b><br><br><br><br>

●	No se aceptan cambios, ni devoluciones.<br><br>
●	Válida hasta agotar existencias.<br><br>
●	Únicamente aplicable a un artículo IPHONE SE2 64 GB REACONDICIONADO MOBO por persona y ticket.<br><br>
●	Promoción no acumulable.<br><br>
"
      />
    </div>
  );
}

const styles = {
  wrapper: {
    marginTop: '15px',
    width: '100%',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  container: {
    width: '100%',
    marginBottom: '10px',
  },
  headerWrapper: {
    cursor: 'pointer',
    outline: 'none',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid black',
    outline: 'none',
  },
  title: {
    fontWeight: 'bold', // Estilo para negritas
  },
  icon: {
    marginRight: '15px',
  },
  content: {
    padding: '10px 0',
  },
};
