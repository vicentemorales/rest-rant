const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>

            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
            <div className="form-group">
                {/*1*/}
                <div className="form-group">
                <label htmlFor="name">
                Place Name
                </label>
                
                <input className="form-group" id="name" name="name" required/>
                </div>

                {/*2*/}
                <div className="form-group">
                <label htmlFor="pic">
                Place Picture
                </label>
                
                <input className="form-group" id="pic" name="pic"/>
                </div>

                {/*3*/}
                <div className="form-group">
                <label htmlFor="city">
                City
                </label>
                
                <input className="form-group" id="city" name="city"/>
                </div>

                {/*4*/}
                <div className="form-group">
                <label htmlFor="state">
                State
                </label>
                
                <input className="form-group" id="state" name="state"/>
                </div>

                {/*5*/}
                <div className="form-group">
                <label htmlFor="cuisine">
                Cuisine
                </label>
                
                <input className="form-group" id="cuisine" name="cuisine"/>
                </div>
            </div>
            
            <input className="btn btn-primary" type="submit" value="Edit Place" required/>
            
            
            </form>


          </main>
        </Def>
    )
}

module.exports = edit_form
