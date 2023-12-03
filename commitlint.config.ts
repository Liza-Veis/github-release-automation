import { RuleConfigSeverity, type UserConfig } from '@commitlint/types';

import { ProjectPrefix } from './project.config';


const configuration: UserConfig = {
  extends: [`@commitlint/config-conventional`],
	parserPreset: {
		parserOpts: {
			issuePrefixes: ProjectPrefix.APPS.map((it) => `${it}-`),
		},
	},
	rules: {
		'references-empty': [RuleConfigSeverity.Error, `never`],
	},
};

export default configuration;
