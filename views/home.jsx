const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Rest-Rant</h1>
              <h4>Ravishingly relish remarkable restaurant reviews, and riveting food-related 
                  revelations at Rest-Rant, the realm of resplendent culinary experiences.</h4>
              <div className='homeContainer'>
                <img className="dinner" style={{maxWidth: '100%' }} src="https://hellosubscription.com/wp-content/uploads/2022/10/image_635a8d94e3e25.png?quality=100?resize=935%2C623&quality=90&strip=all" alt="Dragon Fruit Bowl" />
              <p>Picture @ hellosubscription.com</p>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = home


/*


              <a href="/places">
                <button style={{ maxWidth: '75px' }} className="btn-primary">Places Page</button>
              </a>

*/