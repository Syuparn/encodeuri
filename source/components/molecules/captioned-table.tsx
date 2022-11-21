import React from 'react';
import type {ReactElement} from 'react';
import {Text, Box} from 'ink';
import Table from 'ink-table';

type StringDict = Record<string, string>;

type Props<T extends StringDict> = {
	readonly title: string;
	readonly data: T[];
};

const CaptionedTable = <T extends StringDict>(
	props: React.PropsWithChildren<Props<T>>
): ReactElement<any, any> => {
	const {title, data} = props;

	return (
		<Box marginX={1} flexDirection="column">
			<Text>{title}</Text>
			<Table data={data} />
		</Box>
	);
};

export default CaptionedTable;
