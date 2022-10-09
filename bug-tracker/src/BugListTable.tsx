import { Bug } from './Bug';

const BugListTable = (props: { bugs: Bug[]; onDeleteBug: Function }) => {
    const { bugs, onDeleteBug } = props;
    const resolvedPressed = (id: string) => {
        onDeleteBug(id);
    };
    return (
        <table className='self-auto divide-solid border-solid border-2'>
            <thead className='divide-solid border-solid'>
                <tr>
                    <th>Description</th>
                    <th>Priority</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='self-auto divide-solid border-solid border-2'>
                {bugs.length === 0 && (
                    <tr>
                        <td>No bugs found</td>
                    </tr>
                )}
                {bugs.length > 0 &&
                    bugs.map((bug) => (
                        <tr key={bug.id}>
                            <td>{bug.description}</td>
                            <td>{bug.priority}</td>
                            <td>
                                <button onClick={() => resolvedPressed(bug.id)}>
                                    Resolved
                                </button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default BugListTable;
