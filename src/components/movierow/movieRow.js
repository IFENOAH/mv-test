import { useRef } from "react";
import { useGetMoviesQuery } from "../../Api/apiSlice";
import { consts } from 'react-elastic-carousel';
import { ArrowIcon } from '../assets/generated'
import MovieCard from '../cards/moviecard'
import ReactElasticCarousel from "react-carousel-elasticss";
import '../../index.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export const MovieRow = ({ genre }) => {
    
    const carouselRef = useRef();
    const { data } = useGetMoviesQuery(genre);

    const renderArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ?  <ArrowIcon  style={{cursor: 'pointer'}} onClick={() => carouselRef.current.slidePrev()} /> 
        : <ArrowIcon  style={{transform: 'rotate(180deg)', cursor: "pointer"}} onClick={() => carouselRef.current.slideNext()} />
        return (
            <button className='mb-40' onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    return (
        <div style={{width: "100%"}} className='styling-example sm:px-6'>
            <ReactElasticCarousel renderArrow={renderArrow} pagination={false} itemPadding={[5, 20]} ref={carouselRef} breakPoints={breakPoints} >
            {data?.results?.map((movie) => (
                <MovieCard
                    key={movie.id}
                    poster={movie.poster_path}
                    title={movie.title || movie.original_name || movie.original_title}
                    type={movie.media_type}
                />
            ))}
            </ReactElasticCarousel>
        </div>
    )
}