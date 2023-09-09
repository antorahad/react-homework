export default function Conditional({ task, isTrue }) {
    // if (isTrue) {
    //     return (
    //         <>
    //             <div className="test-card">
    //                 <p>{task}</p>
    //                 <p>True</p>
    //             </div>
    //         </>
    //     )
    // }
    // else {
    //     return (
    //         <>
    //             <div className="test-card">
    //                 <p>{task}</p>
    //                 <p>False</p>
    //             </div>
    //         </>
    //     )
    // }
    return(
        <>
            <div className="test-card">
                <p>Task: {task}</p>
                <p>Status: {isTrue? 'True' : 'False'} </p>
            </div>
        </>
    )
}