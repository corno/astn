<div align="center">
  <img src="./images/icon.png" alt="ASTN Logo" width="120" height="120"/>
  
  # ASTN
  ### Abstract Syntax Tree Notation
  
  [![npm version](https://img.shields.io/npm/v/astn?color=blue&style=flat-square)](https://www.npmjs.com/package/astn)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-Apache%202.0-green?style=flat-square)](LICENSE)
  [![VS Code Extension](https://img.shields.io/badge/VS%20Code-Extension%20Available-blue?style=flat-square&logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=astn)
  
  **A human-editable data format that extends JSON with type awareness**

  <br/>
  
  <div align="center">
    <table>
      <tr>
        <td align="center" style="border: 2px solid #0366d6; border-radius: 8px; padding: 16px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
          <strong>💡 ASTN does for JSON what TypeScript does for JavaScript</strong>
        </td>
      </tr>
    </table>
  </div>
  
  <br/>
  
  *Enhanced readability • Rich data structures • Built-in formatting*
</div>

---

## 📚 Table of Contents

- [✨ Features](#features)
- [🚀 Quick Start](#quick-start)
- [🆚 JSON vs ASTN Comparison](#json-vs-astn-comparison)
- [📖 ASTN Syntax Overview](#astn-syntax-overview)
- [🔧 VS Code Extension](#vs-code-extension)
- [⚡ CLI Usage](#cli-usage)
- [📚 Documentation](#documentation)

---

**ASTN is a superset of JSON** - any valid JSON document is also valid ASTN, but ASTN provides additional features for enhanced readability and functionality.

## ✨ Features

<table>
<tr>
<td width="50%">

### 📝 **Enhanced Syntax**
- 📋 **Multiple string types** - quoted, backticked, apostrophed, and undelimited
- 💬 **Comments** - Line and block comments throughout
- ✨ **Flexible punctuation** - Optional commas, trailing commas allowed

</td>
<td width="50%">

### 🏗️ **Rich Data Structures** 
- 🗂️ **Dictionaries & Lists** - Clear instance vs schema distinction
- 🏷️ **Tagged values** - Type information embedded in data
- 📄 **Document headers** - Optional metadata for documents

</td>
</tr>
<tr>
<td width="50%">

### 🔗 **Advanced Features**
- � **File inclusion** - Import other files with `@` syntax
- ❓ **Optional values** - Explicit optional/not-set markers
- 🎯 **Groups** - Concise and verbose structured data

</td>
<td width="50%">

### 🚀 **Developer Experience**
- ⚡ **Fast parsing** - Efficient lexer and parser
- � **Rich validation** - Comprehensive error reporting
- 🎨 **Auto-formatting** - Built-in code formatter

</td>
</tr>
</table>

## 🚀 Quick Start

### 📝 For Authoring ASTN Files

Want to start writing ASTN files or create ASTN schemas? Get the best editing experience with VS Code:

1. **Install VS Code Extension**
   - Search for "**astn**" in the VS Code Extensions marketplace
   - Or install directly: `ext install astn`

2. **Create a new file** with `.astn` extension

3. **Create rich textual languages effortlessly** - Design expressive, domain-specific formats that read naturally and feel powerful, without needing to learn anything about parsing or language implementation. ASTN handles all the technical complexity while you focus on creating beautiful, meaningful syntax.

4. **Start writing!** Check out our [sample ASTN file](./sample_astn_file.astn) to see the syntax in action

5. **Features you'll get:**
   - 🎨 Syntax highlighting
   - 🔍 Real-time error detection
   - 📝 IntelliSense and autocompletion
   - 🔧 Automatic formatting

### 💻 For Software Development

Want to parse and work with ASTN files in your application?

#### Installation

```bash
npm install astn
```

#### Parsing ASTN

```typescript
import { Parser } from 'astn';

const source = `
! header "example"
{
    \`name\`: "John Doe"
    \`age\`: | 'number' "30"
    \`hobbies\`: [
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

#### Formatting ASTN

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

#### Error Handling

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

### JSON Compatibility

Since ASTN is a superset of JSON, any valid JSON works as-is:

```json
{
    "name": "John Doe",
    "age": 30,
    "hobbies": ["reading", "coding"],
    "active": true,
    "metadata": null
}
```

But ASTN extends JSON with additional features for better readability and functionality.

## 🆚 JSON vs ASTN Comparison

Here's the same data structure showing ASTN's enhanced features:

<table>
<tr>
<th>JSON</th>
<th>ASTN</th>
</tr>
<tr>
<td>

```json
{
  "config": {
    "name": "MyApp",
    "version": "1.2.3",
    "enabled": true,
    "created": "2025-07-21T10:30:00Z",
    "tags": ["web", "typescript"],
    "databases": {
      "local": {
        "host": "localhost",
        "port": 5432,
        "ssl": null
      },
      "remote": {
        "host": "localhost",
        "port": 1234,
        "ssl": null
      },
    }
  }
}
```

</td>
<td>

```astn
! "Application Configuration"
(
    'config': {
        'name': "MyApp"
        'version': "1.2.3"
        'enabled': true
        'created': 2025-07-21  // undelimited date
        'tags': ["web", "typescript"]
        'databases': (
             `local`: {
                'host': "localhost"
                'port': | 'number' "5432"     // tagged value
                'ssl': ~                       // not set
            }, 
             `remote": <"localhost" 'number' 1234 ~>
        )
    }
)
```

</td>
</tr>
</table>

**ASTN advantages shown above:**
- 📄 **Headers** - `! header "..."` for document metadata
- 💬 **Comments** - `//` and `/* */` supported throughout
- 🏷️ **Tagged values** - `| 'number' "5432"` for type information
- ✨ **Flexible literals** - `2025-07-21` without quotes
- 🚫 **Explicit "not set"** - `~` instead of `null`
-  **Instance keys** - `` `key` `` for data identifiers
- ✨ **Optional commas** - cleaner syntax without mandatory commas

### Schema vs Instance Data Distinction

One of ASTN's key improvements over JSON is the clear distinction between **schema keys** (fixed structure) and **instance keys** (dynamic data):

**JSON Problem:** In JSON, it's difficult to distinguish between:
```json
{
  "config": {           // Is this a schema key or instance data?
    "host": "localhost" // Are these fixed fields or dynamic entries?
  }
}
```

**ASTN Solution:** Uses different structures for different purposes:

```astn
// Verbose Group - for schema/structure ( () and apostrophe keys)
('config': (
    'host': "localhost"     // Fixed schema fields
    'port': 5432
))

// Dictionary - for instance/dynamic data ( {} and backtick keys)  
{
    `user_123`: "John"      // Dynamic user IDs
    `user_456`: "Jane"      // Runtime-determined keys
}
```

This makes the data's intent much clearer to both humans and tools!

### Lists vs Concise Groups Distinction

ASTN also distinguishes between **lists** (ordered instance data) and **groups** (ordered schema data):

**JSON Problem:** Arrays in JSON are ambiguous about their purpose:
```json
{
  "coordinates": [10, 20, 30],    // Is this a list or structured data?
  "users": ["John", "Jane"]       // Dynamic list or fixed schema fields?
}
```

**ASTN Solution:** Four different structures for different purposes:

```astn
// 1. List - for dynamic/instance data (square brackets)
{
    `users`: [                  // Dynamic list of users
        "John"
        "Jane" 
        "Bob"                   // Can add/remove items
    ]
}

// 2. Dictionary - for key-value instance data (curly braces + backticks)
{
    `user_data`: {
        `user_123`: "John"      // Dynamic user IDs as keys
        `user_456`: "Jane"      // Runtime-determined keys
        `user_789`: "Bob"
    }
}

// 3. Concise Group - for schema/structure (angle brackets)  
{
    `coordinates`: <10 20 30>   // Fixed x, y, z coordinates
    `rgb_color`: <255 128 0>    // Fixed red, green, blue values
}

// 4. Verbose Group - explicit schema names (parentheses)
{
    `coordinates`: (
        'x': 10
        'y': 20 
        'z': 30
    )
}
```

**Example: Same data in concise vs verbose groups:**
```astn
// Concise - implicit positional names
`person`: <"John" 30 "Engineer">

// Verbose - explicit schema names (equivalent to above)
`person`: (
    'name': "John"
    'age': 30
    'job': "Engineer"  
)
```
schema-aware tooling can create support to toggle between these 2 representations

**Concise vs Verbose Groups:** These are interchangeable - concise groups are just verbose groups with implicit position-based schema names (first, second, third, etc.).

### Document Structure
```astn
// Optional header
! header "Document metadata or title"

// Main document content
{
    "content": "value"
}
```

### Basic Values
```astn
"quoted string"        // Can contain newlines and escape sequences
'apostrophed string'   // Used for schema/meta names (keys, state names)
`backticked string`    // Used for identifiers
undelimited_string     // Flexible literals (dates, numbers, booleans, etc.)
```

**String Type Usage:**
- **Quoted strings** (`"..."`) - General purpose strings that support newlines and escape sequences like `\n`, `\t`, `\"`, etc.
- **Apostrophed strings** (`'...'`) - Specifically for schema and metadata names such as verbose group keys and tagged value state names
- **Backticked strings** (`` `...` ``) - Used for identifiers and instance data such as dictionary keys
- **Undelimited strings** - More flexible than JSON primitives; can represent:
  - Booleans: `true`, `false`
  - Numbers: `42`, `3.14`, `-123`
  - Dates: `2025-07-21`, `2025-07-21T10:30:00Z`
  - Custom literals: `null`, `undefined`, or domain-specific values

### Collections
```astn
// Dictionary (commas optional, trailing commas allowed)
{
    `key`: "value"              // backtick for instance data key
    `number`: | 'number' "42"   // backtick for key, apostrophe for state name
    `description`: "Multi-line
    strings are supported
    in quoted strings"
    `date`: 2025-07-21          // undelimited date
    `enabled`: true             // undelimited boolean
}

// List with flexible comma usage
[
    "item1"
    'schema_name'               // apostrophe for schema identifier
    `instance_id`               // backtick for instance identifier
    2025-07-21                  // undelimited date
    42                          // undelimited number
]

// Concise Group
<"item1" 'meta_name' `instance_id`>

// Verbose Group (apostrophes for schema keys)
('schema_key': "value1" 'another_key': "value2")
```

### Special Values
```astn
// Tagged values (apostrophe for state names)
| 'number' "42"
| 'date' 2025-07-21
| 'boolean' true
| 'custom_type' "some value"

// Optional values
* "optional value"
* 2025-12-31              // undelimited date as optional

// Not set
~

// File inclusion
@ "path/to/config.astn"
@ "../shared/constants.astn"
```

### Comments
```astn
// Line comment
/* Block comment */
{
    "key": "value" // Trailing comment
}
```

## 🔧 VS Code Extension

<div align="center">
  <img src="https://img.shields.io/badge/VS%20Code-Extension%20Available-blue?style=for-the-badge&logo=visualstudiocode" alt="VS Code Extension"/>
</div>

For the best development experience with ASTN files, install the **ASTN** VS Code extension:

- **Extension ID**: `astn`
- **Features**: Syntax highlighting, error detection, and formatting support
- **Installation**: Search for "astn" in the VS Code Extensions marketplace

### Extension Features:
- 🎨 **Syntax highlighting** for `.astn` files
- 🔍 **Real-time error detection** and validation
- 📝 **IntelliSense** and autocompletion
- 🔧 **Integrated formatting** support

## CLI Usage

Validate ASTN files:

```bash
npx astn-validate < input.astn
```

## API Reference

### Types

- `Document` - Root document structure
- `Value` - Any ASTN value
- `String` - String with type information
- `Parse_Error` - Detailed error information
- `Location` - Position information in source

### Functions

- `Parser.parse(source, options)` - Parse ASTN source
- `format.Document(doc, options)` - Format a document
- `create_error_message.Parse_Error(error, options)` - Create human-readable error messages

## 📚 Documentation

<div align="center">

| Resource | Description |
|----------|-------------|
| 🚂 [Railroad Diagrams](./documentation/railroad_diagram/index.md) | Visual syntax diagrams |
| 📝 [EBNF Grammar](./extra/astn.ebnf) | Formal grammar specification |
| 📋 [Sample File](./sample_astn_file.astn) | Example ASTN syntax |

</div>

---

<div align="center">

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

Apache 2.0 License - see [LICENSE](LICENSE) file for details.

## 📦 Version

Current version: **0.110.5**

---

<sub>Made with ❤️ for better data formats</sub>

</div>