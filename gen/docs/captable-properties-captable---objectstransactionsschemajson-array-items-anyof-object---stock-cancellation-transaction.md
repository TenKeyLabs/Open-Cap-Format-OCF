# Object - Stock Cancellation Transaction Schema

```txt
Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/transactions/items/anyOf/8
```

Object describing a cancellation of a stock security

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [CapTable.schema.json*](../../schema/CapTable.schema.json "open original schema") |

## 8 Type

`object` ([Object - Stock Cancellation Transaction](captable-properties-captable---objectstransactionsschemajson-array-items-anyof-object---stock-cancellation-transaction.md))

all of

*   all of

    *   all of

        *   [Object - BaseObject](issuer-allof-object---baseobject.md "check type definition")

# 8 Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :-------------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [object_type](#object_type)                   | Not specified | Optional | cannot be null | [Object - Stock Cancellation Transaction](stockcancellation-properties-object_type.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/object_type")                   |
| [quantity](#quantity)                         | `object`      | Required | cannot be null | [Object - Stock Cancellation Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")                                                                 |
| [id](#id)                                     | Not specified | Optional | cannot be null | [Object - Stock Cancellation Transaction](stockcancellation-properties-id.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/id")                                     |
| [comments](#comments)                         | Not specified | Optional | cannot be null | [Object - Stock Cancellation Transaction](stockcancellation-properties-comments.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/comments")                         |
| [security_id](#security_id)                   | Not specified | Optional | cannot be null | [Object - Stock Cancellation Transaction](stockcancellation-properties-security_id.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/security_id")                   |
| [date](#date)                                 | Not specified | Optional | cannot be null | [Object - Stock Cancellation Transaction](stockcancellation-properties-date.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/date")                                 |
| [balance_security_ids](#balance_security_ids) | Not specified | Optional | cannot be null | [Object - Stock Cancellation Transaction](stockcancellation-properties-balance_security_ids.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/balance_security_ids") |
| [reason_text](#reason_text)                   | Not specified | Optional | cannot be null | [Object - Stock Cancellation Transaction](stockcancellation-properties-reason_text.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/reason_text")                   |

## object_type



`object_type`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Cancellation Transaction](stockcancellation-properties-object_type.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/object_type")

### object_type Type

unknown

### object_type Constraints

**constant**: the value of this property must be equal to:

```json
"TX_STOCK_CANCELLATION"
```

## quantity

Type representation of a number (up to 10 decimal places supported by the spec)

`quantity`

*   is required

*   Type: `object` ([Type - Numeric](stockplan-properties-type---numeric.md))

*   cannot be null

*   defined in: [Object - Stock Cancellation Transaction](stockplan-properties-type---numeric.md "Types.Numeric.schema.json#/properties/quantity")

### quantity Type

`object` ([Type - Numeric](stockplan-properties-type---numeric.md))

## id



`id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Cancellation Transaction](stockcancellation-properties-id.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/id")

### id Type

unknown

## comments



`comments`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Cancellation Transaction](stockcancellation-properties-comments.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/comments")

### comments Type

unknown

## security_id



`security_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Cancellation Transaction](stockcancellation-properties-security_id.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/security_id")

### security_id Type

unknown

## date



`date`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Cancellation Transaction](stockcancellation-properties-date.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/date")

### date Type

unknown

## balance_security_ids



`balance_security_ids`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Cancellation Transaction](stockcancellation-properties-balance_security_ids.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/balance_security_ids")

### balance_security_ids Type

unknown

## reason_text



`reason_text`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Object - Stock Cancellation Transaction](stockcancellation-properties-reason_text.md "Objects.Transactions.Cancellation.StockCancellation.schema.json#/properties/reason_text")

### reason_text Type

unknown