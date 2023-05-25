import data from './data.json' assert {type: 'json'} // Import data.json file

export const getWords = () => {
    const totalWords = 180;
    const selectedWords = [];
    while (selectedWords.length < totalWords) {
        const randomIndex = Math.floor(Math.random() * data.words.length);
        const randomWord = data.words[randomIndex];
        if (!selectedWords.includes(randomWord)) {
            selectedWords.push(randomWord);
        }
    }
    return selectedWords;
}