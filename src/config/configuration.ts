import { readFileSync, existsSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yml';
const YAML_CONFIG_OVERWRITE_FILENAME = 'config.overwrite.yml';

export default () => {
  const filename = existsSync(
    join(__dirname, '..', '..', YAML_CONFIG_OVERWRITE_FILENAME),
  )
    ? YAML_CONFIG_OVERWRITE_FILENAME
    : YAML_CONFIG_FILENAME;

  return yaml.load(
    readFileSync(join(__dirname, '..', '..', filename), 'utf8'),
  ) as Record<string, any>;
};
