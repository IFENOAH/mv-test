import { useLayoutEffect, useRef, useState } from "react";
import { useGetMoviesQuery } from "../../Api/apiSlice";
import { consts } from 'react-elastic-carousel';
import { ArrowIcon } from '../assets/generated'
import ReactElasticCarousel from "react-carousel-elasticss";
import '../../index.css'
import { requests } from "../../Api/helper";
import { TrailerCard } from "../cards/trailercard";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2.5 },
    { width: 1200, itemsToShow: 2.5 }
];

export const TrailerRow = () => {
    
    const carouselRef = useRef();
    const { data } = useGetMoviesQuery(requests.fetchTrailer);

    const renderArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ?  <ArrowIcon  style={{cursor: 'pointer'}} onClick={() => carouselRef.current.slidePrev()} /> 
        : <ArrowIcon  style={{transform: 'rotate(180deg)', cursor: "pointer"}} onClick={() => carouselRef.current.slideNext()} />
        return (
            <button className='mb-10' onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }


    return (
        <div style={{width: "100%"}} className='styling-example sm:px-6'>
            <ReactElasticCarousel renderArrow={renderArrow} pagination={false} itemPadding={[5, 20]} ref={carouselRef} breakPoints={breakPoints} >
            {data?.results?.map((movie) => (
                <TrailerCard
                    key={movie.id}
                    poster={movie.backdrop_path}
                    title={movie.name || movie.original_name || movie.original_title}
                />
            ))}
            </ReactElasticCarousel>
        </div>
    )
}