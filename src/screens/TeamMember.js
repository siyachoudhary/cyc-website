import React, {useEffect} from 'react';
import AOS from "aos";
import { useNavigate, useLocation } from "react-router-dom";

export const TeamMember = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const redirectToHome = () => {
      navigate("/cyc-website/team");
    };
  
    return (
      <div className="container text-center py-5">
        <h3> About Us Component </h3>
        <h5> {location.state.memberName} </h5>
        <p> {location.state.memberDetails} </p> 
        <button
          type="button"
          className="btn btn-primary"
          onClick={redirectToHome}
        >
          Back
        </button>
      </div>
    );
  };