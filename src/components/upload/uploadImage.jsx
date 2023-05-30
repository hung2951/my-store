import { useState } from "react";

const UploadImage = () => {
  const [arrImages, setArrImages] = useState([]);
  const convertToBase64 = (e) => {
    let images = [...e.target.files]
    images&&images.map((image) => {
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        if (arrImages.filter((item) => item === reader.result) == "") {
          setArrImages((arrImages) => [reader.result, ...arrImages]);
          images = []
        } else {
          setArrImages((arrImages) => [...arrImages]);
        }
      };
    });
  };
  const removeImg = (url) =>{
    if(window.confirm("Xoa anh ")){
      setArrImages(arrImages.filter(item=>item !== url));
    }
  }
  return (
    <>
      <input type="file" multiple accept="image/*" onChange={convertToBase64} />
      {arrImages &&
        arrImages.map((item, index) => (
          <div key={index + 1}>
            <img onClick={()=>removeImg(item)} src={item} alt="" width={100} />
          </div>
        ))}
    </>
  );
};

export default UploadImage;
