function counter (){
    let count = 0;
    const numbs = [];
    const people = {};
    return count;
}

function counter () {
    let count = 10;

    return function (){
        count = count + 1;
         console.log('inside the inner function' , count)
    }
}

// const innerFunc = counter()
// innerFunc()
// innerFunc()
// innerFunc()

const rahimCoucter = counter();
rahimCoucter('rahim')
rahimCoucter("rahim");
rahimCoucter("rahim");
rahimCoucter("rahim");
console.log('------------------------')

const karimimCoucter = counter();
karimimCoucter("karim");
karimimCoucter("karim");
karimimCoucter("karim");
karimimCoucter("karim");
