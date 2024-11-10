import './css/header.css';
export function Header(props){
    return(
            <ul className="menu">
                
                <li className={props.currentPage=='home'?'active':''}><a href="/home">Home</a></li>
                <li className={props.currentPage=='about'?'active':''}><a href="/about">About</a></li>
                <li className={props.currentPage=='contact'?'active':''}><a href="/contact">Contact</a></li>

            </ul>
    )
}