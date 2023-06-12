import React, {useEffect} from 'react';
import "./MemberCard.css"
import AOS from "aos";

function MemberCard(props) {
    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);

    return (
        <div className='userCard'>
            <img src={process.env.PUBLIC_URL + "/teamImages/" + props.imgUrl}></img>
            <h1>{props.memberName}</h1>
        </div>
    );
}

export default MemberCard;
