
import { Link } from 'react-router'

export default function Navbar() {
    return (
        <div>
            <nav className='flex'>
                <Link to={"/user"}>User</Link>
                <Link to={"/task"}>Task</Link>

                <Link to={"/check"}>Check</Link>
            </nav>
        </div>
    )
}
