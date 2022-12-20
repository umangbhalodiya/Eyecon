import Image1 from "../../Assets/Doodle/marq/box.svg"
import Image2 from "../../Assets/Doodle/marq/chip.svg"
import Image3 from "../../Assets/Doodle/marq/cloud.svg"
import Image4 from "../../Assets/Doodle/marq/dashboard.svg"
import Image5 from "../../Assets/Doodle/marq/filter.svg"
import Image6 from "../../Assets/Doodle/marq/key.svg"
import Image7 from "../../Assets/Doodle/marq/mail.svg"
import Image8 from "../../Assets/Doodle/marq/message.svg"
import Image9 from "../../Assets/Doodle/marq/paste.svg"
import Image10 from "../../Assets/Doodle/marq/phone.svg"
import Image11 from "../../Assets/Doodle/marq/send.svg"
import Image12 from "../../Assets/Doodle/marq/speaker.svg"
import Image13 from "../../Assets/Doodle/marq/switch.svg"
import Image14 from "../../Assets/Doodle/marq/tree.svg"
import Image15 from "../../Assets/Doodle/marq/user.svg"

const listOne = () => {
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

export default listOne;
