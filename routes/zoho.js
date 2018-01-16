
const express = require('express')
const rp = require('request-promise')
const router = express.Router()


router.use(function timeLog (req, res, next) {
  console.log('Reach index at Time: ', Date.now())
  next()
})


router.get('/getzohocontact', function(req, res, next) {
  console.log('here');
    rp('https://crm.zoho.com/crm/private/json/Contacts/getRecords?authtoken=1f29273ea641855c33fdd5dd81585109&scope=crmapi&selectColumns=('+
       'Account Name,' +
       'First Name,' +
       'Last Name,' +
       'Phone,' +
       'Email' +
       ')'
    )
    .then(function (response) {
      response = JSON.parse(response);
      let contacts = response.response.result.Contacts.row;
      let real_contacts = [];
      for(let i=0; i<contacts.length; i++){
        let contact = contacts[i].FL;
        real_contact = {
          firstName : '',
          lastName : '',
          email : '',
          phone : '',
          accountName:''
          
        }
        for(let j=0; j<contact.length;j++){
          let item = contact[j];
          switch(item.val){
            case 'First Name':
              real_contact.firstName = item.content;
              break;
            case 'Last Name':
              real_contact.lastName = item.content;
              break;
            case 'Email':
              real_contact.email = item.content;
              break;
            case 'Phone':
              real_contact.phone = item.content;
               break;
            case 'Account Name':
              real_contact.accountName = item.content;
              break;
            case 'TWM System Name':
              real_contact.accountName = item.content;
            break;
            
            default:
              console.log('Uncatched Item', item.val, item.content);
          }
        }
        real_contacts.push(real_contact);
      }
    res.send(real_contacts);
  })
  .catch(function (err) {
      console.log('Error', err);
  });
});


module.exports = router