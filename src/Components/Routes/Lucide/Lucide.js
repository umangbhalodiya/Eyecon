const Lucide = () => {
    function importAll(r) {
        let images = {};
        r.keys().map((item) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }
    const images = importAll(require.context("../../Assets/Lucide/"));
    function download(source) {
        const fileName = source.split("/").pop();
        var el = document.createElement("a");
        el.setAttribute("href", source);
        el.setAttribute("download", fileName);
        document.body.appendChild(el);
        el.click();
        el.remove();
    }

    return (
        < div className="result-div" >
            {
                Object.keys(images).map((key) => (
                    <div
                        className="image-item"
                        onClick={() => {
                            download(images[key]);
                        }}
                    >
                        <img src={images[key]} alt="" />
                        <span className="name-span">
                            {images[key]?.split("/")[3]?.split("-")[0]?.split(".")[0]}
                        </span>
                    </div>
                ))
            }
        </div >

    );
};

export default Lucide;
