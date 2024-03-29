import "./Depth2Frame.css";
import image from "./Erp.png"
const Depth2Frame = () => {
  return (
    <header className="depth-2-frame-0">
      <div className="depth-3-frame-0">
   <div  className="header-img-div">
    <img src={image}/>
   </div>
      </div>
      <div className="depth-3-frame-1">
        <div className="depth-4-frame-01">
          <div className="depth-5-frame-03">
            <div className="depth-6-frame-05">
              <div className="home">Home</div>
            </div>
          </div>
          <div className="depth-5-frame-11">
            <div className="depth-6-frame-06">
              <div className="pricing">Pricing</div>
            </div>
          </div>
          <div className="depth-5-frame-21">
            <div className="depth-6-frame-07">
              <div className="testimonials">Testimonials</div>
            </div>
          </div>
          <div className="depth-5-frame-3">
            <div className="depth-6-frame-08">
              <div className="features">Features</div>
            </div>
          </div>
        </div>
        <div className="depth-4-frame-11">
          <div className="depth-5-frame-04">
            <div className="depth-6-frame-09">
              <div className="depth-7-frame-05">
                <b onClick={()=>{
              window.location.href = "https://test.headtler.com/login";
                }} className="month-free-trial">1 Month Free Trial</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="depth-4-frame-21"
          loading="eager"
          alt=""
          src="/depth-4-frame-2@2x.png"
        />
      </div>
    </header>
  );
};

export default Depth2Frame;
