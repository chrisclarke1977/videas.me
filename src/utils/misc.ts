export function randNum(): string {
  return `${Math.floor(Math.random() * 10000)}`;
}

export function randCash(): string {
  return `$${Math.floor(Math.random() * 10000) / 100.0}`;
}

export function randId(): string {
  let result = '';
  const vals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i: number = 0; i < 16; i += 1) {
    result += vals[Math.floor(Math.random() * vals.length)];
  }
  return result;
}

export function randSrc(): string {
  return `https://placeimg.com/640/480/people/${Math.floor(
    Math.random() * 120
  )}`;
}

export function getFeed() {
  return {
    id: randId(),
    title: 'Hello world',
    content: 'more about the world of this card item',
    src: randSrc(),
    likes: randNum(),
    shares: randNum(),
    tips: randCash(),
  };
}
