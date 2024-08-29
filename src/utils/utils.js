const pad2Digits = (digits) => digits.toString().padStart(2, "0"); // Puts 0's before single dgts

export const episodeDuration = (length) => {
  const minutes = Math.floor(length / 60);
  const seconds = length % 60;
  return `${minutes}:${pad2Digits(seconds)}`;
};

export const episodeDate = (timestamp) => {
  let newDate = new Date(timestamp);
  return newDate.toLocaleDateString();
};
