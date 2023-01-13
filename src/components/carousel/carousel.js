import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
];
  
export const MovieCarousel = ({children}) => {

    return (
        <div className="App">
            <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints}>
                {children}
            </Carousel>
            </div>
        </div>
    );
}