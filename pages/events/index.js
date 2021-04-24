import { useRouter } from 'next/router';
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

function AllEvents() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <div>
            <EventSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </div>
    )
}

export default AllEvents;