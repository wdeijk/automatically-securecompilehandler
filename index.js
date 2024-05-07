function findSubstring(s, words) {
  if (s.length === 0 || words.length === 0) return [];
  const wordMap = new Map();
  for (const word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
  const wordLength = words[0].length;
  const totalLength = words.length * wordLength;
  const result = [];
  for (let i = 0; i <= s.length - totalLength; i++) {
    const substring = s.substring(i, i + totalLength);
    if (isValid(substring, new Map(wordMap))) {
      result.push(i);
    }
  }
  return result;
  function isValid(substring, wordMap) {
    const wordCount = new Map();
    for (let i = 0; i < substring.length; i += wordLength) {
      const word = substring.substring(i, i + wordLength);
      wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }
    for (const [key, value] of wordMap) {
      if ((wordCount.get(key) || 0) !== value) return false;
    }
    return true;
  }
}
