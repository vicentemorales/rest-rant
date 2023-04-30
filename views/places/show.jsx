const React = require('react')
const Def = require('../default')
const places = require('../../models/places')

function show (data) {
    return (
        <Def>
          <main>
            
            <div className='showContainer'>
            <h1>{data.place.name}</h1>
            <h2>Located in {data.place.city},{data.place.state}</h2>
            </div>
            <img src={data.place.pic} alt="Thai Food" />
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>     

          </main>
        </Def>
    )
}

module.exports = show
