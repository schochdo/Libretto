import { Opera } from '../../types/libretto';
import { turandotAct1 } from './act1';
import { turandotAct2 } from './act2';
import { turandotAct3 } from './act3';

export const turandot: Opera = {
  id: 'turandot',
  title: 'Turandot',
  originalTitle: 'Turandot (Dramma lirico in tre atti e cinque quadri)',
  composer: 'Giacomo Puccini',
  librettists: ['Giuseppe Adami', 'Renato Simoni'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1926,
  sourceCitation: "Giuseppe Adami and Renato Simoni libretto after Carlo Gozzi's theatrical fable Turandot (Milan, Teatro alla Scala, 1926; completion by Franco Alfano); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/puccini/turandot/libretto/',
  sourceName: 'Giuseppe Adami & Renato Simoni (Milan, 1926) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Giacomo Puccini d. 1924, Giuseppe Adami d. 1946, Renato Simoni d. 1952). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In legendary imperial Beijing, Princess Turandot will only wed a suitor of royal blood who can solve three riddles; failure means immediate beheading. Outside the Forbidden City, the fugitive Prince Calaf discovers his blind, exiled father King Timur of Tartary and the young slave girl Liù, who serves him faithfully because Calaf once smiled upon her. When the young Prince of Persia is executed at moonrise, Turandot appears on the balcony; dazzled by her icy beauty, Calaf resolves to attempt the trial, ignoring the desperate entreaties of his father, Liù's heartbreaking tears, and the comical warnings of the three imperial ministers Ping, Pang, and Pong. In the grand palace square before Emperor Altoum, Turandot recounts how her ancestor Princess Lo-u-Ling was raped and murdered by a foreign conqueror, swearing vengeance upon all men. Calaf answers all three riddles correctly: Hope, Blood, and Turandot. Despairing at being surrendered to a stranger, Turandot begs her father for mercy; Calaf chivalrously offers her a counter-riddle: if she discovers his name before sunrise, he will freely die. That night, Turandot decrees that none in Beijing shall sleep under pain of death until the stranger's name is known. Calaf sings of his impending victory ('Nessun dorma'). Guards capture Timur and Liù; to protect Calaf and prevent his father from being tortured, Liù declares that she alone knows the name, but endures torture and stabs herself to death with a dagger, predicting that Turandot herself will soon learn to love. Left alone with the grief-stricken Turandot, Calaf tears away her veil and kisses her passionately, melting her icy defenses. Entrusting his life to her, Calaf whispers his true name. At dawn before the assembled court, Turandot proclaims to the Emperor and the rejoicing crowd that she knows the stranger's name: his name is Love.",
  characters: [
    {
      name: 'La Principessa Turandot',
      voiceType: 'Soprano',
      description: 'The cold, cruel, yet vulnerable imperial princess of China.'
    },
    {
      name: 'Calaf (Il Principe Ignoto)',
      voiceType: 'Tenor',
      description: 'The exiled Prince of Tartary, daring and fiercely passionate.'
    },
    {
      name: 'Liù',
      voiceType: 'Soprano',
      description: 'A young Tartar slave girl, selflessly devoted to Calaf and Timur.'
    },
    {
      name: 'Timur',
      voiceType: 'Bass',
      description: 'Deposed blind King of Tartary and father of Calaf.'
    },
    {
      name: 'Ping',
      voiceType: 'Baritone',
      description: 'Grand Chancellor of China.'
    },
    {
      name: 'Pang',
      voiceType: 'Tenor',
      description: 'Grand Purveyor of the Imperial Household.'
    },
    {
      name: 'Pong',
      voiceType: 'Tenor',
      description: 'Chief Imperial Cook.'
    },
    {
      name: "L'Imperatore Altoum",
      voiceType: 'Tenor',
      description: 'The aged Emperor of China and father of Turandot.'
    },
    {
      name: 'Un Mandarino',
      voiceType: 'Baritone',
      description: 'An imperial official proclaiming the decrees of Turandot.'
    },
    {
      name: 'Il Principe di Persia',
      voiceType: 'Tenor',
      description: 'A doomed royal suitor sentenced to execution.'
    }
  ],
  acts: [turandotAct1, turandotAct2, turandotAct3]
};

export default turandot;
