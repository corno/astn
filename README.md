# ASTN (Abstract Syntax Tree Notation)

A TypeScript library for parsing and formatting ASTN (Abstract Syntax Tree Notation) - a human-readable data format designed for structured content.

## Features

- 🚀 **Fast parsing** - Efficient lexer and parser implementation
- 📝 **Format validation** - Comprehensive error reporting with location information
- 🎨 **Code formatting** - Built-in formatter for consistent code style
- 📋 **Multiple string types** - Support for quoted, backticked, apostrophed, and undelimited strings
- 💬 **Comments** - Line and block comment support
- 🏗️ **Rich data structures** - dictionaries, lists, groups, tagged values, include, set, not set

## Installation

```bash
npm install astn
```

## Quick Start

### Parsing ASTN

```typescript
import { Parser } from 'astn';

const source = `
! header "example"
{
    "name": "John Doe"
    "age": |number "30"
    "hobbies": [
        "reading"
        "coding"
    ]
}
`;

const result = Parser.parse(source, { 'tab size': 4 });

if (result[0] === 'success') {
    console.log('Parsed successfully:', result[1]);
} else {
    console.error('Parse error:', result[1]);
}
```

### Formatting ASTN

```typescript
import * as format from 'astn/format';
import * as types from 'astn';

// Format a parsed document
const edits = format.Document(document, {
    'remove commas': false,
    'indentation string': '    ',
    'current indentation': ''
});
```

### Error Handling

```typescript
import * as create_error_message from 'astn/create_error_message';

const result = Parser.parse(invalidSource, { 'tab size': 4 });

if (result[0] === 'failure') {
    const errorMessage = create_error_message.Parse_Error(result[1], {
        'position info': ['one based', null]
    });
    console.error('Parse Error:', errorMessage);
}
```

## ASTN Syntax Overview

ASTN supports various data types and structures:

### Basic Values
```astn
"quoted string"
'apostrophed string'
`backticked string`
undelimited_string
```

### Collections
```astn
// Dictionary
{
    "key": "value"
    "number": |number "42"
}

// List
[
    "item1"
    "item2"
    "item3"
]

// Concise Group
<"item1" "item2" "item3">

// Verbose Group
("key1": "value1" "key2": "value2")
```

### Special Values
```astn
// Tagged values
|state "value"

// Optional values
*"optional value"

// Not set
~

// Includes
@"path/to/file.astn"
```

### Comments
```astn
// Line comment
/* Block comment */
{
    "key": "value" // Trailing comment
}
```

## VS Code Extension

For the best development experience with ASTN files, install the **ASTN** VS Code extension:

- **Extension ID**: `astn`
- **Features**: Syntax highlighting, error detection, and formatting support
- **Installation**: Search for "astn" in the VS Code Extensions marketplace

The extension provides:
- 🎨 Syntax highlighting for `.astn` files
- 🔍 Real-time error detection and validation
- 📝 IntelliSense and autocompletion
- 🔧 Integrated formatting support

## CLI Usage

Validate ASTN files:

```bash
npx astn-validate < input.astn
```

## API Reference

### Types

- `Document` - Root document structure
- `Value` - Any ASTN value
- `StringX` - String with type information
- `Parse_Error` - Detailed error information
- `Location` - Position information in source

### Functions

- `Parser.parse(source, options)` - Parse ASTN source
- `format.Document(doc, options)` - Format a document
- `create_error_message.Parse_Error(error, options)` - Create human-readable error messages

## Documentation

- [Railroad Diagrams](./documentation/railroad_diagram/index.md)
- [EBNF Grammar](./extra/astn.ebnf)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Apache 2.0 License - see LICENSE file for details.

## Version

Current version: 0.110.5