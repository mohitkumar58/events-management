// import { useRouter } from 'next/router';
import React from 'react';
import EventContent from '../../components/event-detail/EventContent';
import EventLogistics from '../../components/event-detail/EventLogistics';
import EventSummary from '../../components/event-detail/EventSummary';
import Comments from '../../components/input/comments';
// import { getEventById } from '../../dummy-data';
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

function EventDetail(props) {
    // const router = useRouter();

    // const eventId = router.query.eventId;
    const event = props.selectedEvent;

    if(!event) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics 
                date={event.date} 
                address={event.location} 
                image={event.image} 
                imageAlt={event.title} 
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={event.id} />
        </>
    )
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event
        }
    }
}

export async function getStaticPaths() {

    const events = await getFeaturedEvents();

    const paths = events.map(event => ({params: { eventId: event.id }}))

    return {
        paths: paths,
        fallback: true
    }
}

export default EventDetail;