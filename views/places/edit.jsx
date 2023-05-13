const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>

            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
            <div className="">
                {/*1*/}
                <div className="">
                <label htmlFor="name">
                Place Name
                </label>
                
                <input className="" id="name" name="name" required/>
                </div>

                {/*2*/}
                <div className="">
                <label htmlFor="pic">
                Place Picture
                </label>
                
                <input className="" id="pic" name="pic"/>
                </div>

                {/*3*/}
                <div className="">
                <label htmlFor="city">
                City
                </label>
                
                <input className="" id="city" name="city"/>
                </div>

                {/*4*/}
                <div className="">
                <label htmlFor="state">
                State
                </label>
                
                <input className="" id="state" name="state"/>
                </div>

                {/*5*/}
                <div className="">
                <label htmlFor="cuisine">
                Cuisine
                </label>
                
                <input className="" id="cuisine" name="cuisine"/>
                </div>
            </div>
            
            <input className="btn btn-primary" type="submit" value="Edit Place" required/>
            
            
            </form>


          </main>
        </Def>
    )
}

module.exports = edit_form
