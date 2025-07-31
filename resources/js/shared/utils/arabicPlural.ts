export default function arabicPlural(count: number, word: string): string {
    if (count === 0) return `لا ${word}ات`;
    if (count === 1) return `${count} ${word}`;
    if (count === 2) return `${word}ان`;
    if (count % 100 >= 3 && count % 100 <= 10) return `${count} ${word}ات`;
    if (count % 100 >= 11 && count % 100 <= 99) return `${count} ${word}ًا`;
    return `${word}`;
}
