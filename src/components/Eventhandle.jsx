export default function Eventhandle (){
    const handleEventOne = () => {
        alert('This is a default js alert');
    }

    const handleEventTwo = (a, b) => {
        const result = a + b;
        const sumButton = document.getElementById('sum-btn');
        sumButton.innerText = `${a} + ${b} = ${result}`;
    }
    return (
        <>
            <button onClick={handleEventOne}>click one</button>
            <button id="sum-btn" onClick={() => handleEventTwo(5, 5)}>click two</button>
        </>
    )
}