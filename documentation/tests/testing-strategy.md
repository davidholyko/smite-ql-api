# Testing Strategy

### Integration Tests

Integration Tests require a real `DEV_ID` and `AUTH_KEY` from Hirez Studios. These tests make real API calls to the Smite API.

### Unit Tests

Unit Tests test pure functionality and use mock data from real API requests. These tests do not require a real `DEV_ID` and `AUTH_KEY`.

Tests should ideally be in the following format:

```javascript
describe('Some function', () => {
  it('should do something', () => {
    // 1. SETUP
    //      setup scenario (if needed) for test case
    //      could mean mocking functions
    // 2. PROCESSING
    //      invoking the function with the correct params
    // 3. EXPECTATIONS
    //      explicitly calling out what we expect the function to return or
    //      perform expect any side effects to happen
    // 4. ASSERTIONS
    //      assert that expectations were met
  });
});
```
