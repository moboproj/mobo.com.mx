import React, { useState } from 'react'
import styles from './styles'


const PdpShare= props => {

    const { children } = props;
    const [isOpen, setIsOpen]=useState(false);
    
    

    return <>
        {
            <div>
                <div className={styles.pdpShareContainer} onMouseOver={()=>setIsOpen(true)} onMouseOut={()=>setIsOpen(false)}>
                    <img src="/arquivos/Compartir_icono.png" alt="Compartir" style={{width:'6em'}}/>
                    {
                        isOpen ? <div className={styles.pdpShareIcons}>{children}</div> : null
                    }
                </div>
            </div>
        }
    </>



    return <>
        {
            isOpen ? <div>{children}</div>
            : <div onClick={()=>setIsOpen(true)}><img src="/arquivos/Compartir_icono.png" alt="Compartir" style={{width:'60px'}}/></div>
        }
    </>
}


export default PdpShare