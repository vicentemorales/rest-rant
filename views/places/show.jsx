const React = require('react')
const Def = require('../default')
const places = require('../../models/places')

function show (data) {

    return (
        <Def>
          <main>
            
            <div className='col-sm-6'>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt="Thai Food" />
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            </div>
            
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>  

            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
              <input value="DELETE"type="submit" className="btn btn-danger"/>
            </form>     

          </main>
        </Def>
    )
}

module.exports = show
