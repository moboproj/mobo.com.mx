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
2.	Haz tu compra mínimo 2 horas antes de las competencias ganadoras. <br><br>
3.  Si México gana alguna medalla olímpica en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia.<br><br>
4.	Solicita a tu vendedor el <b>ticket de compra físico</b> de la compra.<br><br>
5.	El vendedor deberá capturar tu nombre completo en sistema.<br><br>
6.	Tu reembolso se realizará en efectivo independientemente de tu forma de pago. En algunos casos puede aplicar reembolso por tarjeta electrónica sin previo aviso.<br><br>
7.	Fecha de redención del cupón del 14 al 21 de agosto.<br><br>
8.	Solo podrás solicitar tu reembolso en la tienda donde hiciste tu compra.<br><br>
9.	Deberás presentar una identificación oficial vigente.<br><br>
10.	Deberás presentar el ticket de compra físico original (no reimpreso, no digital y no escaneado).</b><br><br>
11.	No se aceptan cambios ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, ni después de redimido el premio, solo se aceptan devoluciones por falla de fábrica.</b><br><br>
"
      />
      <Desplegable
        title="¿Qué pasa si compré en una tienda Mobo shop ubicada en un Aeropuerto?"
        content="●	Si la compra fue realizada en alguna tienda de Aeropuerto, para poder aplicar el reembolso deberá comunicarse al: <br>
Centro de Atención a Clientes Moboshop al (55) 9302 0244 donde se le darán indicaciones para su reembolso. Aviso de privacidad en www.mobo.com.mx.<br><br><br>"
      />
      <Desplegable
        title="Por favor consulta todos los términos y condiciones:"
        content="<br><b>Legales:</b> <br><br><br><br>

Del 26 al 28 de julio de 2024 I Hasta 33% de descuento en productos seleccionados.<br><br><br><br>

Hasta 33% en toda la tienda. Vigencia del 26 al 28 de julio del 2024. Promoción válida en modelos seleccionados. Precios y promociones sujetos a cambios sin previo aviso. No acumulable con otras promociones. Sujeto a disponibilidad en tiendas. Consulta códigos participantes. Aviso de privacidad en www.mobo.com.mx.<br><br><br>


Del 02 al 04 de agosto de 2024 I Hasta 33% de descuento en productos seleccionados.<br><br><br><br>

Hasta 33% en toda la tienda. Vigencia del 2 al 4 de agosto del 2024. Promoción válida en modelos seleccionados. Precios y promociones sujetos a cambios sin previo aviso. No acumulable con otras promociones. Sujeto a disponibilidad en tiendas. Consulta códigos participantes. Aviso de privacidad en www.mobo.com.mx.<br><br><br>


Del 09 al 11 de agosto de 2024 I Hasta 33% de descuento en productos seleccionados.<br><br><br><br>

Hasta 33% en toda la tienda. Vigencia del 9 al 11 de agosto del 2024. Promoción válida en modelos seleccionados. Precios y promociones sujetos a cambios sin previo aviso. No acumulable con otras promociones. Sujeto a disponibilidad en tiendas. Consulta códigos participantes. Aviso de privacidad en www.mobo.com.mx.<br><br><br>

<b>Del 26 al 30 de julio 2024</b> <br><br><br><br>
<b>Compra un SMARTWATCH MOBO KNOCK  y si México gana alguna medalla olímpica del 26 al 30 de julio de 2024  te reembolsamos el monto pagado por el SMARTWATCH MOBO KNOCK.</b><br><br><br><br>

Válido en compras del 26 al 30 de julio del producto SMARTWATCH KNOCK y si México gana alguna medalla olímpica te reembolsamos el importe pagado por el SMARTWATCH KNOCK.<br><br><br><br>


●	Fecha de redención del cupón del 14 al 21 de agosto.<br><br>
●	Para redimir se necesita traer ticket original impreso, no aplica en tickets reimpresos, se deberá presentar identificación oficial para el canje (INE, Pasaporte, Cédula profesional, Licencia de Manejo).<br><br>
●	Aplica solo por un artículo promocional por persona, promoción no acumulable e intransferible.<br><br>
●	Aplica en compras hechas mínimo 2 horas antes de las competencias ganadoras.<br><br>
●	El reembolso se hará en efectivo independientemente de la forma de pago original. En algunos casos puede aplicar reembolso por tarjeta electrónica sin previo aviso.<br><br>
●	No se aceptan cambios ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, ni después de redimido el premio, solo se aceptan devoluciones por falla de fábrica.<br><br>
●	Si México gana alguna medalla olímpica en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia.<br><br>
●	Solo se puede redimir la promoción en la tienda donde se realizó la compra.<br><br>
● Si la compra fue realizada en alguna tienda de Aeropuerto, para poder aplicar el reembolso deberá comunicarse al: Centro de Atención a Clientes Moboshop al (55) 9302 0244 donde se le darán indicaciones para su reembolso. Aviso de privacidad en www.mobo.com.mx<br><br>
● Hasta agotar existencias.<br><br><br><br>

<b>Del 31 de julio al 5 de agosto de 2024</b><br><br><br><br>


Compra un SMARTWATCH MOBO LINK y si México gana alguna medalla olímpica del 31 de julio al 5 de agosto te reembolsamos el monto pagado por el SMARTWATCH MOBO LINK.<br><br><br><br>

Válido en compras del 31 de julio al 5 de agosto del 2024 del producto SMARTWATCH MOBO LINK y si México gana alguna medalla olímpica te reembolsamos el importe pagado por el SMARTWATCH MOBO LINK. Términos y condiciones para la redención:<br><br><br><br>

●	Fecha de redención del cupón del 14 al 21 de agosto del 2024.<br><br>
●	Para redimir se necesita traer ticket original impreso, no aplica en tickets reimpresos, se deberá presentar identificación oficial para el canje (INE, Pasaporte, Cédula profesional, Licencia de Manejo).<br><br>
●	Aplica solo por un artículo promocional por persona, promoción no acumulable e intransferible.<br><br>
●	Aplica en compras hechas mínimo 2 horas antes de las competencias ganadoras.<br><br>
●	El reembolso se hará en efectivo independientemente de la forma de pago original. En algunos casos puede aplicar reembolso por tarjeta electrónica sin previo aviso.<br><br>
●	No se aceptan cambios ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, ni después de redimido el premio, solo se aceptan devoluciones por falla de fábrica.<br><br>
●	Si México gana alguna medalla olímpica en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia.<br><br>
●	Solo se puede redimir la promoción en la tienda donde se realizó la compra.<br><br>
●	Si la compra fue realizada en alguna tienda de Aeropuerto, para poder aplicar el reembolso deberá comunicarse al: Centro de Atención a Clientes Moboshop al (55) 9302 0244 donde se le darán indicaciones para su reembolso.<br><br>
●	Hasta agotar existencias.<br><br><br><br>

<b>Del 6 al 11 de agosto 2024</b><br><br><br><br>

Compra unos AUDÍFONOS MOBO HOWE y si México gana alguna medalla olímpica del 6 al 11 de agosto de 2024 te reembolsamos el monto pagado por los AUDÍFONOS MOBO HOWE.<br><br><br><br>
●	Válido en compras del 6 al 11 de agosto del 2024 del producto AUDÍFONOS MOBO HOWE BLANCO o NEGRO y si México gana alguna medalla olímpica te reembolsamos el monto de tu compra. Términos y condiciones para la redención:<br><br>
●	Fecha de redención del cupón del 14 al 21 de agosto del 2024.<br><br>
●	Para redimir se necesita traer ticket original impreso, no aplica en tickets reimpresos, se deberá presentar identificación oficial para el canje (INE, Pasaporte, Cédula profesional, Licencia de Manejo).<br><br>
●	Aplica solo por un artículo promocional por persona, promoción no acumulable e intransferible.<br><br>
●	Aplica en compras hechas mínimo 2 horas antes de las competencias ganadoras.<br><br>
●	El reembolso se hará en efectivo independientemente de la forma de pago original.<br><br> En algunos casos puede aplicar reembolso por tarjeta electrónica sin previo aviso.<br><br>
●	No se aceptan cambios ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, ni después de redimido el premio, solo se aceptan devoluciones por falla de fábrica.<br><br>
●	Si México gana alguna medalla olímpica en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia.<br><br>
●	Solo se puede redimir la promoción en la tienda donde se realizó la compra.<br><br>
●	Si la compra fue realizada en alguna tienda de Aeropuerto, para poder aplicar el reembolso deberá comunicarse al: Centro de Atención a Clientes Moboshop al (55) 9302 0244 donde se le darán indicaciones para su reembolso.<br><br>
●	Hasta agotar existencias.<br><br><br><br>

Del 26 de julio al 11 de agosto 2024 <br><br><br><br>


Compra un IPHONE SE 2 64 GB Reacondicionado (grados B, B- y C) y si México gana una medalla olímpica de Oro en cualquier competencia del 26 de julio al 11 de agosto, te reembolsamos el monto pagado por el IPHONE SE 2 64 GB Reacondicionado (grados B, B- y C).<br><br><br><br>


●	Válido en compras del 26 de julio al 11 de agosto del 2024 del producto IPHONE SE 2 64 GB Reacondicionado (grados B, B- y C) y si México gana una medalla olímpica de Oro te reembolsamos el monto de tu compra. Términos y condiciones para la redención:<br><br>
●	Fecha de redención del cupón del 14 al 21 de agosto.<br><br>
●	Para redimir se necesita traer ticket original impreso, no aplica en tickets reimpresos, se deberá presentar identificación oficial para el canje. (INE, Pasaporte, Cédula profesional, Licencia de Manejo). <br><br>
●	Aplica solo por un artículo promocional por persona, promoción no acumulable e intransferible.<br><br>
●	Aplica en compras hechas mínimo 2 horas antes de la competencia ganadora de ORO.<br><br>
●	El reembolso se hará en efectivo independientemente de la forma de pago original.<br><br> En algunos casos puede aplicar reembolso por tarjeta electrónica sin previo aviso.<br><br>
●	No se aceptan cambios ni devoluciones del producto durante el tiempo de la promoción, se redima o no el premio, ni después de redimido el premio, solo se aceptan devoluciones por falla de fábrica.<br><br>
●	Si México gana una medalla olímpica de Oro en los primeros días, la promoción se reinicia con los artículos vendidos a partir de la siguiente competencia.<br><br>
●	Solo se puede redimir la promoción en la tienda donde se realizó la compra.<br><br>
●	Si la compra fue realizada en alguna tienda de Aeropuerto, para poder aplicar el reembolso deberá comunicarse al: Centro de Atención a Clientes Moboshop al (55) 9302 0244 donde se le darán indicaciones para su reembolso.<br><br>
●	Limitado a: 2,600 piezas.<br><br><br><br>
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
