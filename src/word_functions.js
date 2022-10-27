const word_functions = {
  "Simple Join": (words) => words.join(""),

  "Replace S to Z": (words) =>
    words.join("").replace(/s/g, "z").replace(/S/g, "Z"),

  "Remove First Letters": (words) => words.map((w) => w.substring(1)),

  "To LeetSpeak": (words) => {
    const alphabet = {
      a: "4",
      b: "8",
      e: "3",
      g: "6",
      i: "1",
      o: "0",
      p: "9",
      s: "5",
      t: "7",
      z: "2",
    };
    let phrase = words.join("");
    for (let letter in alphabet) {
      phrase = phrase.replace(new RegExp(letter, "g"), alphabet[letter]);
      phrase = phrase.replace(
        new RegExp(letter.toUpperCase(), "g"),
        alphabet[letter]
      );
    }
    return phrase;
  },
};

export default word_functions;
