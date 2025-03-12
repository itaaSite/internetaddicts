import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BuWYjLQd.mjs';
import { c as createComponent, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_CMwCRdqq.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://internetaddicts.ru/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/diary/diary_04_19.mdoc": () => import('./diary_04_19_Dq7s8S9W.mjs'),"/src/content/diary/diary_04_20.mdoc": () => import('./diary_04_20_os1phEyV.mjs'),"/src/content/diary/diary_04_21.mdoc": () => import('./diary_04_21_DCJziEHN.mjs'),"/src/content/diary/diary_04_22.mdoc": () => import('./diary_04_22_iafWimaU.mjs'),"/src/content/diary/diary_04_23.mdoc": () => import('./diary_04_23_B1E_DNwb.mjs'),"/src/content/diary/diary_04_24.mdoc": () => import('./diary_04_24_DLIgeDao.mjs'),"/src/content/diary/diary_04_25.mdoc": () => import('./diary_04_25_CILZj_pQ.mjs'),"/src/content/diary/diary_04_26.mdoc": () => import('./diary_04_26_DSER0eHf.mjs'),"/src/content/diary/diary_04_27.mdoc": () => import('./diary_04_27_BzRLECFk.mjs'),"/src/content/diary/diary_04_28.mdoc": () => import('./diary_04_28_jrTcIzry.mjs'),"/src/content/diary/diary_04_29.mdoc": () => import('./diary_04_29_B4YUpUQq.mjs'),"/src/content/diary/diary_04_30.mdoc": () => import('./diary_04_30_jpYBlKoO.mjs'),"/src/content/diary/diary_05_01.mdoc": () => import('./diary_05_01_CCJmF4PY.mjs'),"/src/content/diary/diary_05_02.mdoc": () => import('./diary_05_02_DW4DU-Hs.mjs'),"/src/content/diary/diary_05_03.mdoc": () => import('./diary_05_03_C_ayachm.mjs'),"/src/content/diary/diary_05_04.mdoc": () => import('./diary_05_04_DtYELba1.mjs'),"/src/content/diary/diary_05_05.mdoc": () => import('./diary_05_05_BKgURMnV.mjs'),"/src/content/diary/diary_05_06.mdoc": () => import('./diary_05_06_DORELsAU.mjs'),"/src/content/diary/diary_05_07.mdoc": () => import('./diary_05_07_C3GlLCQm.mjs'),"/src/content/diary/diary_05_08.mdoc": () => import('./diary_05_08_CHZ2tIeg.mjs'),"/src/content/diary/diary_05_09.mdoc": () => import('./diary_05_09_DUILyjXo.mjs'),"/src/content/diary/diary_05_10.mdoc": () => import('./diary_05_10_DKpl0fMp.mjs'),"/src/content/diary/diary_05_11.mdoc": () => import('./diary_05_11_BhWTatiJ.mjs'),"/src/content/diary/diary_05_12.mdoc": () => import('./diary_05_12_DmS7CIrf.mjs'),"/src/content/diary/diary_05_13.mdoc": () => import('./diary_05_13_91_Ngwlv.mjs'),"/src/content/diary/diary_05_14.mdoc": () => import('./diary_05_14_Do7FF1Ay.mjs'),"/src/content/diary/diary_05_15.mdoc": () => import('./diary_05_15_CM-kw5OX.mjs'),"/src/content/diary/diary_05_16.mdoc": () => import('./diary_05_16_DJvOnBMx.mjs'),"/src/content/diary/diary_05_17.mdoc": () => import('./diary_05_17_B-kOgN-j.mjs'),"/src/content/diary/diary_05_18.mdoc": () => import('./diary_05_18_COAGlzik.mjs'),"/src/content/diary/diary_05_31.mdoc": () => import('./diary_05_31_BLyzEQcU.mjs'),"/src/content/groups/aiz_group_1_10.mdx": () => import('./aiz_group_1_10_BeJnpk_q.mjs'),"/src/content/groups/aiz_group_1_19.mdx": () => import('./aiz_group_1_19_U6n2GJlZ.mjs'),"/src/content/groups/aiz_group_2_12.mdx": () => import('./aiz_group_2_12_CUOjBZdE.mjs'),"/src/content/groups/aiz_group_3_12.mdx": () => import('./aiz_group_3_12_jFuf8CBD.mjs'),"/src/content/groups/aiz_group_4_18.mdx": () => import('./aiz_group_4_18_DwO79zke.mjs'),"/src/content/groups/aiz_group_4_20.mdx": () => import('./aiz_group_4_20_COJCUKkM.mjs'),"/src/content/groups/aiz_group_5_10.mdx": () => import('./aiz_group_5_10_COFHBl-5.mjs'),"/src/content/groups/aiz_group_5_20.mdx": () => import('./aiz_group_5_20_DJ6KXN5_.mjs'),"/src/content/groups/aiz_group_6_17_live.mdx": () => import('./aiz_group_6_17_live_BDgURd5P.mjs'),"/src/content/groups/aiz_group_6_18_live.mdx": () => import('./aiz_group_6_18_live_CGipt5qr.mjs'),"/src/content/groups/saratov-aiz.mdx": () => import('./saratov-aiz_LVyznm7X.mjs'),"/src/content/news/new-group-drop-the-rock.mdoc": () => import('./new-group-drop-the-rock_uYEdB93w.mjs'),"/src/content/news/new-group-traditions.mdoc": () => import('./new-group-traditions_D8jvRnX8.mjs'),"/src/content/news/new-group-two-way prayer.mdoc": () => import('./new-group-two-way prayer_BfHnGf8D.mjs'),"/src/content/news/new-live-group-msk.mdoc": () => import('./new-live-group-msk_C6wanvai.mjs'),"/src/content/news/stories.mdx": () => import('./stories_BkHL1Psx.mjs'),"/src/content/posts/12-shagov-chast-zhizni.mdx": () => import('./12-shagov-chast-zhizni_Cg1oRAXh.mjs'),"/src/content/posts/300_idei_chem_zanyatsya_bez_ispolzovaniya_interneta.mdx": () => import('./300_idei_chem_zanyatsya_bez_ispolzovaniya_interneta_CvjLlkrQ.mjs'),"/src/content/posts/addict-symptoms.mdx": () => import('./addict-symptoms_D9c8Zod8.mjs'),"/src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdx": () => import('./chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj_COEUcgqG.mjs'),"/src/content/posts/chto-probovali-do-12-shagov.mdx": () => import('./chto-probovali-do-12-shagov_Dpcit51i.mjs'),"/src/content/posts/chto-takoe-internet-zavisimost.mdx": () => import('./chto-takoe-internet-zavisimost_Ccbb060h.mjs'),"/src/content/posts/chto_delat_esli_silnaya_tyaga.mdx": () => import('./chto_delat_esli_silnaya_tyaga_B5Guxxjr.mjs'),"/src/content/posts/detox_list.mdx": () => import('./detox_list_Djqb0Q4m.mjs'),"/src/content/posts/format_dvustoronney_molitvy.mdx": () => import('./format_dvustoronney_molitvy_BE3ospqU.mjs'),"/src/content/posts/internet-zavisimost-i-12-shagov.mdx": () => import('./internet-zavisimost-i-12-shagov_C6xJeosX.mjs'),"/src/content/posts/kak-perestat-zalipat-v-internete.mdx": () => import('./kak-perestat-zalipat-v-internete_X_ABYsgu.mjs'),"/src/content/posts/kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov.mdx": () => import('./kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov_qtG-4NQP.mjs'),"/src/content/posts/kak-preodolet-internet-zavisimost.mdx": () => import('./kak-preodolet-internet-zavisimost_DaNWzrjR.mjs'),"/src/content/posts/kak-sozdat-gruppu-aiz.mdx": () => import('./kak-sozdat-gruppu-aiz_4VydQX3J.mjs'),"/src/content/posts/kontent_rekomendovannyy_k_polnomu_isklyucheniyu.mdx": () => import('./kontent_rekomendovannyy_k_polnomu_isklyucheniyu_B-CBIP8j.mjs'),"/src/content/posts/kto-takie-aiz.mdx": () => import('./kto-takie-aiz_qlWyYkgP.mjs'),"/src/content/posts/kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh.mdx": () => import('./kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh_xFR3ZBJ8.mjs'),"/src/content/posts/odin-iz-metodov-prohozhdeniya-shagov-aiz.mdx": () => import('./odin-iz-metodov-prohozhdeniya-shagov-aiz_B8P98ivh.mjs'),"/src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdx": () => import('./ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes_DJi-BmXq.mjs'),"/src/content/posts/preambula-internet-zavisimyh.mdx": () => import('./preambula-internet-zavisimyh_MruuJGMy.mjs'),"/src/content/posts/princzipy-12-shagov-v-nashih-delah.mdx": () => import('./princzipy-12-shagov-v-nashih-delah_Bfqj8vhU.mjs'),"/src/content/posts/rekomendatsii-vedushchemu-na-sobranii.mdx": () => import('./rekomendatsii-vedushchemu-na-sobranii_6PTviCCr.mjs'),"/src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdx": () => import('./sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu_mBOLi0Nc.mjs'),"/src/content/posts/sostavlenie_krugov.mdx": () => import('./sostavlenie_krugov_BW_8tSIU.mjs'),"/src/content/posts/sovety-kak-zit-trezvym-v-aiz.mdx": () => import('./sovety-kak-zit-trezvym-v-aiz_D8Cn6R-X.mjs'),"/src/content/posts/sozdaem-svoyu-gruppu-aiz-za-3-min.mdx": () => import('./sozdaem-svoyu-gruppu-aiz-za-3-min_4zHggeYY.mjs'),"/src/content/posts/test-na-internet-zavisimost.mdx": () => import('./test-na-internet-zavisimost_BY2-ljRk.mjs'),"/src/content/posts/ty-mozhesh-byt-poleznym.mdx": () => import('./ty-mozhesh-byt-poleznym_CuXbKKEd.mjs'),"/src/content/posts/zachem-nam-12-tradiczij.mdx": () => import('./zachem-nam-12-tradiczij_DVNJMAg4.mjs'),"/src/content/posts/zavisimoe-myshlenie.mdx": () => import('./zavisimoe-myshlenie_3-e9HuId.mjs'),"/src/content/speakers/1-shag-chtenie-knigi.mdoc": () => import('./1-shag-chtenie-knigi_C3XK1YO4.mjs'),"/src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdoc": () => import('./12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom_BjKZ3egv.mjs'),"/src/content/speakers/daniil-instruments.mdoc": () => import('./daniil-instruments_Dk1QTSqx.mjs'),"/src/content/speakers/demyan-granitsy.mdoc": () => import('./demyan-granitsy_CdcEVLyS.mjs'),"/src/content/speakers/demyan-sluzhenie.mdoc": () => import('./demyan-sluzhenie_B1EsoPsf.mjs'),"/src/content/speakers/demyan-spikerskaya.mdoc": () => import('./demyan-spikerskaya_DEWt4ASb.mjs'),"/src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdoc": () => import('./evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya_CeFM4U17.mjs'),"/src/content/speakers/evgenii-traditsyy.mdoc": () => import('./evgenii-traditsyy_CJTNx16X.mjs'),"/src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdoc": () => import('./evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet_ByaQkc9a.mjs'),"/src/content/speakers/interview.mdoc": () => import('./interview_lfGWUOWK.mjs'),"/src/content/speakers/katya-progress.mdoc": () => import('./katya-progress_CVqYDwKY.mjs'),"/src/content/speakers/nastya-chairperson.mdoc": () => import('./nastya-chairperson_D404d9U2.mjs'),"/src/content/speakers/salima.mdoc": () => import('./salima_ChmblFOA.mjs'),"/src/content/speakers/seminar-granitsy-1.mdoc": () => import('./seminar-granitsy-1_NxyG5hP5.mjs'),"/src/content/speakers/seminar-granitsy-2.mdoc": () => import('./seminar-granitsy-2_DGRmXaT-.mjs'),"/src/content/speakers/seminar.mdoc": () => import('./seminar_UCEdELk0.mjs'),"/src/content/speakers/sergej-spikerskaya-opyt-programmy.mdoc": () => import('./sergej-spikerskaya-opyt-programmy_B6jzh5IZ.mjs'),"/src/content/speakers/sergey-granitsy.mdoc": () => import('./sergey-granitsy_Dy6Vu0PE.mjs'),"/src/content/speakers/sergey-opyt.mdoc": () => import('./sergey-opyt_j814Fhnf.mjs'),"/src/content/speakers/spikerskaya-dina.mdoc": () => import('./spikerskaya-dina_DgTLtS15.mjs'),"/src/content/speakers/spikerskaya-marat.mdoc": () => import('./spikerskaya-marat_JuJpxcGE.mjs'),"/src/content/speakers/spikerskaya-stasa.mdoc": () => import('./spikerskaya-stasa_BJ5LxWoE.mjs'),"/src/content/speakers/spikerskaya-tomas.mdoc": () => import('./spikerskaya-tomas_jI10bDCs.mjs'),"/src/content/speakers/stas-2-traditsiya.mdoc": () => import('./stas-2-traditsiya_dWVu5GEB.mjs'),"/src/content/speakers/stas-history.mdoc": () => import('./stas-history_CsCRkUhN.mjs'),"/src/content/speakers/stas-sluzhenie.mdoc": () => import('./stas-sluzhenie_BXW1Tinb.mjs'),"/src/content/speakers/tatiana-otkrytiya.mdoc": () => import('./tatiana-otkrytiya_B66cxshd.mjs'),"/src/content/speakers/tatiana-spikerskaya.mdoc": () => import('./tatiana-spikerskaya_BgUda1-H.mjs'),"/src/content/story/daniil.mdoc": () => import('./daniil_bLF2HTp0.mjs'),"/src/content/story/demyan.mdoc": () => import('./demyan_CnEhcwJd.mjs'),"/src/content/story/km.mdx": () => import('./km_DpeDOzdg.mjs'),"/src/content/story/sergei.mdoc": () => import('./sergei_yWFqC2ef.mjs'),"/src/content/story/vasilij.mdoc": () => import('./vasilij_vaPbR4nK.mjs'),"/src/content/story/vlad.mdoc": () => import('./vlad_BjjtbZIV.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"news":{"type":"content","entries":{"new-group-drop-the-rock":"/src/content/news/new-group-drop-the-rock.mdoc","new-group-two-way-prayer":"/src/content/news/new-group-two-way prayer.mdoc","new-live-group-msk":"/src/content/news/new-live-group-msk.mdoc","stories":"/src/content/news/stories.mdx","new-group-traditions":"/src/content/news/new-group-traditions.mdoc"}},"groups":{"type":"content","entries":{"aiz_group_1_10":"/src/content/groups/aiz_group_1_10.mdx","aiz_group_1_19":"/src/content/groups/aiz_group_1_19.mdx","aiz_group_2_12":"/src/content/groups/aiz_group_2_12.mdx","aiz_group_3_12":"/src/content/groups/aiz_group_3_12.mdx","aiz_group_4_18":"/src/content/groups/aiz_group_4_18.mdx","aiz_group_4_20":"/src/content/groups/aiz_group_4_20.mdx","aiz_group_5_10":"/src/content/groups/aiz_group_5_10.mdx","aiz_group_5_20":"/src/content/groups/aiz_group_5_20.mdx","aiz_group_6_17_live":"/src/content/groups/aiz_group_6_17_live.mdx","aiz_group_6_18_live":"/src/content/groups/aiz_group_6_18_live.mdx","saratov-aiz":"/src/content/groups/saratov-aiz.mdx"}},"diary":{"type":"content","entries":{"diary_04_19":"/src/content/diary/diary_04_19.mdoc","diary_04_21":"/src/content/diary/diary_04_21.mdoc","diary_04_20":"/src/content/diary/diary_04_20.mdoc","diary_04_22":"/src/content/diary/diary_04_22.mdoc","diary_04_23":"/src/content/diary/diary_04_23.mdoc","diary_04_24":"/src/content/diary/diary_04_24.mdoc","diary_04_26":"/src/content/diary/diary_04_26.mdoc","diary_04_25":"/src/content/diary/diary_04_25.mdoc","diary_04_27":"/src/content/diary/diary_04_27.mdoc","diary_04_28":"/src/content/diary/diary_04_28.mdoc","diary_04_29":"/src/content/diary/diary_04_29.mdoc","diary_04_30":"/src/content/diary/diary_04_30.mdoc","diary_05_01":"/src/content/diary/diary_05_01.mdoc","diary_05_02":"/src/content/diary/diary_05_02.mdoc","diary_05_03":"/src/content/diary/diary_05_03.mdoc","diary_05_04":"/src/content/diary/diary_05_04.mdoc","diary_05_05":"/src/content/diary/diary_05_05.mdoc","diary_05_06":"/src/content/diary/diary_05_06.mdoc","diary_05_07":"/src/content/diary/diary_05_07.mdoc","diary_05_08":"/src/content/diary/diary_05_08.mdoc","diary_05_09":"/src/content/diary/diary_05_09.mdoc","diary_05_10":"/src/content/diary/diary_05_10.mdoc","diary_05_11":"/src/content/diary/diary_05_11.mdoc","diary_05_12":"/src/content/diary/diary_05_12.mdoc","diary_05_13":"/src/content/diary/diary_05_13.mdoc","diary_05_14":"/src/content/diary/diary_05_14.mdoc","diary_05_15":"/src/content/diary/diary_05_15.mdoc","diary_05_16":"/src/content/diary/diary_05_16.mdoc","diary_05_17":"/src/content/diary/diary_05_17.mdoc","diary_05_18":"/src/content/diary/diary_05_18.mdoc","diary_05_31":"/src/content/diary/diary_05_31.mdoc"}},"story":{"type":"content","entries":{"daniil":"/src/content/story/daniil.mdoc","demyan":"/src/content/story/demyan.mdoc","km":"/src/content/story/km.mdx","sergei":"/src/content/story/sergei.mdoc","vasilij":"/src/content/story/vasilij.mdoc","vlad":"/src/content/story/vlad.mdoc"}},"speakers":{"type":"content","entries":{"1-shag-chtenie-knigi":"/src/content/speakers/1-shag-chtenie-knigi.mdoc","daniil-instruments":"/src/content/speakers/daniil-instruments.mdoc","12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom":"/src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdoc","demyan-granitsy":"/src/content/speakers/demyan-granitsy.mdoc","demyan-sluzhenie":"/src/content/speakers/demyan-sluzhenie.mdoc","demyan-spikerskaya":"/src/content/speakers/demyan-spikerskaya.mdoc","evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya":"/src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdoc","evgenii-traditsyy":"/src/content/speakers/evgenii-traditsyy.mdoc","evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet":"/src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdoc","interview":"/src/content/speakers/interview.mdoc","katya-progress":"/src/content/speakers/katya-progress.mdoc","nastya-chairperson":"/src/content/speakers/nastya-chairperson.mdoc","salima":"/src/content/speakers/salima.mdoc","seminar-granitsy-1":"/src/content/speakers/seminar-granitsy-1.mdoc","seminar-granitsy-2":"/src/content/speakers/seminar-granitsy-2.mdoc","seminar":"/src/content/speakers/seminar.mdoc","sergej-spikerskaya-opyt-programmy":"/src/content/speakers/sergej-spikerskaya-opyt-programmy.mdoc","sergey-opyt":"/src/content/speakers/sergey-opyt.mdoc","sergey-granitsy":"/src/content/speakers/sergey-granitsy.mdoc","spikerskaya-dina":"/src/content/speakers/spikerskaya-dina.mdoc","spikerskaya-marat":"/src/content/speakers/spikerskaya-marat.mdoc","stas-2-traditsiya":"/src/content/speakers/stas-2-traditsiya.mdoc","spikerskaya-stasa":"/src/content/speakers/spikerskaya-stasa.mdoc","stas-history":"/src/content/speakers/stas-history.mdoc","spikerskaya-tomas":"/src/content/speakers/spikerskaya-tomas.mdoc","stas-sluzhenie":"/src/content/speakers/stas-sluzhenie.mdoc","tatiana-otkrytiya":"/src/content/speakers/tatiana-otkrytiya.mdoc","tatiana-spikerskaya":"/src/content/speakers/tatiana-spikerskaya.mdoc"}},"posts":{"type":"content","entries":{"12-shagov-chast-zhizni":"/src/content/posts/12-shagov-chast-zhizni.mdx","addict-symptoms":"/src/content/posts/addict-symptoms.mdx","300_idei_chem_zanyatsya_bez_ispolzovaniya_interneta":"/src/content/posts/300_idei_chem_zanyatsya_bez_ispolzovaniya_interneta.mdx","chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj":"/src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdx","chto-probovali-do-12-shagov":"/src/content/posts/chto-probovali-do-12-shagov.mdx","chto_delat_esli_silnaya_tyaga":"/src/content/posts/chto_delat_esli_silnaya_tyaga.mdx","chto-takoe-internet-zavisimost":"/src/content/posts/chto-takoe-internet-zavisimost.mdx","detox_list":"/src/content/posts/detox_list.mdx","format_dvustoronney_molitvy":"/src/content/posts/format_dvustoronney_molitvy.mdx","kak-perestat-zalipat-v-internete":"/src/content/posts/kak-perestat-zalipat-v-internete.mdx","internet-zavisimost-i-12-shagov":"/src/content/posts/internet-zavisimost-i-12-shagov.mdx","kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov":"/src/content/posts/kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov.mdx","kak-preodolet-internet-zavisimost":"/src/content/posts/kak-preodolet-internet-zavisimost.mdx","kak-sozdat-gruppu-aiz":"/src/content/posts/kak-sozdat-gruppu-aiz.mdx","kto-takie-aiz":"/src/content/posts/kto-takie-aiz.mdx","kontent_rekomendovannyy_k_polnomu_isklyucheniyu":"/src/content/posts/kontent_rekomendovannyy_k_polnomu_isklyucheniyu.mdx","kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh":"/src/content/posts/kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh.mdx","odin-iz-metodov-prohozhdeniya-shagov-aiz":"/src/content/posts/odin-iz-metodov-prohozhdeniya-shagov-aiz.mdx","ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes":"/src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdx","preambula-internet-zavisimyh":"/src/content/posts/preambula-internet-zavisimyh.mdx","princzipy-12-shagov-v-nashih-delah":"/src/content/posts/princzipy-12-shagov-v-nashih-delah.mdx","rekomendatsii-vedushchemu-na-sobranii":"/src/content/posts/rekomendatsii-vedushchemu-na-sobranii.mdx","sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu":"/src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdx","sostavlenie_krugov":"/src/content/posts/sostavlenie_krugov.mdx","sovety-kak-zit-trezvym-v-aiz":"/src/content/posts/sovety-kak-zit-trezvym-v-aiz.mdx","sozdaem-svoyu-gruppu-aiz-za-3-min":"/src/content/posts/sozdaem-svoyu-gruppu-aiz-za-3-min.mdx","test-na-internet-zavisimost":"/src/content/posts/test-na-internet-zavisimost.mdx","ty-mozhesh-byt-poleznym":"/src/content/posts/ty-mozhesh-byt-poleznym.mdx","zachem-nam-12-tradiczij":"/src/content/posts/zachem-nam-12-tradiczij.mdx","zavisimoe-myshlenie":"/src/content/posts/zavisimoe-myshlenie.mdx"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/diary/diary_04_19.mdoc": () => import('./diary_04_19_CG-wYWmC.mjs'),"/src/content/diary/diary_04_20.mdoc": () => import('./diary_04_20_BuAF8kol.mjs'),"/src/content/diary/diary_04_21.mdoc": () => import('./diary_04_21_B3twVnfc.mjs'),"/src/content/diary/diary_04_22.mdoc": () => import('./diary_04_22_V1zpdzTN.mjs'),"/src/content/diary/diary_04_23.mdoc": () => import('./diary_04_23_CNjg0q8Q.mjs'),"/src/content/diary/diary_04_24.mdoc": () => import('./diary_04_24_D4nasFzz.mjs'),"/src/content/diary/diary_04_25.mdoc": () => import('./diary_04_25_BopoLcvm.mjs'),"/src/content/diary/diary_04_26.mdoc": () => import('./diary_04_26_DUYtMKSi.mjs'),"/src/content/diary/diary_04_27.mdoc": () => import('./diary_04_27_BFwvIPbM.mjs'),"/src/content/diary/diary_04_28.mdoc": () => import('./diary_04_28_gBL9gpRN.mjs'),"/src/content/diary/diary_04_29.mdoc": () => import('./diary_04_29_DyYp38lr.mjs'),"/src/content/diary/diary_04_30.mdoc": () => import('./diary_04_30_DwGNmLTj.mjs'),"/src/content/diary/diary_05_01.mdoc": () => import('./diary_05_01_B6jm9GPq.mjs'),"/src/content/diary/diary_05_02.mdoc": () => import('./diary_05_02_BfqaX4P-.mjs'),"/src/content/diary/diary_05_03.mdoc": () => import('./diary_05_03_ifsh5aRp.mjs'),"/src/content/diary/diary_05_04.mdoc": () => import('./diary_05_04_0h9cKhbC.mjs'),"/src/content/diary/diary_05_05.mdoc": () => import('./diary_05_05_CGnHvujH.mjs'),"/src/content/diary/diary_05_06.mdoc": () => import('./diary_05_06_Cg0EvQyE.mjs'),"/src/content/diary/diary_05_07.mdoc": () => import('./diary_05_07_DJkFwHye.mjs'),"/src/content/diary/diary_05_08.mdoc": () => import('./diary_05_08_CsNzU_xQ.mjs'),"/src/content/diary/diary_05_09.mdoc": () => import('./diary_05_09_BRJ1VFxD.mjs'),"/src/content/diary/diary_05_10.mdoc": () => import('./diary_05_10_B4zyGAMC.mjs'),"/src/content/diary/diary_05_11.mdoc": () => import('./diary_05_11_CIY0kRiF.mjs'),"/src/content/diary/diary_05_12.mdoc": () => import('./diary_05_12_D8wVCrnv.mjs'),"/src/content/diary/diary_05_13.mdoc": () => import('./diary_05_13_BfLradKY.mjs'),"/src/content/diary/diary_05_14.mdoc": () => import('./diary_05_14_CPyA8tLy.mjs'),"/src/content/diary/diary_05_15.mdoc": () => import('./diary_05_15_CV46EU46.mjs'),"/src/content/diary/diary_05_16.mdoc": () => import('./diary_05_16_DNubjCDJ.mjs'),"/src/content/diary/diary_05_17.mdoc": () => import('./diary_05_17_DwfV96Yz.mjs'),"/src/content/diary/diary_05_18.mdoc": () => import('./diary_05_18_NayWKpU7.mjs'),"/src/content/diary/diary_05_31.mdoc": () => import('./diary_05_31_BwAV02en.mjs'),"/src/content/groups/aiz_group_1_10.mdx": () => import('./aiz_group_1_10_CpFZRtW3.mjs'),"/src/content/groups/aiz_group_1_19.mdx": () => import('./aiz_group_1_19_-kSrpGgO.mjs'),"/src/content/groups/aiz_group_2_12.mdx": () => import('./aiz_group_2_12_od5NkPzE.mjs'),"/src/content/groups/aiz_group_3_12.mdx": () => import('./aiz_group_3_12_BdDqM1jm.mjs'),"/src/content/groups/aiz_group_4_18.mdx": () => import('./aiz_group_4_18_uhPnMwJ0.mjs'),"/src/content/groups/aiz_group_4_20.mdx": () => import('./aiz_group_4_20_BROK9Fwn.mjs'),"/src/content/groups/aiz_group_5_10.mdx": () => import('./aiz_group_5_10_DYDqCrNN.mjs'),"/src/content/groups/aiz_group_5_20.mdx": () => import('./aiz_group_5_20_DBLRy2Nr.mjs'),"/src/content/groups/aiz_group_6_17_live.mdx": () => import('./aiz_group_6_17_live_BVD342JN.mjs'),"/src/content/groups/aiz_group_6_18_live.mdx": () => import('./aiz_group_6_18_live_B6v5zqu9.mjs'),"/src/content/groups/saratov-aiz.mdx": () => import('./saratov-aiz_G-03q4SX.mjs'),"/src/content/news/new-group-drop-the-rock.mdoc": () => import('./new-group-drop-the-rock_Cp1gwbxw.mjs'),"/src/content/news/new-group-traditions.mdoc": () => import('./new-group-traditions_veAnw10U.mjs'),"/src/content/news/new-group-two-way prayer.mdoc": () => import('./new-group-two-way prayer_B2kNjSyz.mjs'),"/src/content/news/new-live-group-msk.mdoc": () => import('./new-live-group-msk_BLgTc7iJ.mjs'),"/src/content/news/stories.mdx": () => import('./stories_CL1Bn05T.mjs'),"/src/content/posts/12-shagov-chast-zhizni.mdx": () => import('./12-shagov-chast-zhizni_CSoLmB4G.mjs'),"/src/content/posts/300_idei_chem_zanyatsya_bez_ispolzovaniya_interneta.mdx": () => import('./300_idei_chem_zanyatsya_bez_ispolzovaniya_interneta_RvZwnq2d.mjs'),"/src/content/posts/addict-symptoms.mdx": () => import('./addict-symptoms_pUbl_2px.mjs'),"/src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdx": () => import('./chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj_CoQqdsP3.mjs'),"/src/content/posts/chto-probovali-do-12-shagov.mdx": () => import('./chto-probovali-do-12-shagov_BWajwY1W.mjs'),"/src/content/posts/chto-takoe-internet-zavisimost.mdx": () => import('./chto-takoe-internet-zavisimost__NIFTfKB.mjs'),"/src/content/posts/chto_delat_esli_silnaya_tyaga.mdx": () => import('./chto_delat_esli_silnaya_tyaga_Bx7R2v2l.mjs'),"/src/content/posts/detox_list.mdx": () => import('./detox_list_CBltc12C.mjs'),"/src/content/posts/format_dvustoronney_molitvy.mdx": () => import('./format_dvustoronney_molitvy_D83YhZ5Q.mjs'),"/src/content/posts/internet-zavisimost-i-12-shagov.mdx": () => import('./internet-zavisimost-i-12-shagov_DYMz-o49.mjs'),"/src/content/posts/kak-perestat-zalipat-v-internete.mdx": () => import('./kak-perestat-zalipat-v-internete_CKKTtRpR.mjs'),"/src/content/posts/kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov.mdx": () => import('./kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov_D9QhaiZX.mjs'),"/src/content/posts/kak-preodolet-internet-zavisimost.mdx": () => import('./kak-preodolet-internet-zavisimost_ZbVFApJc.mjs'),"/src/content/posts/kak-sozdat-gruppu-aiz.mdx": () => import('./kak-sozdat-gruppu-aiz_CQSB4bHl.mjs'),"/src/content/posts/kontent_rekomendovannyy_k_polnomu_isklyucheniyu.mdx": () => import('./kontent_rekomendovannyy_k_polnomu_isklyucheniyu_ek77_34r.mjs'),"/src/content/posts/kto-takie-aiz.mdx": () => import('./kto-takie-aiz_BYTycags.mjs'),"/src/content/posts/kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh.mdx": () => import('./kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh_qYXnVV1D.mjs'),"/src/content/posts/odin-iz-metodov-prohozhdeniya-shagov-aiz.mdx": () => import('./odin-iz-metodov-prohozhdeniya-shagov-aiz_ChnH2PRi.mjs'),"/src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdx": () => import('./ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes_C-D64aAC.mjs'),"/src/content/posts/preambula-internet-zavisimyh.mdx": () => import('./preambula-internet-zavisimyh_rAP5ih-I.mjs'),"/src/content/posts/princzipy-12-shagov-v-nashih-delah.mdx": () => import('./princzipy-12-shagov-v-nashih-delah_CcK0L3t9.mjs'),"/src/content/posts/rekomendatsii-vedushchemu-na-sobranii.mdx": () => import('./rekomendatsii-vedushchemu-na-sobranii_vqVmk9hM.mjs'),"/src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdx": () => import('./sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu_DyIVlmDE.mjs'),"/src/content/posts/sostavlenie_krugov.mdx": () => import('./sostavlenie_krugov_BOFnDibl.mjs'),"/src/content/posts/sovety-kak-zit-trezvym-v-aiz.mdx": () => import('./sovety-kak-zit-trezvym-v-aiz_CaCIi6lM.mjs'),"/src/content/posts/sozdaem-svoyu-gruppu-aiz-za-3-min.mdx": () => import('./sozdaem-svoyu-gruppu-aiz-za-3-min_CuT_sbOg.mjs'),"/src/content/posts/test-na-internet-zavisimost.mdx": () => import('./test-na-internet-zavisimost_CU8So6d5.mjs'),"/src/content/posts/ty-mozhesh-byt-poleznym.mdx": () => import('./ty-mozhesh-byt-poleznym_BnAiVuTE.mjs'),"/src/content/posts/zachem-nam-12-tradiczij.mdx": () => import('./zachem-nam-12-tradiczij_mvg-n0Z6.mjs'),"/src/content/posts/zavisimoe-myshlenie.mdx": () => import('./zavisimoe-myshlenie_C6fCo6US.mjs'),"/src/content/speakers/1-shag-chtenie-knigi.mdoc": () => import('./1-shag-chtenie-knigi_BRoQ--5T.mjs'),"/src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdoc": () => import('./12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom_D0xNcDmi.mjs'),"/src/content/speakers/daniil-instruments.mdoc": () => import('./daniil-instruments_yhS0u-OE.mjs'),"/src/content/speakers/demyan-granitsy.mdoc": () => import('./demyan-granitsy_CBs9Eb62.mjs'),"/src/content/speakers/demyan-sluzhenie.mdoc": () => import('./demyan-sluzhenie_05VBEzYq.mjs'),"/src/content/speakers/demyan-spikerskaya.mdoc": () => import('./demyan-spikerskaya_C-wRefto.mjs'),"/src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdoc": () => import('./evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya_DTKEuB1C.mjs'),"/src/content/speakers/evgenii-traditsyy.mdoc": () => import('./evgenii-traditsyy_6zdsFr7y.mjs'),"/src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdoc": () => import('./evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet_ZAFYVO7o.mjs'),"/src/content/speakers/interview.mdoc": () => import('./interview_CR4OqfqG.mjs'),"/src/content/speakers/katya-progress.mdoc": () => import('./katya-progress_BuSyvPaD.mjs'),"/src/content/speakers/nastya-chairperson.mdoc": () => import('./nastya-chairperson_os-1XNsF.mjs'),"/src/content/speakers/salima.mdoc": () => import('./salima_UPdL4iDO.mjs'),"/src/content/speakers/seminar-granitsy-1.mdoc": () => import('./seminar-granitsy-1_C5yJMqQ2.mjs'),"/src/content/speakers/seminar-granitsy-2.mdoc": () => import('./seminar-granitsy-2_CyP8it2X.mjs'),"/src/content/speakers/seminar.mdoc": () => import('./seminar_CgjXqm8e.mjs'),"/src/content/speakers/sergej-spikerskaya-opyt-programmy.mdoc": () => import('./sergej-spikerskaya-opyt-programmy_Dc8SDDhj.mjs'),"/src/content/speakers/sergey-granitsy.mdoc": () => import('./sergey-granitsy_CqPj3aO7.mjs'),"/src/content/speakers/sergey-opyt.mdoc": () => import('./sergey-opyt_C6GpTAvN.mjs'),"/src/content/speakers/spikerskaya-dina.mdoc": () => import('./spikerskaya-dina_B0fo4srD.mjs'),"/src/content/speakers/spikerskaya-marat.mdoc": () => import('./spikerskaya-marat_q7fMTp_Y.mjs'),"/src/content/speakers/spikerskaya-stasa.mdoc": () => import('./spikerskaya-stasa_DGK01oij.mjs'),"/src/content/speakers/spikerskaya-tomas.mdoc": () => import('./spikerskaya-tomas_y6DD6T34.mjs'),"/src/content/speakers/stas-2-traditsiya.mdoc": () => import('./stas-2-traditsiya_BjCG8bhF.mjs'),"/src/content/speakers/stas-history.mdoc": () => import('./stas-history_CRt3pe1v.mjs'),"/src/content/speakers/stas-sluzhenie.mdoc": () => import('./stas-sluzhenie_DpnMf6qo.mjs'),"/src/content/speakers/tatiana-otkrytiya.mdoc": () => import('./tatiana-otkrytiya_DGR1n6u7.mjs'),"/src/content/speakers/tatiana-spikerskaya.mdoc": () => import('./tatiana-spikerskaya_DXDvvGIn.mjs'),"/src/content/story/daniil.mdoc": () => import('./daniil_CGGBW6jt.mjs'),"/src/content/story/demyan.mdoc": () => import('./demyan_yUajeqTu.mjs'),"/src/content/story/km.mdx": () => import('./km_D8pn53bZ.mjs'),"/src/content/story/sergei.mdoc": () => import('./sergei_BhlF8zRh.mjs'),"/src/content/story/vasilij.mdoc": () => import('./vasilij_D3ex6Vgd.mjs'),"/src/content/story/vlad.mdoc": () => import('./vlad_BctVKYWa.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

export { getEntry as a, getCollection as g };
