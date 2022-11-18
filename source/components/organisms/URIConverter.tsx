import React from 'react';
import type {FC} from 'react';
import URIConversionBox from './URIConversionBox';

type Props = {};

const URIConverter: FC<Props> = () => {
	const scheme = [{value: 'http'}];
	// TODO: generate from parameters
	const uri = 'https://example.com/foo/bar?baz=quux&hoge=fuga';
	//const authority = [{value: 'example.com'}];
	//const paths = [{value: 'foo'}, {value: 'bar'}];
	/*
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
  */

	return <URIConversionBox title="Scheme" data={scheme} generatedURI={uri} />;
};

export default URIConverter;
