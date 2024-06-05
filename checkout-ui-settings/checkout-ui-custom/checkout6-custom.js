// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIco
var PaypalCheckoutRT=document.createElement("script");
PaypalCheckoutRT.type="text/javascript";
PaypalCheckoutRT.src="/files/checkout5-paypalrt.js";
document.body.appendChild(PaypalCheckoutRT);

var PaypalOXXO=document.createElement("script");
PaypalOXXO.type="text/javascript";
PaypalOXXO.src="/files/checkout5-oxxo.js";
document.body.appendChild(PaypalOXXO);

var PaypalCheckout=document.createElement("script");
PaypalCheckout.type="text/javascript";
PaypalCheckout.src="/files/checkout5-paypal-checkout.js";
document.body.appendChild(PaypalCheckout);

var PaypalFraudnet=document.createElement("script");
PaypalFraudnet.type="text/javascript";
PaypalFraudnet.src="/files/checkout5-paypal-fraudnet.js";
document.body.appendChild(PaypalFraudnet);

var PaypalACDC=document.createElement("script");
PaypalACDC.type="text/javascript";
PaypalACDC.src="/files/checkout5-paypal-ACDC.js";
document.body.appendChild(PaypalACDC);

$(window).on("orderFormUpdated.vtex", function(e, t) {
    if($("#payment-group-PayPalRTPaymentGroup").hasClass("active") || $("#payment-group-PayPalOXXOPaymentGroup").hasClass("active")){
        setTimeout(function(){ 
            $('.payment-confirmation-wrap').hide();
        }, 500);
    }else{
        setTimeout(function(){ 
            $('.payment-confirmation-wrap').show();
        }, 500);
    }
});
// $.getScript("https://kit.fontawesome.com/d17d43a29b.js");
$(document).ready(function() {  
    setTimeout(function () { 
        vtexjs.checkout.getOrderForm() .done(function (orderForm) {
            setTimeout(() => {
                changeDeliveryTimeCheckout();
                changeDeliveryTimeCart();
            }, 3000)
            // Find the element by its ID
            var element = document.getElementById("payment-group-creditCardPaymentGroup");
            // Get the span element inside the anchor element
            var spanElement = element?.querySelector(".payment-group-item-text");   
            // 1.- Validacion de la persona 
            validateRFCpersonaFisica()
            $("#not-corporate-client").trigger("click");
            // 2.- Inicializacion de carrusel de sugerencia
            initCrossSellingSection(orderForm)
            // 3.- Bar de progreso
            initProcessBar()
            $('.coupon-fields').css('display', 'none')
            $('body > header > div > div > div > ul > li:nth-child(3) > a > span > div > div > div > ul > li > em').text($('.cart-items .product-item').length);
        });
        $('#client-company-document').val("");
        $('#client-document').val("");
        $("#allow-marketing-div").remove()
        let keydown = jQuery.Event('keydown', {which: 11});
        $(".btn-submit-wrapper").click(function () {
            $('#client-company-document').trigger(keydown);
            validateRFCpersonaFisica();
        })
        $(".corporate-info-box").prepend("<div class='rfc-election'><a class='persona-fisica-button rfc-option'>Persona Física</a> <a class='persona-moral-button rfc-option'>Persona Moral</a></div>");
        $("#not-corporate-client").trigger("click");
        $('#client-company-document').val("");
        $('#client-document').val("");
        $(".persona-fisica-button").click(() => {
            $(".persona-fisica-button").css({"background-color": "#FFF", "color": "#6CAA3B"});
            $(".persona-moral-button").css({"background-color": "#6CAA3B", "color": "#FFF"})
            $(".client-company-document").fadeOut();
            $("#client-company-document").val("XXX000000XXX")
            $('#client-company-document').trigger(keydown);
            $("#client-document").val("");
            $('label[for=client-company-name]').html("Nombre")
            $(".client-company-name").fadeIn();
            $($(".client-document")[0]).fadeIn();
        })
        $(".persona-moral-button").click(() => {
            $(".persona-moral-button").css({"background-color": "#FFF", "color": "#6CAA3B"});
            $("#client-document").val("XXXX000000XXX");
            $('#client-document').trigger(keydown);
            $("#client-company-document").val("")
            $(".persona-fisica-button").css({"background-color": "#6CAA3B", "color": "#FFF"});
            $(".client-document").fadeOut();
            $('label[for=client-company-name]').html("Razón Social");
            $(".client-company-name").fadeIn();
            $($(".client-company-document")[0]).css("visibility", "visible");
            $($(".client-company-document")[0]).fadeIn();
        })
        $('.corporate-title').text("Selecciona la entidad con la que deseas facturar: ");
        $('#not-corporate-client').text("No facturar mi pedido");
        $('#is-corporate-client').text("Facturar mi pedido")
        $(".client-document").keyup(() => {
            validateRFCpersonaFisica()
        })
        $('.ship-reference').removeClass('hide');
        $('.client-company-document').addClass('hidden')
        $('#client-company-document').trigger(keydown);
    }, 2000);
})
// controlador de eventos en jQuery.
$(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
    setTimeout(() => {
        // 3.- Cambio en el tiempo de entrega en checkout
        changeDeliveryTimeCheckout();
        // 4.- Cambio en el tiempo de entrega en checkout
        changeDeliveryTimeCart();
        // 5.- Cambio en el process bar
        handleOrderFormUpdated(orderForm)
        // const textElement = document.querySelector('.payment-group-item-text');
        // textElement.textContent = "New Text"; // Or use other DOM manipulation methods
        
    }, 2000)
});

//  Guardar la URL actual al cargar la página
let currentUrl = window.location.href;

// Escuchar cambios en la URL con setInterval
setInterval(() => {
    if (window.location.href !== currentUrl) {
        // La URL ha cambiado, actualiza la variable y realiza acciones
        if (!window.location.href.includes('cart')) {
            currentUrl = window.location.href;
            console.log("esta es la href",currentUrl)
            $('.barShipping').css('display', 'none')
            $('.backContenedor').css('display', 'none')
            $('.title-cross-selling').css('display', 'none')
            $('.crossSellingSection').css('display', 'none')
            $('.coupon-fields').css('display', 'block')
        } else {
            currentUrl = window.location.href;
            console.log("esta es la href",currentUrl)
            $('.barShipping').css('display', 'block')
            $('.backContenedor').css('display', 'block')
            $('.title-cross-selling').css('display', 'block')
            $('.crossSellingSection').css('display', 'block')
            $('.coupon-fields').css('display', 'none')
        }

    }
}, 1000); // Intervalo de comprobación cada segundo (ajusta según sea necesario)
/***** SHOW DISCLAIMER COUPON ****/

$(window).on('orderFormUpdated.vtex', function () {
    if (window.location.href.includes('cart')) {
      let intervalCoupon = setInterval(function () {
        /* MENSAJE ABAJO DE CUPON EN CART. FECHA: 11-08-2022*/
        let containerCoupon = document.querySelector('.summary-template-holder')
        let mensajeCupon = document.querySelector('.containerMensajeCupon')
        if (!mensajeCupon && containerCoupon) {
          // Recuerda que el cÃ³digo de tu gift card se ingresa en el paso 3 correspondiente al pago
          containerCoupon.insertAdjacentHTML(
            'beforeend',
            '<div class="containerMensajeCupon"><div class="divimgcoupon"><img src="https://mobomx.vteximg.com.br/arquivos/warning.png"></div><div class="divtextcoupon">OJO: Tu cupón de descuento o Gift Cart se agrega en la siguiente pantalla.</div></div>'
          )
          clearInterval(intervalCoupon)
        } else if (mensajeCupon) {
          clearInterval(intervalCoupon)
        }
      })
    }
    if (window.location.href.includes('payment')) {
    }
  })
// Variables globales
let deliveryAmountLimit = 499;
//////////////////////////////////////////////////////funciones///////////////////////////////////////////////////////////////////////////////////////////////////////  
// funciones de metodos de pago
let totalCartAmount = function (orderForm) {
    if(orderForm.value/100 > 1500 && ($("#payment-group-aplazoPaymentGroup").length != 0)){
        $("#payment-group-aplazoPaymentGroup").hide()
    }//oculta el pago con Aplazo si la compra es mayor a 1500
    return orderForm.value / 100   
}
//2.- CrossSelling Cart Section
async function initCrossSellingSection(orderForm) {
    let crossSellingProducts = await getSimilarCartProducts(orderForm);
    displayCrossSellingProducts(crossSellingProducts)
}
async function getSimilarCartProducts(orderForm) {
    return new Promise(async (resolve, reject) => {
        let crossSellingProducts = []
        let cartProducts = orderForm.items;
        for (let cartProduct of cartProducts) {
            try {
                let similarProducts = await getSimilarProducts(cartProduct.productId, orderForm);
                crossSellingProducts.push(...similarProducts)
            } catch (e) {
                console.log(e);
            }

        }
        resolve(crossSellingProducts)
    })
}    
function getSimilarProducts(id, orderForm) {
    return new Promise((resolve, reject) => {
        $.getJSON("/api/catalog_system/pub/products/crossselling/whosawalsosaw/" + id, function (data) {
            let promises = [];
            let precios = parseInt(orderForm.items[0].priceDefinition.total);
            
            data.forEach(datas => {
                promises.push(new Promise((innerResolve, innerReject) => {
                    $.getJSON("/api/catalog_system/pub/products/variations/" + datas.productId, function (datos) {
                        let precioContra = parseInt(datos.skus[0].bestPrice);
                        
                        if (datos.available === true && precioContra > precios) {
                            innerResolve(datas);
                        } else {
                            innerResolve(null);
                        }
                    }).fail((err) => {
                        innerReject(err);
                    });
                }));
            });
            
            Promise.all(promises).then(results => {
                resolve(results.filter(result => result !== null));
            }).catch(err => {
                reject(err);
            });
        }).fail((err) => {
            reject(err);
        });
    });
}

function displayCrossSellingProducts(products) {
    $(".checkout-container").after("<div class='row'><div class='col text-center title-cross-selling' ><span>¡Completa tu Compra!</span></div></div><div class='crossSellingSection' ></div>")
    if (products.length == 0) {
        return 0;
    }
    for (let product of products) {
        if (product.items[0].sellers[0].commertialOffer.Price != 0) {
            const formatterDolar = new Intl.NumberFormat('en-US', {
                style: 'decimal',
                currency: 'USD'
            })
            let price = product.items[0].sellers[0].commertialOffer.PriceWithoutDiscount;
            let priceWithDescount = Math.trunc(product.items[0].sellers[0].commertialOffer.Price);
            let priceFormated = formatterDolar.format(price);
            let priceWithDescountFormated = formatterDolar.format(priceWithDescount)
            $(".crossSellingSection").append(
                "<div id='" + product.productId + "' class='card mx-lg-3 mt-3'>\n" +
                "                    <a class='image-url' href='/'" + product.linkText + "/p'><img class='card-img-top' src='" + product.items[0].images[0].imageUrl + "' alt='Card image cap'></a>\n" +
                "                    <div class='card-body'>\n" +
                "                            <div class='title-name col text-center'>\n" +
                "                                <p>" + cortarTextoConPuntos(product.productName, 30) + "</p>\n" +
                "                            </div>\n" +
                "                        <div id='" + product.productId + "-price" + "'>\n" +
                "                        </div>" +
                "                          <a class='btn-block btn-product' href='" + product.items[0].sellers[0].addToCartLink + "'>AGREGAR</a>" +
                "                    </div>\n" +
                "                </div>"
            );

            if (priceWithDescount != price) {
                $("#" + product.productId + "-price").append("<div class='product-price text-center '>\n" +
                    "                                <b><s>$" + priceFormated + "</s></b>\n" +
                    "                                </div>\n" +
                    "<div class='product-price-with-discount  text-center '>\n" +
                    "                                <b>$" + priceWithDescountFormated + "</b>\n" +
                    "                                </div>\n")
            } else {
                $("#" + product.productId + "-price").append("<div class='product-price text-center '></div>\n" +
                    "<div class='product-price-with-discount  text-center '>\n" +
                    "                                <b>$" + priceWithDescountFormated + "</b>\n" +
                    "                                </div>\n")
            }
        }
    }

    let script = $.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
    if (screen.width < 768) {
        $(".crossSellingSection").slick({
            slidesToShow: 2,
            slidesToScroll: 2,
        });
    } else {
        $(".crossSellingSection").slick({
            slidesToShow: 7,
            slidesToScroll: 4
        });
    }
    $(".slick-prev").empty()
    $(".slick-prev").addClass("ico-arrow-left");
    $(".slick-next").empty();
    $(".slick-next").addClass("ico-arrow-right");
    });
}
function cortarTextoConPuntos(texto, limite) {
    var puntosSuspensivos = "...";
    if (texto.length > limite) {
        texto = texto.substring(0, limite) + puntosSuspensivos;
    }

    return texto;
}


// Bar progress de envio gratis
async function initProcessBar() {
        displayFreedelivery();
        displaybannercomeback()
}
// function displaybannercomeback() {
//     $(`<div class="backContenedor">
//         <button href="https://www.mobo.com.mx/" class="botonBack">Regresar y seguir comprando</button>
//     </div>`).insertBefore($('.barShipping'));
// }
function displaybannercomeback() {
    $('<div class="backContenedor"><button onclick="window.location.href=\'/\'" class="botonBack">Regresar y seguir comprando</button></div>').insertBefore($('.barShipping'));
}
function displayFreedelivery(){
    $(`<div class="barShipping"> 
            <div class="shippingText" ></div>
            <div class="progressCheck" style="width: 100%; display: flex; justify-content: center;margin-bottom: 2rem">
                <div class="progressBarContainer" style="width: ${
                screen.width < 650 ? '100%' : '545px'
                };max-width:545px; ">
                    <div class="progressBar" style="background-color: #0433ff; height: 100%; border-radius: 5px;"></div>
                </div>
            </div>
            <div class="pBGoal"></span>
        </div>`).insertBefore($('.container-cart'));
}


////////// Manejador de cambios en el bar process de envio
function handleOrderFormUpdated(orderForm) {
    const { value, items } = orderForm
    const totalProducts = items.reduce((acumulador, objeto) => {
    return acumulador + objeto.sellingPrice * objeto.quantity
    }, 0)
    const orderValue = totalProducts / 100
    const amountLeft = deliveryAmountLimit - orderValue
    const finalText =
    orderValue >= deliveryAmountLimit
        ? ''
        : ``
    const remainingText =
    orderValue < deliveryAmountLimit 
        ? `Faltan $${amountLeft.toLocaleString('es-MX')} MXN para tu envío gratis ` 
        : 'Lograste envio gratis, felicidades!'
    
    let percentBar = 0
    percentBar = (orderValue * 100) / deliveryAmountLimit
    $('.shippingText').text(remainingText)
    $('.progressBar').css('width', `${percentBar > 100 ? 100 : percentBar}%`)
    $('.pBGoal').text(finalText)

    if (orderValue < deliveryAmountLimit) {
    // Mostrar el contenedor si la condiciÃ³n no se cumple
    const shippingPreviewContainer = $('.cart-template.full-cart.span12.active #shipping-preview-container')
    shippingPreviewContainer.css('display', 'block !important')
    shippingPreviewContainer.show()
    $('.progressBar').css('background-color', '#0433ff')
    } else {
    const shippingPreviewContainer = $('.cart-template.full-cart.span12.active #shipping-preview-container')
    shippingPreviewContainer.css('display', 'none !important')
    shippingPreviewContainer.hide()
    $('.progressBar').css('background-color', '#1cffb7')
    }

    if (orderValue === 0) {
    $('.barShipping').css('display', 'none')
    }
}
////////// DELIVERY TIME TEXT
function changeDeliveryTimeCart() {
    try {
        let isTodayOrTomorrow = null;
        let shippingTexts = $(".shipping-estimate-date");
        for (let i = 0; i < shippingTexts.length; i++) {
            let text = $(shippingTexts[i]).html();
            if (text != "") {
                isTodayOrTomorrow = textDeliveryTimeEquivalent(shippingTexts[i]);
            }
        }
    } catch (e) {
    }

}

function changeDeliveryTimeCheckout() {
    let date = new Date();
    let todayNumber = date.getDay();
    let hourNumber = date.getHours();
    try {
        let text = $(".shp-option-text-label-single span").html();
        if (text.indexOf("horas") > 0) { //Lega el mismo día
            if ((todayNumber > 5) && (todayNumber < 8)) { //Es sábado o domingo
                $(".shp-option-text-label-single span").html("Llega el lunes. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            } else {//Es cualquier otro día excepto sábado o domingo
                let days = parseInt(text.split("En hasta ")[1].split(" días hábiles")[0]);
                $(".shp-option-text-label-single span").html("Llega el día de hoy. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }
        } else if (text.indexOf("Hasta 1 día hábil") >= 0) { //Llega el día siguiente
            if (todayNumber == 5) {//Es vierenes
                if (hourNumber >= 15) { //Ya pasan de las 3PM
                    $(".shp-option-text-label-single span").html("Llega el lunes. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                } else {//Aun es antes de las 3PM
                    $(".shp-option-text-label-single span").html("Llega mañana. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }
                // $(".shp-option-text-label-single span").html("Llega el lunes");
            } else if ((todayNumber > 5) && (todayNumber < 7)) {//Es sábado
                $(".shp-option-text-label-single span").html("¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            } else { // Es cualquier otro día
                $(".shp-option-text-label-single span").html("Llega mañana. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }
        }else if(text.indexOf("En hasta 2 días hábiles") >= 0){
            if((todayNumber != 5) || (todayNumber != 6)){
                $(".shp-option-text-label-single span").html("Llega pasado mañana.. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }else{
                $(".shp-option-text-label-single span").html("¡Tu pedido llega el martes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }
        } else {// Lega en más de 1 día
            let days = parseInt(text.split("En hasta ")[1].split(" días hábiles")[0]);
            $(".shp-option-text-label-single span").html("Entrega de " + (days - 1) + " a " + days + " 		días hábiles. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
        }
    } catch (e) {
    }
    try {
        let text = $(".shp-summary-package-time span").html();
        if (text.indexOf("horas") > 0) { //Lega el mismo día
            if ((todayNumber > 5) && (todayNumber < 8)) { //Es sábado o domingo
                $(".shp-summary-package-time span").html("¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            } else {//Es cualquier otro día excepto sábado o domingo
                let hours = parseInt(text.split("En hasta ")[1].split(" horas")[0]);
                if (hours > 18){
                    $(".shp-summary-package-time span").html("¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");

                }else{
                    $(".shp-summary-package-time span").html("¡Tu pedido llega el día de hoy! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }
            }
        } else if (text.indexOf("Hasta 1 día hábil") >= 0) { //Llega el día siguiente
            if (todayNumber == 5) {//Es vierenes
                if (hourNumber >= 15) { //Ya pasan de las 5PM
                    $(".shp-summary-package-time span").html("¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                } else {//Aun es antes de las 5PM
                    $(".shp-summary-package-time span").html("¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }
                // $(".shp-summary-package-time span").html("¡Tu pedido llega el lunes!");

            } else if ((todayNumber > 5) && (todayNumber < 7)) {//Es sábado
                $(".shp-summary-package-time span").html("¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            } else { // Es cualquier otro día
                $(".shp-summary-package-time span").html("¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }
        } else if(text.indexOf("En hasta 2 días hábiles") >= 0){
            if((todayNumber != 5) || (todayNumber != 6)){
                $(".shp-summary-package-time span").html("Llega pasado mañana. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }else{
                $(".shp-summary-package-time span").html("¡Tu pedido llega el martes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }
        }else {// Lega en más de 1 día
            let days = parseInt(text.split("En hasta ")[1].split(" días hábiles")[0]);
            $(".shp-summary-package-time span").html("Entrega de " + (days - 1) + " a " + days + " 		días hábiles. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
        }
    } catch (e) {
    }
    try {
        let text = $(".srp-shipping-current-single__sla").html();
        if (text.indexOf("horas") > 0) { //Lega el mismo día
            if ((todayNumber > 5) && (todayNumber < 8)) { //Es sábado o domingo
                $(".srp-shipping-current-single__sla").html("¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            } else {//Es cualquier otro día excepto sábado o domingo
                let hours = parseInt(text.split("En hasta ")[1].split(" horas")[0]);
                if(hours > 18){
                    $(".srp-shipping-current-single__sla").html("¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }else{
                    $(".srp-shipping-current-single__sla").html("¡Tu pedido llega el día de hoy! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }
            }
        } else if (text.indexOf("En 1 día hábil") >= 0) { //Llega el día siguiente
            if (todayNumber == 5) {//Es vierenes
                if (hourNumber >= 15) { //Ya pasan de las 5PM
                    $(".srp-shipping-current-single__sla").html("¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                } else {//Aun es antes de las 5PM
                    $(".srp-shipping-current-single__sla").html("¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }
                // $(".srp-shipping-current-single__sla").html("¡Tu pedido llega el lunes!");
            } else if ((todayNumber > 5) && (todayNumber < 7)) {//Es sábado
                $(".srp-shipping-current-single__sla").html("¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            } else { // Es cualquier otro día
                $(".srp-shipping-current-single__sla").html("¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }
        } else if(text.indexOf("En hasta 2 días hábiles") >= 0){
            if((todayNumber != 5) || (todayNumber != 6)){
                $(".srp-shipping-current-single__sla").html("¡Tu pedido llega pasado mañana!<br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }else{
                $(".srp-shipping-current-single__sla").html("¡Tu pedido llega el martes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }
        }else {// Lega en más de 1 día
            let days = parseInt(text.split("En hasta ")[1].split(" días hábiles")[0]);
            $(".srp-shipping-current-single__sla").html("Entrega de " + (days - 1) + " a " + days + " 		días hábiles. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
        }
    } catch (e) {
    }
    setTimeout(() => {
        try {
            let text = $(".shipping-selected-sla-estimate").html();
            if (text.indexOf("horas") > 0) { //Lega el mismo día
                if ((todayNumber > 5) && (todayNumber < 8)) { //Es sábado o domingo
                    $(".shipping-selected-sla-estimate").html("Llega el lunes. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                } else {//Es cualquier otro día excepto sábado o domingo
                    $(".shipping-selected-sla-estimate").html("Llega el día de hoy. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }
            } else if (text.indexOf("Hasta 1 día hábil") >= 0) { //Llega el día siguiente
                if (todayNumber == 5) {//Es vierenes
                    if (hourNumber >= 15) { //Ya pasan de las 5PM
                        $(".shipping-selected-sla-estimate").html("Llega el lunes. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                    } else {//Aun es antes de las 5PM
                        $(".shipping-selected-sla-estimate").html("Llega mañana. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                    }
                    // $(".shipping-selected-sla-estimate").html("Llega el lunes");
                } else if ((todayNumber > 5) && (todayNumber < 7)) {//Es sábado
                    $(".shipping-selected-sla-estimate").html("Llega el lunes. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                } else { // Es cualquier otro día
                    $(".shipping-selected-sla-estimate").html("Llega mañana. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }
            } else if(text.indexOf("En hasta 2 días hábiles") >= 0){
                if((todayNumber != 5) || (todayNumber != 6)){
                    $(".shipping-selected-sla-estimate").html("Llega pasado mañana. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }else{
                    $(".shipping-selected-sla-estimate").html("Llega el martes. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                }
            } else {// Lega en más de 1 día
                let days = parseInt(text.split("En hasta ")[1].split(" días hábiles")[0]);
                $(".shipping-selected-sla-estimate").html("Entrega de " + (days - 1) + " a " + days + " 		días hábiles. <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            }
        } catch (e) {
        }
    }, 1000)
}
function textDeliveryTimeEquivalent(htmlElement) {
    let text = $(htmlElement).html();
    let date = new Date();
    let hourNumber = date.getHours();
    let todayNumber = date.getDay();
    if (text.indexOf("horas") > 0) { //Lega el mismo día
        if ((todayNumber > 5) && (todayNumber < 8)) { //Es sábado o domingo
            $(htmlElement).html("Llega el lunes <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            return "¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
        } else {//Es cualquier otro día excepto sábado o domingo
            let hours = parseInt(text.split("Hasta ")[1].split(" horas")[0]);
            if(hours > 18){
                $(htmlElement).html("Llega mañana <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                return "¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
            }else{
                $(htmlElement).html("Llega el día de hoy <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                return "¡Tu pedido llega hoy! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
            }
        }
    } else if (text.indexOf("Hasta 1 día hábil") >= 0) { //Llega el día siguiente
        if (todayNumber == 5) {//Es vierenes
            if (hourNumber >= 15) { //Ya pasan de las 5PM
                $(htmlElement).html("Llega el lunes <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                return "¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
            } else {//Aun es antes de las 5PM
                $(htmlElement).html("Llega mañana <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
                return "¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
            }
            // $(htmlElement).html("Llega el lunes");
        } else if ((todayNumber > 5) && (todayNumber < 7)) {//Es sábado
            $(htmlElement).html("Llega el lunes <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            return "¡Tu pedido llega el lunes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
        } else { // Es cualquier otro día
            $(htmlElement).html("Llega mañana <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            return "¡Tu pedido llega mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
        }
    } else if(text.indexOf("Hasta 2 días hábiles") >= 0){
        if((todayNumber != 5) || (todayNumber != 6)){
            $(htmlElement).html("Llega pasado mañana <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            return "¡Tu pedido llega pasado mañana! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
        }else{
            $(htmlElement).html("Llega el martes <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
            return "¡Tu pedido llega el martes! <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería"
        }
    } else {// Lega en más de 1 día
        let days = parseInt(text.split("Hasta ")[1].split(" días hábiles")[0]);
        $(htmlElement).html("Entrega de " + (days - 1) + " a " + days + " 		días hábiles <br> El tiempo de entrega dependerá de <br> la carga de pedidos de la paquetería");
        return null;
    }
}
    
//RFC VALIDATION
function validateRFCpersonaFisica() {
    if ($("#client-document").val().length == 10) {
        $("#go-to-shipping").attr("disabled", true);
        if ($(".homoclave-error").length <= 0)
            $("#client-document").after("<span class='homoclave-error'>Introduce tu RFC de persona física de 13 caracteres con homoclave</span>")
    } else if ($("#client-document").val().length == 13) {
        $("#go-to-shipping").attr("disabled", false);
    } else {
        $(".homoclave-error").remove();
    }
}

//////////

    
    

    
  
    
  
    
  
  
    
  
    
  
  