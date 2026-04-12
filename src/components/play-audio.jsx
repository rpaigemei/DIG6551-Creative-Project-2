import errorSound from "../assets/audios/error.m4a"
import writingLong from "../assets/audios/writing-long.m4a"
import writingShort1 from "../assets/audios/writing-short-1.m4a"
import writingShort2 from "../assets/audios/writing-short-2.m4a"
import writingShort3 from "../assets/audios/writing-short-3.m4a"
import writingShort4 from "../assets/audios/writing-short-4.m4a"
import writingShort5 from "../assets/audios/writing-short-5.m4a"
import newspaper from "../assets/audios/newspaper.m4a"

export const playError = () => {
  const audio = new Audio(errorSound);
  audio.play();
};

export const playWritingLong = () => {
  const audio = new Audio(writingLong);
  audio.play();
};

export const playWritingShort = () => {
  const writingShort = [
    writingShort1,
    writingShort2,
    writingShort3,
    writingShort4,
    writingShort5
  ]
  
  const r = Math.floor(Math.random() * 5);

  const audio = new Audio(writingShort[r]);
  audio.play();
};

export const playNewspaper = () => {
  const audio = new Audio(newspaper);
  audio.play();
};