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
		"diary": {
"diary_04_19.mdoc": {
	id: "diary_04_19.mdoc";
  slug: "diary_04_19";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_20.mdoc": {
	id: "diary_04_20.mdoc";
  slug: "diary_04_20";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_21.mdoc": {
	id: "diary_04_21.mdoc";
  slug: "diary_04_21";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_22.mdoc": {
	id: "diary_04_22.mdoc";
  slug: "diary_04_22";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_23.mdoc": {
	id: "diary_04_23.mdoc";
  slug: "diary_04_23";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_24.mdoc": {
	id: "diary_04_24.mdoc";
  slug: "diary_04_24";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_25.mdoc": {
	id: "diary_04_25.mdoc";
  slug: "diary_04_25";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_26.mdoc": {
	id: "diary_04_26.mdoc";
  slug: "diary_04_26";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_27.mdoc": {
	id: "diary_04_27.mdoc";
  slug: "diary_04_27";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_28.mdoc": {
	id: "diary_04_28.mdoc";
  slug: "diary_04_28";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_29.mdoc": {
	id: "diary_04_29.mdoc";
  slug: "diary_04_29";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_04_30.mdoc": {
	id: "diary_04_30.mdoc";
  slug: "diary_04_30";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_01.mdoc": {
	id: "diary_05_01.mdoc";
  slug: "diary_05_01";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_02.mdoc": {
	id: "diary_05_02.mdoc";
  slug: "diary_05_02";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_03.mdoc": {
	id: "diary_05_03.mdoc";
  slug: "diary_05_03";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_04.mdoc": {
	id: "diary_05_04.mdoc";
  slug: "diary_05_04";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_05.mdoc": {
	id: "diary_05_05.mdoc";
  slug: "diary_05_05";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_06.mdoc": {
	id: "diary_05_06.mdoc";
  slug: "diary_05_06";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_07.mdoc": {
	id: "diary_05_07.mdoc";
  slug: "diary_05_07";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_08.mdoc": {
	id: "diary_05_08.mdoc";
  slug: "diary_05_08";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_09.mdoc": {
	id: "diary_05_09.mdoc";
  slug: "diary_05_09";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_10.mdoc": {
	id: "diary_05_10.mdoc";
  slug: "diary_05_10";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
"diary_05_11.mdoc": {
	id: "diary_05_11.mdoc";
  slug: "diary_05_11";
  body: string;
  collection: "diary";
  data: InferEntrySchema<"diary">
} & { render(): Render[".mdoc"] };
};
"groups": {
"aiz_group_1_10.mdoc": {
	id: "aiz_group_1_10.mdoc";
  slug: "aiz_group_1_10";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_1_19.mdoc": {
	id: "aiz_group_1_19.mdoc";
  slug: "aiz_group_1_19";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_2_12.mdoc": {
	id: "aiz_group_2_12.mdoc";
  slug: "aiz_group_2_12";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_2_18.mdoc": {
	id: "aiz_group_2_18.mdoc";
  slug: "aiz_group_2_18";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_3_12.mdoc": {
	id: "aiz_group_3_12.mdoc";
  slug: "aiz_group_3_12";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_3_19.mdoc": {
	id: "aiz_group_3_19.mdoc";
  slug: "aiz_group_3_19";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_4_18.mdoc": {
	id: "aiz_group_4_18.mdoc";
  slug: "aiz_group_4_18";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_4_20.mdoc": {
	id: "aiz_group_4_20.mdoc";
  slug: "aiz_group_4_20";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_5_10.mdoc": {
	id: "aiz_group_5_10.mdoc";
  slug: "aiz_group_5_10";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_5_20.mdoc": {
	id: "aiz_group_5_20.mdoc";
  slug: "aiz_group_5_20";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_6_18_live.mdoc": {
	id: "aiz_group_6_18_live.mdoc";
  slug: "aiz_group_6_18_live";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
"aiz_group_for_man.mdoc": {
	id: "aiz_group_for_man.mdoc";
  slug: "aiz_group_for_man";
  body: string;
  collection: "groups";
  data: InferEntrySchema<"groups">
} & { render(): Render[".mdoc"] };
};
"news": {
"new-live-group-msk.mdoc": {
	id: "new-live-group-msk.mdoc";
  slug: "new-live-group-msk";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".mdoc"] };
};
"posts": {
"12-shagov-chast-zhizni.mdoc": {
	id: "12-shagov-chast-zhizni.mdoc";
  slug: "12-shagov-chast-zhizni";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"addict-symptoms.mdoc": {
	id: "addict-symptoms.mdoc";
  slug: "addict-symptoms";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdoc": {
	id: "chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdoc";
  slug: "chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"detox_list.mdoc": {
	id: "detox_list.mdoc";
  slug: "detox_list";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"format_dvustoronney_molitvy.mdoc": {
	id: "format_dvustoronney_molitvy.mdoc";
  slug: "format_dvustoronney_molitvy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"instrumenty-dlya-polnoczennoj-zhizni.mdoc": {
	id: "instrumenty-dlya-polnoczennoj-zhizni.mdoc";
  slug: "instrumenty-dlya-polnoczennoj-zhizni";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"internet-zavisimost-i-12-shagov.mdoc": {
	id: "internet-zavisimost-i-12-shagov.mdoc";
  slug: "internet-zavisimost-i-12-shagov";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"kak-perestat-zalipat-v-internete.mdoc": {
	id: "kak-perestat-zalipat-v-internete.mdoc";
  slug: "kak-perestat-zalipat-v-internete";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov.mdoc": {
	id: "kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov.mdoc";
  slug: "kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"kak-sozdat-gruppu-aiz.mdoc": {
	id: "kak-sozdat-gruppu-aiz.mdoc";
  slug: "kak-sozdat-gruppu-aiz";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"kto-takie-aiz.mdoc": {
	id: "kto-takie-aiz.mdoc";
  slug: "kto-takie-aiz";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh.mdoc": {
	id: "kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh.mdoc";
  slug: "kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"odin-iz-metodov-prohozhdeniya-shagov-aiz.mdoc": {
	id: "odin-iz-metodov-prohozhdeniya-shagov-aiz.mdoc";
  slug: "odin-iz-metodov-prohozhdeniya-shagov-aiz";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdoc": {
	id: "ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdoc";
  slug: "ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"princzipy-12-shagov-v-nashih-delah.mdoc": {
	id: "princzipy-12-shagov-v-nashih-delah.mdoc";
  slug: "princzipy-12-shagov-v-nashih-delah";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdoc": {
	id: "sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdoc";
  slug: "sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
"sovety-kak-zit-trezvym-v-aiz.mdoc": {
	id: "sovety-kak-zit-trezvym-v-aiz.mdoc";
  slug: "sovety-kak-zit-trezvym-v-aiz";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
};
"speakers": {
"1-step-reading-BBAA.mdoc": {
	id: "1-step-reading-BBAA.mdoc";
  slug: "1-step-reading-bbaa";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdoc": {
	id: "12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdoc";
  slug: "12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"daniil-instruments.mdoc": {
	id: "daniil-instruments.mdoc";
  slug: "daniil-instruments";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"demyan-granitsy.mdoc": {
	id: "demyan-granitsy.mdoc";
  slug: "demyan-granitsy";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"demyan-sluzhenie.mdoc": {
	id: "demyan-sluzhenie.mdoc";
  slug: "demyan-sluzhenie";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"demyan-spikerskaya.mdoc": {
	id: "demyan-spikerskaya.mdoc";
  slug: "demyan-spikerskaya";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdoc": {
	id: "evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdoc";
  slug: "evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"evgenii-traditsyy.mdoc": {
	id: "evgenii-traditsyy.mdoc";
  slug: "evgenii-traditsyy";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdoc": {
	id: "evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdoc";
  slug: "evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"interview.mdoc": {
	id: "interview.mdoc";
  slug: "interview";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"katya-progress.mdoc": {
	id: "katya-progress.mdoc";
  slug: "katya-progress";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"nastya-chairperson.mdoc": {
	id: "nastya-chairperson.mdoc";
  slug: "nastya-chairperson";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"salima.mdoc": {
	id: "salima.mdoc";
  slug: "salima";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"seminar-granitsy-1.mdoc": {
	id: "seminar-granitsy-1.mdoc";
  slug: "seminar-granitsy-1";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"seminar-granitsy-2.mdoc": {
	id: "seminar-granitsy-2.mdoc";
  slug: "seminar-granitsy-2";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"seminar.mdoc": {
	id: "seminar.mdoc";
  slug: "seminar";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"sergej-spikerskaya-opyt-programmy.mdoc": {
	id: "sergej-spikerskaya-opyt-programmy.mdoc";
  slug: "sergej-spikerskaya-opyt-programmy";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"sergey-granitsy.mdoc": {
	id: "sergey-granitsy.mdoc";
  slug: "sergey-granitsy";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"sergey-opyt.mdoc": {
	id: "sergey-opyt.mdoc";
  slug: "sergey-opyt";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"spikerskaya-dina.mdoc": {
	id: "spikerskaya-dina.mdoc";
  slug: "spikerskaya-dina";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"spikerskaya-marat.mdoc": {
	id: "spikerskaya-marat.mdoc";
  slug: "spikerskaya-marat";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"spikerskaya-stasa.mdoc": {
	id: "spikerskaya-stasa.mdoc";
  slug: "spikerskaya-stasa";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"spikerskaya-tomas.mdoc": {
	id: "spikerskaya-tomas.mdoc";
  slug: "spikerskaya-tomas";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"stas-2-traditsiya.mdoc": {
	id: "stas-2-traditsiya.mdoc";
  slug: "stas-2-traditsiya";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"stas-history.mdoc": {
	id: "stas-history.mdoc";
  slug: "stas-history";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"stas-sluzhenie.mdoc": {
	id: "stas-sluzhenie.mdoc";
  slug: "stas-sluzhenie";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"tatiana-otkrytiya.mdoc": {
	id: "tatiana-otkrytiya.mdoc";
  slug: "tatiana-otkrytiya";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
"tatiana-spikerskaya.mdoc": {
	id: "tatiana-spikerskaya.mdoc";
  slug: "tatiana-spikerskaya";
  body: string;
  collection: "speakers";
  data: InferEntrySchema<"speakers">
} & { render(): Render[".mdoc"] };
};
"story": {
"a-working-program.mdoc": {
	id: "a-working-program.mdoc";
  slug: "a-working-program";
  body: string;
  collection: "story";
  data: InferEntrySchema<"story">
} & { render(): Render[".mdoc"] };
"becoming-fit-to-dream.mdoc": {
	id: "becoming-fit-to-dream.mdoc";
  slug: "becoming-fit-to-dream";
  body: string;
  collection: "story";
  data: InferEntrySchema<"story">
} & { render(): Render[".mdoc"] };
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
"recovery_is_possible.mdoc": {
	id: "recovery_is_possible.mdoc";
  slug: "recovery_is_possible";
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
"vlad.mdoc": {
	id: "vlad.mdoc";
  slug: "vlad";
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
