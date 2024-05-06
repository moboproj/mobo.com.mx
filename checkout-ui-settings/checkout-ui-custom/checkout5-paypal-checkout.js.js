//VARIABLES DE CONFIGURACION
var paypal_checkout_payment_name = "PayPal"


function insert_PaypalCheckout_buy_button(){
    $('.box-payment-group2.box-payment-option.PayPalCheckoutPaymentGroup').empty();
    var PayPalCheckoutTitle = document.createElement("p");
    PayPalCheckoutTitle.setAttribute("id", "PaypalCheckoutDiv3");
    PayPalCheckoutTitle.classList.add('payment-paypal-title')
    PayPalCheckoutTitle.innerHTML = '<span class="payment-paypal-title-logo payment-paypal-title-short-logo">PayPal</span>'
    var PayPalCheckoutSubtitle = document.createElement("p");
    PayPalCheckoutSubtitle.classList.add('payment-paypal-subtitle')
    PayPalCheckoutSubtitle.innerHTML = '¿Por qué comprar con PayPal?'
    var PayPalCheckoutUl = document.createElement("ul");
    PayPalCheckoutUl.classList.add('payment-paypal-benefits')
    PayPalCheckoutUl.classList.add('unstyled')
    PayPalCheckoutUl.classList.add('row-fluid')
    PayPalCheckoutUl.innerHTML = '<li class="payment-paypal-benefit payment-paypal-benefit-protection span4"><p class="payment-paypal-benefit-title">Protección al Comprador</p><p class="payment-paypal-benefit-description">Tus compras están protegidas por 180 días.*</p></li><li class="payment-paypal-benefit payment-paypal-benefit-easy span4"><p class="payment-paypal-benefit-title">Fácil y rápido</p><p class="payment-paypal-benefit-description">Usa tu e-mail y contraseña para pagar.</p></li><li class="payment-paypal-benefit payment-paypal-benefit-safe span4"><p class="payment-paypal-benefit-title">Más seguro</p><p class="payment-paypal-benefit-description">Tus datos financieros no serán compartidos.</p></li>'
    var PayPalFoottext = document.createElement("p");
    PayPalFoottext.classList.add('payment-paypal-postscript')
    PayPalFoottext.classList.add('row-fluid')
    PayPalFoottext.innerHTML = '<span class="span9">*Sujeto al cumplimiento de los requisitos del Programa de protección del comprador.</span>'
    var PayPalCheckoutHideButton = document.createElement("button");
    PayPalCheckoutHideButton.setAttribute("id", "PaypalCheckout3")
    PayPalCheckoutHideButton.setAttribute("style", "display:none;")
    $('.box-payment-group2.box-payment-option.PayPalCheckoutPaymentGroup').append(PayPalCheckoutSubtitle);
    $('.box-payment-group2.box-payment-option.PayPalCheckoutPaymentGroup').append(PayPalCheckoutUl);
    $('.box-payment-group2.box-payment-option.PayPalCheckoutPaymentGroup').append(PayPalFoottext);
    $('.box-payment-group2.box-payment-option.PayPalCheckoutPaymentGroup').append(PayPalCheckoutHideButton);
 }
  
$(document).ready(function() {
    if(window.location.hash.indexOf('payment')!=-1){
        setTimeout(function(){
        insert_PaypalCheckout_buy_button()
        },1000);
    }

    window.addEventListener("hashchange", function() {
        if(window.location.hash.indexOf('payment')!=-1){
            insert_PaypalCheckout_buy_button()
            setTimeout(function(){
                if(!$("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                    document.getElementById("payment-group-PayPalCheckoutPaymentGroup").addEventListener("click",function() {
                        if($("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                            setTimeout(function(){
                                $("#PaypalCheckout3").click() 
                                $("#PaypalCheckout3").remove()
                            },800);
                        }
                        document.getElementById("payment-group-PayPalCheckoutPaymentGroup").removeEventListener("click",function() {
                            if($("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                                setTimeout(function(){
                                    $("#PaypalCheckout3").click() 
                                    $("#PaypalCheckout3").remove()
                                },800);
                            }
                        });
                    });
                }else{
                    setTimeout(function(){
                        $('.payment-confirmation-wrap').show();
                    },500);
                }
            }, 800);
        }
    }) 
});

$(document).ready(function() {
    if(window.location.hash.indexOf('payment')!=-1){
        insert_PaypalCheckout_buy_button()
        setTimeout(function(){
            if(!$("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                $("#payment-group-PayPalCheckoutPaymentGroup").on("click",function() {
                     if($("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                       setTimeout(function(){
                        $("#PaypalCheckout3").click() 
                        $("#PaypalCheckout3").remove()
                       },1000);
                     }
                     $("#payment-group-PayPalCheckoutPaymentGroup").off("click",function() {
                     if($("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                        setTimeout(function(){
                        $("#PaypalCheckout3").click() 
                        $("#PaypalCheckout3").remove()
                       },1000);
                     }
                     });
                 });
                }else{
                  setTimeout(function(){
                       $('.payment-confirmation-wrap').show();
                      },500);
                }
        }, 800);
    }
});

$(document).ready(function() {
    if(window.location.hash.indexOf('payment')!=-1){
        setTimeout(function(){
			$('#payment-group-PayPalCheckoutPaymentGroup span').text('');
			$('#payment-group-PayPalCheckoutPaymentGroup span').text(paypal_checkout_payment_name);
        },800);
    }

  window.addEventListener("hashchange", function() {
    if(window.location.hash.indexOf('payment')!=-1){
			$('#payment-group-PayPalCheckoutPaymentGroup span').text('');
			$('#payment-group-PayPalCheckoutPaymentGroup span').text(paypal_checkout_payment_name);
    }
  }) 
});


$(window).on('orderFormUpdated.vtex', function(evt, orderForm) {
  if(window.location.hash.indexOf('payment')!=-1){
    insert_PaypalCheckout_buy_button()
        setTimeout(function(){
            if(!$("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                $("#payment-group-PayPalCheckoutPaymentGroup").on("click",function() {
                     if($("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                       setTimeout(function(){
                        $("#PaypalCheckout3").click() 
                        $("#PaypalCheckout3").remove()
                       },1000);
                     }
                     $("#payment-group-PayPalCheckoutPaymentGroup").off("click",function() {
                     if($("#payment-group-PayPalCheckoutPaymentGroup").hasClass("active")){
                        setTimeout(function(){
                        $("#PaypalCheckout3").click() 
                        $("#PaypalCheckout3").remove()
                       },1000);
                     }
                     });
                 });
                }else{
                  setTimeout(function(){
                       $('.payment-confirmation-wrap').show();
                      },500);
                }
        }, 800);
    $('#payment-group-PayPalCheckoutPaymentGroup span').text('');
	$('#payment-group-PayPalCheckoutPaymentGroup span').text(paypal_checkout_payment_name);
  }
});
    