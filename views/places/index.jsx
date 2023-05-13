const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className=''>
        <h2><a href={`/places/${place.id}`}>{place.name}</a></h2>
        
        <p className='text-center'>
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} style={{ maxWidth: '300px' }}/>
        <p className='text-center'>
          Located in {place.city}, {place.state}
        </p>
        <hr />
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Rest-Rant: Places to rant and rave about</h1>
            
            <div className='px-4 py-5 my-5 text-center'>
              {placesFormatted}
            </div>
        </main>
    </Def>
)
}

  

module.exports = index
