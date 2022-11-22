#! /bin/bash

set -eu

mkdir -p schema

SCHEMA_VERSION=$(cat .schema.version)

echo "Fetching 'schema.graphqls' version '${SCHEMA_VERSION}' into /graphql/schema.graphqls"
curl -sL -H "Authorization: token ${GH_TOKEN}" "https://raw.githubusercontent.com/okp4/nemeton-leaderboard/${SCHEMA_VERSION}/graphql/schema.graphqls" -o schema/schema.graphqls
