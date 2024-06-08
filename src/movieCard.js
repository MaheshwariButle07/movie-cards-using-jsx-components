

const MovieCards = ({ mname, mrating, lastupdate, mreleasedatetime, mtime, mruntime, cardImg, adult }) => {

    const adultMovie = adult == "18+" ? "adult-movie" : "non-adult-movie"

    return (
        <>
            <div className={`cardContainer ${adultMovie}`}>
                <img className="cardImg" src={cardImg} alt="movie image" />
                <div className="movie-name-reating">
                    <h3 className="margin-between">{mname} </h3>
                    <p className="margin-between">{mrating} </p>
                    <p>{adult}</p>
                </div>
                <div className="mdatetime">
                    <div className="margin-between">
                        <p>{lastupdate}</p>
                        <p>{mreleasedatetime}</p>
                    </div>
                    <div>
                        <p>{mruntime}</p>
                        <p>{mtime}</p>
                    </div>
                </div>
            </div>
        </>)
}

const Heading= () =>{
    return(
        <>
        <h1 className="heading">Movie Cards</h1>
        </>
    )
}

export default Heading;

export{MovieCards};