import covenas1 from '../assets/img/lake.jpg';

export const lake =({props}) => {
    return (
        <img src="" alt="Paisaje de lago"
        className={props.className} />
    )
}

lake.protoTypes = {
    className: PropType.string
}