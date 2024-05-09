import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	clearMocks: true,
	restoreMocks: true,
	resetModules: true,
	testPathIgnorePatterns: ["<rootDir>/node_modules"],
	coveragePathIgnorePatterns: ["<rootDir>/test/mocks"],
	collectCoverageFrom: ["src/**/*.js"],
	coverageReporters: ["json", "lcov", "json-summary", "text"],
	coverageThreshold: {
		global: {
			statements: 85,
			branches: 85,
			functions: 85,
			lines: 85
		}
	},
	preset: "ts-jest",
	testEnvironment: "node",
	transform: {
		"node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
	},
	transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
	moduleNameMapper: {},
	testTimeout: 10000
};

export default config;
