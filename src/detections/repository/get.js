import { from } from 'rxjs'
import { map } from 'rxjs/operators'

import { GET_DETECTIONS } from 'detections/repository/query'
import { client } from 'startup/client'

const buildQuery = payload => ({
  query: GET_DETECTIONS,
  variables: { parameter: payload },
})

export const get = payload => from(client().query(buildQuery(payload)))
  .pipe(map(result => result.data.detections))
