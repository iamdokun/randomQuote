let randomBtn = document.getElementById('btn');
// let randomDisplay = document.getElementById('display');
const displayQuote = document.getElementById("quote");
const displayAuthor = document.getElementById("author");

randomBtn.addEventListener('click', quoteBtn);

function quoteBtn() {
    let randomQuote = [
        {
          quote: "Your passion is waiting for your courage to catch up.",
          author: "Isabelle Lafleche",
        },
        {
          quote:
            "Dream beautiful dreams, and then work to make those dreams come true.",
          author: "Spencer W. Kimball",
        },
        {
          quote: "Be the change you want to see in the world.",
          author: "Mahatma Gandhi",
        },
        {
            quote: "Happiness is not something ready made. It comes from your own actions.",
            author: "Dalai Lama XIV",
        },
        {
            quote: "Hold the vision, trust the process",
            author: "Unknown",
        },
        {
            quote: "No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.",
            author: "Jaymin Shah",
        },
        {
            quote: "Things may come to those who wait, but only the things left by those who hustle.",
            author: "Abraham Lincoln",
        },
        {
            quote: "Invest in your dreams. Grind now. Shine later.",
            author: "Unknown",
        },
        {
            quote: "Hustle in silence and let your success make the noise.",
            author: "Unknown",
        },
        {
            quote: "Don't let yesterday take up too much of today.",
            author: "Will Rogers",
        },
        {
            quote: "If you are working on something that you really care about, you don't have to be pushed.",
            author: "Unknown",
        },
        {
            quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
            authour: "Sheryl Sandberg",
        },
        {
            quote: "If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.",
            author: "Vincent Van Gogh",
        },
        {
            quote: "Some people want it to happen, some wish it would happen, others make it happen.",
            author: "Michael Jordan",
        },
        {
            quote: "Great things are done by a series of small things brought together",
            author: "Vincent Van Gogh",
        },
        {
            quote: "Leaders can let you fail and yet not let you be a failure.",
            author: "Stanley McChrystal",
        },
        {
            quote: "It’s not the load that breaks you down, it’s the way you carry it.",
            author: "Lou Holtz",
        },
        {
            quote: "The hard days are what make you stronger.",
            author: "Aly Raisman",
        },
        {
            quote: "Keep your eyes on the stars, and your feet on the ground.",
            author: "Theodore Roosevelt",
        },
        {
            quote: "If opportunity doesn’t knock, build a door.",
            author: "Kurt Cobain",
        },
        {
            quote: "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction",
            author: "George Lorimer",
        },
        {
            quote: "You can waste your lives drawing lines. Or you can live your life crossing them.",
            author: "Shonda Rhimes",
        },
        {
            quote: "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.",
            author: "Wayne Dyer",
        },
        {
            quote: "Hard work beats talent when talent doesn’t work hard.",
            author: "Tim Notke",
        },
        {
            quote: "If everything seems to be under control, you’re not going fast enough.",
            author: "Mario Andretti",
        },
        {
            quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
            author: "Thomas Edison",
        },
        {
            quote: "The only difference between ordinary and extraordinary is that little extra.",
            author: "Jimmy Johnson",
        },
        {
            quote: "The best way to appreciate your job is to imagine yourself without one.",
            author: "Oscar Wilde",
        },
        {
            quote: "The miracle is not that we do this work, but that we are happy to do it.",
            author: "Mother Teresa",
        },
        {
            quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
            author: "Earl Nightingale",
        },
        {
            quote: "If you work on something a little bit every day, you end up with something that is massive.",
            author: "Kenneth Goldsmith",
        },
        {
            quote: "At any given moment you have the power to say: this is not how the story is going to end.",
            author: "Unknown",
        },
        {
            quote: "Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.",
            author: "Christine Caine",
        },
        {
            quote: "Don’t limit your challenges. Challenge your limits.",
            author: "Unknown",
        },
        {
            quote: "Dreams don’t work unless you do.",
            author: "John C. Maxwell",
        },
      ];
      let randQuote = Math.floor(Math.random() * randomQuote.length);
      let myQuote = randomQuote[randQuote];
    //   console.log(myQuote);
    //   randomDisplay.innerHTML = myQuote;
    displayQuote.innerText = myQuote.quote;
    displayAuthor.innerText = myQuote.author;
    
}




