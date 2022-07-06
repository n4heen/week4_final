/* Here is your key: 6954bedd

Send all data requests to:
http://www.omdbapi.com/?apikey=[yourkey]&

Poster API requests:
http://img.omdbapi.com/?apikey=[yourkey]&

To see fast and furious movies
https://www.omdbapi.com/?apikey=6954bedd&s=fast

https://www.omdbapi.com/?i=tt3896198&apikey=6954beddy

Please append it to all of your API requests*/


// const filmListEl = document.querySelector('.film-list')
// async function filmApi() {
//   const films = await fetch('https://www.omdbapi.com/?apikey=6954bedd&s=fast')
//   const filmData = await films.json()
//   filmListEl.innerHTML = filmData.Search.map((film) => { return
//     filmHTML(film)
//   }).join("")
//   console.log(filmData.Search)
// }
// filmApi()


// function filmHTML(film) {
//   return `<div class="film-card">
//     <div class="film-card__container">
//         <h3>film title</h3>
//             <p><b>Year:</b>0000</p>
//             <p><b>Type:</b> film</p>
//             <p><b>imdbID:</b>ID</p>
//             <p><b>Movie Poster</b>Poster</p>
//     </div>
// </div>`
// }

const filmListEl = document.querySelector(".film-list");
async function filmApi() {
  const films = await fetch("https://www.omdbapi.com/?apikey=6954bedd&s=fast");
  const filmData = await films.json();
  filmListEl.innerHTML = filmData.Search.map(() => filmHTML()).join("");
  console.log(filmData.Search);
}
filmApi();

function filmHTML() {
  return `<div class="film-card">
    <div class="film-card__container">
        <h3>film title</h3>
            <p><b>Year:</b>0000</p>
            <p><b>Type:</b> film</p>
            <p><b>imdbID:</b>ID</p>
            <p><b>Movie Poster</b>Poster</p>
    </div>
</div>`;
}
