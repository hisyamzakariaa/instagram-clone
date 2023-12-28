import classes from './Header.module.css'

function Header({stories}){
    return(
        <header>
            {stories.map((story) => (
                <div key={story.id} className={story.active === 1 ? classes.story_container : `${classes.story_container} ${classes.active}`}>
                    <img src={story.pic} alt="" />
                    <p>{story.username}</p>
                </div>
            ))}
        </header>
    )
}

export default Header