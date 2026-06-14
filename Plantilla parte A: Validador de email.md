*Micro-tarea:* Validador de email
*Pilar 1 — Herramienta:* 
- ¿Cuál eliges?
  Antigravity CLI

- ¿Por qué esta y no otra?
  Por que quiero hacerlo en un solo prompt y necesito un agente que pueda hacer varias tareas seguidas.

*Pilar 2 — Contexto:* 
- ¿Qué información estás aportando? (lenguaje, framework, restricciones, ejemplos…)
  Que tiene que hacerlo con Javascript, que use TDD, que genere el test primero y reporte el resultado, que luego implemente la funcion y corra los tests de nuevo. Que corrija test o implementacion si fallan los tests un maximo de 3 veces

- ¿Hay algo del contexto que has decidido omitir conscientemente?
  No he implementado AGENTS.md
  No aplico el RFC de nombres de email, hay casos no contemplados.

*Pilar 3 — Prompt:* 
- ¿Cómo lo estructuras? (estilo, formato de salida, ejemplos…)
  - Primero javascript y TDD
  - General constrains
  - ficheros a crear
  - requerimientos de implementacion
  - TDD workflow (mandatory)
  - test cases

- Pega aquí el prompt final que vas a lanzar.

````
 You are an autonomous software development agent working in an empty JavaScript repository.

  Your task is to implement an email validation function using a strict Test-Driven Development (TDD) workflow.

  General constraints:

  * Do not install any dependencies.
  * Do not use npm packages.
  * Do not use Jest, Vitest, Mocha, Jasmine, Ava, or any other testing framework.
  * Use only Node.js built-in functionality.
  * Create exactly one implementation file and one test file.
  * Keep the solution as simple as possible.
  * Use the built-in `node:assert/strict` module for testing.
  * The tests must be executable with a simple Node.js command.

  Files to create:

  * `email-validator.js`
  * `email-validator.test.js`

  Implementation requirements:

  * Export a function named `isValidEmail`.
  * Input: string.
  * Output: boolean.
  * The validator should accept common email formats and reject obviously invalid formats.
  * Practical validation is preferred over full RFC compliance.
  * Keep the implementation readable and maintainable.

  TDD workflow (mandatory):

  1. Create the test file first.
  2. Implement all required test cases.
  3. Run the test file before creating the implementation.
  4. Verify that the test execution fails.
  5. Record and report the reason for the failure.
  6. Only after observing the failing test, create the implementation file.
  7. Run the tests again.
  8. If tests fail:

     * Analyze the failure.
     * Determine whether the implementation or test is incorrect.
     * Apply the smallest reasonable fix.
     * Run the tests again.
  9. Maximum correction attempts after implementation: 3.

  Required test cases:

  Valid emails:

  * [user@example.com](mailto:user@example.com)
  * [john.doe@example.co.uk](mailto:john.doe@example.co.uk)
  * [user+tag@example.com](mailto:user+tag@example.com)
  * [a@b.co](mailto:a@b.co)

  Invalid emails:

  * empty string
  * null
  * undefined
  * plain text without @
  * missing local part (@example.com)
  * missing domain (user@)
  * multiple @ symbols
  * spaces inside the address
  * leading spaces
  * trailing spaces
  * domain without TLD
  * consecutive dots in local part
  * consecutive dots in domain
  * domain starting with a dot
  * domain ending with a dot

  Test implementation requirements:

  * Use `node:assert/strict`.
  * Each test case must have a clear assertion.
  * The test file must exit with a non-zero code when a test fails.
  * Print a clear success message when all tests pass.

  Execution requirements:

  Use Node.js commands only.

  Expected execution flow:

  1. Create `email-validator.test.js`

  2. Run:

     node email-validator.test.js

  3. Confirm that the test run fails.

  4. Create `email-validator.js`

  5. Run:

     node email-validator.test.js

  6. If the tests fail:

     * Investigate the failure.
     * Fix either the implementation or the test.
     * Re-run the tests.
     * Repeat up to 3 times.

  * All tests pass.
  * The test file was executed after creation and failed before implementation existed.
  * The test file was executed again after implementation.
  * Evidence of the failing stage and passing stage is provided.
  * Final output includes:

    * files created
    * commands executed
    * test results
  Success criteria:

    * number of correction attempts used

  Failure criteria:

  If all tests do not pass after 3 correction attempts:

  * Stop immediately.
  * Do not continue modifying files.
  * Report:

    * failing tests
    * error messages
    * root-cause analysis
    * fixes attempted
    * recommended next steps

  Do not skip any step. Do not claim a command was executed unless it was actually executed. Do not claim tests passed unles
  they were actually run and verified.
````

*Resultado:* 
- ¿Funcionó a la primera o tuviste que iterar?
  Funcionó a la primera

- Una mejora que harías si volvieras a hacerlo.
  Crear GEMINI.md, para crear prompts mas cortos

- Sesión

````
  I will start by listing the directory structure of our workspace to ensure we are operating in the correct directory.

● ListDir(/home/luisgs/projects/ai4devs-openspec-sandbox-202606-sr-2/alumno/luis-garcia) (ctrl+o to expand)

▸ Thought for 1s, 447 tokens
  Initiating Project Setup
  I will create the test file  email-validator.test.js  as specified by the TDD workflow, utilizing the built-in
  node:assert/strict  module.

  The file will define the valid and invalid test cases and assert that  isValidEmail  returns the expected results.

● Create(/home/luisgs/projects/ai4devs-openspec-sandbox...r-2/alumno/luis-garcia/email-validator.test.js) (ctrl+o to expand)

  I will now execute the tests using Node.js to verify that they fail, as the implementation file does not exist yet.

● Bash(node email-validator.test.js) (ctrl+o to expand)

▸ Thought for 1s, 1.9k tokens
  Defining Validation Requirements
  I will now create the implementation file  email-validator.js  containing the logic to validate emails according to our
  test cases and requirements.

● Create(/home/luisgs/projects/ai4devs-openspec-sandbox...606-sr-2/alumno/luis-garcia/email-validator.js) (ctrl+o to expand)

  I will now run the test suite again to verify that all the test cases pass with our new implementation.

● Bash(node email-validator.test.js) (ctrl+o to expand)

  I have successfully completed the TDD implementation of the email validation function.

  Here is the summary of the work:

  ### 1. Files Created

  • Test File: email-validator.test.js                                                                                       
  • Implementation File: email-validator.js

  ### 2. Commands Executed

  1. Initial Test Run (Before Implementation):
    node email-validator.test.js

      • Result: Failed (as expected) because  email-validator.js  was missing:
        Error: Cannot find module './email-validator.js'

  2. Second Test Run (After Implementation):
    node email-validator.test.js

      • Result: Passed successfully.


  ### 3. Test Results

    Running test suite for email validation...

    --- Testing Valid Emails ---
    ✓ [PASS] user@example.com
    ✓ [PASS] john.doe@example.co.uk
    ✓ [PASS] user+tag@example.com
    ✓ [PASS] a@b.co

    --- Testing Invalid Emails ---
    ✓ [PASS]
    ✓ [PASS] null
    ✓ [PASS] undefined
    ✓ [PASS] plain text without @
    ✓ [PASS] @example.com
    ✓ [PASS] user@
    ✓ [PASS] user@example@domain.com
    ✓ [PASS] user @example.com
    ✓ [PASS]  user@example.com
    ✓ [PASS] user@example.com
    ✓ [PASS] user@example
    ✓ [PASS] john..doe@example.com
    ✓ [PASS] user@example..com
    ✓ [PASS] user@.example.com
    ✓ [PASS] user@example.com.

    Results: 19 passed, 0 failed.
    All tests passed successfully!

  ### 4. Correction Attempts Used

  • 0 correction attempts used. All tests passed immediately upon implementing  email-validator.js .

````

*Review prompt:*
````
You are acting as a senior software engineer performing a code review.

Review the implementation currently present in this repository.

Your goal is not to rewrite the code but to critically evaluate it.

Review scope:

* Source code
* Test code
* Project structure
* TDD process evidence
* Error handling
* Edge cases
* Readability
* Maintainability
* Simplicity
* Correctness

Review tasks:

1. Inspect all files in the repository.
2. Understand the intended behavior of the email validator.
3. Analyze whether the implementation satisfies the requirements.
4. Analyze whether the tests adequately verify the requirements.
5. Check whether important edge cases are missing.
6. Check for bugs, incorrect assumptions, or overly permissive validation.
7. Check whether the implementation could produce false positives or false negatives.
8. Verify that the implementation and tests remain consistent with each other.
9. Identify unnecessary complexity.
10. Suggest improvements only when they provide meaningful value.

Do not modify any files.

Do not create new files.

Do not execute any code changes.

Produce a review report with the following sections:

# Summary

Provide a concise overview of the implementation quality.

# Strengths

List the positive aspects of the implementation.

# Findings

For each finding provide:

* Severity: Critical, Major, Minor, or Suggestion
* Description
* Evidence
* Potential impact

# Test Coverage Assessment

Evaluate:

* Covered scenarios
* Missing scenarios
* Redundant tests
* Quality of assertions

# TDD Assessment

Based on the repository contents and available evidence:

* Was TDD likely followed?
* What evidence supports that conclusion?
* What evidence is missing?

If TDD cannot be verified, explicitly state that it cannot be verified.

# Risk Assessment

Identify potential production risks.

# Recommended Improvements

Provide a prioritized list of improvements.

# Final Verdict

Choose one:

* Approve
* Approve with minor changes
* Request changes
* Reject

Justify the decision.

Be critical and objective. Assume the code may contain defects and actively look for them. Do not give positive feedback unless it is supported by evidence from the code.
````

*Review:*
````
  I have completed the code review of the email validator implementation. Here is the detailed report:

   Summary

  The email validator implementation consists of a single module (email-validator.js) and a dedicated test file
  (email-validator.test.js). The solution is written in vanilla JavaScript utilizing Node.js built-in modules only (         
  node:assert/strict ), satisfying the zero-dependency constraint.

  Overall, the codebase is of high quality, readable, and highly maintainable. It balances the requirement for "practical
  validation" against complex RFC standards perfectly, using a sequential check pattern rather than a single monolithic
  and unreadable regular expression.
  ──────
   Strengths

  1. Clean Code and Readability: Instead of using a highly complex, unmaintainable regular expression to validate the
  entire email at once, the implementation breaks down the checks into simple, sequential logical steps (checking for
  spaces, splitting by  @ , verifying parts, check for consecutive dots, checking TLD length, and then applying simpler
  regexes to the local/domain parts individually).
  2. Robust Input Guarding: The function checks  typeof email !== 'string'  right away to prevent runtime exceptions from
  unexpected data types (such as  null ,  undefined , or objects).
  3. No External Dependencies: The test runner is self-contained and operates purely on Node's standard library, avoiding
  dependency bloat.
  4. Informative Test Output: The test runner logs the status of each individual validation case ( ✓ [PASS]  or  ✗ [FAIL]
  ) and collects the summary results before exiting with a non-zero exit code if failures are found, which makes debugging
  far easier than a standard silent failure.
  ──────
   Findings

  ### Finding 1: Permissive Hyphen Placement in Domains

  • Severity: Minor
  • Description: The validator allows hyphens to be placed at the beginning or end of domain names or individual domain
  labels (e.g.,  user@-example.com  or  user@example-.com ). According to domain name specifications (RFC 1035), domain
  labels must not start or end with a hyphen.
  • Evidence: In email-validator.js:
    const domainRegex = /^[a-zA-Z0-9.-]+$/;
    if (!domainRegex.test(domain)) { ... }
  This regex permits hyphens in any position within the domain string (except if they violate other checks like
  consecutive dots).
  • Potential impact: The application might accept technically invalid email addresses that cannot resolve to real mail
  servers because of malformed domain names.

  ### Finding 2: Lack of Total Length Restraints (Denial of Service Risk)

  • Severity: Minor / Suggestion
  • Description: There are no length limits enforced on the input string or its subparts. According to RFC 5321/5322, the
  local part should not exceed 64 characters, and the total email length should not exceed 254 characters.
  • Evidence: No checks exist for string length in email-validator.js.
  • Potential impact: An attacker could pass a massive string (e.g., megabytes of characters) containing no spaces, which
  could cause high CPU utilization or resource exhaustion in regex evaluation (Regular Expression Denial of Service -
  ReDoS), although the regexes used here ( ^[a-zA-Z0-9._%+-]+$ ) are simple and less prone to backtracking.

  ### Finding 3: Numbers Allowed in TLDs

  • Severity: Suggestion
  • Description: The validator permits TLDs to contain numeric characters (e.g.  user@example.c0m  or  user@example.12 ).
  • Evidence: In email-validator.js,  domainRegex  allows  0-9  throughout the entire domain, including the TLD.
  • Potential impact: Accept emails with invalid TLDs containing numbers, which do not exist in the public DNS root zone.
  ──────
   Test Coverage Assessment

  ### Covered scenarios

  • Valid configurations: Basic single TLD ( user@example.com ), multi-label TLD ( john.doe@example.co.uk ), local part
  tags ( user+tag@example.com ), and minimal length variants ( a@b.co ).
  • Common invalid forms: Spaces (leading, trailing, and internal), missing local/domain parts, multiple  @  symbols,
  consecutive dots in local part or domain, domains starting/ending with a dot, and TLD-less domains.

  ### Missing scenarios

  • Hyphen edge cases:  user@-example.com ,  user@example-.com .
  • Very long strings: A case asserting  false  for emails exceeding 254 characters or local parts exceeding 64 characters.
  • Numeric TLDs:  user@example.c0m  or  user@example.12 .

  ### Redundant tests

  • None. The current suite of 19 test cases is highly targeted and covers specific rules without unnecessary overlap.

  ### Quality of assertions

  • Assertions are strict ( assert.strictEqual ) and compare explicitly with boolean expectations ( true  /  false ). Each
  failure logs an descriptive message containing the offending email.
  ──────
   TDD Assessment

  • Was TDD likely followed?
  Yes, TDD was followed.
  • What evidence supports that conclusion?
      1. The test runner explicitly wraps the  require('./email-validator.js')  call in a  try/catch  block (lines 5–12 in
      email-validator.test.js) to handle the missing file error. This design exists specifically to allow the test script to
      execute and report a clean failure before the implementation code exists.
      2. The initial run output confirms that the test runner ran and failed first with  MODULE_NOT_FOUND  before the
      implementation was created.
  • What evidence is missing?
      • Git commit timestamps or separate commit history representing the red-green-refactor steps in a version control
      system (though this is outside the scope of the file contents themselves).

  ──────
   Risk Assessment

  • Security Risk: Low. The regular expressions used are simple, anchored, and do not contain nested quantifiers that
  would trigger catastrophic backtracking (ReDoS).
  • Validation Risk: Low-Medium. While it is slightly permissive regarding hyphens in domains and numeric TLDs, these are
  rarely-hit edge cases in standard user registrations and do not impact normal user interactions.
  ──────
   Recommended Improvements

  1. Enforce Length Constraints (Priority: Medium):
  Add a quick check at the beginning of  isValidEmail  to reject strings exceeding 254 characters to enforce RFC limits
  and prevent potential performance issues:
    if (email.length > 254) return false;

  2. Improve Domain Hyphen Validation (Priority: Low):
  Refine the domain validation to ensure individual labels do not start or end with a hyphen.
  3. Restrict TLD to Alphabetic (Priority: Low):
  Ensure the final segment of the domain (the TLD) only contains alphabetic characters (and optionally valid IDN segments
  if required).
  ──────
   Final Verdict

  Approve

  Justification: The implementation meets all requirements, is simple, elegant, readable, and highly maintainable. The
  test suite covers all requested cases, and the TDD flow was executed perfectly. The findings identified are minor edge
  cases that do not prevent the code from being safe and functional for general-purpose applications.
````
