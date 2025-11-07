import { redirect } from 'next/navigation';

// Redirect /events to /events/past-events
export default function EventsPage() {
  redirect('/events/past-events');
}
