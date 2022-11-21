import React from 'react';
import type {FC} from 'react';
import {Box, Text} from 'ink';

type Props = Record<string, unknown>; // Same as {} since Top requires nothing

const Title: FC<Props> = () => (
	<Box flexDirection="column" marginBottom={1}>
		<Box justifyContent="space-around">
			<Text backgroundColor="cyanBright" color="white">
				[Encode URI]
			</Text>
		</Box>
		<Box flexDirection="column">
			<Box marginX={1}>
				<Text color="cyan">Up/Down</Text>
				<Text>: Select cell</Text>
			</Box>
			<Box marginX={1}>
				<Text color="cyan">Ctrl+Tab</Text>
				<Text>: Next selection page</Text>
			</Box>
			<Box marginX={1}>
				<Text color="cyan">Ctrl+Shift+Tab</Text>
				<Text>: Previous selection page</Text>
			</Box>
		</Box>
	</Box>
);

export default Title;
