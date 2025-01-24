import { CORRECT_ANSWER, SUCCESS_MESSAGE } from '../constants/messages';

// Simple substitution cipher for demo purposes
const alienDictionary = {
  I: '⟊',
  e: '⟒',
  h: '⟡',
  l: '⟖',
  o: '⟐',
  p: '⟙',
  s: '⟜',
  t: '⟰',
  r: '⥲',
  n: '⥉',
};

// Reverse dictionary for decoding
const humanDictionary = Object.fromEntries(
  Object.entries(alienDictionary).map(([k, v]) => [v, k])
);

export function decodeAlienMessage(input) {
  // Convert the input to lowercase for consistent decoding
  const lowercaseInput = input
    .split('')
    .map((char) => humanDictionary[char] || char)
    .join('')
    .toLowerCase();

  // Check if the input matches the alien message pattern
  if (lowercaseInput === CORRECT_ANSWER) {
    return SUCCESS_MESSAGE;
  }

  return 'ERROR';
}
