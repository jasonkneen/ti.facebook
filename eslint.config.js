const { defineConfig, globalIgnores } = require('eslint/config');
const envNode = require('eslint-config-axway/env-node');
const pluginJasmine = require('eslint-plugin-jasmine');
const globals = require('globals');

const titaniumGlobals = {
	alert: 'readonly',
	console: 'readonly',
	decodeURIComponent: 'readonly',
	encodeURIComponent: 'readonly',
	L: 'readonly',
	require: 'readonly',
	Ti: 'readonly',
	Titanium: 'readonly',
	clearTimeout: 'readonly',
	clearInterval: 'readonly',
	setTimeout: 'readonly',
	setInterval: 'readonly',
	exports: 'readonly',
	module: 'readonly'
};

module.exports = defineConfig([
	globalIgnores([
		'node_modules/**',
		'android/bin/**',
		'android/build/**',
		'android/dist/**',
		'ios/build/**',
		'ios/dist/**'
	]),
	{
		extends: [ envNode ],
		languageOptions: {
			ecmaVersion: 2015,
			sourceType: 'script',
			globals: titaniumGlobals
		},
		rules: {
			'no-alert': 'off',
			'no-implicit-globals': 'off'
		}
	},
	{
		files: [ 'dangerfile.js' ],
		languageOptions: {
			ecmaVersion: 2017,
			sourceType: 'module'
		}
	},
	{
		files: [ 'test/unit/**/*.js' ],
		plugins: {
			jasmine: pluginJasmine
		},
		languageOptions: {
			globals: globals.jasmine
		},
		rules: pluginJasmine.configs.recommended.rules
	}
]);
