let fruadFlag = true;

async function postFraudnet() {
    let clientID_Fraudnet = vtexjs.checkout.orderForm.userProfileId
    let orderFormId_Fraudnet = vtexjs.checkout.orderForm.orderFormId
    let customerEmail = vtexjs.checkout.orderForm.clientProfileData.email
    fraudnet = await fetch('/_v/paypalstore.payment-provider/v0/fraud-net/client-metadata-id', {
    method: 'POST',
    body:JSON.stringify({
        "clientProfileId": clientID_Fraudnet,
        "orderFormId": orderFormId_Fraudnet,
        "customerEmail": customerEmail
        })
})
.then(function(response) {
    if(response.ok) {
        return response.json()
    } else {
        throw "Error Fraudnet Script";
    }

})
.catch(function(err) {
    console.log(err);
});
    return fraudnet
}

async function insertFraudnet(){
    let fraudnet_key = await postFraudnet()
    console.log("Inserted Fraudnet")
    $('head').append('<script type="application/json" fncls="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99">{"f":"' + fraudnet_key.cmid + '","s":"' + fraudnet_key.fraudNetWebSourceId + '"}</script>');
    $('head').append('<script type="text/javascript" src="https://c.paypal.com/da/r/fb.js"></script>')
    fruadFlag = false
}

function initFraudnet(){
    if(fruadFlag && vtexjs.checkout.orderForm.clientProfileData != null && vtexjs.checkout.orderForm.clientProfileData.email != null){
        insertFraudnet()
    }else{
        console.log("Profile Data: ", vtexjs.checkout.orderForm.clientProfileData, "Inserted?: ", fruadFlag)
    }
}

$(document).ready(function() {
  setTimeout(function(){
  	initFraudnet()
  },800);
});

$(window).on('hashchange', function() {
    console.log("Fraudnet Hashchange")
    initFraudnet()
});
