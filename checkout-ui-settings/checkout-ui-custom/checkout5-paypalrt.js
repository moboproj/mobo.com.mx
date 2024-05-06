//VARIABLES DE CONFIGURACION
var paypal_rt_paymentname = "PayPal"
var paypal_sdk_clientID = "AYl0iPjJtcBIieZL5us5vbNBRDI9Q17AKZzQrpxADTVagD1RAy0M-BshcMDtlqATc4fWkt_hKt2VW32d"


var paypalscript = document.createElement('script');
    paypalscript.type = 'text/javascript';
    paypalscript.src = 'https://www.paypal.com/sdk/js?client-id='+ paypal_sdk_clientID + '&vault=true&locale=es_MX';
    document.body.appendChild(paypalscript);

var PayPalRTBody = `
      <div id="paypal-loading" style="width: 100%;height: auto;margin: auto;display: flex; flex-direction: column; justify-content: space-around;">
        <div id="loader"></div>
      </div> 
      
      <div id="main-paypal" class="no-show" style="width: 100%;height: auto;margin: auto;display: flex; flex-direction: column; justify-content: space-around;">
        
        <p id="select-token-text" class="paypal-email-text no-show"><p class="payment-paypal-subtitle">Paga con PayPal</p></p>
        <form id="form-p" action="" style="display: flex; align-items: center;">
        <table style="width: 100%;">
            <tbody id="table"></tbody>
        </table>
        </form>
        <ul id="no-contracts-paypal" class="payment-paypal-benefits unstyled row-fluid"><li class="payment-paypal-benefit payment-paypal-benefit-protection span4"><p class="payment-paypal-benefit-title">Protecci&oacuten al Comprador</p></li><li class="payment-paypal-benefit payment-paypal-benefit-easy span4"><p class="payment-paypal-benefit-title">F&aacutecil y <br> c&oacutemodo</p></li><li class="payment-paypal-benefit payment-paypal-benefit-safe span4"><p class="payment-paypal-benefit-title">M&aacutes <br> seguro</p></li></ul>
        <p id="no-contracts-paypal" class="payment-paypal-help"><span class="payment-paypal-help-text"></p>

        <div id="paypal-buy-container" class="no-show" style="display: flex; flex-direction: column; padding-left: 10px; padding-right: 10px;margin-top: 10px;width:100%;">
            <p id="no-contract-text-main" class="no-contract-text-button-main"><strong>Finaliza tu compra</strong></p>
            <button style="background-color: #ffc43a;padding: 0.5rem;border: none;border-radius: 5rem;text-align: center;cursor: pointer; margin: auto;width:250px; font-family: 'Inter', sans-serif;">Pagar con<img style="height: 1rem; margin-left: 10px;" src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg"></img></button>
        </div>

        <div id="new-contract-paypal"  class="no-show" style="display:flex;flex-direction: column;">
            <div id="paypal-buy-container" style="display: flex; padding-left: 10px; padding-right: 10px;margin-top: 30px;">
            <p class="no-contract-text-button-main">o haz clic en el bot&oacuten blanco para pagar con otra cuenta PayPal</p>
            <div id="paypal-button-container" class="no-show"></div>
            </div>
        </div>

        <div id="no-contract-paypal" class="no-show" style="display:flex;flex-direction: column;">
            <div id="paypal-buy-container" style="display: flex; flex-direction: column; padding-left: 10px; padding-right: 10px;margin-top: 30px; margin: auto;width: 250px;">
                <p class="no-contract-text-button-main">Finaliza tu compra</p>
                <div id="paypal-button-no-contract"></div>
            </div>
        </div>
        
      </div>
      
      <div id="not-logged-in-paypal" class="no-show" style="width: 100%;height: auto;margin: auto;display: flex; flex-direction: column; justify-content: space-around;">
        <p class="not-logged-text">Para poder continuar, es necesario que te identifiques.</p>
      </div>
`

const stylerange = document.createRange()
const stylefrag = stylerange.createContextualFragment(` 
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

        #paypal-button-container{
        max-width: 150px;
        margin: auto;
        height: 30px;
        }

        .paypal-email{
        display: inline-block;
        }

        .not-logged-text{
        text-align:center;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        margin: auto;
        color: black;
        }

        .paypal-email-text{
        font-family: 'Inter', sans-serif;
        font-size: 14px !important;
        margin-left: 10px;
        color: black;
        }

        .no-show {
        display: none !important;
        }

        #loader {
        z-index: 1;
        margin: auto;
        width: 20px;
        height: 20px;
        border: 8px solid #f3f3f3;
        border-radius: 50%;
        border-top: 8px solid #253B80;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
        }

        #loader-button {
        z-index: 1;
        margin: auto;
        width: 20px;
        height: 20px;
        border: 8px solid #f3f3f3;
        border-radius: 50%;
        border-top: 8px solid #253B80;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
        }

        @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }

        .animate-bottom {
        position: relative;
        -webkit-animation-name: animatebottom;
        -webkit-animation-duration: .5s;
        animation-name: animatebottom;
        animation-duration: .5s
        }

        @-webkit-keyframes animatebottom {
        from { bottom:-100px; opacity:0 } 
        to { bottom:0px; opacity:1 }
        }

        @keyframes animatebottom { 
        from{ bottom:-100px; opacity:0 } 
        to{ bottom:0; opacity:1 }
        }

        .agreement-button{
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 700;
        padding: 2px 15px 2px 15px;
        height: 35px;
        color: #3b7bbf;
        background-color: #FFCC00;
        }

        .login-button{
        border: none;
        font-family: 'Inter', sans-serif;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 700;
        padding: 2px 15px 2px 15px;
        height: 35px;
        color: #ffff;
        background-color: #0075FF;
        width: 150px;
        margin: auto;
        margin-top: 25px;
        }

        .no-contract-text{
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        margin: auto;
        color: black !important;
        }

        .no-contract-text-button{
        text-align: center;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        margin: auto;
        margin-top: 30px;
        color: black !important;
        max-width: 220px;
        }

        .no-contract-text-button-main{
        text-align: left;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        margin: auto;
        margin-bottom: 20px;
        max-width: 240px;
        color: black;
        }


        #msi-select{
        margin-bottom:15px;
        }

        .msi-text{
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        color: #888888;
        }
    </style>
`)

function is_not_loggedin(){
  var PaypalRTNLSubtitle = document.createElement("p");
  PaypalRTNLSubtitle.classList.add('payment-paypal-subtitle')
  PaypalRTNLSubtitle.innerHTML = '¿Por qu&eacute comprar con PayPal?'
  var PaypalRTNLUl = document.createElement("ul");
  PaypalRTNLUl.classList.add('payment-paypal-benefits')
  PaypalRTNLUl.classList.add('unstyled')
  PaypalRTNLUl.classList.add('row-fluid')
  PaypalRTNLUl.innerHTML = '<li class="payment-paypal-benefit payment-paypal-benefit-protection span4"><p class="payment-paypal-benefit-title">Protecci&oacuten al Comprador</p><p class="payment-paypal-benefit-description">Tus compras est&aacuten protegidas por 180 d&iacuteas*.</p></li><li class="payment-paypal-benefit payment-paypal-benefit-easy span4"><p class="payment-paypal-benefit-title">F&aacutecil y r&aacutepido</p><p class="payment-paypal-benefit-description">Usa tu e-mail y contraseña para pagar.</p></li><li class="payment-paypal-benefit payment-paypal-benefit-safe span4"><p class="payment-paypal-benefit-title">M&aacutes seguro</p><p class="payment-paypal-benefit-description">Tus datos financieros no ser&aacuten compartidos.</p></li>'
  var PayPalRTNLFoottext = document.createElement("p");
  PayPalRTNLFoottext.classList.add('payment-paypal-postscript')
  PayPalRTNLFoottext.classList.add('row-fluid')
  PayPalRTNLFoottext.style.marginTop = "25px"
  PayPalRTNLFoottext.innerHTML = '<span class="span9">*Sujeto al cumplimiento de los requisitos del Programa de protecci&oacuten del comprador.</span>'
  var PaypalRTNLHideButton = document.createElement("button");
  PaypalRTNLHideButton.setAttribute("id", "PaypalInit")
  PaypalRTNLHideButton.innerHTML = "INICIAR SESI&OacuteN"
  PaypalRTNLHideButton.classList.add('login-button')
  PaypalRTNLHideButton.setAttribute("type","button")
  PaypalRTNLHideButton.onclick = function () {
    vtexid.start()
  };
  
  PaypalRTNLHideButton.setAttribute("style", "display:none;")
  $(".box-payment-group2.box-payment-option.PayPalRTPaymentGroup").append(PaypalRTNLSubtitle);
  $(".box-payment-group2.box-payment-option.PayPalRTPaymentGroup").append(PaypalRTNLUl);
  $(".box-payment-group2.box-payment-option.PayPalRTPaymentGroup").append(PayPalRTNLFoottext);
  $(".box-payment-group2.box-payment-option.PayPalRTPaymentGroup").append(PaypalRTNLHideButton);
}

async function buildForm() {
  let a = await getBillingAgreements()
  document.getElementById("table").innerHTML="";
  if (a.hasOwnProperty('tokens') && a.tokens.length > 0 ){
  for (let index = 0; index < a.tokens.length; index++) {
    let trash = document.createRange()
    let trashIcon = trash.createContextualFragment(` 
      <svg fill="#90A0A0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"/></svg>
    `)
    let TR = document.createElement("tr");let TRSelect = document.createElement("tr");let TDSelect = document.createElement("td");let TDInput = document.createElement("td");let TDEmail = document.createElement("td");let TDToken = document.createElement("td");let TDTrash = document.createElement("td");let IN = document.createElement("input");let LA = document.createElement("label");let DI= document.createElement("div")
    IN.type = "radio"
    IN.name = "payment"
    IN.id = "payment" + index
    LA.htmlFor = "payment" + index
    LA.innerText = a.tokens[index].email
    LA.className = "paypal-email-text"
    DI.setAttribute('data-email', a.tokens[index].email)
    IN.setAttribute('data-email', a.tokens[index].email)
    DI.setAttribute('onClick','cancelBillingAgreement(this.getAttribute("data-email"));')
    IN.setAttribute('onClick','postFinancialOptions(this.getAttribute("data-email"));updateSelectedInfo(this.getAttribute("data-email")),document.getElementById("paypal-buy-container").classList.remove("no-show");')
    DI.appendChild(trashIcon)
    TDTrash.append(DI)
    TDInput.appendChild(IN)
    TDEmail.appendChild(LA)
    TR.appendChild(TDInput)
    TR.appendChild(TDEmail)
    TR.appendChild(TDTrash)
    TDSelect.id = "select" + a.tokens[index].email
    TDSelect.className = "TRSelect"
    TDSelect.colSpan = 3
    TRSelect.appendChild(TDSelect)
    document.getElementById("table").appendChild(TR)
    document.getElementById("table").appendChild(TRSelect)
  }
  document.getElementById("main-paypal").classList.remove("no-show");
  document.getElementById("paypal-loading").classList.add("no-show");
  document.getElementById("no-contracts-paypal").classList.add("no-show")
  document.getElementById("no-contract-text-main").classList.remove("no-show");
  document.getElementById("select-token-text").classList.remove("no-show");
  document.getElementById("new-contract-paypal").classList.remove("no-show");
  document.getElementById("no-contract-paypal").classList.add("no-show");
  createBillingAgreement()
  check_if_selected(a)
  }else{
    document.getElementById("main-paypal").classList.remove("no-show");
    document.getElementById("no-contracts-paypal").classList.remove("no-show");
    document.getElementById("paypal-loading").classList.add("no-show");
    document.getElementById("no-contract-text-main").classList.add("no-show");
    document.getElementById("select-token-text").classList.add("no-show");
    document.getElementById("paypal-buy-container").classList.add("no-show");
    document.getElementById("new-contract-paypal").classList.add("no-show");
    document.getElementById("no-contract-paypal").classList.remove("no-show");
    createBillingAgreement()
  }

}

async function getBillingAgreements() {
  let client_email = vtexjs.checkout.orderForm.clientProfileData.email
  billing = await fetch(`/_v/paypalstore.payment-provider/v0/payments/billingAgreement/`+client_ID+"?email="+client_email, {
      method: "GET",
      redirect: "follow"
    })
    .then(response => response.json())
    .catch(error => console.log("error",error));
    console.log("Get Billing Agreements: ",billing)
    return billing
}

async function postFinancialOptions(email) {
  let price = vtexjs.checkout.orderForm.value
  let country = vtexjs.checkout.orderForm.storePreferencesData.countryCode
  let currency = vtexjs.checkout.orderForm.storePreferencesData.currencyCode
  financialOp = await fetch(`/_v/paypalstore.payment-provider/v0/payments/financialOptions`, {
      method: "POST",
      redirect: "follow",
      body:JSON.stringify({
      "msiEmail": email,
      "clientProfileId": client_ID,
      "amount": price,
      "currency": currency,
      "country": country
    })
        })
    .then(response => response.json())
    .catch(error => console.log("error",error));
    console.log("Post Financial Options: ",financialOp)
    updateOptionsMSI(email,financialOp)
}

function updateOptionsMSI(email,terms){
    $( "#msi-select" ).remove();
    $( "#msi-text" ).remove();
    if(terms.options.length == 1){
      let PS = document.createElement('p')
      PS.className = "msi-text"
      PS.id = "msi-text"
      PS.innerHTML = "Meses sin intereses no disponibles"
      document.getElementById("select"+email).append(PS)
      }else{
        let PS = document.createElement('p')
        PS.className = "msi-text"
        PS.id = "msi-text"
        let SE = document.createElement('select')
        let DOP = document.createElement('option')
        PS.innerHTML = "Puedes diferir tu pago a meses"
        SE.id = "msi-select"
        DOP.value = 1;
        DOP.innerHTML = "Elige un plazo"
        DOP.setAttribute('data-term', terms.options[0].interval_duration)
        DOP.setAttribute("hidden", "hidden");
        SE.setAttribute('data-email', email)
        SE.setAttribute('data-default-term', terms.options[0].interval_duration)
        SE.setAttribute('onChange','updateSelectedInfo(this.getAttribute("data-email"),this.value);')
        SE.appendChild(DOP);
      for (let index = 0; index < terms.options.length; index++) {
        let OP = document.createElement('option')
        OP.value = terms.options[index].term;
        OP.innerHTML = terms.options[index].term + " " + "Meses sin Intereses";
        OP.setAttribute('data-term',terms.options[index].interval_duration)
        SE.appendChild(OP);
        document.getElementById("select"+email).append(PS)
        document.getElementById("select"+email).append(SE)
    }
  }
}

async function cancelBillingAgreement(email) {
  document.getElementById("main-paypal").classList.add("no-show");
  document.getElementById("paypal-loading").classList.remove("no-show");
  cancelAgreement = await fetch(`/_v/paypalstore.payment-provider/v0/payments/billingAgreement/` + client_ID + '/cancelAgreement/' + email, {
      method: "POST",
      redirect: "follow",
    })
    .then(response => response.json())
    .catch(error => console.log("error",error));
    console.log("Cancel Agreement: ",cancelAgreement)
    buildForm()
}

async function updateSelectedInfo(email) {
  var data
  if($('#msi-select').val()){
    let select = document.getElementById("msi-select")
    let interval_duration = parseInt($('#msi-select').val())
    let term = select.querySelector(':checked').getAttribute("data-term")
    data = JSON.stringify({
      "emailToken": email,
      "msi": {
          "interval_duration": interval_duration,
          "term": term
        }
    });
  }else{
    data = JSON.stringify({
      "emailToken": email,
    });
  }
  selectedInfo = await fetch(`/_v/paypalstore.payment-provider/v0/payments/billingAgreement/setSelectedTokenAndMSI/` + client_ID, {
      method: "PUT",
      redirect: "follow",
      body: data
    })
    .then(response => response.json())
    .catch(error => console.log("error", error));
    console.log("Update Selected Info: ", selectedInfo)
}

async function createBillingAgreement() {
  let client_email = vtexjs.checkout.orderForm.clientProfileData.email
  createInfo = await fetch(`/_v/paypalstore.payment-provider/v0/payments/billingAgreement`, {
      method: "POST",
      redirect: "follow",
      body:JSON.stringify({
        "clientProfileId": client_ID,
        "email": client_email,
      })
    })
    .then(response => response.json())
    .catch(error => console.log("error", error));
    console.log("Create Billing Agreement: ", createInfo)
    $( "#paypal-button-container" ).empty();
    document.getElementById("paypal-button-container").classList.remove("no-show")
    if(createInfo.status == 500){
      vtex.checkout.MessageUtils.showPaymentUnauthorizedMessage({
        text: createInfo.stack,
      })
    }else{
      renderButtonPaypal(createInfo.token)
    }
}

async function activateBillingAgreement(token) {
  console.log("Token desde activate =",token)
  activate = await fetch(`/_v/paypalstore.payment-provider/v0/payments/billingAgreement/activate?ba_token=` + token, {
      method: "POST",
      redirect: "follow",
    })
    .then(response => response.json())
    .catch(error => console.log("error", error));
    console.log("Activate Billing Angreement: ", activate)
    buildForm()
}

function renderButtonPaypal(token){
  let FUNDING_SOURCES = [paypal.FUNDING.PAYPAL];
  FUNDING_SOURCES.forEach((fundingSource) => {
    const button = paypal.Buttons({
      style: {
        color:   'white',
        shape:   'rect',
        label:   'paypal'
      },
      fundingSource: fundingSource,
      createBillingAgreement: function(data, actions) {
        document.getElementById("main-paypal").classList.add("no-show");
        document.getElementById("paypal-loading").classList.remove("no-show");
        return token;
    },
      onCancel: () => {
      document.getElementById("main-paypal").classList.remove("no-show");
      document.getElementById("paypal-loading").classList.add("no-show");
        },
      onApprove: (data) => {
        activateBillingAgreement(token)
        $( "#paypal-button-container" ).empty();
      },
    });
    const button_new = paypal.Buttons({
      style: {
        layout: 'vertical',
        color:   'gold',
        shape:   'pill',
        label:   'pay',
        size: 'medium'
      },
      fundingSource: fundingSource,
      createBillingAgreement: function(data, actions) {
        document.getElementById("main-paypal").classList.add("no-show");
        document.getElementById("paypal-loading").classList.remove("no-show");
        return token;
    },
      onCancel: () => {
         document.getElementById("main-paypal").classList.remove("no-show");
         document.getElementById("paypal-loading").classList.add("no-show");
        },
      onApprove: (data) => {
        activateBillingAgreement(token)
        $( "#paypal-button-no-contract" ).empty();
      },
    });
    $( "#paypal-button-container" ).empty();
    $( "#paypal-button-no-contract" ).empty();
    button.render("#paypal-button-container");
    button_new.render("#paypal-button-no-contract");
  });
}

function check_if_selected(response) {
  if(response.selectedToken.hasOwnProperty('email')){
  $('input[data-email="'+ response.selectedToken.email + '"]').prop( "checked", true );
  $('input[data-email="'+ response.selectedToken.email + '"]').trigger('onclick');
  document.getElementById("paypal-buy-container").classList.remove("no-show");
  }else{
    document.getElementById("paypal-buy-container").classList.add("no-show");
  }
}

let client_ID;

function initPaypalRT(){
  setTimeout(function(){
    $('.box-payment-group2.box-payment-option.PayPalRTPaymentGroup').empty();
    $(".box-payment-group2.box-payment-option.PayPalRTPaymentGroup").append(PayPalRTBody);
    $("head").append(stylefrag);
              if(vtexjs.checkout.orderForm.loggedIn == true){
                  client_ID = vtexjs.checkout.orderForm.userProfileId
        		  setTimeout(function(){
                    if($("#main-paypal").length){
                          buildForm()
                    }else{
                      initPaypalRT()
                    }
        		  },1000);
              }else if(vtexjs.checkout.orderForm.loggedIn == false){
                  if($("#main-paypal").length){
                    document.getElementById("paypal-loading").classList.add("no-show");
                    document.getElementById("no-contract-text-main").classList.add("no-show");
                    is_not_loggedin()
                    if($("#payment-group-PayPalRTPaymentGroup").hasClass("active")){
                    vtexid.start()
                      setTimeout(function(){
                         $("#PaypalInit").show()
                       },1000);
                    }
                    document.getElementById("payment-group-PayPalRTPaymentGroup").addEventListener("click",function() {
                      if($("#payment-group-PayPalRTPaymentGroup").hasClass("active") && document.getElementById("main-paypal") && vtexjs.checkout.orderForm.loggedIn == false){
                        vtexid.start()
                        setTimeout(function(){
                         $("#PaypalInit").show()
                       },1000);
                      }
                    });
                  }else{
                    initPaypalRT()
                  }
                      }else{
                          console.error("PayPal RT Service - VtexJS Error")
                  }
          },2000);
}


$(document).ready(function () {
  if(window.location.hash.indexOf('payment')!=-1){
    initPaypalRT()
  }
  window.addEventListener("hashchange", function() {
    if(window.location.hash.indexOf('payment')!=-1){
      initPaypalRT()
    }
  }) 
});
        
$(document).ready(function() {
    if(window.location.hash.indexOf('payment')!=-1){
        setTimeout(function(){
            $('#payment-group-PayPalRTPaymentGroup span').text('');
			$('#payment-group-PayPalRTPaymentGroup span').text(paypal_rt_paymentname);
        },800);
    }

  window.addEventListener("hashchange", function() {
    if(window.location.hash.indexOf('payment')!=-1){
        $('#payment-group-PayPalRTPaymentGroup span').text('');
		    $('#payment-group-PayPalRTPaymentGroup span').text(paypal_rt_paymentname);
    }
  }) 
});

$(window).on('orderFormUpdated.vtex', function(evt, orderForm) {
  if(window.location.hash.indexOf('payment')!=-1){
    if(!$("#main-paypal").length){
      initPaypalRT()
    }
    $('#payment-group-PayPalRTPaymentGroup span').text('');
    $('#payment-group-PayPalRTPaymentGroup span').text(paypal_rt_paymentname);
  }
});


