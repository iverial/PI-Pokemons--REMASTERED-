import imagenLoading from "../../assets/pikachu.gif";
import a from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={a.container}>
      <div className={a.cargando}>
        <h2>Cargando...</h2>
        {/* <img src={imagenLoading1} alt='cargando'/> */}
      </div>
      <div>
        <img src={imagenLoading} alt="cargando" />
      </div>
    </div>
  );
};

export default Loading;
