import React, { useState } from 'react'
import { useProduct } from 'vtex.product-context'
import styles from './styles'


const ProductOffer = () => {
    const productContext = useProduct();

    console.log('Product Context: ',productContext);
    
    const listPrice0=productContext?.selectedItem?.sellers[0]?.commertialOffer?.ListPrice;
    const price0=productContext?.selectedItem?.sellers[0]?.commertialOffer?.Price;

    return <>
        {
            (price0 != 0 && price0!=listPrice0) ? (
            <div className={styles.productOfferContainer}>
                <div className={styles.productOfferButton}>OFERTA</div>
            </div>
            ):null
        }
    </>

}


export default ProductOffer