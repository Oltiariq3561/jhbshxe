// let arr = 'salom bolalar salom'
// function test(arg) {
//     let arr1 = arg.split('');
//     let minus1 = 'sael';
//     let res1 = '';
//     for (const i of arr1) {
//         if (i != minus1) {
//             res1 += i
//         }
//     }
//     let arr = arg.split(' ');
//     let minus = 'salom';
//     let res = ''
//     for (const i of arr) {
//         if (i != minus) {
//             res += i
//         }
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

// function Test(name,age,phone) {
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
// }

// let john = new Test('john',55,'+998889414150');
// console.log(john);




// UYGA VAZIFA 
// WORD NI ORNATA OLMADIM 

// SCOPE SCOPE SCOPE SCOPE SCOPE SCOPE SCOPE SCOPE
// JavaScript da 3ta asosiy scope turi bor 

// 1 Global scope dasturdagi har qanday joydan kirish mumkin bo‘lgan qamrovdir. Global scope da elon qilingan ozgaruvchilar dasturdagi barcha funktsiya va bloklardan foydalanilishi mumkin.

// 2Local scope (mahalliy qamrov) faqat oz funktsiyalari yoki bloklari ichida mavjud boladi. Local scope da elon qilingan o‘zgaruvchilarga faqat o‘zining lokal kontekstida kirish mumkin.

// 3 Block scope let va const kalit so‘zlari yordamida yaratiladi. Bu scope faqat blok ichida mavjud bo‘ladi if for yoki boshqa blokli konstruksiyalarda.

// NULLISH NULLISH  NULLISH  NULLISH  NULLISH  NULLISH 
// let result = a ?? b;
// Agar a qiymati null yoki undefined bolsa result qiymati b boladi.
// Agar a qiymati null yoki undefined bolmasa result qiymati a boladi.

// let age;
// let defaultAge = 18;
// let finalAge = age ?? defaultAge;
// console.log(finalAge);
// Bu masala da finalAge defaultAge ga teng chunki age ozgaruvchi bosh

//?? bilan || farqi: 
// ??(nullish) ozgaruvchi null va undefained bolsagina ishlaydi.   
// ||(logical OR)null va undefained bilan cheklanib qolmaydi ozgaruvchi false qiymatlarga teng bolsa (false, 0 , -0, null, 0n, '', null); ishlaydi;

  


// MASALA MASALA MASALA MASALA MASALA MASALA MASALA MASALA

// 1. **Masala**: Berilgan massivning har bir elementini uzunligiga qarab, teskari tartibda chiqaruvchi funksiya yozing.
// let arr = ['salom' , 'alik'];
// function test(arg) {
    
// }

// 2. **Masala**: Massiv ichidagi barcha string elementlarning birinchi harfini katta harfga o'zgartiruvchi funksiya yozing.
// let arr = ['salom', 'birodar'];
// function test(arg) {
//     let res1 = []
//     for (let i = 0; i<arg.length; i++) {
//        res1.push(arg[i])
//     }
    
//     return res1
// }
// let res = test(arr);
// console.log(res);

// 3. **Masala**: Berilgan stringdagi barcha raqamlarni olib tashlab, qolgan qismini qaytaruvchi funksiya yozing.
// let arr = 'sa1lom22'
// function test(arg) {
//     let res = arg.split('')
//     let sum = '';
//     let keraksiz ;
//     for (const i of res) {
//         if (i > 0) {
//           keraksiz++  
//         }else{
//         sum += i
//         }
//     }
//     return sum
// }
// let res = test(arr);
// console.log(res);

// 4. **Masala**: Massiv ichida faqat string turlarini saqlab, boshqa turlarni olib tashlaydigan funksiya yozing.
// let arr = ['salom','alik',true]
// function test(arg) {
//     let sum = [];
//     for (const i of arg) {
//         if (typeof i == "string") {
//           sum.push(i)
//         }
//     }
//     return sum
// }
// let res = test(arr);
// console.log(res);

// 5. **Masala**: Berilgan stringdagi so'zlarning sonini aniqlovchi funksiya yozing.
// let arr = 'sa1lom22 qalaysan'
// function test(arg) {
//     let res = arg.split(' ')
//     let counter = 0;
//     for (const i of res) {
//           counter++  
//     }
//     return counter
// }
// let res = test(arr);
// console.log(res);

// 6. **Masala**: Berilgan massivdagi har bir string elementni uzunligiga qarab saralash funksiyasini yozing.
//TUSHUNMADIM 

// 7. **Masala**: Stringdagi barcha unli harflarni olib tashlaydigan funksiya yozing.
// let arr = 'salom bolalar';
// function test(arg) {
//     let sum = ''
//     for (const i of arg) {
//         if (typeof i == 'string' && i == 'a' || i == 'e' || i == 'o' || i == 'i' || i == 'u' || i == 'A' || i == 'E' || i == 'O' || i == 'I' || i == 'U' ) {
            
//         }else{
//         sum+=i
//         }
//     }
//     return sum;
// }
// let res = test(arr);
// console.log(res);

// 8. **Masala**: Berilgan massivdagi eng uzun stringni qaytaruvchi funksiya yozing.
// let arr = ['salom','alikkkkk'];
// function test(arg) {
//     let max = arg[0];
//     for (const i of arg) {
//         if (max.length < i.length) {
//           max = i
//         }
//     }
//     return max
// }
// let res = test(arr);
// console.log(res);

// 9. **Masala**: Berilgan stringdagi barcha so'zlarni teskari tartibda chiqaruvchi funksiya yozing.
// let arr = 'salom bolalar';
// function test(arg) {
//     let res = arg.split('').reverse().join('').split(' ').reverse().join(' ');
//     return res;
// }
// let res = test(arr);
// console.log(res);

