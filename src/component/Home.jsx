import React from 'react'
import PropTypes from 'prop-types'

function Home(props) {
    const {name,age}=props;
    return (
        <div>Home {name} {age}</div>
    )
}

Home.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    setPage:PropTypes.func,
    page:PropTypes.object
}

export default Home;