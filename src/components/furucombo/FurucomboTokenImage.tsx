import { useState } from "react";

interface Props {
  token?: string;
  width?: number;
}

const BASE_URL = "https://cdn.furucombo.app/assets/img/token/";

const FurucomboTokenImage = ({ token, width = 30 }: Props) => {
  const [img, setImage] = useState(`${BASE_URL}${token}.png`);
  const [imageNotFound, setImageNotFound] = useState(false);

  const imageReturnError = () => {
    if (img.includes(".svg")) {
      setImageNotFound(true);
      return;
    }
    setImage(`${BASE_URL}${token}.svg`);
  };

  return (
    <div>
      {!token || imageNotFound ? (
        <div style={{ width: `${width}px`, height: "2px" }}></div>
      ) : (
        <img width={width} src={img} onError={imageReturnError} />
      )}
    </div>
  );
};

export default FurucomboTokenImage;
