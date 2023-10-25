import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import styles from './styles'


const PdpFeatures = () => {
    const productContext = useProduct();
    const [width,setWidth]=useState(0);
    
    const properties=productContext?.product?.properties;

    const imgPdp=properties.filter(item=>item.name=="imagen1");
    const specs=properties.filter(item=>item.name!="imagen1");

    useEffect(()=>{
        setWidth(window.innerWidth);
    },[productContext])

    return <>
        <div>
            {
                imgPdp.length>0? (
                    <div className={styles.specImgContainer}><img className={styles.specImg} src={imgPdp[0].values[0]} alt="Caracteristica de producto"></img></div>
                ):null
            }
        </div>
        <div className={styles.productName}>{productContext.product.productName}</div>
        <div className={styles.specsContainer}>
            {
                specs.map((item) => (
                    <div className={styles.specItem}>
                        <p className={styles.specName}>{item.name}</p>
                        <p className={styles.specValue}>{item.values[0]}</p>
                    </div>
                ))
            }
        </div>
    </>

}


export default PdpFeatures