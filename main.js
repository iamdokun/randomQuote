let randomBtn = document.getElementById('btn');
let randomDisplay = document.getElementById('display');

randomBtn.addEventListener('click', quoteBtn);

function quoteBtn() {
    let randomQuote = [
        {
          quote: "Your passion is waiting for your courage to catch up.",
          authour: "Isabelle Lafleche",
        },
        {
          quote:
            "Dream beautiful dreams, and then work to make those dreams come true.",
          authour: "Spencer W. Kimball",
        },
        {
          quote: "Be the change you want to see in the world.",
          authour: "Mahatma Gandhi",
        },
        {
            quote: "Happiness is not something ready made. It comes from your own actions.",
            authour: "Dalai Lama XIV",
        },
        {
            quote: "Hold the vision, trust the process",
            authour: "Unknown",
        },
        {
            quote: "No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.",
            authour: "Jaymin Shah",
        },
        {
            quote: "Things may come to those who wait, but only the things left by those who hustle.",
            authour: "Abraham Lincoln",
        },
        {
            quote: "Invest in your dreams. Grind now. Shine later.",
            authour: "Unknown",
        },
        {
            quote: "Hustle in silence and let your success make the noise.",
            authour: "Unknown",
        },
        {
            quote: "Don't let yesterday take up too much of today.",
            authour: "Will Rogers",
        },
        {
            quote: "If you are working on something that you really care about, you don't have to be pushed.",
            authour: "Unknown",
        },
        {
            quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
            authour: "Sheryl Sandberg",
        },
        {
            quote: "If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.",
            authour: "Vincent Van Gogh",
        },
        {
            quote: "Some people want it to happen, some wish it would happen, others make it happen.",
            authour: "Michael Jordan",
        },
        {
            quote: "Great things are done by a series of small things brought together",
            authour: "Vincent Van Gogh",
        },
        {
            quote: "Leaders can let you fail and yet not let you be a failure.",
            authour: "Stanley McChrystal",
        },
        {
            quote: "It’s not the load that breaks you down, it’s the way you carry it.",
            authour: "Lou Holtz",
        },
        {
            quote: "The hard days are what make you stronger.",
            authour: "Aly Raisman",
        },
        {
            quote: "Keep your eyes on the stars, and your feet on the ground.",
            authour: "Theodore Roosevelt",
        },
        {
            quote: "If opportunity doesn’t knock, build a door.",
            authour: "Kurt Cobain",
        },
        {
            quote: "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction",
            authour: "George Lorimer",
        },
        {
            quote: "You can waste your lives drawing lines. Or you can live your life crossing them.",
            authour: "Shonda Rhimes",
        },
        {
            quote: "If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.",
            authour: "Wayne Dyer",
        },
        {
            quote: "Hard work beats talent when talent doesn’t work hard.",
            authour: "Tim Notke",
        },
        {
            quote: "If everything seems to be under control, you’re not going fast enough.",
            authour: "Mario Andretti",
        },
        {
            quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
            authour: "Thomas Edison",
        },
        {
            quote: "The only difference between ordinary and extraordinary is that little extra.",
            authour: "Jimmy Johnson",
        },
        {
            quote: "The best way to appreciate your job is to imagine yourself without one.",
            authour: "Oscar Wilde",
        },
        {
            quote: "The miracle is not that we do this work, but that we are happy to do it.",
            authour: "Mother Teresa",
        },
        {
            quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
            authour: "Earl Nightingale",
        },
        {
            quote: "If you work on something a little bit every day, you end up with something that is massive.",
            authour: "Kenneth Goldsmith",
        },
        {
            quote: "At any given moment you have the power to say: this is not how the story is going to end.",
            authour: "Unknown",
        },
        {
            quote: "Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted.",
            authour: "Christine Caine",
        },
        {
            quote: "Don’t limit your challenges. Challenge your limits.",
            authour: "Unknown",
        },
        {
            quote: "Dreams don’t work unless you do.",
            authour: "John C. Maxwell",
        },
      ];
      let randQuote = Math.floor(Math.random() * randomQuote.length);
      let myQuote = randomQuote[randQuote];
      console.log(myQuote);
      randomDisplay.innerHTML = myQuote;
    
}




