let person = prompt("Iltimos isminggizni kiriting");
let ticket = prompt("Aviachipta uchun qancha pul ajrattingiz?");
let hotelrent = prompt('Mehmonxona uchun qancha miqdorda pul ajtattingiz?');
let rest = prompt('Umumiy dam olish uchun qancha pul ajrattingiz?');

let totalUsd = ((ticket+hotelrent)*1100.54);
let totalEuro =((rest)*12354.03)
let totalMoney = (totalUsd+totalEuro);

if (500 <= ticket || 120 <= rest) {
    console.log('Aviachiptaga pul yetarli ' + person,)
} else if (500 > ticket || 250 > hotelrent || 120 > rest) {
    console.log('Bilet uchun pul yetarli miqdorda emas ' + person)
}


if (250 <= hotelrent) {
    console.log('Mehmonxonaga yetarli pul ajiratibsiz ' + person)
} else if (250 > hotelrent) {
    console.log('Afsuski mehmonxona uchun pulingiz yetali emas ' + person)
}

if (120 <= rest) {
    console.log('Dam olish hayrli bolsin '+ person)
} else if ( 120 > rest) {
    console.log( 'Dam olish uchun pul bir oz kam '+ person)
}

console.log('Hurmatli Sayyoh siz chipta va mehmonhona uchun '+totalUsd +' sum ajrattinggiz ');
console.log('Hurmatli mijoz sizsayohatlar uchun '+ totalEuro +' sum ajrattinggiz');
console.log('Dubayga sayohat uchun umumiy '+ totalMoney +' sum ajrattinggiz');

if (552027618.6 <= totalMoney) {
    console.log('Dubay sayohatiga tolaqonli tayyorsiz!!! '+ person)
} else if ( 552027618.6 > totalMoney) {
    console.log( 'Sayohat sal keyinro boladi ozroq ishlab pul yiging!!! '+ person)
}





