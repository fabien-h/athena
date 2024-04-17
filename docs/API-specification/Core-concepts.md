# Core concepts

## Services

- A service represents a logical grouping of related methods or operations that can be invoked remotely.
- Services provide a namespace and organizational structure for the RPC API.
- Each service has a unique name within the specification.

## Methods
- Methods are the individual operations that can be invoked within a service.
- Each method has a unique name within the service it belongs to.
- Methods are unary (single request and response).
- Methods must have input and output message types, representing the request and response data structures.

## Message Types

- Message types define the data structures for requests and responses in RPC methods.
- They can be simple types (e.g., string, integer, boolean) or complex types (e.g., structs, enums, maps, lists).
- Message types support nested structures, allowing for rich and complex data models.
- Message types can be reused across multiple methods and services, promoting modularity and code reuse.

## Enumerations

- Enumerations (enums) represent a fixed set of named values that a field or message type can take.
- Enums can be used to represent categorical data, status codes, or any other set of predefined values.
- Enums have a unique name within the scope they are defined in (e.g., within a message type or a service or the global scope).

## Error Handling

- Errors can be specific to a method or shared across multiple methods or services.
- Error definitions include an error code (or name), a description, and any additional metadata or associated data structures.

## Metadata and Documentation

- Support for capturing metadata and documentation for services, methods, message types, and other constructs.
- Metadata can include descriptions, examples, deprecation notices, versioning information, mock methods and any other relevant details.
- Comprehensive documentation is crucial for developer experience and API consumption.

## Middleware Layer

- Middleware components can be defined at the service level or globally, allowing for reuse across multiple services or methods.
- Each middleware component should have a unique name and a defined execution order (e.g., before or after the main method logic).
- Middleware can be used for various purposes, such as authentication, logging, rate limiting, caching, and more.
