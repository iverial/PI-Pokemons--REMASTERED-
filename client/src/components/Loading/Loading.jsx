import imagenLoading from "../../assets/pikachu.gif"
import a from "./Loading.module.css"

const Loading = () => {
    return (
        <div className={a.container}>
            <h2>Cargando...</h2>
            <img src={imagenLoading} alt="cargando" />
        </div>
    )
}

export default Loading