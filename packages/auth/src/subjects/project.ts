import { z } from 'zod'

export const projectSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.literal('Project'),
])

export type projectSubject = z.infer<typeof projectSubject>
