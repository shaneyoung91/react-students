import React from 'react'
import Score from './Score';

export default function Student({student}) {
    const { name, bio, scores } = student;

    return (
        <>
            <h2>{name}</h2>
            <p>{bio}</p>
            <h3>Scores:</h3>
            <p>
                {scores.map((score, index) => (
                <Score key={index} date={score.date} score={score.score} />
                ))}
            </p>
        </>
    )
}
