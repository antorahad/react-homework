export default function User ({user}){
    const {id, name, email} = user;
    return(
        <>
            <div className="test-card">
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </>
    )
}