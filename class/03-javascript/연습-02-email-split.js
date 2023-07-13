/**********************실무예시**************************/ 
// codecamp@gmail.com
const email = "codecamp@gmail.com";
// 1. 이메일 형식 검증 ( @가 포함됐는지만... )
email.includes("@");
// true
// 2. 계정정보 분리
email.split("@");
// ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
let userMail = email.split("@")[0]
userMail
// 'codecamp'
let company = email.split("@")[1]
company
// 'gmail.com'
// 3. 마지막 4글자 마스킹
let maskingMail = []
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// ['c', 'o', 'd', 'e']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// ['c', 'o', 'd', 'e', '*', '*', '*', '*']
// 4. 모두 합치기
maskingMail.join("") + "@" + company
// 'code****@gmail.com'
let result = maskingMail.join("") + "@" + company
result
// 'code****@gmail.com'





