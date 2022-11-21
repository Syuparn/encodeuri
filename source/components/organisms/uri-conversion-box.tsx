import React from 'react';
import type {FC} from 'react';
import {Text, Box, Newline} from 'ink';
import CaptionedTable from '../molecules/captioned-table';

type Props = {
	title: string;
	data: Array<{value: string}>;
	generatedURI: string;
};

const UriConversionBox: FC<Props> = ({title, data, generatedURI}) => (
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

export default UriConversionBox;
