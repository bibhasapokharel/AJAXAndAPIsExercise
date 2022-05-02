// AJAX and APIs Exercise



//1.
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);

//1a.
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(jokeJS1);

//1b.
p1.innerText = jokeJS1.setup;

//1c.
p2.innerText = jokeJS1.punchline;

//2.
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

//2a && 2b && 2c.
const friendsJS2 =axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
.then(res => {
   console.log(res.data);
   p3.innerText = res.data.character;
   p4.innerText = res.data.quote;
})
.catch (err =>{
    console.log(err);
    console.log(`Exercise 2a was not successful`);
});


//3.
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

//3a && 3b && 3c && 3d.
async function quoteFunc (){
    try{
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;


    }catch (err){
        console.log(err);
    }
}
quoteFunc();

//4.
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

console.log(`-------`);
// https://api.tvmaze.com/search/shows?q=the%20mandalorian
async function tvMazeFunc (){
    try{
        const episodeByNum = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
        console.log(episodeByNum.data);
        p7.innerText = episodeByNum.data.name;
    } catch(err){
        console.log(err);
    }
}
tvMazeFunc ();

//BONUS:

//5.
const body = document.querySelector(`body`);
axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
.then(res =>{
    console.log(res.data.name);
    const img = document.createElement(`img`);
    img.src = res.data.sprites.front_default;
    body.append(img);
    
})
.catch (err => {
    console.log(err);
    alert(`You did NOT catch THAT POKEMON! :()`);
    
});

//6.
async function bonus6 () {
    try{
        const moviePoster = await axios.get(`http://www.omdbapi.com/?apikey=b8b37900&t=dancer+in+the+dark`);
        console.log(moviePoster.data);
        const poster = document.createElement(`img`);
        poster.src = moviePoster.data.Poster;
        body.append(poster);

    }catch (err){
        console.log(`Bonus 6 was not successful, keep trying`);
        console.log(err);
    }
}

bonus6();
