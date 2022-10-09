import React, { useState } from 'react';
import './App.css';
import { Bug, BugPriority } from './Bug';
import { v4 as uuid } from 'uuid';
import BugListTable from './BugListTable';

function App() {
    const [newBugDescription, setNewBugDescription] = useState<string>('');
    const [newBugPriority, setNewBugPriority] = useState<string>('Medium');
    const [bugList, setBugList] = useState<Bug[]>([]);

    const addBug = (event: any) => {
        event.preventDefault();
        const newBug: Bug = {
            id: uuid(),
            description: newBugDescription,
            priority: newBugPriority as BugPriority,
        };

        setBugList([...bugList, newBug]);

        setNewBugDescription('');
        setNewBugPriority('Medium');
    };
    const deleteBug = (id: string) => {
        const bugs = bugList.filter((bug) => bug.id !== id);

        setBugList(bugs);
    };
    return (
        <div className='app'>
            <h1 className='left-margin'>Bug Tracker</h1>
            <div>
                <BugListTable
                    bugs={bugList}
                    onDeleteBug={(id: string) => deleteBug(id)}
                />
            </div>
            <form className='add-new-bug-form' onSubmit={addBug}>
                <label htmlFor='newBugDescription'>New bug description:</label>
                <input
                    type='text'
                    id='newBugDescription'
                    value={newBugDescription}
                    onChange={(event) =>
                        setNewBugDescription(event.target.value)
                    }
                />
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
