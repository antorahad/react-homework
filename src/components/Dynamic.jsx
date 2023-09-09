export default function Dynamic ({person}){
    const {name, age, job, income} = person;
    return(
        <>
            <div className="test-card">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Profession: {job}</p>
                <p>Sallary: {income}</p>
            </div>
        </>
    )
}