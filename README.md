# Flashcard-Generator
Overview
In this application, I create a basic, command-line flashcard. This flashcard objects was  created using constructors. There are two types of flashcards:

Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

Cloze Deletions
A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:

"George Washington was the first president of the United States."

...We can create a "cloze deletion" by removing the words "George Washington":

"... was the first president of the United States."

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is a common device in educational applications.

A flash card built this way has three parts:

The full text. This is the entire sentence users need to remember: "George Washington was the first president of the United States."

The cloze deletion. This is the text we've chosen to remove: "George Washington".

The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.

See below for examples as to how your constructor should behave.
Examples:

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// "... was the first president of the United States."
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States."
console.log(firstPresidentCloze.fullText):

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");