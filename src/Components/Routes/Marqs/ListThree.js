import Image1 from "../../Assets/Icons/marq/add.svg"
import Image2 from "../../Assets/Icons/marq/alarm.svg"
import Image3 from "../../Assets/Icons/marq/attach.svg"
import Image4 from "../../Assets/Icons/marq/basket.svg"
import Image5 from "../../Assets/Icons/marq/cut.svg"
import Image6 from "../../Assets/Icons/marq/download.svg"
import Image7 from "../../Assets/Icons/marq/duplicate.svg"
import Image8 from "../../Assets/Icons/marq/eye.svg"
import Image9 from "../../Assets/Icons/marq/folder.svg"
import Image10 from "../../Assets/Icons/marq/grid.svg"
import Image11 from "../../Assets/Icons/marq/infinite.svg"
import Image12 from "../../Assets/Icons/marq/train.svg"
import Image13 from "../../Assets/Icons/marq/trash.svg"
import Image14 from "../../Assets/Icons/marq/tv.svg"
import Image15 from "../../Assets/Icons/marq/wifi.svg"

const ListThree = () => {
    return (
        <div className="marq-single">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return (
                    <>
                        <div className="image-item">
                            <img src={Image1} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image2} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image3} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image4} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image5} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image6} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image7} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image8} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image9} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image10} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image11} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image12} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image13} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image14} alt="" />
                        </div>
                        <div className="image-item">
                            <img src={Image15} alt="" />
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default ListThree;
