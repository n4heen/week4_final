/* Here is your key: 6954bedd

Send all data requests to:
http://www.omdbapi.com/?apikey=[yourkey]&

Poster API requests:
http://img.omdbapi.com/?apikey=[yourkey]&

To see fast and furious movies
https://www.omdbapi.com/?apikey=6954bedd&s=fast

Please append it to all of your API requests*/



const filmListEl = document.querySelector(".film-list")
async function main() {
    const film = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=6954bedd')
    const filmData = await film.json()
   console.log(filmData)
}
main()

function filmHTML(film) {
    return `<div class="film-card">
    <div class="film-card__container">
        <h3>egg title</h3>
            <p><b>Year:</b>0000</p>
            <p><b>Type:</b> film</p>
            <p><b>imdbID:</b>ID</p>
            <p><b>Movie Poster</b>Poster</p>
    </div>
</div>`
}
