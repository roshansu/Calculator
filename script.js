// document.addEventListener('DOMContentLoaded', () => {
    

    const calculator = document.getElementById('grid');
    

    // let arr = [];
    // let num = 0;
    // let res =0;
    let string = '';

    calculator.addEventListener('click', (event) => {
        const display = document.getElementById('display');
        if(event.target.value === 'AC'){
            string = '';
            display.innerHTML = string;
        }
        else if(event.target.value === '='){
            string = eval(string);
            display.innerHTML = string;
        }
        else if(event.target.value === '+/-'){
            string = -1*string;
            display.innerHTML = string;
        }
        else if(event.target.value === 'DEL'){
            string = string.substring(0, string.length-1);
            // string[string.length-1] ='';
            console.log(string);
            display.innerHTML = string;
        }
        else{
            string = string + event.target.value;
            console.log(event.target.value);
            display.innerHTML = string;
        }
    });




























//     calculator.addEventListener('click', (event) => {
    
        
//         // const display = document.getElementById('display');
//         // display.innerHTML = event.target.value;
//         // if(event.target.value === '%' || event.target.value === '.' || event.target.value === '+' ||  event.target.value === 'X' || event.target.value === '-'){
           
//         //     arr.push(num);
//         //     num =0;
//         //     arr.push(event.target.value);
           
//         // }
//         // else if(!(event.target.value === '=' || event.target.value === 'AC' || event.target.value === '+/-')){
//         //     num = 10*num+Number(event.target.value);
//         // }
//         // else{
          
//             // for(let i = 0; i < arr.length; i++){
//             //     if(arr[i] === '+'){
//             //         res = res + arr[i+1];
//             //     }
//             //     else if(arr[i] === '*'){
//             //         res = res * arr[i+1];
//             //     }
//             //     else if(arr[i] === '%'){
//             //         res = res % arr[i+1];
//             //     }
//             //     else if(arr[i] === '.'){
//             //         res = res + arr[i+1]/10;
//             //     } arr[20 + 30 + 40 + 50]
//             // }

//             arr.push(num);

//             for(let i = 0; i < arr.length; i++){
//                 if(arr[i] === '+'){
//                     res = arr[i-1] + arr[i+1];
//                     arr[i+1] = res;
//                 }
//                 else if(arr[i] === 'X'){
//                     res = arr[i-1] * arr[i+1];
//                     arr[i+1] = res;
//                 }
//                 else if(arr[i] === '%'){
//                     res = arr[i-1] % arr[i+1];
//                     arr[i+1] = res;
//                 }
//                 else if(arr[i] === '.'){
//                     res = arr[i-1] + arr[i+1]/10;
//                     arr[i+1] = res;
//                 }
//                 else if(arr[i] === '-'){
//                     res = arr[i-1] - arr[i+1];
//                     arr[i+1] = res;
//                 }
//             }

//             const paragraph = document.createElement('p');
//             paragraph.innerHTML = res;
//             paragraph.classList.add('visible');
//             display.appendChild(paragraph);
//             console.log(arr);
            
//             if(!(event.target.value === '+' || event.target.value === '-' || event.target.value === 'X' || event.target.value === '%' || event.target.value === '.')){
//                 arr = [];
//                 console.log(arr);
//             }
//             num = 0;
//             res = 0;
//         }
        
        
//     });
    

//   });


