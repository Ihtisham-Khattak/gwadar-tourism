import React from "react";
// import Gwadar1 from '../assets/gwadar5.jpg';
// import Gwadar2 from '../assets/gwadar2.jpg';
// import Gwadar3 from '../assets/gwadar3.jpg';
// import Gwadar4 from '../assets/gwadar4.jfif';
// import Gwadar6 from '../assets/gwadar6.jpg';
// import Gwadar7  from '../assets/gwadar7.jpg';

const SelectesImage = (props) => {
  return (
    <div className="relative">
      <img src={props.bg} alt="gwadar" className="object-conatin w-full h-full" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="absolute left-5 bottom-5 text-gray-200 hover:text-lime-500 text-2xl">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectesImage;
