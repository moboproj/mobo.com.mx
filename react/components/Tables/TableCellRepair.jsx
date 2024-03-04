// import React, { Component } from 'react';
// import '../../css/tableCellRepair.css';
// import '../../css/bootstrap.css';
// import styles from './styles.css'
// import React, { useState } from 'react';


// function TableCellRepair(){
//   const [tipoSeleccionado, setTipoSeleccionado] = useState('');
//   const [productoSeleccionado, setProductoSeleccionado] = useState('');
//   const [modeloSeleccionado, setModeloSeleccionado] = useState('');
//   const [modeloHabilitado, setModeloHabilitado] = useState(false);
//   const [mostrarTabla, setMostrarTabla] = useState(false); // Nuevo estado para la visibilidad de la tabla
//   const [tablaSeleccionada, setTablaSeleccionada] = useState(null); // Estado para almacenar el componente de tabla que se mostrará
//   const bgOrange = {
//           padding: "10px 5px", 
//           textAlign: "center", 
//           background: "#fa7100",
//           color: "#fff"
        
//   };
//   const handleProductoChange = (event) => {
//     const tipo = event.target.form.tipo.value;
//     setTipoSeleccionado(tipo);
//     const producto = event.target.form.producto.value;
//     setProductoSeleccionado(producto);
//     console.log("el tipo seleccionado", tipo);
//     console.log("el producto seleccionado", producto);
//     // Habilita el modelo según el producto seleccionado
//     if (producto === 'value1' || producto === 'value2' || producto === 'value5' || producto === 'value7' ) {
//       setModeloHabilitado(true);  // Para iPhone con mas de un modelo
//     } else {
//       setModeloHabilitado(false); // Deshabilita para otros productos
//     }
    
//   };
//   const handleModeloChange = (event) => {
//     const modelo = event.target.form.modelo.value;
//     setModeloSeleccionado(modelo);
//   };
//   const handleSubmit = (event) => {
    
//     event.preventDefault();
    
//     // Determina la tabla a mostrar según la combinación seleccionada
//     console.log(`${tipoSeleccionado}-${productoSeleccionado}-${modeloHabilitado}-${modeloSeleccionado}`)
//     switch (`${tipoSeleccionado}-${productoSeleccionado}-${modeloHabilitado}-${modeloSeleccionado}`) {
//       case 'pantalla-value1-true-iPhone11':
//         console.log("se muestra la tabla1")
//         setTablaSeleccionada(<Table1 />);
//         break;
//       case 'pantalla-value1-true-iPhone11Pro':
//         setTablaSeleccionada(<Table2 />);
//         break;
//       case 'pantalla-value1-true-iPhone11ProMax':
//           setTablaSeleccionada(<Table3 />);
//           break;
//       default:
//         setTablaSeleccionada(<Table4 />);
//     }
//     // Muestra la tabla al presionar el botón
//     setMostrarTabla(true);
//   };
//   console.log(tablaSeleccionada)
//   // Definir componentes de tabla personalizados según sea necesario
//   const Table1 = () => (
//     <div className={`${styles.cuadrocosto}`}>
//       <b className={`${styles.titleb}`}>Tu costo estimado</b>
//       <p className={`${styles.parrafo}`}>Revisaremos tu equipo de servicio técnico para determinar la tarifa de servicio técnico final.</p>
//       <figure >
//         <span className={`${styles.price}`}>$ 2,999</span>
//       </figure>
//     </div>
//   );

//   const Table2 = () => (
//     <div  className={`${styles.cuadrocosto}`}>
//       <b className={`${styles.titleb}`}>Tu costo estimado</b>
//       <p className={`${styles.parrafo}`}>Revisaremos tu equipo de servicio técnico para determinar la tarifa de servicio técnico final.</p>
//       <figure >
//           <span className={`${styles.price}`}>$ 3,999</span>
//       </figure>
//     </div>
//   );

//   const Table3 = () => (
//     <div  className={`${styles.cuadrocosto}`}>
//       <b className={`${styles.titleb}`}>Tu costo estimado</b>
//       <p className={`${styles.parrafo}`}>Revisaremos tu equipo de servicio técnico para determinar la tarifa de servicio técnico final.</p>
//       <figure >
//           <span className={`${styles.price}`}>$ 5,999</span>
//       </figure>
//     </div>
//   );

//   const Table4 = () => (
//     <div  className={`${styles.cuadrocosto}`}>
//       <b className={`${styles.titleb}`}>Tu costo estimado</b>
//       <p className={`${styles.parrafo}`}>Revisaremos tu equipo de servicio técnico para determinar la tarifa de servicio técnico final.</p>
//       <figure >
//           <span className={`${styles.price}`}>No disponible</span>
//       </figure>
//     </div>
//   );




// return(
//   <>
// <div className="container">
//     <div className="row mb-4">
//       <div className="col-xs-12 col-md-12 text-center">
//         <form className={`${styles.form}`} onSubmit={handleSubmit}> 
//           <select className={`${styles.selectCR}`} name ="tipo" onChange={handleProductoChange}>
//             <option value="" disabled hidden selected>Tipo de reparación</option>
//             <option value="valuedefult" disabled>Selecciona una opción</option>
//             <option value="pantalla">Reparación de pantalla</option>
//             <option value="bateria">Reparación de batería</option>
//           </select>
//           <select className={`${styles.selectCR}`} name="producto" onChange={handleProductoChange}> 
//             <option value="" disabled hidden selected>Producto</option>
//             <option value="value0" disabled>Selecciona una opción</option>
//             <option value="value1" >iPhone 11</option>
//             <option value="value2">iPhone XS</option>
//             <option value="value3">iPhone XR</option>
//             <option value="value4">iPhone X</option>
//             <option value="value5">iPhone 8</option>
//             <option value="value6">iPhone 7</option>
//             <option value="value7">iPhone 6</option>
//           </select>
//           <select className={`${styles.selectCR}`} name="modelo" disabled={!modeloHabilitado} onChange={handleModeloChange}>
//                 <option value="" hidden>Modelo de equipo</option>
//                 {modeloHabilitado && (
//                   <>
//                     {/* Opciones específicas del modelo para iPhone 11 */}
//                     {productoSeleccionado === 'value1' && (
//                       <>
//                         <option value="iPhone11">iPhone 11</option>
//                         <option value="iPhone11Pro">iPhone 11 Pro</option>
//                         <option value="iPhone11ProMax">iPhone 11 Pro Max</option>
//                       </>
//                     )}

//                     {/* Opciones específicas del modelo para iPhone XS */}
//                     {productoSeleccionado === 'value2' && (
//                       <>
//                         <option value="iPhoneXS">iPhone XS</option>
//                         <option value="iPhoneXSMax">iPhone XS Max</option>
//                         {/* Agregar más opciones según sea necesario */}
//                       </>
//                     )}
//                     {/* Opciones específicas del modelo para iPhone 8 */}
//                     {productoSeleccionado === 'value5' && (
//                       <>
//                         <option value="iPhone8Plus">iPhone 8 Plus</option>
//                         <option value="iPhone8">iPhone 8</option>
//                       </>
//                     )}
//                     {/* Opciones específicas del modelo para iPhone 6 */}
//                     {productoSeleccionado === 'value7' && (
//                       <>
//                         <option value="iPhone8Plus">iPhone 6S Plus</option>
//                         <option value="iPhone6s">iPhone 6s</option>
//                         <option value="iPhone6Plus">iPhone 6 Plus</option>
//                         <option value="iPhone6">iPhone 6</option>
//                       </>
//                     )}
//                   </>
//                 )}
//               </select>
//               {/* Botón después de los select */}
//               <button className={`${styles.buttonCR}`} type="submit">Obtén un costo estimado</button>
//         </form> 
//         {mostrarTabla && tablaSeleccionada}    
//       </div>
//     </div>
// </div>
// </>
//     );
import React, { useState, useEffect } from 'react';

const TableCellRepair = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [remainingForFreeShipping, setRemainingForFreeShipping] = useState(0);
  const freeShippingThreshold = 499;

  useEffect(() => {
    const updateSubtotal = () => {
      const subtotalElement = document.querySelector('.vtex-checkout-summary-0-x-price');

      if (subtotalElement) {
        const subtotalValue = parseFloat(subtotalElement.innerText.replace(/[^0-9.-]+/g, ""));
        setSubtotal(subtotalValue);
      }
    };

    // Observador de mutación para detectar cambios en el DOM
    const observer = new MutationObserver(updateSubtotal);
    const config = { childList: true, subtree: true };
    observer.observe(document.body, config);

    return () => {
      observer.disconnect(); // Detener el observador cuando el componente se desmonta
    };
  }, []);

  useEffect(() => {
    const calculateRemainingForFreeShipping = () => {
      const remaining = freeShippingThreshold - subtotal;
      if (remaining > 0) {
        setRemainingForFreeShipping(remaining.toFixed(2));
      } else {
        setRemainingForFreeShipping(0);
      }
    };

    calculateRemainingForFreeShipping();
  }, [subtotal, freeShippingThreshold]);

  return (
    <div>
      {remainingForFreeShipping > 0 ? (
        <div style={{ textAlign: 'center', margin: '1rem', color: '#47525E', fontWeight: 600 }}>
          Te faltan $ {remainingForFreeShipping} pesos para Envío Gratis
        </div>
      ) : (
        <div style={{ textAlign: 'center', margin: '1rem', color: '#DC066B', fontWeight: 600 }}>
          ¡Felicidades, lograste Envío Gratis!
        </div>
      )}
      <div style={{ width: '100%', backgroundColor: '#e0e0e0', height: 20, margin: '1rem', borderRadius: '30px', maxWidth: '90%' }}>
        <div style={{ width: `${(subtotal / freeShippingThreshold) * 100}%`, backgroundColor: '#003AFF', height: 20, borderRadius: '30px' , maxWidth: '100%'}}></div>
      </div>
    </div>
  );
};

export default TableCellRepair;


