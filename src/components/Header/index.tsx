import * as C from './styles'
import  Logo  from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'

export function Header(){
    return (
        <C.Header>
            <div className="container">
              <Link to="/">
                <img src={Logo}  />
              </Link>

                <nav>
                    <ul>
                       <li>
                        <Link to="/favorites">
                          Favorites
                        </Link>
                       </li>
                        <li>
                            <Link to="/locations">locations</Link>
                        </li>
                        <li>
                          <Link to="/episodes">Episodes</Link>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        </C.Header>
    )
}