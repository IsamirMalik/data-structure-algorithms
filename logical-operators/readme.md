
# Logical operators are used to perform logical operations, which combines multiple expressions or values and return a boolean result ( true or false ) , Js provides three primary logical operators .

  1. Logical AND ( && )
  2. Logical OR ( || )
  3. Logical NOT ( ! )

## Logical AND ( && )
 - The logical AND operator returns `true` if **both** operands are `true`. If either operand is `false`, it returns `false`.

 #### Short circuiting
  - If the first operand evaluates to `false`, Js does not evaluates the second operand bcoz the result is already determined ( since `false` && anything is `false`)

## Logical OR ( || )
 - The logical OR operator returns `true` if at least one of the operands is `true`. If both operands are `false`, it returns `false`.

 #### Short circuiting
  - If the first operand evaluates to `true`, Js does not evaluates the second operand bcoz the result is already determined ( since `true` || anything is `true`)

## Logical NOT ( ! )
 - The logical NOT operator inverts the boolean value of its operand. If the operand is `true` it returns `false` and vice-versa.


## Truthiness and Falsiness
  - Js has a concept of **truthy** and **falsy** value. In logical operations non-boolean values are coerced to `true` or `false` based on their **truthiness** and **falsiness** .
  - Falsy value: `false` `0` `empty string` `NaN` `undefined` `null` .
  - Truthy value: `Any value that is not falsy` .

NOTE: *NOT > AND > OR* ( Priority )