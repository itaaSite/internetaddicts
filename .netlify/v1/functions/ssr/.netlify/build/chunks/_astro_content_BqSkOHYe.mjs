import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BuWYjLQd.mjs';
import { c as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_BAgBan8v.mjs';
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/diary/diary_04_19.mdoc": () => import('./diary_04_19_cZef9gUM.mjs'),"/src/content/diary/diary_04_20.mdoc": () => import('./diary_04_20_DTv6q5JD.mjs'),"/src/content/diary/diary_04_21.mdoc": () => import('./diary_04_21_xBRVcerH.mjs'),"/src/content/diary/diary_04_22.mdoc": () => import('./diary_04_22_DDjLqgg2.mjs'),"/src/content/diary/diary_04_23.mdoc": () => import('./diary_04_23_q0g8-ixi.mjs'),"/src/content/diary/diary_04_24.mdoc": () => import('./diary_04_24_BfuFx4TM.mjs'),"/src/content/diary/diary_04_25.mdoc": () => import('./diary_04_25_Dual7JFV.mjs'),"/src/content/diary/diary_04_26.mdoc": () => import('./diary_04_26_D7seZypB.mjs'),"/src/content/diary/diary_04_27.mdoc": () => import('./diary_04_27_CqUr51yj.mjs'),"/src/content/diary/diary_04_28.mdoc": () => import('./diary_04_28_k1hi731L.mjs'),"/src/content/diary/diary_04_29.mdoc": () => import('./diary_04_29_5P5vk_4L.mjs'),"/src/content/diary/diary_04_30.mdoc": () => import('./diary_04_30_RmwmyeyT.mjs'),"/src/content/diary/diary_05_01.mdoc": () => import('./diary_05_01_CXl3N7PA.mjs'),"/src/content/diary/diary_05_02.mdoc": () => import('./diary_05_02_AP0BFY-4.mjs'),"/src/content/diary/diary_05_03.mdoc": () => import('./diary_05_03_DPVvoccP.mjs'),"/src/content/diary/diary_05_04.mdoc": () => import('./diary_05_04_BGO_Ssvu.mjs'),"/src/content/diary/diary_05_05.mdoc": () => import('./diary_05_05_DEOs2fum.mjs'),"/src/content/diary/diary_05_06.mdoc": () => import('./diary_05_06_BBElwEYc.mjs'),"/src/content/diary/diary_05_07.mdoc": () => import('./diary_05_07_CwIuUDvY.mjs'),"/src/content/diary/diary_05_08.mdoc": () => import('./diary_05_08_BW1d9vn4.mjs'),"/src/content/diary/diary_05_09.mdoc": () => import('./diary_05_09_nH4JXPa-.mjs'),"/src/content/diary/diary_05_10.mdoc": () => import('./diary_05_10_BKsY_0i7.mjs'),"/src/content/diary/diary_05_11.mdoc": () => import('./diary_05_11_B1IqS6Vp.mjs'),"/src/content/diary/diary_05_12.mdoc": () => import('./diary_05_12_2a4Tg61j.mjs'),"/src/content/diary/diary_05_13.mdoc": () => import('./diary_05_13_DMZkMkU0.mjs'),"/src/content/diary/diary_05_14.mdoc": () => import('./diary_05_14_xb16ZQf3.mjs'),"/src/content/diary/diary_05_15.mdoc": () => import('./diary_05_15_nfmiKF0v.mjs'),"/src/content/diary/diary_05_16.mdoc": () => import('./diary_05_16_BPipeHcD.mjs'),"/src/content/diary/diary_05_17.mdoc": () => import('./diary_05_17_YHiQ-qc6.mjs'),"/src/content/diary/diary_05_18.mdoc": () => import('./diary_05_18_hpk2nUT1.mjs'),"/src/content/diary/diary_05_31.mdoc": () => import('./diary_05_31_BD0l-9fu.mjs'),"/src/content/groups/aiz_group_1_10.mdoc": () => import('./aiz_group_1_10_BoTO8wKX.mjs'),"/src/content/groups/aiz_group_1_19.mdoc": () => import('./aiz_group_1_19_DqqjisT1.mjs'),"/src/content/groups/aiz_group_2_12.mdoc": () => import('./aiz_group_2_12_B1cX6tSZ.mjs'),"/src/content/groups/aiz_group_2_18.mdoc": () => import('./aiz_group_2_18_Cxr3jeOV.mjs'),"/src/content/groups/aiz_group_3_12.mdoc": () => import('./aiz_group_3_12_D5NgiSrv.mjs'),"/src/content/groups/aiz_group_3_19.mdoc": () => import('./aiz_group_3_19_Df_ReADX.mjs'),"/src/content/groups/aiz_group_4_18.mdoc": () => import('./aiz_group_4_18_RoNKyleh.mjs'),"/src/content/groups/aiz_group_4_20.mdoc": () => import('./aiz_group_4_20_D-xjmIqB.mjs'),"/src/content/groups/aiz_group_5_10.mdoc": () => import('./aiz_group_5_10_DCmpv7yV.mjs'),"/src/content/groups/aiz_group_5_20.mdoc": () => import('./aiz_group_5_20_DIj7s-3i.mjs'),"/src/content/groups/aiz_group_6_18_live.mdoc": () => import('./aiz_group_6_18_live_CtdWlK1_.mjs'),"/src/content/groups/aiz_group_for_man.mdoc": () => import('./aiz_group_for_man_CtZwuyKr.mjs'),"/src/content/news/new-group-drop-the-rock.mdoc": () => import('./new-group-drop-the-rock_SnXtUAoK.mjs'),"/src/content/news/new-group-traditions.mdoc": () => import('./new-group-traditions_BXoaRowX.mjs'),"/src/content/news/new-live-group-msk.mdoc": () => import('./new-live-group-msk_Cc0WMTq4.mjs'),"/src/content/posts/12-shagov-chast-zhizni.mdoc": () => import('./12-shagov-chast-zhizni_Bg_eFTGA.mjs'),"/src/content/posts/addict-symptoms.mdoc": () => import('./addict-symptoms_CRKbqAfC.mjs'),"/src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdoc": () => import('./chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj_CP2Ye2Ym.mjs'),"/src/content/posts/detox_list.mdoc": () => import('./detox_list_Crrjp6wq.mjs'),"/src/content/posts/format_dvustoronney_molitvy.mdoc": () => import('./format_dvustoronney_molitvy_AdE1cChd.mjs'),"/src/content/posts/instrumenty-dlya-polnoczennoj-zhizni.mdoc": () => import('./instrumenty-dlya-polnoczennoj-zhizni_COFn5HV6.mjs'),"/src/content/posts/internet-zavisimost-i-12-shagov.mdoc": () => import('./internet-zavisimost-i-12-shagov_DtYB7e24.mjs'),"/src/content/posts/kak-perestat-zalipat-v-internete.mdoc": () => import('./kak-perestat-zalipat-v-internete_CvxYInyX.mjs'),"/src/content/posts/kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov.mdoc": () => import('./kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov_DNx_kxZ6.mjs'),"/src/content/posts/kak-sozdat-gruppu-aiz.mdoc": () => import('./kak-sozdat-gruppu-aiz_CrEF-Gbm.mjs'),"/src/content/posts/kto-takie-aiz.mdoc": () => import('./kto-takie-aiz_Q2I5ePj2.mjs'),"/src/content/posts/kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh.mdoc": () => import('./kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh_CfW2T7F4.mjs'),"/src/content/posts/odin-iz-metodov-prohozhdeniya-shagov-aiz.mdoc": () => import('./odin-iz-metodov-prohozhdeniya-shagov-aiz_Cb9cmyVD.mjs'),"/src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdoc": () => import('./ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes_DvGly3-5.mjs'),"/src/content/posts/princzipy-12-shagov-v-nashih-delah.mdoc": () => import('./princzipy-12-shagov-v-nashih-delah_Boyp07GK.mjs'),"/src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdoc": () => import('./sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu_C6Ty3EM_.mjs'),"/src/content/posts/sovety-kak-zit-trezvym-v-aiz.mdoc": () => import('./sovety-kak-zit-trezvym-v-aiz_u7urktmM.mjs'),"/src/content/posts/test-na-internet-zavisimost.mdoc": () => import('./test-na-internet-zavisimost_ClIfgwyx.mjs'),"/src/content/posts/zavisimoe-myshlenie.mdoc": () => import('./zavisimoe-myshlenie_DZ35PjLZ.mjs'),"/src/content/speakers/1-shag-chtenie-knigi.mdoc": () => import('./1-shag-chtenie-knigi_C5Ch1WC0.mjs'),"/src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdoc": () => import('./12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom_55jbA_Ld.mjs'),"/src/content/speakers/daniil-instruments.mdoc": () => import('./daniil-instruments_Dl3MI6CC.mjs'),"/src/content/speakers/demyan-granitsy.mdoc": () => import('./demyan-granitsy_C_2Wc7IX.mjs'),"/src/content/speakers/demyan-sluzhenie.mdoc": () => import('./demyan-sluzhenie_B5SA2Lm1.mjs'),"/src/content/speakers/demyan-spikerskaya.mdoc": () => import('./demyan-spikerskaya_Cw66oEiP.mjs'),"/src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdoc": () => import('./evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya_BWLAT-VZ.mjs'),"/src/content/speakers/evgenii-traditsyy.mdoc": () => import('./evgenii-traditsyy_CUYVEVXx.mjs'),"/src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdoc": () => import('./evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet_jCKfRl-Q.mjs'),"/src/content/speakers/interview.mdoc": () => import('./interview_Bfxdyh-Y.mjs'),"/src/content/speakers/katya-progress.mdoc": () => import('./katya-progress_BBV3OoV5.mjs'),"/src/content/speakers/nastya-chairperson.mdoc": () => import('./nastya-chairperson_BnobkleK.mjs'),"/src/content/speakers/salima.mdoc": () => import('./salima_Lea9JAAI.mjs'),"/src/content/speakers/seminar-granitsy-1.mdoc": () => import('./seminar-granitsy-1_D-zPfasK.mjs'),"/src/content/speakers/seminar-granitsy-2.mdoc": () => import('./seminar-granitsy-2_DT2XziqB.mjs'),"/src/content/speakers/seminar.mdoc": () => import('./seminar_Bim0IWYI.mjs'),"/src/content/speakers/sergej-spikerskaya-opyt-programmy.mdoc": () => import('./sergej-spikerskaya-opyt-programmy_BsJjGWLd.mjs'),"/src/content/speakers/sergey-granitsy.mdoc": () => import('./sergey-granitsy_B86mfJLY.mjs'),"/src/content/speakers/sergey-opyt.mdoc": () => import('./sergey-opyt_CVRNQ-0l.mjs'),"/src/content/speakers/spikerskaya-dina.mdoc": () => import('./spikerskaya-dina_DExfwF6H.mjs'),"/src/content/speakers/spikerskaya-marat.mdoc": () => import('./spikerskaya-marat_Cm9eliXK.mjs'),"/src/content/speakers/spikerskaya-stasa.mdoc": () => import('./spikerskaya-stasa_CzA2n_Dj.mjs'),"/src/content/speakers/spikerskaya-tomas.mdoc": () => import('./spikerskaya-tomas_DNNd_nW2.mjs'),"/src/content/speakers/stas-2-traditsiya.mdoc": () => import('./stas-2-traditsiya_C7FWXFJN.mjs'),"/src/content/speakers/stas-history.mdoc": () => import('./stas-history_DEOaJW_I.mjs'),"/src/content/speakers/stas-sluzhenie.mdoc": () => import('./stas-sluzhenie_DPHFTfvO.mjs'),"/src/content/speakers/tatiana-otkrytiya.mdoc": () => import('./tatiana-otkrytiya_Dr7bmWY2.mjs'),"/src/content/speakers/tatiana-spikerskaya.mdoc": () => import('./tatiana-spikerskaya_Dk0B72hh.mjs'),"/src/content/story/a-working-program.mdoc": () => import('./a-working-program_DNQNrWKP.mjs'),"/src/content/story/becoming-fit-to-dream.mdoc": () => import('./becoming-fit-to-dream_CKoO4mid.mjs'),"/src/content/story/daniil.mdoc": () => import('./daniil_CScwcudi.mjs'),"/src/content/story/demyan.mdoc": () => import('./demyan_B4jlI9Gj.mjs'),"/src/content/story/recovery_is_possible.mdoc": () => import('./recovery_is_possible_B1fGP1Kj.mjs'),"/src/content/story/vasilij.mdoc": () => import('./vasilij_BVDXEbuU.mjs'),"/src/content/story/vlad.mdoc": () => import('./vlad_FL0aV6Ih.mjs')});
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
lookupMap = {"news":{"type":"content","entries":{"new-group-drop-the-rock":"/src/content/news/new-group-drop-the-rock.mdoc","new-group-traditions":"/src/content/news/new-group-traditions.mdoc","new-live-group-msk":"/src/content/news/new-live-group-msk.mdoc"}},"groups":{"type":"content","entries":{"aiz_group_1_10":"/src/content/groups/aiz_group_1_10.mdoc","aiz_group_1_19":"/src/content/groups/aiz_group_1_19.mdoc","aiz_group_2_12":"/src/content/groups/aiz_group_2_12.mdoc","aiz_group_2_18":"/src/content/groups/aiz_group_2_18.mdoc","aiz_group_3_12":"/src/content/groups/aiz_group_3_12.mdoc","aiz_group_3_19":"/src/content/groups/aiz_group_3_19.mdoc","aiz_group_4_18":"/src/content/groups/aiz_group_4_18.mdoc","aiz_group_4_20":"/src/content/groups/aiz_group_4_20.mdoc","aiz_group_5_10":"/src/content/groups/aiz_group_5_10.mdoc","aiz_group_5_20":"/src/content/groups/aiz_group_5_20.mdoc","aiz_group_6_18_live":"/src/content/groups/aiz_group_6_18_live.mdoc","aiz_group_for_man":"/src/content/groups/aiz_group_for_man.mdoc"}},"diary":{"type":"content","entries":{"diary_04_19":"/src/content/diary/diary_04_19.mdoc","diary_04_20":"/src/content/diary/diary_04_20.mdoc","diary_04_21":"/src/content/diary/diary_04_21.mdoc","diary_04_22":"/src/content/diary/diary_04_22.mdoc","diary_04_23":"/src/content/diary/diary_04_23.mdoc","diary_04_24":"/src/content/diary/diary_04_24.mdoc","diary_04_25":"/src/content/diary/diary_04_25.mdoc","diary_04_26":"/src/content/diary/diary_04_26.mdoc","diary_04_27":"/src/content/diary/diary_04_27.mdoc","diary_04_28":"/src/content/diary/diary_04_28.mdoc","diary_04_30":"/src/content/diary/diary_04_30.mdoc","diary_05_01":"/src/content/diary/diary_05_01.mdoc","diary_04_29":"/src/content/diary/diary_04_29.mdoc","diary_05_02":"/src/content/diary/diary_05_02.mdoc","diary_05_03":"/src/content/diary/diary_05_03.mdoc","diary_05_04":"/src/content/diary/diary_05_04.mdoc","diary_05_05":"/src/content/diary/diary_05_05.mdoc","diary_05_06":"/src/content/diary/diary_05_06.mdoc","diary_05_07":"/src/content/diary/diary_05_07.mdoc","diary_05_08":"/src/content/diary/diary_05_08.mdoc","diary_05_09":"/src/content/diary/diary_05_09.mdoc","diary_05_10":"/src/content/diary/diary_05_10.mdoc","diary_05_11":"/src/content/diary/diary_05_11.mdoc","diary_05_12":"/src/content/diary/diary_05_12.mdoc","diary_05_13":"/src/content/diary/diary_05_13.mdoc","diary_05_14":"/src/content/diary/diary_05_14.mdoc","diary_05_15":"/src/content/diary/diary_05_15.mdoc","diary_05_16":"/src/content/diary/diary_05_16.mdoc","diary_05_17":"/src/content/diary/diary_05_17.mdoc","diary_05_18":"/src/content/diary/diary_05_18.mdoc","diary_05_31":"/src/content/diary/diary_05_31.mdoc"}},"posts":{"type":"content","entries":{"12-shagov-chast-zhizni":"/src/content/posts/12-shagov-chast-zhizni.mdoc","chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj":"/src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdoc","addict-symptoms":"/src/content/posts/addict-symptoms.mdoc","detox_list":"/src/content/posts/detox_list.mdoc","format_dvustoronney_molitvy":"/src/content/posts/format_dvustoronney_molitvy.mdoc","instrumenty-dlya-polnoczennoj-zhizni":"/src/content/posts/instrumenty-dlya-polnoczennoj-zhizni.mdoc","internet-zavisimost-i-12-shagov":"/src/content/posts/internet-zavisimost-i-12-shagov.mdoc","kak-perestat-zalipat-v-internete":"/src/content/posts/kak-perestat-zalipat-v-internete.mdoc","kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov":"/src/content/posts/kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov.mdoc","kak-sozdat-gruppu-aiz":"/src/content/posts/kak-sozdat-gruppu-aiz.mdoc","kto-takie-aiz":"/src/content/posts/kto-takie-aiz.mdoc","kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh":"/src/content/posts/kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh.mdoc","odin-iz-metodov-prohozhdeniya-shagov-aiz":"/src/content/posts/odin-iz-metodov-prohozhdeniya-shagov-aiz.mdoc","ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes":"/src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdoc","princzipy-12-shagov-v-nashih-delah":"/src/content/posts/princzipy-12-shagov-v-nashih-delah.mdoc","sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu":"/src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdoc","sovety-kak-zit-trezvym-v-aiz":"/src/content/posts/sovety-kak-zit-trezvym-v-aiz.mdoc","test-na-internet-zavisimost":"/src/content/posts/test-na-internet-zavisimost.mdoc","zavisimoe-myshlenie":"/src/content/posts/zavisimoe-myshlenie.mdoc"}},"story":{"type":"content","entries":{"a-working-program":"/src/content/story/a-working-program.mdoc","becoming-fit-to-dream":"/src/content/story/becoming-fit-to-dream.mdoc","daniil":"/src/content/story/daniil.mdoc","demyan":"/src/content/story/demyan.mdoc","recovery_is_possible":"/src/content/story/recovery_is_possible.mdoc","vlad":"/src/content/story/vlad.mdoc","vasilij":"/src/content/story/vasilij.mdoc"}},"speakers":{"type":"content","entries":{"1-shag-chtenie-knigi":"/src/content/speakers/1-shag-chtenie-knigi.mdoc","12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom":"/src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdoc","daniil-instruments":"/src/content/speakers/daniil-instruments.mdoc","demyan-granitsy":"/src/content/speakers/demyan-granitsy.mdoc","demyan-sluzhenie":"/src/content/speakers/demyan-sluzhenie.mdoc","demyan-spikerskaya":"/src/content/speakers/demyan-spikerskaya.mdoc","evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya":"/src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdoc","evgenii-traditsyy":"/src/content/speakers/evgenii-traditsyy.mdoc","interview":"/src/content/speakers/interview.mdoc","evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet":"/src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdoc","katya-progress":"/src/content/speakers/katya-progress.mdoc","nastya-chairperson":"/src/content/speakers/nastya-chairperson.mdoc","salima":"/src/content/speakers/salima.mdoc","seminar-granitsy-1":"/src/content/speakers/seminar-granitsy-1.mdoc","seminar-granitsy-2":"/src/content/speakers/seminar-granitsy-2.mdoc","seminar":"/src/content/speakers/seminar.mdoc","sergej-spikerskaya-opyt-programmy":"/src/content/speakers/sergej-spikerskaya-opyt-programmy.mdoc","sergey-granitsy":"/src/content/speakers/sergey-granitsy.mdoc","sergey-opyt":"/src/content/speakers/sergey-opyt.mdoc","spikerskaya-dina":"/src/content/speakers/spikerskaya-dina.mdoc","spikerskaya-marat":"/src/content/speakers/spikerskaya-marat.mdoc","spikerskaya-stasa":"/src/content/speakers/spikerskaya-stasa.mdoc","spikerskaya-tomas":"/src/content/speakers/spikerskaya-tomas.mdoc","stas-2-traditsiya":"/src/content/speakers/stas-2-traditsiya.mdoc","stas-history":"/src/content/speakers/stas-history.mdoc","stas-sluzhenie":"/src/content/speakers/stas-sluzhenie.mdoc","tatiana-otkrytiya":"/src/content/speakers/tatiana-otkrytiya.mdoc","tatiana-spikerskaya":"/src/content/speakers/tatiana-spikerskaya.mdoc"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/diary/diary_04_19.mdoc": () => import('./diary_04_19_Bvn57j0z.mjs'),"/src/content/diary/diary_04_20.mdoc": () => import('./diary_04_20_Dpb_LpVM.mjs'),"/src/content/diary/diary_04_21.mdoc": () => import('./diary_04_21_rq7mWoWp.mjs'),"/src/content/diary/diary_04_22.mdoc": () => import('./diary_04_22_DyKoQr5Q.mjs'),"/src/content/diary/diary_04_23.mdoc": () => import('./diary_04_23_Bs4-wYzN.mjs'),"/src/content/diary/diary_04_24.mdoc": () => import('./diary_04_24_DQEtOPyE.mjs'),"/src/content/diary/diary_04_25.mdoc": () => import('./diary_04_25_DrzDDB1r.mjs'),"/src/content/diary/diary_04_26.mdoc": () => import('./diary_04_26_x8r1u0vs.mjs'),"/src/content/diary/diary_04_27.mdoc": () => import('./diary_04_27_DvxwFdR6.mjs'),"/src/content/diary/diary_04_28.mdoc": () => import('./diary_04_28_DGhbwhpm.mjs'),"/src/content/diary/diary_04_29.mdoc": () => import('./diary_04_29_CqGCYUVe.mjs'),"/src/content/diary/diary_04_30.mdoc": () => import('./diary_04_30_C_66hC9i.mjs'),"/src/content/diary/diary_05_01.mdoc": () => import('./diary_05_01_C5REgQDk.mjs'),"/src/content/diary/diary_05_02.mdoc": () => import('./diary_05_02_BbfSwonX.mjs'),"/src/content/diary/diary_05_03.mdoc": () => import('./diary_05_03_BWiAMs5G.mjs'),"/src/content/diary/diary_05_04.mdoc": () => import('./diary_05_04_D_9lMi3H.mjs'),"/src/content/diary/diary_05_05.mdoc": () => import('./diary_05_05_A3wKO_4D.mjs'),"/src/content/diary/diary_05_06.mdoc": () => import('./diary_05_06_BD4mx5Fb.mjs'),"/src/content/diary/diary_05_07.mdoc": () => import('./diary_05_07_Dv5KmGWw.mjs'),"/src/content/diary/diary_05_08.mdoc": () => import('./diary_05_08_CVDQeTCw.mjs'),"/src/content/diary/diary_05_09.mdoc": () => import('./diary_05_09_uFhdCfRH.mjs'),"/src/content/diary/diary_05_10.mdoc": () => import('./diary_05_10_BvCaRKt-.mjs'),"/src/content/diary/diary_05_11.mdoc": () => import('./diary_05_11_BuXeT5eG.mjs'),"/src/content/diary/diary_05_12.mdoc": () => import('./diary_05_12_CuJ0ZTbt.mjs'),"/src/content/diary/diary_05_13.mdoc": () => import('./diary_05_13_BkqDsPbC.mjs'),"/src/content/diary/diary_05_14.mdoc": () => import('./diary_05_14_BvZKcHoS.mjs'),"/src/content/diary/diary_05_15.mdoc": () => import('./diary_05_15_CZPYPisq.mjs'),"/src/content/diary/diary_05_16.mdoc": () => import('./diary_05_16_Dj4vmVvo.mjs'),"/src/content/diary/diary_05_17.mdoc": () => import('./diary_05_17_UtHq0o5U.mjs'),"/src/content/diary/diary_05_18.mdoc": () => import('./diary_05_18_DwrtHKIy.mjs'),"/src/content/diary/diary_05_31.mdoc": () => import('./diary_05_31_CNb_9PWq.mjs'),"/src/content/groups/aiz_group_1_10.mdoc": () => import('./aiz_group_1_10_BtP-D9Kr.mjs'),"/src/content/groups/aiz_group_1_19.mdoc": () => import('./aiz_group_1_19_CuCAhj2r.mjs'),"/src/content/groups/aiz_group_2_12.mdoc": () => import('./aiz_group_2_12_DxoFWihZ.mjs'),"/src/content/groups/aiz_group_2_18.mdoc": () => import('./aiz_group_2_18_Bvcyz8Bn.mjs'),"/src/content/groups/aiz_group_3_12.mdoc": () => import('./aiz_group_3_12_sgeosgcC.mjs'),"/src/content/groups/aiz_group_3_19.mdoc": () => import('./aiz_group_3_19_CD0vrv9L.mjs'),"/src/content/groups/aiz_group_4_18.mdoc": () => import('./aiz_group_4_18_CKRQXRD2.mjs'),"/src/content/groups/aiz_group_4_20.mdoc": () => import('./aiz_group_4_20_zZ3PO9Cy.mjs'),"/src/content/groups/aiz_group_5_10.mdoc": () => import('./aiz_group_5_10_CynTjABv.mjs'),"/src/content/groups/aiz_group_5_20.mdoc": () => import('./aiz_group_5_20_C0einCky.mjs'),"/src/content/groups/aiz_group_6_18_live.mdoc": () => import('./aiz_group_6_18_live_B6nVkxig.mjs'),"/src/content/groups/aiz_group_for_man.mdoc": () => import('./aiz_group_for_man_MOwbn68G.mjs'),"/src/content/news/new-group-drop-the-rock.mdoc": () => import('./new-group-drop-the-rock_BYfbWMwf.mjs'),"/src/content/news/new-group-traditions.mdoc": () => import('./new-group-traditions_BzU12aDX.mjs'),"/src/content/news/new-live-group-msk.mdoc": () => import('./new-live-group-msk_CxZYgMJZ.mjs'),"/src/content/posts/12-shagov-chast-zhizni.mdoc": () => import('./12-shagov-chast-zhizni_BrAB2WhQ.mjs'),"/src/content/posts/addict-symptoms.mdoc": () => import('./addict-symptoms_mhQNb6wV.mjs'),"/src/content/posts/chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj.mdoc": () => import('./chto-delat-esli-vash-drug-ili-chlen-semi-internet-zavisimyj_mPlSHuD2.mjs'),"/src/content/posts/detox_list.mdoc": () => import('./detox_list_CL8a9jDy.mjs'),"/src/content/posts/format_dvustoronney_molitvy.mdoc": () => import('./format_dvustoronney_molitvy_CZT3afHk.mjs'),"/src/content/posts/instrumenty-dlya-polnoczennoj-zhizni.mdoc": () => import('./instrumenty-dlya-polnoczennoj-zhizni_CFp8dvQq.mjs'),"/src/content/posts/internet-zavisimost-i-12-shagov.mdoc": () => import('./internet-zavisimost-i-12-shagov_CKMiLTG1.mjs'),"/src/content/posts/kak-perestat-zalipat-v-internete.mdoc": () => import('./kak-perestat-zalipat-v-internete_D5HGvXeK.mjs'),"/src/content/posts/kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov.mdoc": () => import('./kak-preodolet-internet-zavisimost-s-pomoshhyu-duhovnyh-princzipov_QExERBB4.mjs'),"/src/content/posts/kak-sozdat-gruppu-aiz.mdoc": () => import('./kak-sozdat-gruppu-aiz_DNUFQSLh.mjs'),"/src/content/posts/kto-takie-aiz.mdoc": () => import('./kto-takie-aiz_DPX87uu-.mjs'),"/src/content/posts/kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh.mdoc": () => import('./kto-takoj-sponsor-nastavnik-v-anonimnyh-internet-zavisimyh_-8jGZDXQ.mjs'),"/src/content/posts/odin-iz-metodov-prohozhdeniya-shagov-aiz.mdoc": () => import('./odin-iz-metodov-prohozhdeniya-shagov-aiz_CisHLei4.mjs'),"/src/content/posts/ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes.mdoc": () => import('./ponyatie-trezvosti-ili-chistoty-v-aiz-est-li-eti-ponyatiya-zdes_B96Rto81.mjs'),"/src/content/posts/princzipy-12-shagov-v-nashih-delah.mdoc": () => import('./princzipy-12-shagov-v-nashih-delah_XbcsYVJx.mjs'),"/src/content/posts/sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu.mdoc": () => import('./sluzhenie-eto-vyrazhenie-nashej-blagodarnosti-sodruzhestvu_Cwee8ndM.mjs'),"/src/content/posts/sovety-kak-zit-trezvym-v-aiz.mdoc": () => import('./sovety-kak-zit-trezvym-v-aiz_C-b4-wjW.mjs'),"/src/content/posts/test-na-internet-zavisimost.mdoc": () => import('./test-na-internet-zavisimost_Ja_bzSo0.mjs'),"/src/content/posts/zavisimoe-myshlenie.mdoc": () => import('./zavisimoe-myshlenie_CGcD3yEv.mjs'),"/src/content/speakers/1-shag-chtenie-knigi.mdoc": () => import('./1-shag-chtenie-knigi_Bk4qs8Fb.mjs'),"/src/content/speakers/12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom.mdoc": () => import('./12-tradiczij-dlya-iz-po-illyustracziyam-primerami-i-opytom_5ZjWluiW.mjs'),"/src/content/speakers/daniil-instruments.mdoc": () => import('./daniil-instruments_CK5JXcd1.mjs'),"/src/content/speakers/demyan-granitsy.mdoc": () => import('./demyan-granitsy_KZJrt23d.mjs'),"/src/content/speakers/demyan-sluzhenie.mdoc": () => import('./demyan-sluzhenie_HXOQrJKd.mjs'),"/src/content/speakers/demyan-spikerskaya.mdoc": () => import('./demyan-spikerskaya_BDd-O-LW.mjs'),"/src/content/speakers/evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya.mdoc": () => import('./evelina-r-spikerskaya-tema-sluzhenie-neotemlemaya-chast-vyzdorovleniya_Cn9mRmr4.mjs'),"/src/content/speakers/evgenii-traditsyy.mdoc": () => import('./evgenii-traditsyy_BIhscy4b.mjs'),"/src/content/speakers/evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet.mdoc": () => import('./evgenij-n-g-cheboksary-tema-kak-ya-izbavilsya-ot-internet_DKGvXnR3.mjs'),"/src/content/speakers/interview.mdoc": () => import('./interview_DxfYPMin.mjs'),"/src/content/speakers/katya-progress.mdoc": () => import('./katya-progress_C3dvBM1w.mjs'),"/src/content/speakers/nastya-chairperson.mdoc": () => import('./nastya-chairperson_DNpIjAAR.mjs'),"/src/content/speakers/salima.mdoc": () => import('./salima_CkSyuxNF.mjs'),"/src/content/speakers/seminar-granitsy-1.mdoc": () => import('./seminar-granitsy-1_BaQTyi8O.mjs'),"/src/content/speakers/seminar-granitsy-2.mdoc": () => import('./seminar-granitsy-2_1SdoU5he.mjs'),"/src/content/speakers/seminar.mdoc": () => import('./seminar_D5KIcFhW.mjs'),"/src/content/speakers/sergej-spikerskaya-opyt-programmy.mdoc": () => import('./sergej-spikerskaya-opyt-programmy_BdpgmKvQ.mjs'),"/src/content/speakers/sergey-granitsy.mdoc": () => import('./sergey-granitsy_BQX9mdrM.mjs'),"/src/content/speakers/sergey-opyt.mdoc": () => import('./sergey-opyt_lXKVDic3.mjs'),"/src/content/speakers/spikerskaya-dina.mdoc": () => import('./spikerskaya-dina_BzNyHlN5.mjs'),"/src/content/speakers/spikerskaya-marat.mdoc": () => import('./spikerskaya-marat_C4zpzZGz.mjs'),"/src/content/speakers/spikerskaya-stasa.mdoc": () => import('./spikerskaya-stasa_CFMMzSsQ.mjs'),"/src/content/speakers/spikerskaya-tomas.mdoc": () => import('./spikerskaya-tomas_CqpTHePd.mjs'),"/src/content/speakers/stas-2-traditsiya.mdoc": () => import('./stas-2-traditsiya_iduAbEAj.mjs'),"/src/content/speakers/stas-history.mdoc": () => import('./stas-history_CjbtzCIj.mjs'),"/src/content/speakers/stas-sluzhenie.mdoc": () => import('./stas-sluzhenie_BvUp9_Qk.mjs'),"/src/content/speakers/tatiana-otkrytiya.mdoc": () => import('./tatiana-otkrytiya_DQC8JSWg.mjs'),"/src/content/speakers/tatiana-spikerskaya.mdoc": () => import('./tatiana-spikerskaya_Bd18tBb6.mjs'),"/src/content/story/a-working-program.mdoc": () => import('./a-working-program_D5xvIL7Z.mjs'),"/src/content/story/becoming-fit-to-dream.mdoc": () => import('./becoming-fit-to-dream_BTTLzXbM.mjs'),"/src/content/story/daniil.mdoc": () => import('./daniil_BlyvzbK7.mjs'),"/src/content/story/demyan.mdoc": () => import('./demyan_rcqKNqug.mjs'),"/src/content/story/recovery_is_possible.mdoc": () => import('./recovery_is_possible_DiMzErzq.mjs'),"/src/content/story/vasilij.mdoc": () => import('./vasilij_CoJet0R3.mjs'),"/src/content/story/vlad.mdoc": () => import('./vlad_CHDvWiDr.mjs')});
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
