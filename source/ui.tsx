import React from 'react';
import type {FC} from 'react';
import Top from './components/pages/Top';

const App: FC<{name?: string}> = ({name = 'Stranger'}) => {
	name;

	return <Top />;
};

export default App;
