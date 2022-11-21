import React from 'react';
import type {FC} from 'react';
import Top from './components/pages/top';

type Props = {name?: string};

const App: FC<Props> = () => <Top />;

export default App;
