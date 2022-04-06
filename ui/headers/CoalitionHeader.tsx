import { Box, Flex, Heading, Text } from "@theme-ui/components";
import { Coalition } from "types/42";
import { setPrimaryColor } from "lib/color";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SVG from "react-inlinesvg";
import useAPI from "lib/useAPI";

export default function CoalitionHeader() {
	const {
		query: { slug },
	} = useRouter();

	const { data } = useAPI<Coalition>(`/v2/coalitions/${slug}`);

	const coalition = data || {
		name: "Loading...",
		score: null,
		id: null,
		color: null,
		image_url: null,
	};

	useEffect(() => {
		setPrimaryColor(coalition.color);
		return () => setPrimaryColor();
	}, [coalition]);

	return (
		<Box p={3}>
			<SVG
				src={coalition.image_url}
				fill="white"
				width="4rem"
				height="4rem"
				className="object-contain w-16 h-16"
			/>
			<Heading>{coalition.name}</Heading>
			<Flex sx={{ gap: 3 }}>
				<Text variant="mono">#{coalition.id}</Text>
				<Text>Score {coalition.score}</Text>
			</Flex>
		</Box>
	);
}
