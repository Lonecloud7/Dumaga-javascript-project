let re;

re = /hello/;

console.log(re);

const result = re.exec("hello world");

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

let name;

name = /john|jake/, /logan/, /jason/

const result2 = name.exec("in other to comision a new floor done we will ask john to handle the details, my wife take a vacation! dont worry logan will be taking charge while me and sarah are away")

console.log(result2);

console.log(result[0]);
console.log()

let re1;

re1 = /(many|needing|people)/

console.log(re1);



let validate_email;

let result3 = re1.test("there are many people in the world today needing help");
console.log(validate_email);

validate_email=/(@|\.|com|edu)/

console.log(validate_email);

let result4 = validate_email.exec("test@test.edu.com");
console.log(result4);

let result5 = validate_email.test("test@text.edu");
console.log(result5);
