"use strict";
const _ = require("underscore");

const sentences = [
    { subject: "JavaScript", verb: "is", object: "great" },
    { subject: "Elephants", verb: "are", object: "large" },
];

const verbs = _.pluck(sentences, "verb");

console.log("-----------------------");

/**
 * Outputs sentences to the console
 * @param {string} subject The subject to use in the sentence.
 * @param {string} verb The verb to use in the sentence.
 * @param {string} object The object to use in the sentence.
 */
function say({ subject, verb, object }) {
    console.log(`${subject} ${verb} ${object}`);
}

// es6 feature: for..of
for (const a of sentences) {
    say(a);
}

console.log("\n-----------------------");

for (const verb of verbs) {
    console.log(`found verb: ${verb} `);
}
