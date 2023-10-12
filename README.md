<div align="center">
  <h1>🧙 Nemeton Landing Page</h1>
</div>

[![nemeton github bannner](./etc/image/nemeton-banner.jpg)](https://nemeton.okp4.network)

<div align="center">
<a href="https://github.com/okp4/nemeton-web/releases"><img src="https://img.shields.io/github/v/release/okp4/nemeton-web?style=for-the-badge&amp;logo=github" alt="version"></a>
<a href="https://github.com/okp4/nemeton-web/actions/workflows/lint.yml"><img src="https://img.shields.io/github/actions/workflow/status/okp4/nemeton-web/lint.yml?label=lint&amp;style=for-the-badge&amp;logo=github" alt="lint"></a>
<a href="https://github.com/okp4/nemeton-web/actions/workflows/build.yml"><img src="https://img.shields.io/github/actions/workflow/status/okp4/nemeton-web/build.yml?label=build&amp;style=for-the-badge&amp;logo=github" alt="build"></a>
<a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge&amp;logo=conventionalcommits" alt="conventional commits"></a>
<a href="https://github.com/okp4/.github/blob/main/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=for-the-badge" alt="contributor covenant"></a>
<a href="https://opensource.org/licenses/BSD-3-Clause"><img src="https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=for-the-badge" alt="license"></a>
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="TypeScript">
<a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge" alt="prettier"></a></p>
</div>

> 🧙 Landing Page repository for the [Nemeton program][Nemeton] - the [OKP4](https://okp4.network/) incentivized testnet program.

## Purpose

Here you'll find the source code of the landing page for the [OKP4 Nemeton program][Nemeton] - the [OKP4] incentivized testnet program that has started on November 2, 2022.

Here's the content:

- 📍 Phases of the Program
- 📊 Leaderboard
- 💸 Rewards
- 🤗 How to join
- ⚖️ Terms

## Setup

🚚 Install the dependencies and build the project:

```sh
yarn

yarn build
```

## Use

### Environment

To launch the Web App, you need to set some environment variables. Default values are provided for the development environment in the file `.env.development`.
Feel free to adapt the values to your needs.

## GraphQL

 The GraphQL types are generated using the schema available on the [nemeton-leaderboard](https://github.com/okp4/nemeton-leaderboard).

 The schema can be fetched with `GH_TOKEN=your-github-token yarn fetch-schema`. It'll fetch the version referenced in the [.schema.version] file.

 The generation can then be invoked with `yarn graphql:code-gen`.

 The generated sources shall be committed to repository, the CI will ensure that.

### Launch

Run the server with the following command line.

```sh
yarn start
```

## You want to get involved? 😍

Please check out OKP4 health files :

- [Contributing](https://github.com/okp4/.github/blob/main/CONTRIBUTING.md)
- [Code of conduct](https://github.com/okp4/.github/blob/main/CODE_OF_CONDUCT.md)

## License

All the code in this repository is licensed under the [![bsd-3-clause][bsd-3-clause-image]][bsd-3-clause] [license](LICENSE).

The assets (markdown documentation, images, etc.) are licensed under the [![cc-by-sa-4.0][cc-by-sa-image]][cc-by-sa] [license](LICENSE-ASSETS).

[Nemeton]: https://nemeton.okp4.network
[OKP4]: https://okp4.network
[cc-by-sa]: https://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://i.creativecommons.org/l/by-sa/4.0/80x15.png
[bsd-3-clause]: https://opensource.org/licenses/BSD-3-Clause
[bsd-3-clause-image]: https://img.shields.io/badge/License-BSD_3--Clause-blue.svg
