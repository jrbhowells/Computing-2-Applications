import { array } from "fast-check";

/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = (inp) => inp.filter((ignore, k) => k % 3 === 0);

// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (in1, in2) {
    const words1 = in1.split(" ");
    const words2 = in2.split(" ");
    var i = 0;
    var rds = [];

    while (rds.length < words1.length + words2.length) {
        rds.push(words1[i]);
        rds.push(words2[i]);
        i ++;
    }
    return rds.join(" ");
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = (inp) => inp.replace(/[A-Z]/g, "").length;

// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = (inp) => Object.keys(inp).sort((a, b) => b.length - a.length)[0];

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = (inp) =>
    Object.values(inp).filter((value) =>
    value % 2 === 0).sort((a, b) => (b-a))[0];

// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = (name, place="London") => 
    "Hello " + name + ", how is " + place;

// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, s=1, o=0) {
    if (x*s+o > 0) {
        return x*s+o;
    }
    return 0;
};

export default Object.freeze(Exam);
