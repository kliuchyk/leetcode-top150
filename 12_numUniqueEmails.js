/**
 * @param {string[]} emails
 * @return {number}
 */

var numUniqueEmails = function (emails) {
  const uniqueEmails = new Map();

  for (let i = 0; i < emails.length; i++) {
    const strippedEmail = stripEmailAddress(emails[i]);

    if (!uniqueEmails.has(strippedEmail)) {
      uniqueEmails.set(strippedEmail, strippedEmail);
    }
  }

  console.log('uniqueEmails: ', uniqueEmails);
  return uniqueEmails.size;
};

function stripEmailAddress(email) {
  const [localPart, domainPart] = email.split('@');
  const bareLocal = localPart.split('+')[0];
  const strippedLocalPart = bareLocal.replaceAll('.', '');

  return [strippedLocalPart, domainPart].join('@');
}

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ]),
);
