export default function Desprops({name, age, gender}){
    return(
        <>
            <div className="test-card">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
            </div>
        </>
    )
}