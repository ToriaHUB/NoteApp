import React from 'react'

export const Notes = ({notes, onRemove}) => {
    console.log(`onRemove:`, onRemove);
    return (
        <ul className="list-group">
            {notes.map((note) => (
                <li className="list-group-item note" key={note.id}>
                    <div>
                        <strong>{note.title}</strong>
                        <small>{note.data}</small>
                    </div>

                    <button
                        type="button" className="btn btn-outline-danger btn-sm" onClick={() => onRemove(note.id)}>
                        &times;
                    </button>
                </li>))}
        </ul>
    )
};