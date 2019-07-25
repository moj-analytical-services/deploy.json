# Schema

```
https://cdn.jsdelivr.net/gh/moj-analytical-services/deploy.json/deploy.schema.json
```

| Abstract            | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                               |
| ------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------- |
| Can be instantiated | No         | Experimental | No           | Forbidden         | Permitted             | [deploy.schema.json](deploy.schema.json) |

# Properties

| Property                                          | Type       | Required     | Nullable | Default                                    | Defined by    |
| ------------------------------------------------- | ---------- | ------------ | -------- | ------------------------------------------ | ------------- |
| [allowed_ip_ranges](#allowed_ip_ranges)           | `string[]` | Optional     | No       |                                            | (this schema) |
| [disable_authentication](#disable_authentication) | `boolean`  | Optional     | No       |                                            | (this schema) |
| [mojanalytics-deploy](#mojanalytics-deploy)       | `string`   | **Required** | No       |                                            | (this schema) |
| [port](#port)                                     | `string`   | Optional     | No       |                                            | (this schema) |
| [role_name](#role_name)                           | `string`   | Optional     | No       |                                            | (this schema) |
| [type](#type)                                     | `enum`     | Optional     | No       | `"webapp"`                                 | (this schema) |
| `*`                                               | any        | Additional   | Yes      | this schema _allows_ additional properties |

## allowed_ip_ranges

`allowed_ip_ranges`

- is optional
- type: `string[]`
- at least `1` items in the array
- defined in this schema

### allowed_ip_ranges Type

Array type: `string[]`

All items must be of the type: `string`

## disable_authentication

`disable_authentication`

- is optional
- type: `boolean`
- defined in this schema

### disable_authentication Type

`boolean`

## mojanalytics-deploy

`mojanalytics-deploy`

- is **required**
- type: `string`
- defined in this schema

### mojanalytics-deploy Type

`string`

## port

`port`

- is optional
- type: `string`
- defined in this schema

### port Type

`string`

## role_name

`role_name`

- is optional
- type: `string`
- defined in this schema

### role_name Type

`string`

## type

`type`

- is optional
- type: `enum`
- default: `"webapp"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `airflow_dag`  |             |
| `webapp`       |             |
| `docker_build` |             |
| `lookup`       |             |
