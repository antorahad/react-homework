export default function Testprops(props){
    return(
        <>
            <div className="test-card">
                <h4>Name: {props.name}</h4>
                <p>Age: {props.age}</p>
                <p>Gender: {props.gender}</p>
            </div>
        </>
    )
}