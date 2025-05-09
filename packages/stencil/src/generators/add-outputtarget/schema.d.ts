import { OutputTargetType } from './lib/add-outputtarget-to-config';

export type OutputTargetType = 'angular' | 'react' | 'svelte' | 'vue';

export interface AddOutputtargetSchematicSchema {
  projectName: string;
  outputType: OutputTargetType;
  publishable: boolean;
  importPath?: string;
  unitTestRunner: 'jest' | 'none';
  skipFormat: boolean;
}
