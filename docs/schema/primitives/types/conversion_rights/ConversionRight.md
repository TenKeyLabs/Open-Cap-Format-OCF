:house: [Documentation Home](/README.md)

---

### Primitive - Conversion Right Type

`https://opencaptablecoalition.com/schema/primitives/types/conversion_rights/ConversionRight.schema.json`

**Description** _Abstract type representation of a conversion right from a non-plan security into another non-plan security_

**:warning: Primitives are Abstract and Should Not be Used for Data. They are used to enforce uniformity in OCF data types - specifically "types" and "objects". :warning:**

**Properties:**

| Property                   | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                         | Required   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ---------- |
| type                       | `Enum - Conversion Right Type`</br></br>_Description:_ Enumeration of types of conversion rights.</br></br>**ONE OF:** </br>&bull; CONVERTIBLE_CONVERSION_RIGHT </br>&bull; WARRANT_CONVERSION_RIGHT </br>&bull; STOCK_CLASS_CONVERSION_RIGHT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | What kind of conversion right is this?                                                                              | -          |
| conversion_mechanism       | **ONE OF the Following Types/Objs:**</br>&bull; [schema/types/conversion_mechanisms/SAFEConversionMechanism](/docs/schema/types/conversion_mechanisms/SAFEConversionMechanism.md)</br>&bull; [schema/types/conversion_mechanisms/NoteConversionMechanism](/docs/schema/types/conversion_mechanisms/NoteConversionMechanism.md)</br>&bull; [schema/types/conversion_mechanisms/CustomConversionMechanism](/docs/schema/types/conversion_mechanisms/CustomConversionMechanism.md)</br>&bull; [schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism](/docs/schema/types/conversion_mechanisms/PercentCapitalizationConversionMechanism.md)</br>&bull; [schema/types/conversion_mechanisms/FixedAmountConversionMechanism](/docs/schema/types/conversion_mechanisms/FixedAmountConversionMechanism.md)</br>&bull; [schema/types/conversion_mechanisms/RatioConversionMechanism](/docs/schema/types/conversion_mechanisms/RatioConversionMechanism.md) | What conversion mechanism applies to calculate the number of resulting securities?                                  | `REQUIRED` |
| converts_to_future_round   | `BOOLEAN`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Is this stock class potentially convertible into a future, as-yet undetermined stock class (e.g. Founder Preferred) | -          |
| converts_to_stock_class_id | `STRING`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The identifier of the existing, known stock class this stock class can convert into                                 | -          |

**Source Code:** [schema/primitives/types/conversion_rights/ConversionRight](/schema/primitives/types/conversion_rights/ConversionRight.schema.json)

Copyright © 2022 Open Cap Table Coalition.