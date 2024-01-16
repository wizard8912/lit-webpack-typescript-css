module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
	"prettier",
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    "import",
  ],
  rules: {
	"import/extensions": [
		"error",
		"ignorePackages",
		{
		  "js": "never",
		  "jsx": "never",
		  "ts": "never",
		  "tsx": "never"
		}
	 ],
	 "import/prefer-default-export": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
