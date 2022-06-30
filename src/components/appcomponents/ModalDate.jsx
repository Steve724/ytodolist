import React,{useState} from "react";
import Calendar from "react-calendar";

export default function ModalDate({open,onClose}){
    const OVERLAY_STYLES = {
        position: 'relative',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex: 1000
    }
    const [value,onChange] = useState(new Date());
    if(!open) return null;
    return (
        <div style={OVERLAY_STYLES} onBlur={onClose}>
            <Calendar onChange={onChange} value={value} />

        </div>
    )
}