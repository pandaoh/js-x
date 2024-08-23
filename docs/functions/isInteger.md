[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / isInteger

# Function: isInteger()

> **isInteger**(`value`, `type`?): `boolean`

是否整数(严格匹配)

## Parameters

• **value**: `string`

• **type?**: `"-"` \| `"+"`

## Returns

`boolean`

## Example

```ts
isInteger('0'); /// true
isInteger('-0', '+'); /// false
```