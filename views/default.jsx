const React = require('react')

import '../public/css/style.css'

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
            </head>
                <body>

                <nav>

                <ul className="navbar navbar-default pl-5 justify-content-start d-flex">

                <li className="nav navbar-nav" style={{ marginLeft: '15px'}}>
                    <a className="nav-link" href="/">Rest-Rant</a>
                </li>

                <div style={{ borderLeft: '1px solid #D3D3D3', height: '35px', marginLeft: '15px' }}></div>

                <li className="nav navbar-nav" style={{ marginLeft: '15px'}}>
                    <a className="nav-link" href="/places" >Places</a>
                </li>
                
                <div style={{ borderLeft: '1px solid #D3D3D3', height: '35px', marginLeft: '15px' }}></div>

                <li className="nav navbar-nav" style={{ marginLeft: '15px' }}>
                    <a className="nav-link" href="/places/new" >Add Place</a>
                </li>

                </ul>

                </nav>

                {html.children}
                </body>
        </html>
    )
}

module.exports = Def
