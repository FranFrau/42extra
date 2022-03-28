import { Card, Text } from "theme-ui";

import { locale } from "lib/constants";

export default function EventCard({ event }) {
	return (
		<Card bg="muted" px={3} py={2}>
			<b>{event.name}</b>
			<Text as="p" sx={{ fontFamily: "monospace" }}>
				{event.kind}
			</Text>
			<p>
				{event.nbr_subscribers}
				{event.max_people && ` / ${event.max_people}`}
			</p>
			<p>{event.location}</p>
			<p>{new Date(event.begin_at).toLocaleString(locale)}</p>
		</Card>
	);
}
