import './Card.css'

function Card(props){

    //anything we receive as a class name from outside is added to this string
    const classes='card ' + props.className
return (
    <div className={classes}>{props.children}</div>
)
}

export default Card;