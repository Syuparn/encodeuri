import React from 'react';
import type {FC} from 'react';
import URLConverter from '../organisms/URLConverter';
import Title from '../organisms/Title';

type Props = {};

const Top: FC<Props> = () => {
	return (
		<>
			<Title />
			<URLConverter />
		</>
	);
};

export default Top;
