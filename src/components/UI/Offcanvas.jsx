/* eslint-disable react/prop-types */
import ReactDOM from "react-dom";
import "./Offcanvas.css";

const Backdrop = (props) => {
    return (<div className="backdrop" onClick={props.onClose} />);
  
};
const OffcanvasOverlay = (props) => {
  return (
    <div className="offcanvas">
      <div className="content">{props.children}</div>
    </div>
  );
};
const Offcanvas = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <OffcanvasOverlay  >{props.children}</OffcanvasOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Offcanvas;
