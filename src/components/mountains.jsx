import covenas1 from '../assets/img/mountains.jpg';

export const mountains =({props}) => {
    return (
        <img src="" alt="Paisaje montañas"
        className={props.className} />
    )
}

mountains.protoTypes = {
    className: PropType.string
}