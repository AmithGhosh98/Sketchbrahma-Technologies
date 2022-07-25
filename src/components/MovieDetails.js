import React from 'react'
import ReactModal from "react-modal";
import closeIcon from './../assets/CloseIcon.png'
ReactModal.setAppElement('#root')
export function MovieModalPopup({ isOpen, setShowModal, children }) {
    return (<>
        <div >
            <ReactModal isOpen={isOpen} shouldCloseOnOverlayClick={false} preventScroll={false}
                onRequestClose={() => setShowModal(false)}
                portalClassName='backdrop'
                style={{
                    overlay: {
                        position: 'fixed',
                        top: '25%',
                        left: '20%',
                        width: '60%',
                        height: '400px',
                        background: ' #FFFFFF 0% 0% no-repeat padding-box',
                        boxShadow: ' 6px 6px 45px #00000066',
                        border: ' 1px solid #ECEEF1',
                        // border: ' 5px solid black',
                        opacity: '1',
                    },
                    content: {
                        // position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '5px',
                        border: 'none',
                        background: 'none',
                        overflow: 'none',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '2em'
                    }
                }}>
                {children}
            </ReactModal>
        </div>
    </>)
}


export function MovieDetailsFragment({ data, onClickClose }) {
    return (
        <>
            <section className='movieDetails_container'>
                <div className='img_container' >
                    <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt="" />
                </div>
                <div className='details_container'>
                    <div id='title'>{data?.original_title}</div>
                    <div id='rating'>Rating : <span>{data?.vote_average} / 10</span></div>
                    <div id='desc'>{data?.overview}</div>
                    <div id='rating'>Release Date : <span>{data?.release_date}</span></div>
                    <div id='rating'>Original Language : <span>Englishj</span></div>
                </div>
                <img src={closeIcon} alt='' width='15px' height='15px' onClick={onClickClose} />
            </section>
        </>
    )
}


