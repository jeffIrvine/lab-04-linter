const stripper = (string) => {
    return string.match(/[(){}\[\]]/g);

    // const brackets = string.replace(/[\-A-Za-z0-9,"'+*/=.,;:&$!?@#%^<>|_]/g, '');
    // const array = brackets.split('').filter(item => item.trim());  
}

const booger = stripper('$#function(blah, blah) {blah}')
console.log(booger);

