import React,{useState,useEffect} from "react";
import './header.scss'; // Import your SCSS file here
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";


export default function Header(){

    const [state, setState] = useState({
        mobileView: false,
        navOpen : false
      });

      useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 850
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    
        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
        }
      }, []);


      function handleClick(e){
        setState((prevState) => ({...prevState,navOpen : !prevState.navOpen}));
        console.log(state.navOpen);
      }

    return(
        <div className="header d-flex align-items-center justify-content-center">


                {
                state.mobileView ?

                <div style={state.navOpen ? {  } : { transform : 'translatex(100%)' }} className="mobile-navmenu d-flex">
                    <button onClick={handleClick}><MdClose /></button>
                    <ul className="d-flex list-style-none p-0">
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Website builder</a></li>
                        <li><a href="#">Today's deals</a></li>
                    </ul>
                </div> : <></>
                }


            <div className="wrapper container d-flex align-items-center justify-content-center">
                <div className="search relative">
                    <div className="search-wrap d-flex align-items-center justify-content-center">
                        <span className="input-group-text absolute" id="addon-wrapping">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z" fill="#626E79"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.081 16.0805C16.3739 15.7876 16.8488 15.7876 17.1417 16.0805L21.3843 20.3232C21.6772 20.6161 21.6772 21.0909 21.3843 21.3838C21.0914 21.6767 20.6165 21.6767 20.3236 21.3838L16.081 17.1412C15.7881 16.8483 15.7881 16.3734 16.081 16.0805Z" fill="#626E79"/>
                            </svg>                          
                        </span>
                        <input type="text" className="form-control" aria-label="Search" aria-describedby="addon-wrapping"/>
                    </div>

                    {state.mobileView ? <div className="hamburg"><button onClick={handleClick}><RxHamburgerMenu /></button></div> : <></>}

                </div>

                <div className="navmenu">
                    <ul className="d-flex list-style-none p-0">
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Website builder</a></li>
                        <li><a href="#">Today's deals</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
