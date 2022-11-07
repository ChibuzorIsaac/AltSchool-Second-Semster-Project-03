import { Link } from "react-router-dom";
import "./App.css"


const Error = () => {
    return (
        <section className="container">
            <div className="err-content">
                <h2>404 - Error</h2>
                <p className="err-text">Page Not Found</p>
            </div>
            <p className="info">Click <Link to="/">here</Link> to go back to main page</p>
            </section>
    )
}  


export default Error