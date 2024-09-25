import covenas1 from '../assets/img/lake2.jpg';

export const lake2 =({props}) => {
    return (
        <img src="" alt="Paisaje de lago"
        className={props.className} />
    )
}

lake2.protoTypes = {
    className: PropType.string
}