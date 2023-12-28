import classes from './Main.module.css'

function Main({users}){
    
    return(
        <main>
            {users.map(user => (
                
                <div key={user.username} className={classes.content_container}>
                    <div className={classes.profile}>
                        <img src={user.pic}/> 
                        <p><span>{user.name}</span> / {user.update} hours ago</p>
                    </div>

                    <div className={classes.pic}>
                        <img src={user.updatePic}/>
                    </div>

                    <div>
                        <i id={classes.heart} className="bi bi-heart"></i>
                        <i id={classes.chat} className="bi bi-chat"></i>
                        <i id={classes.send} className="bi bi-send"></i>
                        <span>{user.likes} likes</span>
                        <p><span>{user.username}</span> {user.quote}</p>
                        {user.comments.length===0 ? 
                            <p>No comments yet...</p> : 
                        <div className={classes.comments_container}>
                            <p>Comments:</p>
                            {(user.comments).map((element,index) => (
                            <p key={index}>
                                <span>{element.username}</span>: {element.comment}
                            </p>
                            ))}
                        </div>}
                    </div>
                    <hr/>
                </div>

            ))}
        </main>
    )
}

export default Main