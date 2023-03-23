export default function MyButton({ label, active, value }) {

    function displayLabel() {
        return label.charAt(0).toUpperCase()
            + label.substring(1).toLowerCase()
    }


    return (
        <div>
            {value == 0 ? <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span> : <></>}
            {value == 1 ? <span>&#9733;&#9734;&#9734;&#9734;&#9734;</span> : <></>}
            {value == 2 ? <span>&#9733;&#9733;&#9734;&#9734;&#9734;</span> : <></>}
            {value == 3 ? <span>&#9733;&#9733;&#9733;&#9734;&#9734;</span> : <></>}
            {value == 4 ? <span>&#9733;&#9733;&#9733;&#9733;&#9734;</span> : <></>}
            {value == 5 ? <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> : <></>}
        </div>
    )
}