const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main style={{ marginLeft: '15px' }}>
            <h1>Add a New Place</h1>
            <form className="newForm" style={{ marginLeft: '15px' }} method="POST" action="/places">
            
            {/*1*/}
            <div className="" >
            <label htmlFor="name">
            Place Name
            </label>
            
            <input className="form-control" style={{ maxWidth: '60%' }} id="name" name="name" required/>
            </div>

            {/*2*/}
            <div className="">
            <label htmlFor="pic">
            Place Picture
            </label>
            
            <input className="form-control" style={{ maxWidth: '60%' }} id="pic" name="pic"/>
            </div>

            {/*3*/}
            <div className="">
            <label htmlFor="city">
            City
            </label>
            
            <input className="form-control" style={{ maxWidth: '60%' }} id="city" name="city"/>
            </div>

            {/*4*/}
            <div className="">
            <label htmlFor="state">
            State
            </label>
            
            <input className="form-control" style={{ maxWidth: '60%' }} id="state" name="state"/>
            </div>

            {/*5*/}
            <div className="">
            <label htmlFor="cuisine">
            Cuisine
            </label>
            
            <input className="form-control" style={{ maxWidth: '60%' }} id="cuisine" name="cuisine"/>
            </div>

            {/*7*/}
            <div className="">
              <label for="founded">
                Founded Year
              </label>

              <input 
              className="" 
              id="founded" 
              name="founded"
              type= "number"
              value={new Date().getFullYear()}  
              style={{ marginLeft: '5px' }}/>
            </div>

            <br />
            <input className="btn btn-primary" type="submit" value="Add Place" required/>

            </form>
          </main>
        </Def>
    )
}

module.exports = new_form
