import covenas1 from '../assets/img/beach.jpg';

export const beach =({props}) => {
    return (
        <img src="" alt="Paisaje de lago"
        className={props.className} />
    )
}

beach.protoTypes = {
    className: PropType.string
}