import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost/graphql',
  documents: ['src/graphql/**/*.graphql'],
  config: {
    namingConvention: {
      enumValues: 'keep'
    },
    enumsAsConst: true
  },
  generates: {
    './src/graphql/generated/output.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  },
  ignoreNoDocuments: true
}

export default config
