import { GrLinkPrevious } from "react-icons/gr";
const hideNav = () => {

}
function HideShow(parameters) {
    return (
        <span className="previous">
            <GrLinkPrevious onClick={hideNav} />
        </span>
    );
}
export default HideShow;