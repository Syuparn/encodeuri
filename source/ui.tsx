import React from 'react';
import type {FC} from 'react';
import URLConversionBox from './components/URLConversionBox';

const App: FC<{name?: string}> = ({name = 'Stranger'}) => {
	name;

	return <URLConversionBox />;
};

export default App;
