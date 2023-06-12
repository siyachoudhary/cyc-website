import React, {useEffect} from 'react';
import "./MemberCard.css"
import AOS from "aos";
import { useNavigate } from "react-router-dom";

function MemberCard(props) {
    const navigate = useNavigate();

    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);

    return (
        <div className='userCard' onClick={()=>navigate("/cyc-website/teamMember", {
            state:{
                memberName: props.memberName
            },
        })}>
            <img src={process.env.PUBLIC_URL + "/teamImages/" + props.imgUrl}></img>
            <h1>{props.memberName}</h1>
        </div>
    );
}

export default MemberCard;
