import React from 'react'
import { Divider } from 'primereact/divider';
import { Carousel } from 'primereact/carousel'

const alertsCarousel = item => {
    return (
        <>
        <Divider align="left">
            <b>{item.title} - {item.time}</b>
        </Divider>
        <p>
            {item.content}
        </p>
        {item.comments && item.comments.map((comment, index = 0) => {
            return (
                <>
                    <b>{`comment #${++index}`}</b>
                    <p>
                        {comment.content}
                    </p>
                </>
            )
        })}
    </>
    )
}

const followsCarousel = item => {
    return (
        <>
        <Divider align="left" />
        <p>
            {item.content}
        </p>
        {item.comments && item.comments.map((comment, index = 0) => {
            return (
                <>
                        <b>{`comment #${++index}`}</b>
                        <p>
                            {comment.content}
                        </p>
                    </>
            )
        })}
    </>
    )
}

export const RenderEventsData = props => {

    return (
        <>
            <h3>Alert ID: {props.row.id}</h3>
            <h4>Production:</h4>
            <h6>Alerts:</h6>
            <Carousel value={props.row.production.alerts} itemTemplate={alertsCarousel} numVisible={3} numScroll={1} />
            <h6>To Follow:</h6>
            <Carousel value={props.row.production.follows} itemTemplate={followsCarousel} numVisible={3} numScroll={1} />
            {' '}
            {/* There is no data on staging, the code below will appear when data will be added */}
            {/* <h4>Staging:</h4>
            <h6>Alerts:</h6>
            <Carousel value={[props.row.staging]} itemTemplate={alertsCarousel} numVisible={3} numScroll={1} />
            <h6>To Follow:</h6>
            <Carousel value={[props.row.staging]} itemTemplate={followsCarousel} numVisible={3} numScroll={1} /> */}
        </>
    )
}