// TODO: use class instead?
interface URIParameters {
	scheme: string;
	host: string;
	port: number;
	paths: string[];
	queries: {key: string; value: string[]};
	fragments: string[];
}
