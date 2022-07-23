import React, { useEffect, useState } from 'react'
import './MovieDB.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesListData, getSearchMoviesList } from '../pages/action';
import { MovieDetailsFragment, MovieModalPopup } from './MovieDetails';
import no_image from './../assets/no_image.png'


function MovieDBManager() {
    const dispatch = useDispatch();
    const MoviesList = useSelector((state) => state.MainReducer.MoviesList);
    const [MoviesData, setMoviesData] = useState([])
    const [MovieDetailsModal, setMovieDetailsModal] = useState(false)
    const [selectedMovieDetails, setSelectedMovieDetails] = useState([]);
    const [PageOffset, setPageOffset] = useState(null);
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [pageNoDisplay, setPageNoDisplay] = useState(arr);
    const [pageClick, setPageClick] = useState(1);

    useEffect(() => {
        setMoviesData(MoviesList?.results)
        // setPageOffset(MoviesList?.total_pages)
        setPageOffset(35);
    }, [MoviesList])
    useEffect(() => {
        dispatch(getMoviesListData(1))
    }, [dispatch]);
    const onClickMovieCard = data => {
        setMovieDetailsModal(true);
        setSelectedMovieDetails(data)
    }
    const [query, setQuery] = useState('')
    const onSearchMovieDB = (event) => {
        let query = event.target.value;
        setQuery(query)
    }

    const onKeyDown = (event) => {
        if (event.key === 'Enter' && query !== '') {
            dispatch(getSearchMoviesList(1, query))
        }
        if (event.key === 'Enter' && query === '') {
            dispatch(getMoviesListData(1))
        }
    }

    const onClickSearchButton = () => {
        if (query !== '') {
            dispatch(getSearchMoviesList(1, query))
        }
        if (query === '') {
            dispatch(getMoviesListData(1))
        }
    }
    const onClickPageNo = (dt) => {
        console.log(query)
        console.log(dt)
        setPageClick(dt);
        if (query !== '') {
            dispatch(getSearchMoviesList(dt, query))
        }
        if (query === '') {
            dispatch(getMoviesListData(dt))
        }
    }


    const onClickPrevPage = () => {
        setPageClick('prev')
        let temp = [...pageNoDisplay];
        let firstDigit = pageNoDisplay[0];
        if (firstDigit !== 1) {
            let temp2 = temp.map((dt, i) => firstDigit - 10 + i)
            setPageNoDisplay(temp2)
            setPageClick(temp2[0]);
        }
        else {
        }

    };
    const onClickNextPage = () => {
        let temp = [...pageNoDisplay];
        let lastDigit = pageNoDisplay[pageNoDisplay.length - 1];
        let it = PageOffset - lastDigit;
        if (lastDigit + 10 < PageOffset && lastDigit !== '') {
            let temp2 = temp.map((dt, i) => lastDigit + i + 1)
            setPageNoDisplay(temp2);
            setPageClick(temp2[0]);
        }
        if (pageNoDisplay[it] + 9 <= PageOffset) {
            let tem = temp.map((d, i) => i + 1 <= it ? d + 10 : '')
            setPageNoDisplay(tem);
            setPageClick(tem[0]);
        }
    };

    return (
        <>
            <section className='movie_db_container'>
                <header className='search_bar' >
                    <input type='text' placeholder='Search Movies .......' onChange={onSearchMovieDB} onKeyDown={onKeyDown} />
                    <button onClick={onClickSearchButton}>Search</button>
                </header>
           
                <section className='movies_container'>
                    {
                        MoviesData?.map(data => (
                            <section className='card_container' key={data?.id} onClick={() => onClickMovieCard(data)}>
                                <img src={data?.backdrop_path === null ? no_image : `https://image.tmdb.org/t/p/w500${data?.backdrop_path}`} alt="" />
                                <main className='card_info'>
                                    <div id='title'> {data?.title}</div>
                                    <div id='rating'> {data?.vote_average} / 10  </div>
                                </main>
                            </section>
                        ))
                    }
                </section>
                <section className='pagination_container'>
                    <span onClick={onClickPrevPage} id='prev'> {pageNoDisplay[0] !== 1 && 'PREV'}</span>
                    {pageNoDisplay.map(dt => <span className={(pageClick === dt) && 'active'} onClick={() => onClickPageNo(dt)} >{dt}</span>)}
                    <span onClick={onClickNextPage} id='prev'>{(PageOffset - pageNoDisplay[1]) > 10 && 'NEXT'}</span>
                </section>
                <br/>
            </section>

            {MovieDetailsModal && <MovieModalPopup isOpen={MovieDetailsModal} setShowModal={setMovieDetailsModal}>
                <MovieDetailsFragment data={selectedMovieDetails} onClickClose={() => setMovieDetailsModal(false)} />
            </MovieModalPopup>}
        </>
    )
}

export default MovieDBManager