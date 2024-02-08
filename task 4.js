function password(obj) {

    const { name, bithYear, siteName } = obj;
    if(name==null || bithYear==null || siteName==null || bithYear.toString().length!==4){
        return 'invalid'
    }
    return'${siteName}#${birthYear}@${name}';
}

console.log(password({ name: "kolimuddin",bithYear: 1990,siteName:"google"}))
console.log(password({ name:"rahat",bithYear:2002,siteName:"Facebook"}))
console.log(password({ name:"toky",bithYear:2000,siteName:"Facebook"}))
console.log(password({ name:"maisha",bithYear:2002}))
