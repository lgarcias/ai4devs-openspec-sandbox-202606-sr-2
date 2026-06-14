const assert = require('node:assert/strict');

// Attempt to import the validator
let isValidEmail;
try {
  const validator = require('./email-validator.js');
  isValidEmail = validator.isValidEmail;
} catch (error) {
  // If the file or export is missing, we rethrow or handle it to show the initial TDD failure.
  console.error('Initial import failed (Expected during TDD Step 1-3):', error.message);
  throw error;
}

const validEmails = [
  'user@example.com',
  'john.doe@example.co.uk',
  'user+tag@example.com',
  'a@b.co'
];

const invalidEmails = [
  '',                  // empty string
  null,                // null
  undefined,           // undefined
  'plain text without @',
  '@example.com',      // missing local part
  'user@',             // missing domain
  'user@example@domain.com', // multiple @ symbols
  'user @example.com', // spaces inside
  ' user@example.com', // leading spaces
  'user@example.com ', // trailing spaces
  'user@example',      // domain without TLD
  'john..doe@example.com', // consecutive dots in local part
  'user@example..com', // consecutive dots in domain
  'user@.example.com', // domain starting with a dot
  'user@example.com.'  // domain ending with a dot
];

console.log('Running test suite for email validation...\n');

let passed = 0;
let failed = 0;

console.log('--- Testing Valid Emails ---');
for (const email of validEmails) {
  try {
    assert.strictEqual(isValidEmail(email), true, `Expected true for valid email: ${email}`);
    console.log(`✓ [PASS] ${email}`);
    passed++;
  } catch (err) {
    console.error(`✗ [FAIL] ${email}:`, err.message);
    failed++;
  }
}

console.log('\n--- Testing Invalid Emails ---');
for (const email of invalidEmails) {
  try {
    assert.strictEqual(isValidEmail(email), false, `Expected false for invalid email: ${String(email)}`);
    console.log(`✓ [PASS] ${String(email)}`);
    passed++;
  } catch (err) {
    console.error(`✗ [FAIL] ${String(email)}:`, err.message);
    failed++;
  }
}

console.log(`\nResults: ${passed} passed, ${failed} failed.`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('All tests passed successfully!');
}
