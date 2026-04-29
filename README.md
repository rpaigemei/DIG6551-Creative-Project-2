# Creative Project 2: Narrative Video Game

### Clued In

*Clued In* is a browser-based detective puzzle game where players investigate a mysterious disappearance. The case follows a woman who went missing after being invited to a mansion by a man she was secretly dating. Through an interactive evidence board, players will connect related clues, reconstruct the mansion's blueprint, and work through a clue-filled letter to uncover case details. As each puzzle is solved, more details from the case are revealed, allowing players to piece together the events and solve the case.

This game was developed using React.js with Javascript and CSS, and was deployed through Netlify.

Play *Clued In* [here](https://clued-in.netlify.app/).

---

#### How To Play

In *Clued In*,  players can complete three puzzles on the evidence board in any order. Each puzzle reveals a different piece of information about the disappearance in the form of detective-style insight notes. After each puzzle is completed, players will navigate back to the evidence board. If a puzzle has been solved, they can click on the puzzle's note from the evidence board to view the gathered evidence.

The game requires a mouse and keyboard to play.

##### "How does it connect?"
Players will group 16 clues into categories by selecting four at a time and submitting their choices. If they are correct, the clues will fade slightly and turn green, and the category will be revealed. If they are incorrect, the clues will shake briefly with a sound effect and automatically deselect. Players can use the toolbar at the top to shuffle unsovled clue cards and ask for hints.

| Abandoned Property | Careful Setup | Secret Communication | Hidden Room |
|:------:|:------:|:------:|:------:|
| Peeling paint | Light left on in the hallway | Calls to unknown number | Narrow hallway upstairs |
| Cobwebs in every corner | Path to the room cleared | Handwritten envelope | Library door was ajar |
| Broken locks | Tools left nearby | Incoming text: "Can't wait."  | Hidden latch under bookshelf |
| Overgrown lawn | Blanket folded neatly | Location turned off | Layout differs from blueprint |

This table shows the puzzle's solution, containing each set of clues organized by category.

##### "Study blueprint"
To reconstruct the mansion's blueprint, players must rotate each tile into the correct orientation. Each tile's rotation is randomized in every playthrough. Individual tiles do not lock when correctly aligned, so the entire image must be completed correctly before the puzzle locks. Once the full solution is correct, a message about what the mansion blueprint reveals about the case will be revealed.

<img width="640" alt="blueprint-full" src="https://github.com/user-attachments/assets/eab31e01-9817-4c7b-a15b-1bf76334c51e" />


##### "What's missing?"
Players are presented with a letter from the mystery man inviting the woman to the mansion, containing embedded clues indicated by red text in parentheses. They will type their answer to any of the clues in the text box at the bottom, and any correct words are automatically filled in within the letter. Once all the clues are solved, a note appears briefly explaining how the letter reveals key details of the case.

| Clue | Answer |
|:-------|:------:|
| Tennis score meaning nothing | love |
| When the lion lyrically sleeps | tonight |
| Comedy like How to Lose a Guy in 10 Days or 10 Things I Hate About You | romantic |
| Haunted estate | mansion |
| “What goes ___ must come down” | up |
| Three of these make a right | left |
| Where “shh” is frequently heard | library |
| 10/10 | perfect |
| Like a hyena at a comedy show | laughing |
| Please → ___ ← and see | wait |

This table shows the solutions to each clue, and the image displays the completed letter.

<img width="640" alt="letter-full" src="https://github.com/user-attachments/assets/e1326bd5-603d-4f0a-99dd-3a00a6c1a877" />

---
#### Assets Used

The images assets were obtained through Canva Pro, and the sound effects were sourced from Pixabay's free library.

---
#### AI Usage Statement
I used AI briefly to support narrative development, like refining case details and connecting pieces of evidence, as well as assisting with debugging.
