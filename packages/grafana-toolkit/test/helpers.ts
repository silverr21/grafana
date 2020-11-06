import execa from 'execa';
import { relative, resolve } from 'path';

export interface RunToolkitConfig {
  argv: string[];
  fixture: string;
}

export const runToolkit = ({ argv, fixture }: RunToolkitConfig) => {
  const cwd = resolve(`${__dirname}/fixtures/${fixture}`);
  return execa('node', [relative(cwd, `${__dirname}/../bin/grafana-toolkit.js`), ...argv], { cwd });
};
