import React, { useState } from 'react';
import './App.css';
import { Bug, BugPriority } from './Bug';
import { v4 as uuid } from 'uuid';

function App() {
    const [newBugDescription, setNewBugDescription] = useState<string>('');
    const [newBugPriority, setNewBugPriority] = useState<string>('Medium');
    const [newBugList, setNewBugList] = useState<Bug[]>([]);

    const addBug = (event: FormEvent) => {
        event.preventDefault();
        const newBug: IBug = {
            id: uuid(),
            description: newBugDescription,
            priority: newBugPriority as BugPriority,
        };
    };
    const deleteBug = () => {};
    return (
        <div className='App'>
            <h1>Bug Tracker</h1>
            <form onSubmit={addBug}>
                <label htmlFor='newBugDescription'>New bug description:</label>
                <input
                    type='text'
                    id='newBugDescription'
                    value={newBugDescription}
                    onChange={(event) =>
                        setNewBugDescription(event.target.value)
                    }></input>
                <label htmlFor='newBugPriority'>New bug priority:</label>
                <select
                    id='newBugPriority'
                    value={newBugPriority}
                    onChange={(event) => setNewBugPriority(event.target.value)}>
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>
                <button type='submit'>Add new bug</button>
            </form>
        </div>
    );
}

export default App;
