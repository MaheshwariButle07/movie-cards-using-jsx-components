import ReactDom from "react-dom/client"
import "./card.css"
import "./style.css"
import { MovieCards } from "./movieCard"
import Heading from "./movieCard" 

const root = ReactDom.createRoot(document.getElementById('root'));



root.render(
    <>

    

        <Heading />

        <div className="movie-card-container">

            <MovieCards
                cardImg="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                mname="Avengers:Endgame"
                adult="18+"
                mrating="8.8/10"
                lastupdate="LAST UPDATE"
                mreleasedatetime="SUN 8 SEPT-10.00 PM"
                mruntime="RUNNING TIME"
                mtime="2Hr 09Min" />

            <MovieCards
                cardImg="https://m.media-amazon.com/images/I/815qVQVm0QL._AC_UF1000,1000_QL80_.jpg"
                mname="Artemis Fowl"
                adult="18-"
                mrating="4.3/10"
                lastupdate="LAST UPDATE"
                mreleasedatetime="SUN 8 SEPT-10.00 PM"
                mruntime="RUNNING TIME"
                mtime="1Hr 55Min" />

            <MovieCards
                cardImg="https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png"
                mname="DeadPool"
                adult="18+"
                mrating="8.0/10"
                lastupdate="LAST UPDATE"
                mreleasedatetime="SUN 8 SEPT-10.00 PM"
                mruntime="RUNNING TIME"
                mtime="1Hr 48Min" />




            <MovieCards
                cardImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2_aPkrkKCHU-xw4iJQyngBbgRPSAXsL2Wg&s"
                mname="godzilla minus one"
                adult="18+"
                mrating="7.9/10"
                lastupdate="LAST UPDATE"
                mreleasedatetime="SUN 8 SEPT-10.00 PM"
                mruntime="RUNNING TIME"
                mtime="2Hr 05Min" />

            <MovieCards
                cardImg="https://assetscdn1.paytm.com/images/cinema/Wish-min-96a15050-2bc5-11ee-a540-ef1242eadacd.jpg"
                mname="Wish"
                adult="18-"
                mrating="5.6/10"
                lastupdate="LAST UPDATE"
                mreleasedatetime="SUN 8 SEPT-10.00 PM"
                mruntime="RUNNING TIME"
                mtime="1Hr 42Min" />

            <MovieCards
                cardImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpH0WBHxgyycnezh7SefnwzD5sXOkKxgwROA&s"
                mname="The Little Mermaid"
                adult="18-"
                mrating="7.2/10"
                lastupdate="LAST UPDATE"
                mreleasedatetime="SUN 8 SEPT-10.00 PM"
                mruntime="RUNNING TIME"
                mtime="2Hr 15Min" />


        </div>

    </>
)