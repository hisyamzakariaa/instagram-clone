import { Link } from 'react-router-dom'
import './IconButton.module.css'

function IconButton({ className, size, caption, to }){
    return(
        <Link to={to}>
            <button className={caption ==='Home' ? 'home' : ''}><i className={className} style={{ fontSize: `${size}px`}}></i>{caption}</button>
        </Link>
    )
}

export default IconButton