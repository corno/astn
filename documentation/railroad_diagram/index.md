<div style="background-color: white; color: black; padding: 1em;">

**astn_document:**

![astn_document](diagram/astn_document.png)

```
astn_document
         ::= ( '!' header )? content
```

**header:**

![header](diagram/header.png)

```
header   ::= value
```

referenced by:

* astn_document

**content:**

![content](diagram/content.png)

```
content  ::= value
```

referenced by:

* astn_document

**value:**

![value](diagram/value.png)

```
value    ::= concise_group
           | dictionary
           | include
           | list
           | '~'
           | set_optional_value
           | string
           | tagged_value
           | verbose_group
```

referenced by:

* content
* elements
* header
* include
* key_value_pairs
* set_optional_value
* tagged_value

**concise_group:**

![concise_group](diagram/concise_group.png)

```
concise_group
         ::= '<' elements '>'
```

referenced by:

* value

**dictionary:**

![dictionary](diagram/dictionary.png)

```
dictionary
         ::= '{' key_value_pairs '}'
```

referenced by:

* value

**include:**

![include](diagram/include.png)

```
include  ::= '@' value
```

referenced by:

* value

**list:**

![list](diagram/list.png)

```
list     ::= '[' elements ']'
```

referenced by:

* value

**set_optional_value:**

![set_optional_value](diagram/set_optional_value.png)

```
set_optional_value
         ::= '*' value
```

referenced by:

* value

**string:**

![string](diagram/string.png)

```
string   ::= quoted_string
           | apostrophed_string
           | backticked_string
           | undelimited_string
```

referenced by:

* key_value_pairs
* tagged_value
* value

**tagged_value:**

![tagged_value](diagram/tagged_value.png)

```
tagged_value
         ::= '|' string value
```

referenced by:

* value

**verbose_group:**

![verbose_group](diagram/verbose_group.png)

```
verbose_group
         ::= '(' key_value_pairs ')'
```

referenced by:

* value

**elements:**

![elements](diagram/elements.png)

```
elements ::= ( value ','? )*
```

referenced by:

* concise_group
* list

**key_value_pairs:**

![key_value_pairs](diagram/key_value_pairs.png)

```
key_value_pairs
         ::= ( string ( ':' value )? ','? )*
```

referenced by:

* dictionary
* verbose_group

**ignorable:**

![ignorable](diagram/ignorable.png)

```
ignorable
         ::= whitespace
           | comment
          /* ws: definition */
```

**quoted_string:**

![quoted_string](diagram/quoted_string.png)

```
quoted_string
         ::= '"' ( string_content_character - '"' | newline_character )* '"'
```

referenced by:

* string

**apostrophed_string:**

![apostrophed_string](diagram/apostrophed_string.png)

```
apostrophed_string
         ::= "'" ( string_content_character - "'" )* "'"
```

referenced by:

* string

**backticked_string:**

![backticked_string](diagram/backticked_string.png)

```
backticked_string
         ::= '`' ( string_content_character - '`' )* '`'
```

referenced by:

* string

**undelimited_string:**

![undelimited_string](diagram/undelimited_string.png)

```
undelimited_string
         ::= ( normal_character - ( '{' | '}' | '<' | '>' '(' | ')' '[' | ']' | '!' | '*' | ',' | '~' | ':' | '@'
                  | '|' | "'" | '"' | '`' | '/' | ' ' | '\t' )? )*
```

referenced by:

* string

**string_content_character:**

![string_content_character](diagram/string_content_character.png)

```
string_content_character
         ::= normal_character
           | escaped_character
```

referenced by:

* apostrophed_string
* backticked_string
* quoted_string

**normal_character:**

![normal_character](diagram/normal_character.png)

```
normal_character
         ::= [#x20-#xD7FF#xE000-#xFFFD#x10000-#x10FFFF]?
```

referenced by:

* line_comment
* normal_or_newline_character
* string_content_character
* undelimited_string

**escaped_character:**

![escaped_character](diagram/escaped_character.png)

```
escaped_character
         ::= '\"'
           | '\`'
           | "\'"
           | '\\'
           | '\/'
           | '\b'
           | '\f'
           | '\n'
           | '\r'
           | '\t'
           | '\u' four_hexadecimal_digits
```

referenced by:

* string_content_character

**newline_character:**

![newline_character](diagram/newline_character.png)

```
newline_character
         ::= [#xA#xD]
```

referenced by:

* normal_or_newline_character
* quoted_string

**normal_or_newline_character:**

![normal_or_newline_character](diagram/normal_or_newline_character.png)

```
normal_or_newline_character
         ::= normal_character
           | newline_character
```

referenced by:

* traditional_comment

**comment:**

![comment](diagram/comment.png)

```
comment  ::= traditional_comment
           | line_comment
```

referenced by:

* ignorable

**traditional_comment:**

![traditional_comment](diagram/traditional_comment.png)

```
traditional_comment
         ::= '/*' ( normal_or_newline_character* - ( normal_or_newline_character* '*/' normal_or_newline_character* ) ) '*/'
```

referenced by:

* comment

**line_comment:**

![line_comment](diagram/line_comment.png)

```
line_comment
         ::= '//' normal_character*
```

referenced by:

* comment

**four_hexadecimal_digits:**

![four_hexadecimal_digits](diagram/four_hexadecimal_digits.png)

```
four_hexadecimal_digits
         ::= hexadecimal_digit hexadecimal_digit hexadecimal_digit hexadecimal_digit
```

referenced by:

* escaped_character

**hexadecimal_digit:**

![hexadecimal_digit](diagram/hexadecimal_digit.png)

```
hexadecimal_digit
         ::= [0-9A-Fa-f]
```

referenced by:

* four_hexadecimal_digits

**whitespace:**

![whitespace](diagram/whitespace.png)

```
whitespace
         ::= [#x9#xA#xD#x20]+
```

referenced by:

* ignorable

## 
![rr-2.5](diagram/rr-2.5.png) <sup>generated by [RR - Railroad Diagram Generator][RR]</sup>

[RR]: https://www.bottlecaps.de/rr/ui

</div>