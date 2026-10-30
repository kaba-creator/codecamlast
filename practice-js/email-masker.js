
let emailMask = '';
function maskEmail(email){

 let indexAt='';
 let replacer = '';
 let domain = '';


 indexAt = email.indexOf('@');
//  console.log(indexAt);
 
 domain = email.slice(indexAt - 1);
//  console.log(domain)

 replacer = email.slice(1, indexAt - 1);
//  console.log(replacer);

 let c = email.charAt(0);
//  console.log(c);

  const [username, domainName] = email.split('@')

if(username.length <= 2){
  console.log(email)
  return;
}
 
 emailMask = c + '*'.repeat(replacer.length) + domain;

 console.log(emailMask)

}

maskEmail("apple.pie@example.com");
maskEmail("j@domain.com");



