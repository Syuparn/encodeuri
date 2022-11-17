import React from 'react';
import type {FC} from 'react';
import {Text, Box, Newline} from 'ink';
import Table from 'ink-table';

type Props = {};

const URLConversionBox: FC<Props> = () => {
	const scheme = [{value: 'http'}];
	const authority = [{value: 'example.com'}];
	const paths = [{value: 'foo'}, {value: 'bar'}];
	const queries = [
		{
			key: 'baz',
			value: 'quux'
		},
		{
			key: 'hoge',
			value: 'fuga'
		}
	];
	const fragments = [{value: ''}];

	return (
		<Box marginX={1} flexDirection="column">
			<Text>Scheme</Text>
			<Table data={scheme} />
			<Text>Authority</Text>
			<Table data={authority} />
			<Text>Path</Text>
			<Table data={paths} />
			<Text>Query</Text>
			<Table data={queries} />
			<Text>Fragment</Text>
			<Table data={fragments} />
			<Box marginTop={1}>
				<Box paddingX={1}>
					<Text>Result</Text>
				</Box>
				<Box paddingX={1}>
					<Text>https://example.com/foo/bar?baz=quux&hoge=fuga</Text>
				</Box>
			</Box>
			<Newline />
		</Box>
	);
};

export default URLConversionBox;
