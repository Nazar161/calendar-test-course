import { Calendar } from 'antd';
import { Moment } from 'moment';
import React, { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';


interface EventCalendarProps {
    events: IEvent[];
}


const EventCalendar:FC<EventCalendarProps> =  (props) => {

    const {user} = useTypedSelector(state => state.auth) 

    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate())
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
        return (
            <div>
                {currentDayEvents.map((ev, index)=>
                    <div style={{color: ev.author===user.username ? 'green' : 'red'}} key={index}>{ev.description}</div>)
                }
            </div>
        ); 
    }

    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};

export default EventCalendar;