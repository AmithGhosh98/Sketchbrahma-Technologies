


const constructURLs = (name, value) => {
    switch (name) {
        case 'GET_POPULAR_MOVIES_LIST':
            return `https://api.themoviedb.org/3/movie/popular?api_key=77a14a5260e88d3df2c663b952817ab2&language=en-US&page=${value}`
        case 'GET_SEARCH_MOVIES_LIST':
            return `https://api.themoviedb.org/3/search/movie?api_key=77a14a5260e88d3df2c663b952817ab2&language=en-US&page=${value.page}&query=${value.query}`

        default: { }
    }
}
export default constructURLs
