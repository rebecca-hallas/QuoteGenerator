var quotes = [
    "You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you - Unknown",
    "If you want to lift yourself up, lift up someone else - Booker T. Washington",
    "Make the most of the best and the least of the worst - Robert Louis Stevenson",
    "The best way to predict the future is to invent it - Alan Kay",
    "Discipline is the bridge between goals and accomplishment - Jim Rohn",
    "Success is not final, failure is not fatal: it is the courage to continue that counts - Unknown",
    "Do or do not, there is no try - Yoda",
    "If one dream should fall and break into a thousand pieces, never be afraid to pick one of those pieces up and begin again - Flavia Weedn",
    "The journey of a thousand miles begins with a single step - Lao Tzu",
    "The greates project you'll ever work on is you - Unknown"
    ]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

