import React from 'react';
import type {FC} from 'react';
import URIConverter from '../organisms/URIConverter';
import Title from '../organisms/Title';

type Props = {};

const Top: FC<Props> = () => {
	return (
		<>
			<Title />
			<URIConverter />
		</>
	);
};

export default Top;
