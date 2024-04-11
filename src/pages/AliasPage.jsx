import { Link } from "react-router-dom";
import Teams from "../components/Teams/Teams";
import { ROUTES } from "../routes";

import BottomBtn from "../components/BottomBtn/BottomBtn";

const AliasPage = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "var(--violet-300)" }}>
      <div className="container">
        <Teams />
        
      </div>

      <BottomBtn/>
      
    </div>
  );
};

export default AliasPage;
