//method 1
// const data = require('./modules-lecture');
// console.log(data.hello1);
// console.log(data.add(3, 5));
// console.log(data.subtract(5, 3));

//method 2
import {hello1, add, subtract} from './modules-lecture.js';
console.log(hello1);
console.log(add(3, 5));
console.log(subtract(5, 3));
// PUT THIS IN HTML:
//     <script src="js/modules-lecture2.js" type="module"></script>