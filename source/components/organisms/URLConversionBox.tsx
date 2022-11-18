import React from 'react';
import type {FC} from 'react';
import {Text, Box, Newline} from 'ink';
import CaptionedTable from '../molecules/CaptionedTable';

type Props = {
	// TODO: define uri domain model
	title: string;
	data: {value: string}[];
	generatedURI: string;
};

const URLConversionBox: FC<Props> = ({title, data, generatedURI}) => {
	return (
		<Box marginX={1} flexDirection="column">
			<CaptionedTable title={title} data={data} />
			<Box marginTop={1} borderStyle="bold">
				<Box paddingX={1}>
					<Text>Result:</Text>
				</Box>
				<Box paddingX={1}>
					<Text color="red">{generatedURI}</Text>
				</Box>
			</Box>
			<Newline />
		</Box>
	);
};

export default URLConversionBox;
