import covenas1 from '../assets/img/antartic.jpg';

export const antartic =({props}) => {
    return (
        <img src="" alt="Paisaje de lago"
        className={props.className} />
    )
}

antartic.protoTypes = {
    className: PropType.string
}