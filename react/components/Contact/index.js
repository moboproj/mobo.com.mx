import React, { useState } from 'react'
import { Modal, Spinner } from 'vtex.styleguide';
import styles from './styles.css'
import InputContainer from './InputContainer';


const Contact = () => {
    const EXP_EMAIL=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    const EXP_PHONE=/^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/

    const [open, setOpen] = useState(false);
    const [loading, setLoading]= useState(true);
    const [errorSave, setErrorSave] = useState(false);
    const [values, setValues] = React.useState({
        asunto: "",
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
        lugar: "",
        calleYnumero: "",
        codigoPostal: "",
        municipioODelegacion: "",
        colonia: "",
        estado: "",
        referencia: "",
        ticket: "",
        orden: ""
    });

    const [errorName,setErrorName]=useState(false);
    const [errorPhone,setErrorPhone]=useState(false);
    const [errorEmail,setErrorEmail]=useState(false);
    const [errorMessage,setErrorMessage]=useState(false);
    const [errorPlace,setErrorPlace]=useState(false);


    async function saveData() {
        setOpen(true);
        const url = 'https://api-ecomm.mobo.com.mx/contactos';
        const data = await fetch(url, {
            headers: {'Content-Type': 'application/json',},
            method: 'POST',
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            setErrorSave(false);
        })
        .catch(error => {
            setLoading(false);
            setErrorSave(true);
        });
    }

    const validateInfo=(inputName,newValues)=>{ 
        switch(inputName){            
            case 'nombre':
                setErrorName(newValues.nombre.length<3);
                break;
            case 'telefono':
                setErrorPhone(!newValues.telefono.match(EXP_PHONE))
            break;
            case 'email':
                setErrorEmail(!newValues.email.match(EXP_EMAIL));
                break;
            case 'lugar':
                setErrorPlace(newValues.lugar.length==-1);
                break;
            case 'mensaje':
                setErrorMessage(newValues.mensaje.length<3);
                break;

            default:
                break;
        }
    }

    const handleInputChange =({target}) =>{
        const { name, value } = target;
        const newValues = {
            ...values,
            [name]: value,
        };

        validateInfo(name,newValues);
        setValues(newValues);
    }


    const validateAllInfo = (newValues) => {
        let submitError = false;

        if (newValues.nombre.length < 3) {
            submitError = true;
            setErrorName(true);
        }
        if (!newValues.telefono.match(EXP_PHONE)) {
            submitError = true;
            setErrorPhone(true);
        }
        if (!newValues.email.match(EXP_EMAIL)) {
            submitError = true;
            setErrorEmail(true);
        }
        if (newValues.lugar.length == -1) {
            submitError = true;
            setErrorPlace(true);
        }
        if (newValues.mensaje.length < 3) {
            submitError = true;
            setErrorMessage(true);
        }

        return submitError
    }

    const handleSubmit =(e) =>{  
        e.preventDefault();
        const newValues = {...values};

        if (!validateAllInfo(newValues))
            saveData()    
    }

    
    return (
        <>
            <div className={`${styles.providersWrapper}`}>
                <a id="contacto" className={`${styles.providerFormAnchor}`}></a>
                <h2 className={`${styles.formTitle}`}>Contáctanos</h2>
                <div className={`${styles.providersFormWrapper}`}>
                    <form className={`${styles.form}`} onSubmit={handleSubmit}>


                        <InputContainer name='nombre' text='Nombre:' placeholder='Ingresa tu nombre completo' data={values} setData={setValues}  inputChange={handleInputChange} error={errorName}></InputContainer>
                        <InputContainer name='email' text='Email:' placeholder='Ingresa tu email' data={values} setData={setValues}  inputChange={handleInputChange} error={errorEmail}></InputContainer>
                        <InputContainer name='telefono' text='Teléfono:' placeholder='Ingresa tu teléfono' data={values} setData={setValues}  inputChange={handleInputChange} error={errorPhone}></InputContainer>
                        <div className={`${styles.inputContainer}`}>
                            <label className={`${styles.label}`} for="lugar">Lugar de compra:</label>
                            <select className={`${styles.input} ${styles.imputarrow}`} name='lugar' id='lugar' value={values.place} onChange={handleInputChange}>
                                <option key='place-1' value={-1}>Selecciona una opción</option>
                                <option key='place1' value='Cliente no ha comprado'>Aun no he comprado</option>
                                <option key='place2' value='Tienda Física(Moboshop y Mayoreo)'>Tienda Moboshop o Mayoreo</option>
                                <option key='place3' value='E-commerce'>{`Tienda Online (www.mobo.com.mx)`}</option>
                            </select>
                            <i></i>
                            {
                                errorPlace ? <span className={`${styles.error}`} id="errorPlace">Selecciona una opción</span> : null
                            }
                        </div>
                        <InputContainer name='mensaje' text='Comentarios:' placeholder='Dinos cómo te podemos ayudar hoy...' inputType='textArea' data={values} setData={setValues} inputChange={handleInputChange} error={errorMessage}></InputContainer>

                        <button className={`${styles.primaryButton}`} type='submit'>ENVIAR</button>
                    </form>
                </div>
            </div>
            <Modal
                isOpen={open}
                title=""
                closeOnEsc={true}
                responsiveFullScreen={false}
                onClose={() => setOpen(false)}>
                {
                    <>
                        {
                            loading ? <div className={styles.loadContainer}>
                                <Spinner />
                                <div>Cargando ...</div>
                                </div>
                            : <>
                                {
                                    errorSave ? <>
                                        <div className={styles.modalContainer}>
                                            <h3 className={styles.modalTitle}>Error al enviar la información</h3>
                                            <p className={styles.modalText}>Lo sentimos, hubo un error al intentar guardar tu información, por favor inténtalo nuevamente.</p>
                                            <div className={styles.primaryButton} onClick={()=>{setLoading(true);setOpen(false)}}>Continuar</div>
                                        </div>
                                    </>
                                    : <>
                                        <div className={styles.modalContainer}>
                                            <h3 className={styles.modalTitle}>Información enviada</h3>
                                            <p className={styles.modalText}>Se guardaron los datos correctamente</p>
                                            <div className={styles.primaryButton} onClick={()=>window.location.reload()}>Continuar</div>
                                        </div>
                                    </>

                                }
                            </>
                        }
                    </>
                }
            </Modal>  
        </>
    )
}

export default Contact