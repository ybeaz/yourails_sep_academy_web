import axios from 'axios'
import {
  IConnectorOutput,
  AxiosRequestHeaders,
} from '../Interfaces/IConnectorOutput'
import { SERVERS } from '../Constants/servers.const'
import { FRAGMENTS_STRINGS } from './fragments/FRAGMENTS_STRINGS'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IAddDocumentConnector {
  (vars: any, fragmentName: string): IConnectorOutput
}

const headers: AxiosRequestHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const addDocumentConnector: IAddDocumentConnector = (
  vars,
  fragmentName
) => {
  const envType: string = getDetectedEnv()
  const env: string = envType === 'remote' ? 'production' : 'development'

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    axiosClient: axios.create({
      baseURL: `${SERVERS[envType]}/graphql`,
      timeout: 1000,
      headers,
    }),
    method: 'post',
    params: {
      operationName: 'AddDocument',
      variables: {
        addDocumentInputGraphql: { ...vars, env },
      },
      query: `mutation AddDocument($addDocumentInputGraphql: AddDocumentInputGraphql!){ addDocument(addDocumentInputGraphql: $addDocumentInputGraphql){ ...${fragmentName} }} fragment ${FRAGMENTS_STRINGS[fragmentName]}`,
    },
  }

  return obj
}