import { QueryFunctionContext } from "react-query";

interface License {
  name: string;
  url: string;
}

interface Phonetic {
  text?: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
}

interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions?: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface ErrorData {
  title: string;
  message: string;
  resolution: string;
}

export interface WordData {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export async function getWord({ queryKey }: QueryFunctionContext<string[]>): Promise<WordData> {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${queryKey[1]}`);

  const json = await response.json();

  if (!response.ok) {
    throw json;
  }

  return json[0] as WordData;
}
