const React = require('react')
const Def = require('../default')
const places = require('../../models/places')
const comment = require('../../models/comment')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No Comments Yet!
    </h3>
  )

  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            
            <div className='col-sm-6'>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt="Thai Food" />
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            </div>

            <hr />

            <h2>Comments</h2>
            {comments}
            
            <h2>Wanna rant or rave about {data.place.name}?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>

                {/*Rating Dial*/}
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>

                {/*Rant Checkbox*/}
                <div className="form-check col-sm-2">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" className="form-check-input" />
                </div>
              </div>

              

              {/*Submit*/}
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>

            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
              <input value="DELETE"type="submit" className="btn btn-danger"/>
            </form>     

          </main>
        </Def>
    )
}

module.exports = show


