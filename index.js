/* Here is your key: 6954bedd

Send all data requests to:
http://www.omdbapi.com/?apikey=[yourkey]&

Poster API requests:
http://img.omdbapi.com/?apikey=[yourkey]&

To see fast and furious movies
https://www.omdbapi.com/?apikey=6954bedd&s=fast

https://www.omdbapi.com/?i=tt3896198&apikey=6954beddy

Please append it to all of your API requests*/

/*
Hi n4heen,

Your request for an API key has been approved. You can start using this key immediately.

API Key: b98d570916d83c3feaa4a3301fdf2261

Here's an example API request:

https://api.themoviedb.org/3/movie/550?api_key=b98d570916d83c3feaa4a3301fdf2261
Useful Links

Documentation: https://developers.themoviedb.org/3/getting-started/introduction
Support forum: https://www.themoviedb.org/talk/category/5047958519c29526b50017d6
Wrappers & libraries: https://www.themoviedb.org/documentation/api/wrappers-libraries
Service status: https://status.themoviedb.org
If you have any questions, feel free to create a new discussion in our support forum.

--
The Movie Database Team
https://www.themoviedb.org
*/


const filmListEl = document.querySelector('.film-list')
async function filmApi() {
    const films = await fetch('https://www.omdbapi.com/?apikey=6954bedd&')
    const filmData = await films.json()
    filmListEl.innerHTML= filmData.map((film)=>{
      filmHTML(film)
    }).join("")
}
filmApi()


function filmHTML(film){
  return  `<div class="film-card">
    <div class="film-card__container">
        <h3>film title</h3>
            <p><b>Year:</b>0000</p>
            <p><b>Type:</b> film</p>
            <p><b>imdbID:</b>ID</p>
            <p><b>Movie Poster</b>Poster</p>
    </div>
</div>`
}

