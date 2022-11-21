import React from 'react';
import type {FC} from 'react';
import UriConversionBox from './uri-conversion-box';

type Props = Record<string, unknown>; // Same as {} since Top requires nothing

const UriConverter: FC<Props> = () => {
	const scheme = [{value: 'http'}];
	const uri = 'https://example.com/foo/bar?baz=quux&hoge=fuga';

	return <UriConversionBox title="Scheme" data={scheme} generatedURI={uri} />;
};

export default UriConverter;
