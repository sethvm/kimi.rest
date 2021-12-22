// function library

function displaySampleQuote(quotes) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    if (quote.year === null) quote.year = '';
    const formattedQuote = `"${quote.quote}" -Kimi Räikkönen${quote.year && `, ${quote.year}`}`;
    return formattedQuote;
}

function allQuotes(quotes) {
    return quotes;
}

function randomQuote(quotes) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote;
}

function selectQuoteByIndex(quotes, index) {
    if (!quotes[index]) return `404: no quote found`;
    const quote = quotes[index];
    return quote;
}

function numberOfQuotes(quotes) {
    return quotes.length;
}

module.exports = {
    displaySampleQuote,
    allQuotes,
    randomQuote,
    selectQuoteByIndex,
    numberOfQuotes,
};