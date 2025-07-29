
import { Link } from 'react-router'

export default function Navbar() {
    return (
        <div>
            <nav className='flex'>
                <Link to={"/user"}>User</Link>
                <Link to={"/task"}>Task</Link>
            </nav>
        </div>
    )
}
