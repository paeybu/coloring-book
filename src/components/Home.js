import React from 'react'
import { Link } from 'react-router-dom'
import Rabbit from '../assets/rabbit.svg'
import WoodDuck from '../assets/woodduck.svg'

const Home = () => {
  return (
    <div>
      <h1>Coloring Books</h1>
      <ul className="books">
        <li>
          <h4>
            <Link to="/rabbit">Rabbit</Link>
          </h4>
          <img src={Rabbit} className="thumbnail" />
        </li>
        <li>
          <h4>
            <Link to="/woodduck">WoodDuck</Link>
          </h4>
          <img src={WoodDuck} className="thumbnail" />
        </li>
      </ul>
    </div>
  )
}

export default Home
