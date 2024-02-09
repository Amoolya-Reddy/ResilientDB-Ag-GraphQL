# ResilientDB-Ag-GraphQL

This project serves as a GraphQL wrapper for the existing [GraphQL APIs](https://github.com/apache/incubator-resilientdb-graphql), providing specific APIs used for Agricultural applications.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Amoolya-Reddy/ResilientDB-Ag-GraphQL-Wrapper

2. Install Dependencies:

   ```bash
    cd ResilientDB-Ag-GraphQL-Wrapper
    npm install

## Usage

1. Start the GraphQL server:

   ```bash
    npm start

2. Access the GraphQL Apollo Playground at http://localhost:4000 to explore and interact with the GraphQL API.

## API Reference

In addition to the existing base APIs on the [ResilientDB GraphQL server](https://github.com/apache/incubator-resilientdb-graphql), the wrapper supports the addition of new queries and mutations below.

**Query: getProductStages**

* Retrieves the list of stages through which a product progresses before reaching its final form.

   ```bash
     query {
       getProductStages(productName: String!) {
                       id
                       version
                       metadata
                       operation
                       asset
                       publicKey
                       uri
                       type
       }
       }


args: productName(Required)

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

1. Fork the project.
2. Create your feature branch: git checkout -b feature/new-feature
3. Commit your changes: git commit -m 'Add new feature'
4. Push to the branch: git push origin feature/new-feature
5. Open a pull request.
