import { print, DocumentNode } from 'graphql'
import gql from 'graphql-tag'

import { IHeaders, IConnectorOutput } from '../Interfaces/IConnectorOutput'
import { SERVERS_AUTH as SERVERS } from '../Constants/servers.const'
import { getDetectedEnv } from '../Shared/getDetectedEnv'

interface IGetAuthRegisteredConnector {
  (
    userName: string,
    userEmail: string,
    userPasswordAuth: string
  ): IConnectorOutput
}

const headers: IHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  timestamp: +new Date(),
}

export const getAuthRegisteredConnector: IGetAuthRegisteredConnector = (
  userName,
  userEmail,
  userPasswordAuth
) => {
  const envType: string = getDetectedEnv()

  const queryAst: DocumentNode = gql`
    query Register($authInput: AuthInput) {
      register(authInput: $authInput) {
        path
        status
        message
        uid
        userName
        email
        phone
        webToken
        roles
      }
    }
  `
  const query = print(queryAst as DocumentNode)

  const obj: IConnectorOutput = {
    testCapture: 'should return 200 code and data defined',
    method: 'post',
    payload: {
      operationName: 'Register',
      variables: {
        authInput: {
          userName: userName,
          email: userEmail,
          password: userPasswordAuth,
          phone: 0,
        },
      },
      query,
    },
    options: { headers: { ...headers } },
    url: `${SERVERS[envType]}/graphql`,
  }

  return obj
}
