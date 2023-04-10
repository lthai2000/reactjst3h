//Bai 1: Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
// const n = 135;
// let isPrime = true;
// if (n <= 1) {
//   isPrime = false;
// }

// for (let index = 2; index <= Math.sqrt(n); index++) {
//   if (n % index == 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log("NO");
// } else {
//   console.log("YES");
// }

//Bai 2: Viết chương trình in ra các số từ 1 đến n?
// let arr = [];
// for (let index = 1; index <= n; index++) {
//   arr.push(index);
// }
// console.log(arr);

//Bai 3: Viết chương trình in ra các số lẻ từ 1 đến n?
// for (let index = 1; index <= n; index++) {
//   if (index % 2 != 0) {
//     console.log(index);
//   }
// }

//Bai 4: Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// arr = [];
// for (let index = 2; index <= n; index++) {
//   let flag = true;
//   for (let j = 2; j <= Math.sqrt(index); j++) {
//     if (index % j == 0) {
//       flag = false;
//       break;
//     }
//   }
//   if (flag) {
//     arr.push(index);
//   }
// }
// console.log(arr);

//Bai 5: Viết chương trình tính tổng từ 1 đến n?
// let sum = 0;
// for (let index = 1; index <= n; index++) {
//   sum = sum + index;
// }
// console.log(sum);

//Bai 6: Viết chương trình tính tổng bình phương của các số từ 1 đến n?
// sum = 0;
// for (let index = 1; index <= n; index++) {
//   sum += Math.pow(index, 2);
// }
// console.log(sum);

//Bai 7: Tính tổng các số lẻ trong khoảng 1 đến n?
// sum = 0;
// for (let index = 1; index <= n; index++) {
//   if (index % 2 !== 0) {
//     sum += index;
//   }
// }
// console.log(sum);

//8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
// let a = n.toString();
// let flag1 = true;

// for (let index = 0; index < a.length; index++) {
//   if (parseInt(a[index], 10) % 2 === 0) {
//     flag1 = false;
//   }
// }

// if (flag1) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

//9. Kiểm tra n có phải là số đối xứng?
// let c = 1341;
// c = c.toString();
// let reverseNumber = c.split("").reverse().join("");
// if (c === reverseNumber) {
//   console.log(c + " la so doi xung");
// } else {
//   console.log(c + " khong phai la la so doi xung");
// }


//10. In bảng cửu chương ra màn hình?
// for (let index = 2; index <= 9; index++) {
//     for (let j = 1; j <= 9; j++) {
//         console.log(`${index} x ${j} = ${index * j}`);
//     }
//     console.log();
// }

//11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// function whitespaceCount(str){
//     console.log(str.split(" ").length-1);
// }
// whitespaceCount(" I love you and our son ");

//12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// const p = '     The quick brown    \n fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// function removeWhiteSpace(str){
//     console.log(p.replace(/\s/g,''));
// }
// removeWhiteSpace(p)

//13. Hãy viết chương trình đảo ngược sau s.
// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('This is a beautiful day'));

//14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// function findPosition(s1,s2){
//     return s1.indexOf(s2);
// }
// console.log(findPosition('This is a beautiful day','is'));

//15. Viết chương trình chuẩn hóa họ tên.
// function reformatName(name){
//     name = name.toLowerCase().split(' ');
//     for (let index = 0; index < name.length; index++) {
//         name[index] = name[index].replace(name[index][0],name[index][0].toUpperCase())
//     }
//     return name;
// }
// console.log(reformatName("NguyeN THI tho tHu hA"));


//16. Viết chương trình lấy  id name của fb.
// function getIdName(str){
//     let index = str.lastIndexOf('/');

//     return str.slice(index+1);
// }
// console.log(getIdName('https://www.facebook.com/ngothucdat'));

//17.  Viết hàm số tính min, max của 3 số?
// function findMax(a,b,c){
//     let maxNumber = a;
//     if (b > maxNumber) {
//         maxNumber = b;
//     }
//     if (c > maxNumber) {
//         maxNumber = c;
//     }
        
//     return maxNumber; 
// }
// console.log(findMax(1,2,3));

// function findMin(a,b,c){
//     let minNumber = a;
//     if (b < minNumber) {
//         minNumber = b;
//     }
//     if (c < minNumber) {
//         minNumber = c;
//     }
        
//     return minNumber; 
// }
// console.log(findMin(1,2,3));

//18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y?
// function findLastPosition(s1,s2){
//     return s1.lastIndexOf(s2);
// }
// console.log(findLastPosition('This is a beautiful day, is it?','a'));

//19.  Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive)
// let sum = 0;
// function calculateSum(a){
//     if (a > 0) {
//         sum = sum + a;
//         return calculateSum(a-1);
//     }
//     return sum;
// }
// console.log(calculateSum(11));

//21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// function calSumArr(arr){
//     return arr.reduce((total,value)=>{
//         return total + value;
//     })
// }
// console.log(calSumArr([45, 4, 9, 16, 25]));

//22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// let arrNumber = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
// console.log('Số lớn nhất là: ',Math.max(...arrNumber));
// console.log('Số nhỏ nhất là: ',Math.min(...arrNumber));
// console.log('Số trung bình là: ',Math.max(...arrNumber));

//23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
