import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Represents an okp4 address as [Bech32](https://en.bitcoin.it/wiki/Bech32) format prefixed by the blockchain prefix.
   * e.g. `okp41jse8senm9hcvydhl8v9x47kfe5z82zmwtw8jvj`
   */
  AccAddress: any;
  /**
   * Represents an opaque identifier on a resource allowing cursor based pagination.
   * e.g. `1jS3rqHqNoGdj6nJ2VN3UvJvqnz`
   */
  Cursor: string;
  /**
   * Represents a Keybase Key ID.
   * e.g. `547DBC6F536D3AD2`
   */
  KID: any;
  /**
   * Represents a date time in a RFC3339 Nano format.
   * e.g. `2006-01-02T15:04:05.999999999Z07:00`
   */
  Time: string;
  UInt64: any;
  /**
   * Represents an [Uniform Resource Identifier](https://fr.wikipedia.org/wiki/Uniform_Resource_Identifier) to permanently identify a resource.
   * e.g. `https://okp4.network/`
   */
  URI: string;
  /**
   * Represents an okp4 validator address as [Bech32](https://en.bitcoin.it/wiki/Bech32) format prefixed by the blockchain valoper prefix.
   * e.g. `okp4valoper1jse8senm9hcvydhl8v9x47kfe5z82zmwtw8jvj`
   */
  ValoperAddress: string;
};

/** Represents the state of a basic task. */
export type BasicTaskState = TaskState & {
  readonly __typename?: 'BasicTaskState';
  /** `true` if the validator  completed this task. */
  readonly completed: Scalars['Boolean'];
  /** The number of points earned by the validator on this task. */
  readonly earnedPoints: Scalars['UInt64'];
  /** The task we're talking about. */
  readonly task: Task;
};

/** Represents a blockchain block range. */
export type BlockRange = {
  readonly __typename?: 'BlockRange';
  /** The size of the range (i.e. `size` =  `to` - `from`). */
  readonly count: Scalars['Int'];
  /** The block height the range begin, inclusive. */
  readonly from: Scalars['Int'];
  /** The block height the range end, inclusive. */
  readonly to: Scalars['Int'];
};

/** Represents a page of the Leaderboard. */
export type BoardConnection = {
  readonly __typename?: 'BoardConnection';
  /** The page's validators, ordered by their rank. */
  readonly edges: ReadonlyArray<ValidatorEdge>;
  /** The information on the current connection page. */
  readonly pageInfo: PageInfo;
};

/** Represents an identity on https://keybase.io/ */
export type Identity = {
  readonly __typename?: 'Identity';
  /** The identity PGP key id. */
  readonly kid: Scalars['KID'];
  /** The resolved identity picture, if any. */
  readonly picture?: Maybe<Link>;
};

/** A Link represents a relationship from the containing resource to a URI. */
export type Link = {
  readonly __typename?: 'Link';
  /**
   * The URI to the resource.
   *
   * Its value is either a URI compliant with [RFC3986](https://www.ietf.org/rfc/rfc3986.txt) or a URI Template compliant with
   * [RFC6570](https://tools.ietf.org/html/rfc6570).
   *
   * If the value is a URI Template then the Link Object shall have a `templated` attribute whose value is true.
   */
  readonly href: Scalars['URI'];
};

/** Contains information on a connection page. */
export type PageInfo = {
  readonly __typename?: 'PageInfo';
  /** The number of elements in the page. */
  readonly count: Scalars['Int'];
  /** The cursor of the last element of the page. */
  readonly endCursor?: Maybe<Scalars['Cursor']>;
  /** `true` if there is other elements after the endCursor. */
  readonly hasNextPage: Scalars['Boolean'];
  /** The cursor of the first element of the page. */
  readonly startCursor?: Maybe<Scalars['Cursor']>;
};

/** Contains tasks state in the context of a phase and a validator. */
export type PerPhaseTasks = {
  readonly __typename?: 'PerPhaseTasks';
  /** The total number of tasks the validator completed in this phase. */
  readonly completedCount: Scalars['Int'];
  /** The total number of finished tasks in this phase. */
  readonly finishedCount: Scalars['Int'];
  /** The phase we're talking about. */
  readonly phase: Phase;
  /** The current status of the phase's tasks for a validator. */
  readonly tasks: ReadonlyArray<TaskState>;
};

/** Represents a Phase of the Nemeton Program */
export type Phase = {
  readonly __typename?: 'Phase';
  /** The current block range of the phase. In the case the phase hasn't started its size is 0, for a phase in progress the range will evolve. */
  readonly blocks: BlockRange;
  /** The description of the phase. */
  readonly description: Scalars['String'];
  /** The date the phase ends. */
  readonly endDate: Scalars['Time'];
  /** `true` if the phase is finished. */
  readonly finished: Scalars['Boolean'];
  /** The name of the phase. */
  readonly name: Scalars['String'];
  /** Identify the phase, the phases are ordered through their number. */
  readonly number: Scalars['Int'];
  /** The date the phase begins. */
  readonly startDate: Scalars['Time'];
  /** `true` if the phase is in progress. */
  readonly started: Scalars['Boolean'];
  /** The tasks composing the phase the druids will have to perform. */
  readonly tasks: ReadonlyArray<Task>;
};

/** Represents a Phases payload */
export type Phases = {
  readonly __typename?: 'Phases';
  /** Retrieve all the phases. */
  readonly all: ReadonlyArray<Phase>;
  /** Retrieve the current phase. */
  readonly current?: Maybe<Phase>;
  /** Retrieve all the finished phases. */
  readonly finished: ReadonlyArray<Phase>;
  /** Retrieve all the ongoing phases, those who hasn't started yet. */
  readonly ongoing: ReadonlyArray<Phase>;
};

export type Query = {
  readonly __typename?: 'Query';
  /** Retrieve the state of the Nemeton Leaderboard. */
  readonly board: BoardConnection;
  /** Fetch a specific Phase. */
  readonly phase?: Maybe<Phase>;
  /** Fetch multiple phases. */
  readonly phases: Phases;
  /** Fetch a validator through one of its unique property. */
  readonly validator?: Maybe<Validator>;
  /** The total number of participants, or druids, or validator. */
  readonly validatorCount: Scalars['Int'];
};


export type QueryBoardArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryPhaseArgs = {
  number: Scalars['Int'];
};


export type QueryValidatorArgs = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  delegator?: InputMaybe<Scalars['AccAddress']>;
  discord?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['Int']>;
  twitter?: InputMaybe<Scalars['String']>;
  valoper?: InputMaybe<Scalars['ValoperAddress']>;
};

/** Represents the state of a specific task requiring a manual submission from the validator. */
export type SubmissionTask = TaskState & {
  readonly __typename?: 'SubmissionTask';
  /** `true` if the validator  completed this task. */
  readonly completed: Scalars['Boolean'];
  /** The number of points earned by the validator on this task. */
  readonly earnedPoints: Scalars['UInt64'];
  /** `true` if the validator has submitted the content expected for the task. */
  readonly submitted: Scalars['Boolean'];
  /** The task we're talking about. */
  readonly task: Task;
};

/** Represents a phase's task, containing only descriptive elements. It does not expressed any potential progress or result as it is not linked to a druid. */
export type Task = {
  readonly __typename?: 'Task';
  /** The description of the task. */
  readonly description: Scalars['String'];
  /** The date the task ends. */
  readonly endDate: Scalars['Time'];
  /** `true` if the task is finished. */
  readonly finished: Scalars['Boolean'];
  /** The unique identifier of the task. */
  readonly id: Scalars['ID'];
  /** The name of the task. */
  readonly name: Scalars['String'];
  /** The points earned if the task is completed. No value means there is no fixed amount of points as rewards, the amount is calculated regarding the performance. */
  readonly rewards?: Maybe<Scalars['UInt64']>;
  /** The date the task begins. */
  readonly startDate: Scalars['Time'];
  /** `true` if the task is in progress. */
  readonly started: Scalars['Boolean'];
  /** Tells whether a task require a manual submission from the druids to be evaluated. */
  readonly withSubmission: Scalars['Boolean'];
};

/** Represents the progress/result of a task assigned to a validator. */
export type TaskState = {
  /** `true` if the validator  completed this task. */
  readonly completed: Scalars['Boolean'];
  /** The number of points earned by the validator on this task. */
  readonly earnedPoints: Scalars['UInt64'];
  /** The task we're talking about. */
  readonly task: Task;
};

/** Contains information relative to the state of the tasks a validator shall perform. */
export type Tasks = {
  readonly __typename?: 'Tasks';
  /** The total number of tasks the validator completed. */
  readonly completedCount: Scalars['Int'];
  /** The total number of finished tasks the validator was supposed to perform. */
  readonly finishedCount: Scalars['Int'];
  /** Details the tasks state a validator is supposed to perform in the specified phase. */
  readonly forPhase?: Maybe<PerPhaseTasks>;
  /** Details the tasks state a validator is supposed to perform per phase. */
  readonly perPhase: ReadonlyArray<PerPhaseTasks>;
};


/** Contains information relative to the state of the tasks a validator shall perform. */
export type TasksForPhaseArgs = {
  number: Scalars['Int'];
};

/** Represents the state of a specific task of uptime. */
export type UptimeTask = TaskState & {
  readonly __typename?: 'UptimeTask';
  /** The total number of blocks expected to be signed. */
  readonly blockCount: Scalars['Int'];
  /** `true` if the validator  completed this task. */
  readonly completed: Scalars['Boolean'];
  /** The number of points earned by the validator on this task. */
  readonly earnedPoints: Scalars['UInt64'];
  /** The number of missed blocks. */
  readonly missedBlockCount: Scalars['Int'];
  /** The missed block ranges. */
  readonly missedBlocks: ReadonlyArray<BlockRange>;
  /** The ratio of signed blocks. */
  readonly ratio: Scalars['Int'];
  /** The task we're talking about. */
  readonly task: Task;
};

/** Represents a validator, a participant or a druid in the Nemeton program. */
export type Validator = {
  readonly __typename?: 'Validator';
  /** The validator country. */
  readonly country: Scalars['String'];
  /** The address of the validator node delegator. */
  readonly delegator: Scalars['AccAddress'];
  /** The validator discord account. */
  readonly discord: Scalars['String'];
  /** The validator identity on https://keybase.io/, can be used to retrieve its picture. */
  readonly identity?: Maybe<Identity>;
  /** The blocks the validator has not signed. */
  readonly missedBlocks: ReadonlyArray<BlockRange>;
  /** The validator moniker. */
  readonly moniker: Scalars['String'];
  /** The validator points count. */
  readonly points: Scalars['UInt64'];
  /** The validator position in the board. */
  readonly rank: Scalars['Int'];
  /** The validator current status. */
  readonly status: ValidatorStatus;
  /** The validator affected tasks, does not reference not tasks who has not started yet. */
  readonly tasks: Tasks;
  /** The validator twitter account. */
  readonly twitter?: Maybe<Scalars['String']>;
  /** The validator node valoper address. */
  readonly valoper: Scalars['ValoperAddress'];
  /** The validator website. */
  readonly website?: Maybe<Scalars['URI']>;
};

/** Represents an edge to a validator. */
export type ValidatorEdge = {
  readonly __typename?: 'ValidatorEdge';
  /** The validator's cursor. */
  readonly cursor: Scalars['Cursor'];
  /** The validator. */
  readonly node: Validator;
};

/** Represents the status of a validator node on the blockchain. */
export enum ValidatorStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Jailed = 'JAILED'
}

export type QBoardQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['Cursor']>;
}>;


export type QBoardQuery = { readonly __typename?: 'Query', readonly board: { readonly __typename?: 'BoardConnection', readonly pageInfo: { readonly __typename?: 'PageInfo', readonly startCursor?: string | null, readonly endCursor?: string | null, readonly hasNextPage: boolean, readonly count: number }, readonly edges: ReadonlyArray<{ readonly __typename?: 'ValidatorEdge', readonly cursor: string, readonly node: { readonly __typename?: 'Validator', readonly rank: number, readonly moniker: string, readonly valoper: string, readonly points: any, readonly identity?: { readonly __typename?: 'Identity', readonly kid: any, readonly picture?: { readonly __typename?: 'Link', readonly href: string } | null } | null, readonly tasks: { readonly __typename?: 'Tasks', readonly completedCount: number, readonly finishedCount: number } } }> } };

export type QBoardPodiumQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
}>;


export type QBoardPodiumQuery = { readonly __typename?: 'Query', readonly board: { readonly __typename?: 'BoardConnection', readonly edges: ReadonlyArray<{ readonly __typename?: 'ValidatorEdge', readonly node: { readonly __typename?: 'Validator', readonly rank: number, readonly moniker: string, readonly identity?: { readonly __typename?: 'Identity', readonly kid: any, readonly picture?: { readonly __typename?: 'Link', readonly href: string } | null } | null } }> } };

export type QPhasesQueryVariables = Exact<{ [key: string]: never; }>;


export type QPhasesQuery = { readonly __typename?: 'Query', readonly phases: { readonly __typename?: 'Phases', readonly current?: { readonly __typename?: 'Phase', readonly number: number, readonly name: string, readonly startDate: string, readonly endDate: string } | null } };

export type QValidatorCountQueryVariables = Exact<{ [key: string]: never; }>;


export type QValidatorCountQuery = { readonly __typename?: 'Query', readonly validatorCount: number };


export const QBoardDocument = gql`
    query QBoard($search: String, $first: Int, $after: Cursor) {
  board(search: $search, first: $first, after: $after) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      count
    }
    edges {
      cursor
      node {
        rank
        moniker
        identity {
          kid
          picture {
            href
          }
        }
        valoper
        points
        tasks {
          completedCount
          finishedCount
        }
      }
    }
  }
}
    `;

/**
 * __useQBoardQuery__
 *
 * To run a query within a React component, call `useQBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useQBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQBoardQuery({
 *   variables: {
 *      search: // value for 'search'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useQBoardQuery(baseOptions?: Apollo.QueryHookOptions<QBoardQuery, QBoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QBoardQuery, QBoardQueryVariables>(QBoardDocument, options);
      }
export function useQBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QBoardQuery, QBoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QBoardQuery, QBoardQueryVariables>(QBoardDocument, options);
        }
export type QBoardQueryHookResult = ReturnType<typeof useQBoardQuery>;
export type QBoardLazyQueryHookResult = ReturnType<typeof useQBoardLazyQuery>;
export type QBoardQueryResult = Apollo.QueryResult<QBoardQuery, QBoardQueryVariables>;
export const QBoardPodiumDocument = gql`
    query QBoardPodium($first: Int) {
  board(first: $first) {
    edges {
      node {
        rank
        moniker
        identity {
          kid
          picture {
            href
          }
        }
      }
    }
  }
}
    `;

/**
 * __useQBoardPodiumQuery__
 *
 * To run a query within a React component, call `useQBoardPodiumQuery` and pass it any options that fit your needs.
 * When your component renders, `useQBoardPodiumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQBoardPodiumQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useQBoardPodiumQuery(baseOptions?: Apollo.QueryHookOptions<QBoardPodiumQuery, QBoardPodiumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QBoardPodiumQuery, QBoardPodiumQueryVariables>(QBoardPodiumDocument, options);
      }
export function useQBoardPodiumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QBoardPodiumQuery, QBoardPodiumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QBoardPodiumQuery, QBoardPodiumQueryVariables>(QBoardPodiumDocument, options);
        }
export type QBoardPodiumQueryHookResult = ReturnType<typeof useQBoardPodiumQuery>;
export type QBoardPodiumLazyQueryHookResult = ReturnType<typeof useQBoardPodiumLazyQuery>;
export type QBoardPodiumQueryResult = Apollo.QueryResult<QBoardPodiumQuery, QBoardPodiumQueryVariables>;
export const QPhasesDocument = gql`
    query QPhases {
  phases {
    current {
      number
      name
      startDate
      endDate
    }
  }
}
    `;

/**
 * __useQPhasesQuery__
 *
 * To run a query within a React component, call `useQPhasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQPhasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQPhasesQuery({
 *   variables: {
 *   },
 * });
 */
export function useQPhasesQuery(baseOptions?: Apollo.QueryHookOptions<QPhasesQuery, QPhasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QPhasesQuery, QPhasesQueryVariables>(QPhasesDocument, options);
      }
export function useQPhasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QPhasesQuery, QPhasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QPhasesQuery, QPhasesQueryVariables>(QPhasesDocument, options);
        }
export type QPhasesQueryHookResult = ReturnType<typeof useQPhasesQuery>;
export type QPhasesLazyQueryHookResult = ReturnType<typeof useQPhasesLazyQuery>;
export type QPhasesQueryResult = Apollo.QueryResult<QPhasesQuery, QPhasesQueryVariables>;
export const QValidatorCountDocument = gql`
    query QValidatorCount {
  validatorCount
}
    `;

/**
 * __useQValidatorCountQuery__
 *
 * To run a query within a React component, call `useQValidatorCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useQValidatorCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQValidatorCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useQValidatorCountQuery(baseOptions?: Apollo.QueryHookOptions<QValidatorCountQuery, QValidatorCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QValidatorCountQuery, QValidatorCountQueryVariables>(QValidatorCountDocument, options);
      }
export function useQValidatorCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QValidatorCountQuery, QValidatorCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QValidatorCountQuery, QValidatorCountQueryVariables>(QValidatorCountDocument, options);
        }
export type QValidatorCountQueryHookResult = ReturnType<typeof useQValidatorCountQuery>;
export type QValidatorCountLazyQueryHookResult = ReturnType<typeof useQValidatorCountLazyQuery>;
export type QValidatorCountQueryResult = Apollo.QueryResult<QValidatorCountQuery, QValidatorCountQueryVariables>;