import React from 'react';
import type {FC} from 'react';
import UriConverter from '../organisms/uri-converter';
import Title from '../organisms/title';

type Props = Record<string, unknown>; // Same as {} since Top requires nothing

const Top: FC<Props> = () => (
	<>
		<Title />
		<UriConverter />
	</>
);

export default Top;
