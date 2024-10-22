export default function getSortHeroes(arr) {
  return arr.sort((a, b) => {
    return b.health - a.health; 
  });
}