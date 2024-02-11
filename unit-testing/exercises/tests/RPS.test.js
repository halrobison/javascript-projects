const test = require('../RPS.js');

describe("whoWon", function(){
    it("returns 'TIE!' if P1 = P2", function(){
        expect(test.whoWon('rock', 'rock')).toBe('TIE!');
        expect(test.whoWon('paper', 'paper')).toBe('TIE!');
        expect(test.whoWon('scissors', 'scissors')).toBe('TIE!');
    });

    it("returns 'Player 2 wins' if P1 = rock and P2 = paper OR P1 = scissors and P2 = rock OR P1 = paper and P2 = scissors", function() {
        expect(test.whoWon('rock', 'paper')).toBe('Player 2 wins!');
        expect(test.whoWon('scissors', 'rock')).toBe('Player 2 wins!');
        expect(test.whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    }); 

    it ("returns 'Player 1 wins' if P1 = rock and P2 = scissors", function() {
        expect(test.whoWon('rock', 'scissors')).toBe('Player 1 wins!');
        expect(test.whoWon('paper', 'rock')).toBe('Player 1 wins!');
        expect(test.whoWon('scissors', 'paper')).toBe('Player 1 wins!');
    }); 
})