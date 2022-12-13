let myname = "Mark",
    product = `Hello ${myname}`,
    discount = true,
    price = Number.parseFloat("12.23asdA");

let person = {
    firstName: 'Mark',
    lastName: 'Kirby'
}



// comment here
// showMessage("Changed.....");

/*
  Longer Comment here
  Can be many lines

 */

product = product.toUpperCase(product)

showMessage(person.firstName);
const me=document.getElementById('message')
me.style.color="red";
me.style.fontWeight="800";
me.style.fontSize="148px";

const button = document.getElementById('see-review')

button.addEventListener('click', function(){
    
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = "CLOSE REVIEW"
    }
    else {
        review.classList.add('d-none');
        button.textContent = "SEE REVIEW"
    }
    
    console.log('clicked')

})

console.log(`Product:${product} is of length ${product.length}`);
console.log(typeof person);
console.log(`Price is: ${price}`);

console.log("---------------------------");

if ( 5 === 5) { 
    console.log('Yes')
}

if ( 5 > 10) { 
    console.log('No')
}

if ( 5 >= 5) { 
    console.log('Yes 5>=5')
}


let count = 0;
while ( count <= 6) {
    console.log (`Count is ${count}`)
    count++;
}

// for (let i=0; i<5; i++) {
//     console.log(`i is ${i}`);
// }

fn('Data is the message','mark');
fn('namoeth 2334234','kirby');
fn('namoeth 2334234','aakirby');

changeDiscont(12.9);

let person2 = {
    name: 'Mark',
    age: 43,
    partTime: false,
    showInfo: function() {
        console.log (this.name,'is',this.age,'and works', this.partTime ? 'part-time' : 'full-time')
    }
};

person2.showInfo()

let now = new Date()
console.log(now.toDateString())
console.log('Pi is:',Math.PI)

let values = [ 'aa', 'bb', 'cc', 'dd'];
console.log(values)

