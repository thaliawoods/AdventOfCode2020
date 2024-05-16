// // test pour toute la liste
// import { input } from "./input.mjs";

// class SeparationInformation {
//     constructor (input) {
//         this.range = input.split(" ")[0];
//         this.min = input.split(" ")[0].split("-")[0];
//         this.max = input.split(" ")[0].split("-")[1];
//         this.letter = input.split(" ")[1][0];
//         this.password = input.split(" ")[2];
//     }
// }


// let result = input.split("\n")
// console.log(result[0])
// result = result.map((x) =>
//     x = new SeparationInformation(x)
// )

// console.log(result[0])


// // test pour toute la liste
// import { input } from "./input.mjs";

// class SeparationInformation {
//     constructor(input) {
//         this.range = input.split(" ")[0];
//         this.min = input.split(" ")[0].split("-")[0];
//         this.max = input.split(" ")[0].split("-")[1];
//         this.letter = input.split(" ")[1][0];
//         this.password = input.split(" ")[2];
//     }

//     isValid() {
//         const matches = this.password.match(new RegExp(this.letter, "g"));
//         if (!matches) {
//           return false;
//         }
//         const count = matches.length;
//         return count >= this.min && count <= this.max;
//       }
// }

// let result = input.split("\n");
// console.log(result[0]);
// result = result.map((x) => new SeparationInformation(x));
// console.log(result[0]);

// const validPasswords = result.filter(policy => policy.isValid());
// console.log(validPasswords.length);



// test pour toute la liste étape 2
import { input } from "./input.mjs";

class SeparationInformation {
    constructor(input) {
        this.range = input.split(" ")[0];
        this.pos1 = parseInt(this.range.split("-")[0]) - 1;
        this.pos2 = parseInt(this.range.split("-")[1]) - 1;
        this.letter = input.split(" ")[1][0];
        this.password = input.split(" ")[2];
    }

    isValid() {
        const pos1Match = this.password[this.pos1] === this.letter;
        const pos2Match = this.password[this.pos2] === this.letter;
        return (pos1Match && !pos2Match) || (!pos1Match && pos2Match);
    }
}

let result = input.split("\n");
console.log(result[0]);
result = result.map((x) => new SeparationInformation(x));
console.log(result[0]);

const validPasswords = result.filter(policy => policy.isValid());
console.log(validPasswords.length); // Output: 1
