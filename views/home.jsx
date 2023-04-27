const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div className='homeContainer'>
                <img className="dragon" src="/images/dragonfruitbowl.jpg" alt="Dragon Fruit Bowl" />
                <div>
                  Photo By: <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a>
                   on <a href="unsplash.com">UNSPLASH</a>
                </div>
              
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = home
