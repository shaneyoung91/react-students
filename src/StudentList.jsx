import React from 'react'
import Student from './Student'

export default function StudentList({students}) {
    return (
        <div>
            <table>
                {students.map((student, index) => (
                <Student key={index} student={student} />
                ))}
            </table>
        </div>
    );
};