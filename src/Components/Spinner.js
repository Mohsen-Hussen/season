import React from 'react'

const Spinner = (props) => {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{props.msg}</div>
            </div>
            <p></p>
        </div>
    )
}

export default Spinner;
