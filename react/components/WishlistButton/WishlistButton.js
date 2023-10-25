import React from "react";
//import WishlistButton from './WishlistButton';

const CSS_HANDLES = ["wishlistButtonContainer", "wishlistButtonText"]

const WishlistButton = ({AddListenBtn}) => {
    const handles = useCssHandles(CSS_HANDLES)

    const handleClick =  () => {
        const wishlistButton = document.querySelector(".wishlist-wrapper .vtex-button")
        wishlistButton && wishlistButton.click()
    }

return (
        <div onClick={handleClick} className="wishlist-wrapper">Agregar a mi lista
        <AddListenBtn />
        </div>
    )
}
export default WishlistButton
