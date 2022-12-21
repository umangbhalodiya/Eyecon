import { ReactComponent as Image1 } from "../../Assets/Lucide/marq/backpack.svg"
import { ReactComponent as Image2 } from "../../Assets/Lucide/marq/bone.svg"
import { ReactComponent as Image3 } from "../../Assets/Lucide/marq/bus.svg"
import { ReactComponent as Image4 } from "../../Assets/Lucide/marq/car.svg"
import { ReactComponent as Image5 } from "../../Assets/Lucide/marq/cloud.svg"
import { ReactComponent as Image6 } from "../../Assets/Lucide/marq/compass.svg"
import { ReactComponent as Image7 } from "../../Assets/Lucide/marq/gem.svg"
import { ReactComponent as Image8 } from "../../Assets/Lucide/marq/import.svg"
import { ReactComponent as Image9 } from "../../Assets/Lucide/marq/layout.svg"
import { ReactComponent as Image10 } from "../../Assets/Lucide/marq/locate.svg"
import { ReactComponent as Image11 } from "../../Assets/Lucide/marq/option.svg"
import { ReactComponent as Image12 } from "../../Assets/Lucide/marq/pizza.svg"
import { ReactComponent as Image13 } from "../../Assets/Lucide/marq/scan.svg"
import { ReactComponent as Image14 } from "../../Assets/Lucide/marq/shirt.svg"
import { ReactComponent as Image15 } from "../../Assets/Lucide/marq/ticket.svg"

const LineFour = () => {
    const imageStyle = { fill: "#000", height: "30px", width: "30px" }
    return (
        <div className="marq-single">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return (
                    <>
                        <div className="image-item">
                            <Image1 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image2 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image3 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image4 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image5 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image6 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image7 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image8 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image9 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image10 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image11 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image12 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image13 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image14 style={imageStyle} alt="" />
                        </div>
                        <div className="image-item">
                            <Image15 style={imageStyle} alt="" />
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default LineFour;
