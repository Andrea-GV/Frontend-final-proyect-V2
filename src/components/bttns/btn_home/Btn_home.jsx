import { useHistory } from "react-router-dom";

export default function ScannerResult() {
  const history = useHistory();

  const handleHomeButtonClick = () => {
    history.push("/");
  };

  return (
    <>
      {/*... (rest of the code remains the same) */}

      <button className="home-but" onClick={handleHomeButtonClick}>
        Siguiente
      </button>
    </>
  );
}