import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';


const configuration: UserConfig = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'scope-enum': () => [RuleConfigSeverity.Error, 'always', ['design', 'blog', '*']]
  } ,
  // parserPreset: {
  //   parserOpts: {
  //     headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
  //     headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
  //   },
  // }
};

export default configuration;
