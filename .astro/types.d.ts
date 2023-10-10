declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"groups": {
"1.mdoc": {
	id: "1.mdoc";
  slug: "1";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"2.mdoc": {
	id: "2.mdoc";
  slug: "2";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"3.mdoc": {
	id: "3.mdoc";
  slug: "3";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"4.mdoc": {
	id: "4.mdoc";
  slug: "4";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"5.mdoc": {
	id: "5.mdoc";
  slug: "5";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"6.mdoc": {
	id: "6.mdoc";
  slug: "6";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"7.mdoc": {
	id: "7.mdoc";
  slug: "7";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"8.mdoc": {
	id: "8.mdoc";
  slug: "8";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
};
"notes": {
"aiz-i-12shagov.md": {
	id: "aiz-i-12shagov.md";
  slug: "aiz-i-12shagov";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.md": {
	id: "chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.md";
  slug: "chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"instrumenty-dlya-polnocennoj-zhizni.md": {
	id: "instrumenty-dlya-polnocennoj-zhizni.md";
  slug: "instrumenty-dlya-polnocennoj-zhizni";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov.md": {
	id: "kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov.md";
  slug: "kak-preodolet-internet-zavisimost-s-pomoshchyu-duhovnyh-principov";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
"odin-iz-metodov-prohozhdeniya-shagov-AIZ.md": {
	id: "odin-iz-metodov-prohozhdeniya-shagov-AIZ.md";
  slug: "odin-iz-metodov-prohozhdeniya-shagov-aiz";
  body: string;
  collection: "notes";
  data: InferEntrySchema<"notes">
} & { render(): Render[".md"] };
};
"posts": {
"12step-netlify-app.mdoc": {
	id: "12step-netlify-app.mdoc";
  slug: "12step-netlify-app";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"12steps-group-aiz.mdoc": {
	id: "12steps-group-aiz.mdoc";
  slug: "12steps-group-aiz";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"online-cowork.mdoc": {
	id: "online-cowork.mdoc";
  slug: "online-cowork";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"proekt-dlya-12-shagov.mdoc": {
	id: "proekt-dlya-12-shagov.mdoc";
  slug: "proekt-dlya-12-shagov";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
};
"story": {
"daniil.mdoc": {
	id: "daniil.mdoc";
  slug: "daniil";
  body: string;
  collection: "story";
  data: InferEntrySchema<"story">
} & { render(): Render[".mdoc"] };
"demyan.mdoc": {
	id: "demyan.mdoc";
  slug: "demyan";
  body: string;
  collection: "story";
  data: InferEntrySchema<"story">
} & { render(): Render[".mdoc"] };
"kamil.mdoc": {
	id: "kamil.mdoc";
  slug: "kamil";
  body: string;
  collection: "story";
  data: InferEntrySchema<"story">
} & { render(): Render[".mdoc"] };
"vasilij.mdoc": {
	id: "vasilij.mdoc";
  slug: "vasilij";
  body: string;
  collection: "story";
  data: InferEntrySchema<"story">
} & { render(): Render[".mdoc"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
