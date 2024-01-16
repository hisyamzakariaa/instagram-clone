import IconButton from './IconButton'
import classes from './SideBar.module.css'

const ICON = [
    {
        id: 2,
        className:'bi bi-house',
        caption: 'Home',
        path: '/instagram-clone/'
    },
    {
        id: 3,
        className:'bi bi-search',
        caption: 'Search',
        path: '/search'
    },
    {
        id: 4,
        className:'bi bi-compass',
        caption: 'Explore',
        path: '/instagram-clone/explore'
    },
    {
        id: 5,
        className:'bi bi-film',
        caption: 'Reels',
        path: '/reels'
    },
    {
        id: 6,
        className:'bi bi-chat',
        caption: 'Messages',
        path: '/messages'
    },
    {
        id: 7,
        className:'bi bi-heart',
        caption: 'Notifications',
        path: '/notifications'
    },
    {
        id: 8,
        className:'bi bi-plus-square',
        caption: 'Create',
        path: '/create'
    },
    {
        id: 9,
        className:'bi bi-person-circle',
        caption: 'Profile',
        path: '/profile'
    }
]

function SideBar(){
    return(
        <aside>
            <h2>Instasyam</h2>
            <div className={classes.button_container}>
            {ICON.map(element => (
            <IconButton 
            key={element.id}
            className={element.className}
            size='24'
            caption={element.caption}
            to={element.path}
            />
            ))}
            </div>

        </aside>
    )
}

export default SideBar