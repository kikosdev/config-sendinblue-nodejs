const SibApiV3Sdk = require('sib-api-v3-sdk');
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = 'xxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx';

var apiInstance = new SibApiV3Sdk.SMTPApi()

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();


module.exports.sendEmail = ( firstName, email) => {

  sendSmtpEmail.to = [{ "name": firstName, "email": email }];
  
  // change idTemplateActive with number template 
  sendSmtpEmail.templateId = idTemplateActive;
  
  // if you have params in your template 
  sendSmtpEmail.params = { "firstName": firstName, "params2": "", "email": email };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function (error) {
    console.error(error);
  });
}
