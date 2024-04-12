import { ROUTES } from "../../routes";
import "./BottomBtn.css";

import { Link } from "react-router-dom";

const BottomBtn = ({from}) => {
  if(from === 'score') {
    return (
      <div className="btn-wrapper">
 
      <Link className="btn__wrapper-continue" to={ROUTES.game}>Продолжить</Link>
    </div>
    )
  }

  if(from === 'team-edit') {
    return (
      <div className="btn-wrapper">
        <Link className="btn__wrapper-continue" to={ROUTES.teams}>Готово</Link>
      </div>
    )
  }
  return (
    <div className="btn-wrapper">
 
      <Link className="btn__wrapper-continue" to={ROUTES.score}>Продолжить</Link>
      <Link className="btn__wrapper-settings" to={ROUTES.settings}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M 10.941406 1 C 10.440729 1 10.010871 1.3797589 9.9492188 1.8769531 L 9.765625 3.3378906 C 8.1615222 3.7536791 6.7458771 4.5916642 5.6210938 5.7363281 L 4.2578125 5.1621094 C 3.7959855 4.9670273 3.2540247 5.1492865 3.0039062 5.5820312 L 1.9433594 7.4160156 C 1.693083 7.8490335 1.8074278 8.4102016 2.2050781 8.7128906 A 0.50005 0.50005 0 0 0 2.2070312 8.7148438 L 3.3789062 9.6035156 C 3.1649079 10.370913 3 11.162819 3 12 C 3 12.837196 3.1661001 13.628831 3.3808594 14.396484 L 2.2070312 15.285156 C 1.8077281 15.587117 1.6961642 16.148988 1.9453125 16.582031 A 0.50005 0.50005 0 0 0 1.9453125 16.583984 L 3.0039062 18.417969 C 3.2540248 18.850713 3.7959855 19.032973 4.2578125 18.837891 L 5.6210938 18.263672 C 6.7452863 19.409268 8.1605836 20.247118 9.765625 20.662109 L 9.9492188 22.123047 C 10.010871 22.620194 10.440729 23 10.941406 23 L 13.058594 23 C 13.559271 23 13.989129 22.620241 14.050781 22.123047 L 14.234375 20.664062 C 15.838985 20.248638 17.253706 19.40838 18.378906 18.263672 L 19.742188 18.837891 C 20.20203 19.032135 20.745589 18.850521 20.996094 18.417969 L 20.998047 18.416016 L 22.056641 16.583984 C 22.306917 16.150967 22.192572 15.589798 21.794922 15.287109 A 0.50005 0.50005 0 0 0 21.792969 15.285156 L 20.619141 14.396484 C 20.8339 13.628831 21 12.837196 21 12 C 21 11.162804 20.8339 10.371169 20.619141 9.6035156 L 21.792969 8.7148438 C 22.192272 8.4128832 22.303835 7.851012 22.054688 7.4179688 A 0.50005 0.50005 0 0 0 22.054688 7.4160156 L 20.996094 5.5820312 C 20.745975 5.1492865 20.204014 4.9670273 19.742188 5.1621094 L 18.378906 5.7363281 C 17.254714 4.5907317 15.839416 3.7528821 14.234375 3.3378906 L 14.050781 1.8769531 C 13.989291 1.3810621 13.559271 1 13.058594 1 L 10.941406 1 z M 10.941406 2 L 13.058594 2 L 13.277344 3.75 A 0.50005 0.50005 0 0 0 13.669922 4.1777344 C 15.346482 4.533169 16.822657 5.4178401 17.931641 6.6464844 A 0.50005 0.50005 0 0 0 18.498047 6.7714844 L 20.130859 6.0820312 L 20.130859 6.0839844 L 21.189453 7.9179688 L 19.783203 8.9824219 A 0.50005 0.50005 0 0 0 19.609375 9.5351562 C 19.861844 10.312348 20 11.138916 20 12 C 20 12.861084 19.861844 13.687652 19.609375 14.464844 A 0.50005 0.50005 0 0 0 19.783203 15.017578 L 21.189453 16.082031 L 20.130859 17.916016 A 0.50005 0.50005 0 0 0 20.130859 17.917969 L 18.498047 17.228516 A 0.50005 0.50005 0 0 0 17.933594 17.353516 C 16.823495 18.58141 15.345654 19.465867 13.669922 19.822266 A 0.50005 0.50005 0 0 0 13.277344 20.25 L 13.058594 22 L 10.941406 22 L 10.722656 20.25 A 0.50005 0.50005 0 0 0 10.330078 19.822266 C 8.6535177 19.466831 7.1773428 18.58216 6.0683594 17.353516 A 0.50005 0.50005 0 0 0 5.5019531 17.228516 L 3.8691406 17.917969 L 3.8691406 17.916016 L 2.8105469 16.083984 L 2.8105469 16.082031 L 4.2167969 15.017578 A 0.50005 0.50005 0 0 0 4.390625 14.464844 C 4.1381555 13.687652 4 12.861084 4 12 C 4 11.138916 4.1389941 10.312667 4.390625 9.5351562 A 0.50005 0.50005 0 0 0 4.2167969 8.9824219 L 2.8105469 7.9179688 L 3.8691406 6.0839844 L 3.8691406 6.0820312 L 5.5019531 6.7714844 A 0.50005 0.50005 0 0 0 6.0683594 6.6464844 C 7.1784586 5.4185871 8.6543463 4.534133 10.330078 4.1777344 A 0.50005 0.50005 0 0 0 10.722656 3.75 L 10.941406 2 z M 12 8 C 10.708334 8 9.6769226 8.5023777 9.0019531 9.2617188 C 8.3269837 10.02106 8 11.013889 8 12 C 8 12.986111 8.3269837 13.97894 9.0019531 14.738281 C 9.6769226 15.497622 10.708334 16 12 16 C 13.291666 16 14.323077 15.497622 14.998047 14.738281 C 15.673016 13.97894 16 12.986111 16 12 C 16 11.013889 15.673016 10.02106 14.998047 9.2617188 C 14.323077 8.5023777 13.291666 8 12 8 z M 12 9 C 13.041666 9 13.760256 9.3726223 14.251953 9.9257812 C 14.74365 10.47894 15 11.236111 15 12 C 15 12.763889 14.74365 13.52106 14.251953 14.074219 C 13.760256 14.627378 13.041666 15 12 15 C 10.958334 15 10.239744 14.627378 9.7480469 14.074219 C 9.2563502 13.52106 9 12.763889 9 12 C 9 11.236111 9.2563502 10.47894 9.7480469 9.9257812 C 10.239744 9.3726223 10.958334 9 12 9 z"></path>
        </svg>
      </Link>
    </div>
  );
};

export default BottomBtn;
