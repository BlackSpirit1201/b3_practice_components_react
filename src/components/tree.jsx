import covenas1 from '../assets/img/tree.jpg';

export const tree =({props}) => {
    return (
        <img src="" alt="Paisaje de lago"
        className={props.className} />
    )
}

tree.protoTypes = {
    className: PropType.string
}