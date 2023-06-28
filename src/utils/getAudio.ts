import { Phonetic } from "./getWord";

//find an audio url from the phonetics array. If the US pronunciation is selected then stop searching and return it
export default function getAudioUrl(phonetics: Phonetic[]): string {
  let audioUrl = "";

  for (const phonetic of phonetics) {
    if (phonetic.audio) {
      audioUrl = phonetic.audio;
    }

    if (audioUrl.includes("-us.mp3")) {
      break;
    }
  }

  return audioUrl;
}
