# moovees
project

## Users
+ ### Sign Up
  method: `POST`<br>
  endpoint: `/users/signup`
  
  #### _Request_ :
  * body: 
    ```javascript
    name: String, required
    email: String, required
    password: String, required
    ```
    
  #### _Response_ :
  - 201
    ```javascript
    {
      name: "johnsnow",
      email: "johnsnow@mail.com",
      password: V5MUfXvUrP9XItkuxzfziOqjRTqWYsqusNDUsORJ7Xqae9OrU33e2
    }
    ```
  - 400
    ```javascript
    {
      "code": 400,
      "message": [
          "notNull Violation: Please input your name",
          "\nnotNull Violation: Please input your email"
      ]
    }
    ```
+ ### Sign In
  method: `POST`<br>
  endpoint: `/users/signin`
  
  #### _Request_ :
  * body: 
    ```javascript
    email: String, required
    password: String, required
    ```
    
  #### _Response_ :
  - 200
    Will be response a token
    ```javascript
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJiYWR1IiwiZW1haWwiOiJiYWR1QG1haWwuY29tIiwiaWF0IjoxNTY0OTkzNzgxfQ.Q4JKT7BRNCPOGUgTF-9NQTU2YASPRg7a3kO72fpPRY8
    ```
   - 404
    ```javascript
    Invalid username / password
    ```

## Youtube
+ ### Search Movie
  method: `GET`<br>
  endpoint: `/youtube/search`
  
  #### _Request_ :
  * query: 
    ```javascript
    title: String, required
    ```
    
  #### _Response_ :
  - 200
    ```javascript
    hwjH7ty
    ```
  - 404
    ```javascript
    Not found
    ```
  - 403
    ```javascript
    Unauthorized token
    ```

## Tastedive
+ ### Get Movie Recommendation
  method: `GET`<br>
  endpoint: `/taste-dive`
  
  #### _Request_ :
  * query: 
    ```javascript
    title: String, required
    ```
    
  #### _Response_ :
  - 200
    ```javascript
    {
        "Similar": {
            "Info": [
            {
                "Name": "Aladdin",
                "Type": "movie"
            }
            ],
            "Results": [
            {
                "Name": "Pocahontas",
                "Type": "movie"
            },
            {
                "Name": "The Little Mermaid",
                "Type": "movie"
            },
            {
                "Name": "Bambi",
                "Type": "movie"
            },
            ...
            ]
    } 
    ```
  - 404
    ```javascript
    Not found
    ```
  - 403
    ```javascript
    Unauthorized token
    ```

## TMDB
+ ### Find Movie By Title
  method: `GET`<br>
  endpoint: `/tmdb/search/movie`
  
  #### _Request_ :
  * query: 
    ```javascript
    query: String, required
    ```
    
  #### _Response_ :
  - 200
    ```javascript
    420817
    ```
  - 404
    ```javascript
    Not found
    ```
  - 403
    ```javascript
    Unauthorized token
    ```


+ ### Find Movie By ID
  method: `GET`<br>
  endpoint: `/tmdb/`
  
  #### _Request_ :
  * params: 
    ```javascript
    movie_id: Number, required
    ```
    
  #### _Response_ :
  - 200
    ```javascript
    {
      adult: false,
      backdrop_path: "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
      belongs_to_collection: null,
      budget: 200000000,
      genres: [
        {
          id: 28,
          name: "Action"
        }
      ],
      homepage: "https://www.hobbsandshawmovie.com",
      id: 384018,
      imdb_id: "tt6806448",
      original_language: "en",
      original_title: "Fast & Furious Presents: Hobbs & Shaw",
      overview: "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
      popularity: 445.865,
      poster_path: "/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
      production_companies: [
        {
          id: 33,
          logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
          name: "Universal Pictures",
          origin_country: "US"
          }
        ],
        production_countries: [
          {
          iso_3166_1: "US",
          name: "United States of America"
          }
        ],
        release_date: "2019-08-01",
        revenue: 0,
        runtime: 136,
        spoken_languages: [
          {
          iso_639_1: "en",
          name: "English"
          }
        ],
        status: "Released",
        tagline: "",
        title: "Fast & Furious Presents: Hobbs & Shaw",
        video: false,
        vote_average: 6.6,
        vote_count: 392
      }
    }
    ```
  - 404
    ```javascript
    Not found
    ```
  - 403
    ```javascript
    Unauthorized token
    ```

+ ### Find Most Popular Movie
  method: `GET`<br>
  endpoint: `/tmdb/popular`
  
  #### _Request_ :
  * params: 
    ```javascript
    page: Number, optional
    ```
    
  #### _Response_ :
  - 200
    ```javascript
    {
      page: 1,
      total_results: 19878,
      total_pages: 994,
      results: [
      {
        vote_count: 389,
        id: 384018,
        video: false,
        vote_average: 6.6,
        title: "Fast & Furious Presents: Hobbs & Shaw",
        popularity: 445.865,
        poster_path: "/keym7MPn1icW1wWfzMnW3HeuzWU.jpg",
        original_language: "en",
        original_title: "Fast & Furious Presents: Hobbs & Shaw",
        genre_ids: [ 28 ],
        backdrop_path: "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
        adult: false,
        overview: "A spinoff of The Fate of the Furious, focusing on Johnson's US Diplomatic Security Agent Luke Hobbs forming an unlikely alliance with Statham's Deckard Shaw.",
        release_date: "2019-08-01"
      },
      {
        vote_count: 1579,
        id: 420818,
        video: false,
        vote_average: 7.2,
        title: "The Lion King",
        popularity: 344.807,
        poster_path: "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
        original_language: "en",
        original_title: "The Lion King",
        genre_ids: [12, 16, 10751, 18, 28 ],
        backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
        adult: false,
        overview: "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival.",
        release_date: "2019-07-12"
      }
    }
    ```
  - 404
    ```javascript
    Not found
    ```
  - 403
    ```javascript
    Unauthorized token
    ```
