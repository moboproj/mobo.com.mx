//VARIABLES DE CONFIGURACION
var oxxo_payment_name = "OXXO"


function insert_oxxo_buy_button(){
    $('.box-payment-group2.box-payment-option.PayPalOXXOPaymentGroup').empty();
    var PayPalCheckoutTitleOXXO = document.createElement("p");
    PayPalCheckoutTitleOXXO.setAttribute("id", "PaypalCheckoutDiv2");
    PayPalCheckoutTitleOXXO.classList.add('payment-paypal-title')
    PayPalCheckoutTitleOXXO.innerHTML = '<span class="payment-paypal-title-logo payment-paypal-title-short-logo">PayPal</span>'
    var PayPalCheckoutSubtitleOXXO = document.createElement("p");
    PayPalCheckoutSubtitleOXXO.classList.add('payment-paypal-subtitle')
    PayPalCheckoutSubtitleOXXO.innerHTML = '¡Paga con efectivo en tu OXXO favorito!'
    PayPalCheckoutSubtitleOXXO.style = 'color: black !important; border-bottom: 2px dotted black'
    var PayPalCheckoutUlOXXO = document.createElement("ul");
    PayPalCheckoutUlOXXO.classList.add('payment-paypal-benefits')
    PayPalCheckoutUlOXXO.classList.add('unstyled')
    PayPalCheckoutUlOXXO.classList.add('row-fluid')
    PayPalCheckoutUlOXXO.innerHTML = '<li class="payment-paypal-benefit payment-paypal-benefit-custom  span4" style="display: flex;><p class="payment-paypal-benefit-description"><span style="font-size: 15px; font-weight: bold; padding: 0 5px 0 0;" class="payment-paypal-benefit-description">1.</span><p>Genera tu voucher y recibelo en tu e-mail</p></p></li><li class="payment-paypal-benefit payment-paypal-benefit-custom span4" style="display: flex;><p class="payment-paypal-benefit-description"><span style="font-size: 15px; font-weight: bold; padding: 0 5px 0 0;" class="payment-paypal-benefit-description">2.</span><p>Paga en OXXO con tu voucher impreso o digital</p></p></li><li class="payment-paypal-benefit payment-paypal-benefit-custom span4" style="display: flex;><p class="payment-paypal-benefit-description"><span style="font-size: 15px; font-weight: bold; padding: 0 5px 0 0;" class="payment-paypal-benefit-description">3.</span><p>Guarda tu comprobante; tu pago se verá reflejado en las siguientes 24 hrs</p></p></li>'
    var PayPalFoottextOXXO = document.createElement("p");
    PayPalFoottextOXXO.style = 'margin-top: 20px;'
    PayPalFoottextOXXO.innerHTML = 'Recuerda que tienes 3 días para realizar tu pago de lo contrario se cancelará tu pedido.'
    $('.box-payment-group2.box-payment-option.PayPalOXXOPaymentGroup').append(PayPalCheckoutSubtitleOXXO);
    $('.box-payment-group2.box-payment-option.PayPalOXXOPaymentGroup').append(PayPalCheckoutUlOXXO);
    
    var oxxoBuyButton = document.createElement("button");
    var oxxoBuyText = document.createElement("p");
    oxxoBuyText.innerHTML = 'Finaliza tu compra'
    oxxoBuyText.style = 'text-align: center; font-size: 14px; margin: auto; margin-top: 15px; color: black !important; max-width: 220px;'
    oxxoBuyButton.innerHTML = '<span class="paypal-oxxo-text">Paga con</span><img style="max-width: 15%; display: inline-block;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA2OSAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6JiN4MkY7JiN4MkY7d3d3LnczLm9yZyYjeDJGOzIwMDAmI3gyRjtzdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4yMDAwNzMgMjguNTA2M1YyOS40NzQzQzAuMjAwMDczIDMwLjY0OTMgMS4xNjAwNyAzMS42MTAzIDIuMzM2MDcgMzEuNjEwM0g2Ni42NDkxQzY3LjgyNDEgMzEuNjEwMyA2OC43ODQxIDMwLjY0OTMgNjguNzg0MSAyOS40NzQzVjI4LjUwNjNIMC4yMDAwNzNaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OC43ODQ2IDMuMTAzNTFWMi4xMzU1MUM2OC43ODQ2IDAuOTYwNTEyIDY3LjgyMzYgLTAuMDAwNDg4MjgxIDY2LjY0ODYgLTAuMDAwNDg4MjgxSDIuMzM1NjJDMS4xNjA2MiAtMC4wMDA0ODgyODEgMC4yMDA2MjMgMC45NjA1MTIgMC4yMDA2MjMgMi4xMzU1MVYzLjEwMzUxSDY4Ljc4NDZaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01OC4zMjA0IDkuNzQ4NTRDNTUuMTgyNCA5Ljc0ODU0IDUyLjYyNDQgMTIuMzA3IDUyLjYyNDQgMTUuNDQ0OUM1Mi42MjQ0IDE4LjU4MTcgNTUuMTgyNCAyMS4xNDAxIDU4LjMyMDQgMjEuMTQwMUM2MS40NTc2IDIxLjE0MDEgNjQuMDE1NiAxOC41ODE3IDY0LjAxNTYgMTUuNDQ0OUM2NC4wMTU2IDEyLjMwNyA2MS40NTc2IDkuNzQ4NTQgNTguMzIwNCA5Ljc0ODU0IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4zNzMzIDkuNzQ4NTRDOC4yMzQ5MyA5Ljc0ODU0IDUuNjc2ODggMTIuMzA3IDUuNjc2ODggMTUuNDQ0OUM1LjY3Njg4IDE4LjU4MTcgOC4yMzQ5MyAyMS4xNDAxIDExLjM3MzMgMjEuMTQwMUMxNC41MTAxIDIxLjE0MDEgMTcuMDY4NSAxOC41ODE3IDE3LjA2ODUgMTUuNDQ0OUMxNy4wNjg1IDEyLjMwNyAxNC41MTAxIDkuNzQ4NTQgMTEuMzczMyA5Ljc0ODU0IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Ny44NzMxIDQuNzM1NTlDNTIuNjAwNiA0LjYxNDIyIDUwLjEyMTcgNy45OTUzIDQ2LjUyMzcgMTIuMTY1NEw0My4xMzAxIDE2LjA5ODdMNDguNTA0MiAyMi41MzIzQzQ5Ljc4NDYgMjQuNTA5MiA0Ny4zNDA5IDI2LjQ3MSA0NS44MjQ4IDI0LjY2MjJMNDAuODU2MiAxOC43MzUyTDM2LjAxNDQgMjQuMzQ4MUMzNC40NzI2IDI2LjEzNDYgMzIuMDU2NiAyNC4xMzg1IDMzLjM2NDMgMjIuMTgwM0wzOC42MjA1IDE2LjA2ODNMMzUuMTc2OSAxMS45NjAyTDM3LjM5MiA5LjIxNjc2TDQwLjg5NCAxMy40MjM2TDQzLjkxMjkgOS45MTIxOEM0NS4zOTM5IDguMTkwNDIgNDYuOTA0NiA1LjkwODY2IDQ4Ljg2MjQgNC43MzU1OUgwLjE5NjY1NVYyNi45Njk3SDExLjU3NUMxNi44NDg0IDI2Ljk2OTcgMTkuMjQyMSAyMy44MTY2IDIyLjc0MjIgMTkuNTY0OUwyNi4wNDUyIDE1LjU1MzVMMjAuNTIyOSA5LjI0NjQyQzE5LjE5ODQgNy4yOTk0OSAyMS41OTU3IDUuMjgyMzIgMjMuMTUzMSA3LjA1NTU5TDI4LjI1NjggMTIuODY2N0wzMi45NjkzIDcuMTQzNEMzNC40NjkgNS4zMjA5NiAzNi45Mjk5IDcuMjYxNjQgMzUuNjY3OSA5LjI0OTU0TDMwLjU1NDEgMTUuNDgyMUwzNC4wOTE3IDE5LjUwOTRMMzEuODYyNiAyMi4xNDkxTDI4LjM0MTQgMTguMTc3NUwyNS40MDQ5IDIxLjc1NjlDMjMuOTYzMyAyMy41MTI2IDIyLjUwNDIgMjUuNzUxNCAyMC41NzM2IDI2Ljk2OTdINjguNzgxMlY0LjczNTU5SDU3Ljg3MzFaTTIwLjM3MTEgMTUuNDQ0N0MyMC4zNzExIDIwLjQwMTIgMTYuMzI5NyAyNC40NDMzIDExLjM3MzIgMjQuNDQzM0M2LjQxNTU4IDI0LjQ0MzMgMi4zNzM4MyAyMC40MDEyIDIuMzczODMgMTUuNDQ0N0MyLjM3MzgzIDEwLjQ4NyA2LjQxNTU4IDYuNDQ1NjQgMTEuMzczMiA2LjQ0NTY0QzE2LjMyOTcgNi40NDU2NCAyMC4zNzExIDEwLjQ4NyAyMC4zNzExIDE1LjQ0NDdaTTU4LjMyMDQgMjQuNDQzM0M1My4zNjM1IDI0LjQ0MzMgNDkuMzIwOSAyMC40MDEyIDQ5LjMyMDkgMTUuNDQ0N0M0OS4zMjA5IDEwLjQ4NyA1My4zNjM1IDYuNDQ1NjQgNTguMzIwNCA2LjQ0NTY0QzYzLjI3NzIgNi40NDU2NCA2Ny4zMTg2IDEwLjQ4NyA2Ny4zMTg2IDE1LjQ0NDdDNjcuMzE4NiAyMC40MDEyIDYzLjI3NzIgMjQuNDQzMyA1OC4zMjA0IDI0LjQ0MzNWMjQuNDQzM1oiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD48L3N2Zz4" alt="" class="paypal-logo paypal-logo-oxxo paypal-logo-color-default">'
    oxxoBuyButton.setAttribute("id", "PaypalCheckout2")
    oxxoBuyButton.style = 'margin-top: 15px;'
    $('.box-payment-group2.box-payment-option.PayPalOXXOPaymentGroup').append(oxxoBuyText);
    $('.box-payment-group2.box-payment-option.PayPalOXXOPaymentGroup').append(oxxoBuyButton);
    $('.box-payment-group2.box-payment-option.PayPalOXXOPaymentGroup').append(PayPalFoottextOXXO);
 }

$(document).ready(function () {
  var oxxoPaypalCheckoutCSS = '<style>@import url("https://fonts.googleapis.com/css2?family=Arimo&display=swap");.paypal-oxxo-text{margin-top:10px;font-family: "Arimo", sans-serif; color: #fff; margin: 0 8px 0 8px; font-size: 18px;}#PaypalCheckout2{margin-top:10px;display:block; background-color:#D8232A;padding: 0.5rem;border: none;border-radius: 4px;text-align:center;cursor: pointer; margin: auto;width:80%;}#PaypalCheckout2:hover {filter: brightness(1.2);} .payment-paypal-benefit-custom{padding-left: 10px !important;}</style>';
    $('head').append(oxxoPaypalCheckoutCSS);
    if(window.location.hash.indexOf('payment')!=-1){
        setTimeout(function(){ 
            insert_oxxo_buy_button()
        }, 1000);
    }
    window.addEventListener("hashchange", function() {
      if(window.location.hash.indexOf('payment')!=-1){
        setTimeout(function(){ 
            insert_oxxo_buy_button()
        }, 1000);
      }
    }) 
});

$(window).on("orderFormUpdated.vtex", function(e, t) {
    insert_oxxo_buy_button()
});

$(document).ready(function() {
    if(window.location.hash.indexOf('payment')!=-1){
        setTimeout(function(){
        $('#payment-group-PayPalOXXOPaymentGroup span').text('');
        $('#payment-group-PayPalOXXOPaymentGroup span').text(oxxo_payment_name);
        },800);
    }

  window.addEventListener("hashchange", function() {
    if(window.location.hash.indexOf('payment')!=-1){
    $('#payment-group-PayPalOXXOPaymentGroup span').text('');
    $('#payment-group-PayPalOXXOPaymentGroup span').text(oxxo_payment_name);
    }
  }) 
});

$(window).on('orderFormUpdated.vtex', function(evt, orderForm) {
  if(window.location.hash.indexOf('payment')!=-1){
    $('#payment-group-PayPalOXXOPaymentGroup span').text('');
    $('#payment-group-PayPalOXXOPaymentGroup span').text(oxxo_payment_name);
    }
});

