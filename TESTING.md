# Testing

Currently, this package does not have automated tests. We welcome contributions to add a comprehensive test suite.

## Planned Test Structure

- Unit tests for lexer
- Unit tests for parser
- Integration tests for complete parsing
- Error handling tests
- Format tests
- CLI validation tests

## Running Manual Tests

You can manually test the parser with:

```bash
npm run build
echo '{"test": "value"}' | npm run validate
```

## Contributing Tests

If you'd like to contribute tests, please:

1. Use a testing framework like Jest or Mocha
2. Include both positive and negative test cases
3. Test error conditions and edge cases
4. Include performance benchmarks for large files
