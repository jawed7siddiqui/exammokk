// template_list.js

// API Base URL
const API_URL = "https://api.jawedsiddiqui.cloud/api/design/templates";

// Dynamic Template Data
export let TEMPLATE_LIST = [];

// Fast Filtering Object
export let TEMPLATE_BY_PLATFORM = {};

// Title Map
export let TEMPLATE_TITLE_MAP = new Map();

/**
 * Load Templates From API
 */
export async function loadTemplates() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch templates");
    }

    const result = await response.json();

    // API Data → Required Structure
    TEMPLATE_LIST = result.data.map((item) => ({
      meta: {
        projectId: item.projectId || item._id,
        title: item.title,
        category: item.category,
        subcategories: item.subcategory || "",
        tags: item.tags || [],
        platform_type: item.platformType,
        layoutW: item.layoutW,
        layoutH: item.layoutH,
        thumbnail: item.thumbnail,
      },
    }));

    // Title Map
    TEMPLATE_TITLE_MAP = new Map(
      TEMPLATE_LIST.map((t) => [t.meta.title.toLowerCase(), t]),
    );

    // Platform Grouping
    TEMPLATE_BY_PLATFORM = TEMPLATE_LIST.reduce((acc, t) => {
      const platform = t.meta.platform_type;

      if (!acc[platform]) {
        acc[platform] = [];
      }

      acc[platform].push(t);

      return acc;
    }, {});

    console.log("Templates Loaded ✅", TEMPLATE_LIST);

    return TEMPLATE_LIST;
  } catch (error) {
    console.error("Template API Error:", error);
    return [];
  }
}
