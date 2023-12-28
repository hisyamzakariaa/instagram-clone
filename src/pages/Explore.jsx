import { fetchExplore } from "../http"
import classes from './Explore.module.css'

const pics = fetchExplore()
console.log('Explore:', pics)

function Explore(){
    return(
        <main>
            <div className={classes.text}>
                <p>Explore the world around you!</p>
            </div>
            <div className={classes.pics_container}>
                {pics.map((pic) => (
                    <div key={pic.id} className={classes.pic_container}>
                        <img src={pic.pic} />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Explore