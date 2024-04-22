import axios from "axios";
import { useEffect, useState } from "react";
import "./scannerResult.css";
import Bttn_Back from "../../components/bttns/bttn_Back/Bttn_Back";

export default function ScannerResult() {
  const [user, setUser] = useState([]);
  const [comparisonResult, setComparisonResult] = useState(null);
  const [comparisonMessage, setComparisonMessage] = useState("");

  const idUser = () => {
    const userId = localStorage.getItem("userId");

    getUserbyId(userId);
    console.log("dentro", userId);
  };

  const getUserbyId = async (id) => {
    const data = await axios.get(
      `https://node-basic-wheat.vercel.app/user/${id}`
    );

    setUser(data); // console.log(user.data?.data.)
  };

  console.log(user);

  const [products, setProducts] = useState([]);

  const getValueFromLocalStorage = () => {
    const storedValue = localStorage.getItem("idProduct");
    if (storedValue) {
      console.log(storedValue); // copyProduct.push(storedValue);

      setQrCodeValue(storedValue);
    }
  };

  const URL = async () => {
    await axios.get(qrCodeValue).then((res) => setProducts(res.data));
  };

  useEffect(() => {
    URL();
    getValueFromLocalStorage();
    idUser();
    getUserbyId();
  }, []);

  useEffect(() => {
    if (products && products.data) {
      setIsLoading(false); // addToDiary(products.data);
    }
  }, [products]);
  console.log(products);

  const [qrCodeValue, setQrCodeValue] = useState(
    localStorage.getItem("idProduct")  
  );
  const [isLoading, setIsLoading] = useState(true);

  const compareAllergies = () => {
    const productAllergies = products.data?.allergy || [];
    const userAllergies = user.data?.data?.allergy || [];

    const matchingAllergies = productAllergies.filter((productAllergy) =>
      userAllergies.includes(productAllergy._id)
    );
    setComparisonResult(matchingAllergies);
    if (matchingAllergies.length > 0) {
      setComparisonMessage("Este producto no es apto para ti  😢");
    } else {
      setComparisonMessage("Este producto si es apto para ti 😋");
    }
  };
    
    return (
    <>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <>
         <div className="butt-back">
            <Bttn_Back />
        </div>
          <div className="product-info">
            <h2>Aquí tienes el resultado</h2>
          </div>
          <div className="">
            <div className="coverImage">
              <img src={products.data?.coverImage} alt="" />
            </div>
            <h1>{products.data?.name}</h1>
            <ul className="ingredientes">
              {products.data?.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <button className="prod-but" onClick={compareAllergies}>Comparar alergias</button>
          {comparisonResult && (
            <div className="allergies">
              <h2>{comparisonMessage}</h2>
              
              <ul>
                {comparisonResult.map((allergy) => (
                  <li key={allergy._id}>{allergy.name}</li>
                ))}
               
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
}


