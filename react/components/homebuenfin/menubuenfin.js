import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function Menubuenfin() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading complete
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 0); // Set to 0 to render immediately after mounting

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <label style={{ display: 'block', textAlign: 'center', fontSize: '35px', marginBottom: '30px',color:'#6c6c6c' }}>
        <strong>Buen Fin Mobo 2024</strong>
      </label>
      {isLoaded &&
        desplegablesData.map((item, index) => (
          <Desplegable key={index} title={item.title} content={item.content} />
        ))}
    </div>
  );
}

const Desplegable = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div style={styles.container}>
      <div style={styles.headerWrapper} onClick={toggleDropdown} role="button" tabIndex={0}>
        <div style={styles.headerContent}>
          <span style={styles.title}>{title}</span>
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} style={styles.icon} />
        </div>
      </div>
      {isOpen && (
        <div style={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

const desplegablesData = [
  {
    title: "El buen Fin Mobo 2024",
    content: `
      <p>La edición 2024 del Buen Fin se acerca por eso nos estamos preparando para que disfrutes todas las promociones del Buen Fin 2024, el fin de semana más esperado tendrá lugar del 15 al 18 de noviembre de este año.<p/>
        <p>Mobo trae para ti grandes descuentos en <a href="https://www.mobo.com.mx/Telefonia/Smartphones">celulares </a>,  <a href="https://www.mobo.com.mx/audio/bocina">bocinas</a>, <a href="https://www.mobo.com.mx/tecnologia/wearables"> smartwatch</a> y mucho más. Es tu oportunidad de estrenar el iPhone que tanto quieres, el celular de tu color favorito, el cargador que necesitas con los audífonos que están en tendencia. Llena tu carrito con las mejores ofertas del Buen Fin y consiéntete.</p>
        <p>Si lo que quieres es estrenar ya, dale un vistazo ahora mismo a todo lo que tenemos para ti en <a href="https://www.mobo.com.mx/">mobo.com</a>
      </p>`
  },
  {
    title: "¿Qué es El Buen Fin?",
    content: `
      <p>El llamado fin de semana más barato del año es una iniciativa del Consejo Coordinador Empresarial, al que se suman organizaciones del sector privado e instituciones bancarias para ofrecer ofertas, descuentos y muchas promociones; tradicionalmente se realiza en noviembre de cada año.</p>`
  },
  {
    title: "¿Quién organiza El Buen Fin?",
    content: `
      <p>El evento es organizado por el gobierno federal a través de la Secretaría de Hacienda y Crédito Público, la Secretaría de Economía, la Secretaría de Turismo y el Servicio de Administración Tributaria, entre otras instituciones públicas y del sector privado.</p>`
  },
  {
    title: "¿Cuándo es El Buen Fin 2024 en México?",
    content: `
      <p>
       La fecha de inicio del Buen Fin será el próximo 15 de noviembre a las 00:00 horas y terminará el 18 de noviembre a las 23:59 horas.  </p>`
  },
  {
    title: "¿Cuánto dura El Buen Fin?",
    content: `
      <p>El Buen Fin 2024 tiene una duración de 3 días. Comenzando el día 15 de noviembre a las 00:00 y finalizando el día 18 de noviembre 2024 a las 23:59 horas.</p>`
  },
  {
    title: "¿Cuántas veces al año se hace El Buen Fin?",
    content: `
      <p>El Buen Fin 2024 tiene una duración de 3 días. Comenzando el día 15 de noviembre a las 00:00 y finalizando el día 18 de noviembre 2024 a las 23:59 horas.</p>`
  },
  {
    title: "¿Cuántas veces al año se hace El Buen Fin?",
    content: `
      <p>El Buen Fin sucede una vez al año, pero en mobo.com puedes encontrar descuentos en productos de las marcas más reconocidas a nivel internacional todos los días, todo el año.</b> de la compra y el vendedor deberá capturar tu nombre completo en sistema.</p>`
  },
  {
    title: "¿Cuáles serán las ofertas y descuentos en este Buen Fin 2024?",
    content: `
      <p>¡El Buen Fin 2024 tendrá muchas ofertas y promociones exclusivas para ti!
         Encontrarás descuentos en la mejor <a href="https://www.mobo.com.mx/tecnologia">tecnología</a> y el mejor <a href="https://www.mobo.com.mx/audio">audio</a>, además de muchas opciones para proteger tu celular con los <a href="https://www.mobo.com.mx/">mejores accesorios.</a>
      </p>`
  },
  {
    title: "¿Qué marcas participan en el Buen Fin?",
    content: `
      <p>Cada año Mobo ofrece marcas de telefonía como en descuento como : <a href="https://www.mobo.com.mx/apple">Apple</a>, <a href="https://www.mobo.com.mx/samsung">Samsung</a>, <a href="https://www.mobo.com.mx/motorola">Motorola</a>, <a href="https://www.mobo.com.mx/xiaomi">Xiaomi.</a>
         Las mejores carcas de Audio como lo son: <a href="https://www.mobo.com.mx/sony">Sony</a>, <a href="https://www.mobo.com.mx/mobo">Mobo</a>, <a href="https://www.mobo.com.mx/beats">Beats</a>, <a href="https://www.mobo.com.mx/skullcandy">SkullCandy</a>, <a href="https://www.mobo.com.mx/jbl">JBL</a>, <a href="https://www.mobo.com.mx/samsung">Samsung.</a>
         Las mejores marcas de carga como lo son: <a href="https://www.mobo.com.mx/mobo">Mobo</a>, <a href="https://www.mobo.com.mx/apple">Apple</a>, <a href="https://www.mobo.com.mx/motorola">Motorola</a>, <a href="https://www.mobo.com.mx/puregear">Pure Gear</a>, <a href="https://www.mobo.com.mx/mophie">Mophie</a> y <a href="https://www.mobo.com.mx/samsung">Samsung</a>
         Con lo mejor de protección para tu celular como es: <a href="https://www.mobo.com.mx/mobo">Mobo</a>, <a href="https://www.mobo.com.mx/ferrari">Ferrari</a>, <a href="https://www.mobo.com.mx/dnky">DKNY</a>, <a href="https://www.mobo.com.mx/lacoste">LACOSTE</a>, <a href="https://www.mobo.com.mx/bmw">BMW</a>, <a href="https://www.mobo.com.mx/guess">GUESS</a>, <a href="https://www.mobo.com.mx/apple">APPLE</a>, <a href="https://www.mobo.com.mx/zagg">ZAGG</a>, <a href="https://www.mobo.com.mx/samsung">Samsung.</a>
         Entre muchas otras.
      </p>`
  },
  {
    title: "¿Qué categorías participan en el Buen Fin?",
    content: `
      <p>¡El Buen Fin 2024 tendrá muchas ofertas y promociones exclusivas para toda la familia en nuestras categorías de Telefonía, <a href="https://www.mobo.com.mx/Aud%C3%ADfonos%20y%20Bocinas">Audio</a>, <a href="https://www.mobo.com.mx/tecnologia/wearables">Tecnología</a>, <a href="https://www.mobo.com.mx/proteccion">Protección</a>, <a href="https://www.mobo.com.mx/carga">Carga</a> y <a href="https://www.mobo.com.mx/accesorios">Accesorios</a></p>`
  },
  {
    title: "Beneficios de comprar en Mobo.com",
    content: `
      <p>Disfruta de estrenar desde la comodidad de tu hogar; evita las horas en el tráfico, las largas filas para pagar y las aglomeraciones. En mobo.com estamos disponibles para ti todos los días, todo el día.
         Comprar en línea es fácil y seguro; garantizamos transacciones confiables y la privacidad de tu información.
         Además de tener acceso a miles de productos exclusivos en línea, puedes utilizar tu Crédito Mobo para pagar en cómodos plazos.
      </p>`
  },
  {
    title: "¿Cuáles son las formas de pago?",
    content: `
      <p>Miles de productos con descuento, ofertas, servicios en línea y más te esperan en mobo.com pagando con tarjeta de crédito o débito de todos los bancos.
          Adicional, contamos con pagos a través de Kueski, Aplazo, PayPal y pago en efectivo por medio de Oxxo.
      </p>`
  }
];

const styles = {
  container: {
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '30px',
    //padding: '10px',
    background: '#d3d3d3',
    overflow: 'hidden',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '10px',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: '10px',
    fontSize: '20px', // Set a fixed size for the icon
  },
  content: {
    padding: '10px',
    backgroundColor: 'white',
   // marginTop: '10px',
  },
};