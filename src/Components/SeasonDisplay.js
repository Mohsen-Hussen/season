import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        result : "let's hit the beach",
        iconName : "sun"
    },
    winter : {
        result : "Burr, it's chilly",
        iconName : "snowflake"
    }
}

const getSeasons = (lat , month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
}
const SeasonDisplay = (props) => {
    const seasons = getSeasons(props.lat , new Date().getMonth());
    const {result , iconName} = seasonConfig[seasons];
    return (
        <div className={`season-display ${seasons}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{result}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay
