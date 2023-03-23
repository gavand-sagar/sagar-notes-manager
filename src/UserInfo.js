export default function UserInfo(props) {
    return (
        <div className='user-info'>
            <label data-testid='lbl01'>Name :</label>
            <label data-testid='lbl02'>{props.firstName}</label>
        </div>
    )
}