import "./profile.css";
import book1 from "./src/imgs/Book1.jpeg";
export const AcccountPage = ({ className, ...props }) => {
  return (
    <div className={"acccount-page " + className}>
      <div className="aiman-alhaimi">AIMAN ALHAIMI </div>
      <div className="rectangle-1"></div>
      <img className="img-3426-1" src={book1} />
      <img className="img-3426-2" src="img-3426-20.png" />
      <img className="img-3432-1" src="img-3432-10.png" />
      <img className="img-3432-2" src="img-3432-20.png" />
      <img className="img-3429-1" src="img-3429-10.png" />
      <img className="img-3429-2" src="img-3429-20.png" />
      <img className="img-3427-1" src="img-3427-10.png" />
      <img className="img-3427-2" src="img-3427-20.png" />
      <div className="banner"></div>
      <img className="ellipse-1" src="ellipse-10.png" />
    </div>
  );
};