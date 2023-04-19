import {} from "@strapi/strapi";
import { Config } from "../models/config";
import pluginId from "../utils/pluginId";

class SettingsService {
  static get settings(): Config {
    return strapi.config.get(`plugin.${pluginId}`);
  }
}

export default SettingsService;
