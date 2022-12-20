import Image1 from "../../Assets/Bootstrap/marq/bell.svg"
import Image2 from "../../Assets/Bootstrap/marq/bicycle.svg"
import Image3 from "../../Assets/Bootstrap/marq/book.svg"
import Image4 from "../../Assets/Bootstrap/marq/box.svg"
import Image5 from "../../Assets/Bootstrap/marq/calendar.svg"
import Image6 from "../../Assets/Bootstrap/marq/camera.svg"
import Image7 from "../../Assets/Bootstrap/marq/download.svg"
import Image8 from "../../Assets/Bootstrap/marq/eraser.svg"
import Image9 from "../../Assets/Bootstrap/marq/eye.svg"
import Image10 from "../../Assets/Bootstrap/marq/hourglass.svg"
import Image11 from "../../Assets/Bootstrap/marq/handbag.svg"
import Image12 from "../../Assets/Bootstrap/marq/link.svg"
import Image13 from "../../Assets/Bootstrap/marq/person.svg"
import Image14 from "../../Assets/Bootstrap/marq/power.svg"
import Image15 from "../../Assets/Bootstrap/marq/stack.svg"

const LineTwo = () => {
    return (
        <div className="marq-single">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
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

export default LineTwo;
