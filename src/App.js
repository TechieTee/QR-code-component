import "./App.css";
import qrcode from "./images/image-qr-code.png"

function App() {
  return (
    <div className="App">
      <div className="Main">
      <div className="img"><img src={qrcode} alt=""/></div>
        <p>Improve your frontend skills by building projects</p>
        <span>
          scan the QR code to visit frontend Mentor and take your coding skill
          to the next level
        </span>
      </div>{" "}
    </div>
  );
}

export default App;
