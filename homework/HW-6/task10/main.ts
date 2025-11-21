function createDeck() {
    const suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
    const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    type Deck = {cardSuit: string, value: string, color: string};
    const deck: Deck[] = [];

    for (const suit of suits) {
        for (const value of values) {
            const card: Deck = {cardSuit: value, value: value, color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'};
            deck.push(card);
        }
    }

    return deck;
}




const newDeck = createDeck();


const spadeAce = newDeck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
const sixes = newDeck.filter(card => card.value === '6');
const redCards = newDeck.filter(card => card.color === 'red');
const diamonds = newDeck.filter(card => card.cardSuit === 'diamond');
const clubs9plus = newDeck.filter(card =>
    card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);


console.log('Spade Ace', spadeAce);
console.log('Sixes', sixes);
console.log('All red cards', redCards);
console.log('Diamonds', diamonds);
console.log('Cards 9+', clubs9plus);
