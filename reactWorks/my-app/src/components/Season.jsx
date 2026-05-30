import heroImg from '../assets/hero.png'

const Season = () => {

    let season = "봄";
    return(
        <div>
              <h3>현재계절: {season}</h3>
              <img
                src={heroImg}
                alt="메인이미지"
                width={300}
              />
        </div>
    )


}

export default Season;