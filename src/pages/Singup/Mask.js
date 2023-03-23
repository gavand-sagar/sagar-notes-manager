export default function Mask({ label, len }) {

    function displayMask() {
        return label.substring(0, len)
            + "*".repeat(label.length - len)
    }

    return (
        <>
            <span className="my-button"> {displayMask()} </span>
        </>
    )
}