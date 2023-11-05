export default function CheckBox(){
    const qqq2 = () => {
        event.stopPropagation();
        alert("클릭 2")
    }
    const qqq3 = (event) => {
        alert("클릭 3")
    }

    return (
        <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3}/>
        </span>
    )
}